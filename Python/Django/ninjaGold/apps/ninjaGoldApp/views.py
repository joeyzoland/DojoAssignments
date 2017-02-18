from django.shortcuts import render, redirect
from random import randint

# Create your views here.
def index(request):
    if "gold" not in request.session:
        request.session["gold"] = 0
    print request.session["gold"]
    return render(request, "ninjaGoldApp/index.html")
def process(request):
    print "reached /process"
    print request.POST
    if request.POST["building"] == "farm":
        change = randint(10, 20)
    elif request.POST["building"] == "cave":
        change = randint(5, 10)
    elif request.POST["building"] == "house":
        change = randint(2, 5)
    elif request.POST["building"] == "casino":
        change = randint(-50, 50)
    request.session["gold"] += change

    if "comments" not in request.session:
        request.session["comments"] = ""

    if change < 0:
        request.session["comments"] += "Entered a " + request.POST["building"] + " and lost " + str(change * -1) + " gold... Ouch..." + "\n"
    else:
        request.session["comments"] += "Earned " + str(change) + " gold from the " + request.POST["building"] + "!" + "\n"

    return redirect ("/")
