from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/data')
def get_data():
    data = {'message': 'Hello from the backend!'}
    return jsonify(data)

if __name__ == '__main__':
    app.run()