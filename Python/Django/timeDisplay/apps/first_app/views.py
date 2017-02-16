from django.shortcuts import render, HttpResponse
import datetime
def index(request):
    context = {
    "somekey":datetime.datetime.now()
    }
    return render(request,'first_app/index.html', context)
