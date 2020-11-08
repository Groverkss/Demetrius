from flask import Flask, request, jsonify
from pprint import pprint
from ml.sarsa import find_amounts
from watson import Watson

app = Flask(__name__)
chatbot = Watson()

@app.route("/chat", methods=["POST"])
def chat():
    req_data = request.get_json()
    input_query = req_data["input"]
   
    response = chatbot.talk(input_query)
    pprint(response)

    return "Testing"

if __name__ == "__main__":
    app.run(debug=True)
