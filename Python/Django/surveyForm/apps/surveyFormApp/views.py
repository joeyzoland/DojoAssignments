from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    if "submission" not in request.session:
        request.session["submission"] = 0;
    return render(request, "surveyFormApp/index.html")
def process(request):
    request.session["submission"] += 1
    request.session["name"] = request.POST["name"]
    request.session["location"] = request.POST["location"]
    request.session["language"] = request.POST["language"]
    request.session["comment"] = request.POST["comment"]
    return redirect ("/result")
def result(request):
    return render(request, "surveyFormApp/result.html")
