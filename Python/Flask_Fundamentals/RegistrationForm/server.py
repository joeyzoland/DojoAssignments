from flask import Flask, render_template, request, redirect, flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "SuperSecret"

@app.route('/')
def index():
    print "created index"
    return render_template("index.html")

@app.route('/result', methods=['post'])
def create_user():
   print "created user"
   error = 0

   def hasNumbers(inputString):
      return any(char.isdigit() for char in inputString)
      #The above function is a helper function

   if len(request.form["email"]) == 0:
      flash("Please insert a valid email address.")
      error = 1
   elif not EMAIL_REGEX.match(request.form['email']):
      flash("That email address is invalid.  Please try again.")
      error = 1

   if len(request.form["first_name"]) == 0:
      flash("Please insert your first name.")
      error = 1
   elif hasNumbers(request.form["first_name"]) == True:
      flash("Please remove all numbers from your first name.")
      error = 1

   if len(request.form["last_name"]) == 0:
      flash("Please insert your last name.")
      error = 1
   elif hasNumbers(request.form["last_name"]) == True:
      flash("Please remove all numbers from your last name.")
      error = 1

   if len(request.form["password"]) == 0:
      flash("Please create a password.")
      error = 1
   elif len(request.form["password"]) < 9:
      flash("Please create a password with 8 or more characters.")
      error = 1
   elif (request.form["password"]) != (request.form["confirm"]):
      flash("Please verify that both password fields match.")
      error = 1

   if error == 0:
      flash("Thanks for submitting your information.")

   return redirect("/")

app.run(debug=True)
