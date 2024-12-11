from flask import *

app = Flask(__name__)

new_mess=False

@app.route('/',methods=["GET"])
def home():
    return render_template("home.html")

@app.route('/esp_timer',methods=["POST"])
def esp_timer():
    global mess,new_mess
    data = request.json
    mess=data["minutes"]

    new_mess=True

    return "lekhya"

@app.route('/timer_data',methods=["POST","GET"])
def timer_data():
    global new_mess
    if new_mess==True:
        new_mess=False
        return f"n{mess}"
    else:
        return "1"
    
@app.route('/esp_stop',methods=["POST"])
def esp_stop():
    global mess
    data=request.json
    mess=data["mess"]

    return "rith"