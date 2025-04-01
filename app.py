# from flask import Flask, render_template, url_for

# app = Flask(__name__)


# @app.route("/")
# def index():
#     return render_template("index.html")


# if __name__ == "__main__":
#     app.run(host="0.0.0.0")

from flask import Flask, render_template, url_for, send_from_directory
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/bgm/<path:filename>')
def serve_audio(filename):
    return send_from_directory('static/bgm', filename)

if __name__ == "__main__":
    app.run(host="0.0.0.0")
