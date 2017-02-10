from flask import Flask, render_template, request, redirect, flash
app = Flask(__name__)
app.secret_key = "SuperSecret"

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['post'])
def create_user():
   if len(request.form["name"]) < 1:
      flash("Name is blank")
      return redirect("/")
   if len(request.form["comment"]) < 1:
      flash("Comment is blank")
      return redirect("/")
   if len(request.form["comment"]) > 120:
      flash("Comment section is too large.  Please use 120 characters or less.")
      return redirect("/")
   print "Got Post Info"
   name = request.form["name"]
   print "Finished name"
   location = request.form["location"]
   language = request.form["language"]
   comment = request.form["comment"]
   print "Finished Post Info"
   return render_template("results.html", name = name, location = location, language = language, comment = comment)

app.run(debug=True)
