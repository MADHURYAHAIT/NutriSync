from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),
    path("signin", views.signin),
    path("signup", views.signup),
    path("signout", views.signout),
    path("bmi", views.bmi),
    path("fetchBmi", views.fetch_bmi),
    path("calories", views.calories),
    path("fetchCalories", views.fetch_calories),
]