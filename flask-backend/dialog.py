import dialogflow
from google.api_core.exceptions import InvalidArgument
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "./secret.json"

class DialogFlow:
    def __init__(self):
        self.DIALOGFLOW_PROJECT_ID = os.environ["DIALOGFLOW_PROJECT_ID"];
        self.DIALOGFLOW_LANGUAGE_CODE = "en-US";
        self.SESSION_ID = os.environ["DIALOGFLOW_SESSION_ID"];

    def collect_intent(self, raw_query):
        session_client = dialogflow.SessionsClient()
        session = session_client.session_path(
            self.DIALOGFLOW_PROJECT_ID, self.SESSION_ID
        )

        text_input = dialogflow.types.TextInput(
            text=raw_query, language_code=self.DIALOGFLOW_LANGUAGE_CODE
        )
        query_input = dialogflow.types.QueryInput(text=text_input)
        try:
            response = session_client.detect_intent(
                session=session, query_input=query_input
            )
        except InvalidArgument:
            raise

        return response
