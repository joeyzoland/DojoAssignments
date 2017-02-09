from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = "number_game"
@app.route("/")
def index():
    if "gold" not in session:
        session["gold"] = 0
        print "check 0"
    return render_template("index.html")

@app.route("/process_money", methods=["POST"])
def process():
    session["last_building"] = request.form['building']
    if request.form['building'] == "farm":
        session["gold"] = session["gold"] + random.randrange(10, 21)
    elif request.form["building"] == "cave":
        session["gold"] += random.randrange(5, 11)
    elif request.form["building"] == "house":
        session["gold"] += random.randrange(2, 6)
    elif request.form["building"] == "casino":
        session["gold"] += random.randrange(-50, 51)
    return redirect("/")

app.run(debug=True)
