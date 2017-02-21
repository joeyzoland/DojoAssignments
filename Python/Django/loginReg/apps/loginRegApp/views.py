from django.shortcuts import render, redirect
from django.contrib import messages
from .models import registration
import bcrypt

# Create your views here.
def index(request):
    context = {
    "objects": registration.objects.all()
    }
    return render(request, "loginRegApp/index.html", context)

def validator(request):
    first_name = request.POST["first_name"]
    last_name = request.POST["last_name"]
    email = request.POST["email"]
    password = request.POST["password"]
    password2 = request.POST["password2"]

    first = registration.objects.fValidator(request, first_name)
    second = registration.objects.lValidator(request, last_name)
    third = registration.objects.eValidator(request, email)
    fourth = registration.objects.pValidator(request, password, password2)

    #Each of the four validation functions return a tuple, with the first index value being 0 if there was no error
    #Following this line of reasoning, checking to see if there was at least one error
    if first[0] + second[0] + third[0] + fourth[0] >= 1:
        return redirect ("/")

    #Else, we are okay to insert into the database!
    print first_name, last_name, email, password
    registration.objects.create(first_name = first_name, last_name = last_name, email = email, password = bcrypt.hashpw(password.encode(), bcrypt.gensalt()))
    return redirect ("/success")

def success(request):
    return render(request, "loginRegApp/success.html")

def login(request):
    # password = request.POST["password"]
    email = request.POST["email"]
    selection = registration.objects.filter(email = email)
    for stuff in selection:
        print stuff.email
    return redirect("/")
