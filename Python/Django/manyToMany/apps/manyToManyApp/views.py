from django.shortcuts import render, redirect
from models import User, Interest
from django.contrib import messages

# Create your views here.
def index(request):
    context = {
    "users" : User.objects.all()
    }
    print context["users"]
    return render(request, "manyToManyApp/index.html", context)
def view_users(request):
    return render(request, "manyToManyApp/view_users.html")
def add(request):
    print "got to the add route"
    username = request.POST["username"]
    interest = request.POST["interest"]
    validation = User.objects.validator(username, interest)
    if validation[0]:
        messages.info(request, "You have successfully logged a name and interest.")
    else:
        for i in validation[1]:
            messages.error(request, validation[2][i])
    return redirect("/")
def view_interests(request):
    return render(request, "manyToManyApp/view_interests.html")

#Write a function for actually rendering the last page
