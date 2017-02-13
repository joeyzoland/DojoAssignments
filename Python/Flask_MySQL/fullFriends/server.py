from flask import Flask, session, render_template, request, redirect, flash
from mysqlconnection import MySQLConnector
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
mysql = MySQLConnector(app,'fullFriends')
app.secret_key = "SuperSecret"

@app.route('/')
def index():
    query = "select *, DATE_FORMAT(created_at, '%m/%d/%y %h:%i %p') as created_formatted FROM friends;"
    friends = mysql.query_db(query)
    return render_template("index.html", all_friends = friends)
    return render_template("index.html")

@app.route('/friends', methods=['post'])
def create():
    print "friend creation started"
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

    if error == 0:
        flash("Friend added successfully!")

        query = "INSERT INTO friends (first_name, last_name, email, created_at, updated_at) VALUES (:first_name, :last_name, :email, NOW(), NOW())"
        data = {
                'first_name': request.form['first_name'],
                'last_name': request.form['last_name'],
                'email': request.form['email'],
                }
        mysql.query_db(query, data)

@app.route("/friends/<id>/edit", methods = ['POST'])
def edit(id):
    return render_template("index.html", friend_id = id)

    print "friend editing started"
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

    if error == 0:
        flash("Friend added successfully!")
        print "reached query"

        query = "UPDATE friends SET first_name = :first_name, last_name = :last_name, email = :email WHERE id = :id"
        data = {
            'first_name': request.form['first_name'],
            'last_name':  request.form['last_name'],
            'email': request.form['email'],
            }
        return render_template("index.html")

    print "friend added"
    return redirect("/")

app.run (debug = True)
