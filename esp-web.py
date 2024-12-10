from flask import *

app = Flask(__name__)

@app.route('/',methods=["GET"])
def home():
    return render_template("home.html")

# @app.route('/esp_data',methods=["POST"])
# def 