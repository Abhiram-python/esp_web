from flask import *

app = Flask(__name__)

@app.route('/',methods=["GET"])
def home():
    return render_template("home.html")

@app.route('/esp_timer',methods=["POST"])
def esp_timer():
    global mess
    data = request.json
    mess=data["minutes"]

    return "lekhya"

@app.route('/timer_data',methods=["POST","GET"])
def timer_data():
    try:
        return mess
    except:
        return "hello"
    
@app.route('/esp_stop',methods=["POST"])
def esp_stop():
    global mess
    data=request.json
    mess=data["mess"]