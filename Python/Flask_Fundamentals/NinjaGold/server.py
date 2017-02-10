from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = "number_game"
@app.route("/")
def index():
    if "gold" not in session:
        session["gold"] = 0
        session["activities"] = ""
        print "check 0"
    return render_template("index.html")

@app.route("/process_money", methods=["POST"])
def process():
    session["last_building"] = request.form['building']
    if request.form['building'] == "farm":
        session["newgold"] = random.randrange(10, 21)
    elif request.form["building"] == "cave":
        session["newgold"] = random.randrange(5, 11)
    elif request.form["building"] == "house":
        session["newgold"] = random.randrange(2, 6)
    elif request.form["building"] == "casino":
        session["newgold"] = random.randrange(-50, 51)
    session["gold"] += session["newgold"]
    session["activities"] += "Earned " + str(session["newgold"]) + " from " + session["last_building"] + '\n'
    print session["activities"]
    return redirect("/")

app.run(debug=True)
