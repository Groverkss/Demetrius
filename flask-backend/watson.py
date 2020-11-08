from ibm_watson import AssistantV2
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
import os


class Watson:
    def __init__(self):
        self.api = os.environ["WATSON_API"]
        self.url = os.environ["WATSON_URL"]
        self.assistant_id = os.environ["WATSON_ID"]

        self.authenticator = IAMAuthenticator(self.api)
        self.assistant = AssistantV2(
            version="2020-04-01", authenticator=self.authenticator
        )
        self.assistant.set_service_url(self.url)

    def talk(self, text):
        response = self.assistant.message_stateless(
            assistant_id=self.assistant_id,
            input={"message_type": "text", "text": ""},
        ).get_result()

        return response
