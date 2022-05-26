from flask import Flask
from flask import jsonify

app = Flask(__name__)

@app.route("/")
def hello():
    abc = 12
    ip = '192.18.1.1'
    return jsonify({'socket': ip +  ':'  + str(abc)})

if __name__ == '__main__':
     app.run(port=5002)