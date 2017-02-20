from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Email

# Create your views here.
def index(request):
    context = {
    "emails": Email.userManager.all()
    }
    return render(request, "eValidationApp/index.html", context)

def validator(request):
    email = request.POST["email"]
    output = Email.userManager.validator(request, email)
    if output[0] == True:
        Email.userManager.create(address = email)
    return redirect("/")
