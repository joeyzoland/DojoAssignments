from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User

# Create your views here.
def index(request):
    return render(request, "eValidationApp/index.html")

def validator(request):
    print "made it to validator"
    email = request.POST["email"]
    print email
    User.userManager.validator(request, email)
    return redirect("/")
