from flask import Flask, render_template, url_for, send_from_directory
import os

app = Flask(__name__)

# 根路由，返回主頁
@app.route("/")
def index():
    return render_template("index.html")

# 靜態音樂文件處理
@app.route('/bgm/<path:filename>')
def serve_audio(filename):
    return send_from_directory(os.path.join(app.root_path, 'static', 'bgm'), filename)

if __name__ == "__main__":
    # Flask 運行在 0.0.0.0，這樣它可以接收來自外部的請求
    app.run(host="0.0.0.0", port=5000)

