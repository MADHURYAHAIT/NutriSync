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
    return df.to_dict()


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
        "successful": 0,
        "msg": "Passwords do not match!!",
    }
    if request.POST:
        print(request.POST)
        username = request.POST["email"]
        email = username
        phone = request.POST["phone"]
        fnm = request.POST["fnm"]
        lnm = request.POST["lnm"]
        dob = request.POST["dob"]
        pass1 = request.POST["password"]
        pass2 = request.POST["cpassword"]
        if pass1 == pass2:
            if UserProfile.objects.filter(username=username):
                context["msg"] = "User already exists"
                return JsonResponse(context)
            UserProfile(username=username, email=email, phone=phone, first_name=fnm, last_name=lnm, password=make_password(pass1), dob=dob).save()
            context = {"success": 1, "msg": "Created Successfully"}
            return JsonResponse(context)
        return JsonResponse(context)


#@login_required(login_url=INDEX)
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
            for x in res.keys():
                Nutrition(username=str(request.user), food=res[x]["Name"], calories=res[x]["Calories"]).save()
            return JsonResponse(res)


def fetch_calories(request):
    user = request.GET["user1"]
    res = c2json(Nutrition.objects.filter(username=user).values(), ["date"])
    return JsonResponse(res, safe=False)

@csrf_exempt
def is_authenticated(request):
    try:
        if request.user.is_authenticated:
            print(' Authenticated')
            return JsonResponse({"success": 1, "msg": "Authenticated"})
        print('Not Authenticated')
        return JsonResponse({"success": 0, "msg": "Not Authenticated"})
    except Exception as e:
        print(f"Exception: {e}")
        return JsonResponse({"success": 0, "msg": "Not Authenticated"})



@csrf_exempt
#@login_required(login_url=INDEX)
def bmi(request):
    user = request.GET["user1"]
    print(request.GET)
    context = {"success": 0,
               "msg": "Failed to add, Request not post"}
    if request.GET:
        user = request.user
        height = request.GET["height"]
        weight = request.GET["weight"]
        UserHealth(username=str(user), height=height, weight=weight).save()
        context = {
            "success": 1,
            "msg": "Added"
        }
    return JsonResponse(context)

#@login_required(login_url=INDEX)
def fetch_bmi(request):
    user = request.GET["user1"]
    res = c2json(UserHealth.objects.filter(username=str(user)).values(), ["date"])
    return JsonResponse(res, safe=False)

#@login_required(login_url=INDEX)
def userdtls(request):
    user = request.GET["user1"]
    res = c2json(UserProfile.objects.filter(username=str(user)).values(), ["dob"])
    return JsonResponse(res, safe=False)

