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
    port = int(os.environ.get("PORT", 5000))  # Azure會設置PORT變數
    app.run(host="0.0.0.0", port=port)
