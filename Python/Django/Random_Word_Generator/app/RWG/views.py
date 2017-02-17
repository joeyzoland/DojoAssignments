from django.shortcuts import render, redirect
import string, random

def random_generator(size=14, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for x in range(size))

# Create your views here.
def index(request):
    if 'attempt' not in request.session:
        request.session['attempt'] = 1
    request.session["random_number"] = random_generator()
    return render(request, "RWG/index.html")
def create(request):
    if request.method == "POST":
        request.session['attempt'] += 1
        return redirect("/")
    else:
        return redirect("/")
