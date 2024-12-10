from flask import *

app = Flask(__name__)

@app.route('/',methods=["GET"])
def home():
    return render_template("home.html")

@app.route('/esp_timer',methods=["POST"])
def esp_timer():
    global data
    data = request.json
    return "lekhya"

@app.route('/timer_data',methods=["POST","GET"])
def timer_data():
    return data