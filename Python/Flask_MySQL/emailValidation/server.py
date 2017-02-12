from flask import Flask, session, render_template, request, redirect, flash
from mysqlconnection import MySQLConnector
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
mysql = MySQLConnector(app,'emailvalidation')
app.secret_key = "SuperSecret"

@app.route('/')
def index():
    print "index check"
    query = "select *, DATE_FORMAT(created_at, '%m/%d/%y %h:%i %p') as created_formatted FROM emails;"                         # define your query
    emails = mysql.query_db(query)                           # run query with query_db()
    return render_template("index.html", emails = emails)

@app.route('/result', methods=['post'])
def create_user():
   print "created user"
   session["error"] = 0

   if len(request.form["addresses"]) == 0:
      print "condition 1"
      flash("Please insert a valid email address.")
      session["error"] = 1
   elif not EMAIL_REGEX.match(request.form['addresses']):
      print "condition 2"
      flash("That email address is invalid.  Please try again.")
      session["error"] = 1

   if session["error"] == 0:
      print "condition 3"
      session["error"] = 2
      flash("The email address you entered (" + request.form["addresses"] + ") is a VALID email address! Thank you!")

      query = "INSERT INTO emails (addresses, created_at, updated_at) VALUES (:addresses, NOW(), NOW())"
      data = {
               'addresses': request.form['addresses'],
             }
      mysql.query_db(query, data)

   print "yay"
   print session["error"]
   return redirect("/")

app.run(debug = True)
