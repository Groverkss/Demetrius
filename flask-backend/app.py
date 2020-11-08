from flask import Flask, request, jsonify
from pprint import pprint
from ml.sarsa import find_amounts
from watson import Watson

app = Flask(__name__)
chatbot = Watson()
data = None

intents = {
    "action_2395_intent_16387": "Precipitation Analysis",
    "action_11127_intent_1760": "Soil Moisture Analysis",
    "action_17772_intent_42386": "Irrigation Plan",
    "action_3978_intent_9313": "Upload File",
}


@app.route("/chat", methods=["POST"])
def chat():
    if not data:
    return ""

    req_data = request.get_json()
    input_query = req_data["input"]

    watson_response = chatbot.talk(input_query)
    response = {}

    response["text"] = watson_response["output"]["generic"][0]["text"]
    response["intent"] = watson_response["output"]["intents"][0]["intent"]
    response["title"] = intents[response["intent"]]

    return jsonify(response)


@app.route("/data", methods=["POST"])
def post_data():
    data = request.get_json()
    return "Done"


if __name__ == "__main__":
    app.run(debug=True)
