from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.hashers import make_password
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from .models import UserProfile, Nutrition, UserHealth
import pandas as pd
from.gemini import input_image_setup
import json


INDEX = "/"
HOME = "home"



def c2json(ctxt, dates=[]):
    df = pd.DataFrame(ctxt)
    if dates:
        for x in dates:
            df[x] = df[x].astype("string")
    return df.to_json()


def index(request):
    template = loader.get_template("index.html")
    return HttpResponse(template.render(context={}, request=request))


@csrf_exempt
def signin(request):
    if request.POST:
        username = request.POST["email"]
        password = request.POST["password"]
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                context = {"success": 1, "msg": "Login sucessfull"}
                return JsonResponse(context)
            else:
                context = {"success": 0, "msg": "User account not active"}
        else:
            context = {"success": 0, "msg": "Wrong username/password"}
        return JsonResponse(context)
    context = {"success": 0, "msg": "Request should be POST method only!!"}
    return JsonResponse(context)

@csrf_exempt
def signup(request):
    username = email = phone = fnm = lnm = dob = pass1 = pass2 = ""
    context = {
        "successful": False,
        "msg": "Passwords do not match!!",
    }
    if request.POST:
        username = request.POST["email"]
        email = username
        phone = request.POST["phone"]
        fnm = request.POST["fnm"]
        lnm = request.POST["lnm"]
        dob = request.POST["dob"]
        pass1 = request.POST["password"]
        pass2 = request.POST["cpassword"]
        if pass1 == pass2:
            if UserProfile.objects.filter(username=email):
                context["msg"] = "User already exists"
                return JsonResponse(context)
            UserProfile(username=username, email=email, phone=phone, first_name=fnm, last_name=lnm, password=make_password(pass1), dob=dob).save()
            context = {"success": True, "msg": "Created Successfully"}
            return JsonResponse(context)
        return JsonResponse(context)


@login_required(login_url=INDEX)
def signout(request):
    logout(request)
    return JsonResponse({'success': 1, 'msg': 'Logged out successfully'})

@csrf_exempt
#@login_required(login_url=INDEX)
def calories(request):
    if request.FILES:
        file = request.FILES["file"]
        file = file.read()
        if file:
            res = input_image_setup(file)
            f_res = str(res)
            
            return JsonResponse(res)


def fetch_calories(request):
    user = str(request.user)
    res = Nutrition.objects.filter(username=user).values()
    return JsonResponse(res)

def is_authenticated(request):
    if request.user.is_authenticated:
        return JsonResponse({"success": 1, "msg": "Authenticated"})
    return JsonResponse({"success": 0, "msg": "Not Authenticated"})



@login_required(login_url=INDEX)
@csrf_exempt
def bmi(request):
    context = {"success": 0,
               "msg": "Failed to add"}
    if request.POST:
        height = request.POST["height"]
        weight = request.POST["weight"]
        UserHealth(username=str(request.user), height=height, weight=weight).save()
        context = {
            "success": 1,
            "msg": "Added"
        }
    return JsonResponse(context)

@login_required(login_url=INDEX)
def fetch_bmi(request):
    res = UserHealth.objects.filter(username=str(request.user)).values()
    return JsonResponse(res)
