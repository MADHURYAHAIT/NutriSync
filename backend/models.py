from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class UserProfile(AbstractUser):
    username = models.EmailField(null=False, primary_key=True)
    email = models.EmailField(null=False, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50, null=True)
    phone = models.CharField(max_length=15, null=False, unique=True)
    password = models.CharField(max_length=150)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    dob = models.DateField(null=True)

class Nutrition(models.Model):
    username = models.EmailField(null=False)
    date = models.DateTimeField(null=False, auto_now=True)
    food = models.TextField(null=False)
    calories = models.TextField(default="100")
    quantity = models.TextField(default="1", null=False)


class UserHealth(models.Model):
    username = models.EmailField(null=False)
    weight = models.CharField(max_length=3)
    height = models.CharField(max_length=3)
    date = models.DateTimeField(auto_now=True)
