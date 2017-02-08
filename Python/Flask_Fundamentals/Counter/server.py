from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'
@app.route('/')
def index():
  def sumSessionCounter():
      try:
        session['counter'] += 1
      except KeyError:
        session['counter'] = 1
  sumSessionCounter()
  return render_template("index.html", counter = session["counter"])

app.run(debug=True)
