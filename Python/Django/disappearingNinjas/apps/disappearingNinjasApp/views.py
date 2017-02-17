from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "disappearingNinjasApp/index.html")

def ninja(request):
    return render(request, "disappearingNinjasApp/ninja.html")

def ninjacolor(request, color):
    context = {
    "color": color
    }
    return render(request, "disappearingNinjasApp/color.html", context)
