from flask import Flask, request, jsonify
from pprint import pprint
from ml.sarsa import find_amounts

app = Flask(__name__)

@app.route("/chat", methods=["POST"])
def chat():
    req_data = request.get_json()
    input_query = req_data["input"]
    
    final_amounts = find_amounts()
    pprint(final_amounts)

    return "Testing"

if __name__ == "__main__":
    app.run(debug=True)
