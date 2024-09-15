import logging
import requests


class OpenAIHelper:

    def __init__(self, github_token: str):
        self.github_token = github_token

    def read_receipt(self, base64_image):
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.github_token}"
        }

        payload = {
            "model": "gpt-4o-mini",
            "messages": [
                {
                    "role": "system",
                    "content": """
                You will be provided with an image that contains a receipt Your task is to extract the
                list of items that were consumed in the receipt Your response should be in a csv format without any
                text formatting like numbering, bullet points, bold, italic etc. Use . for decimals ie (2.54)
                item_1_quantity|item_1_name|item_1_price
                item_2_quantity|item_2_name|item_2_price
                """
                },
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/jpeg;base64,{base64_image}"
                            }
                        }
                    ]
                }
            ],
            "max_tokens": 300
        }

        response = requests.post(f"https://models.inference.ai.azure.com/chat/completions", headers=headers, json=payload)
        js = response.json()
        try:
            message_result = js["choices"][0]["message"]["content"] = js["choices"][0]["message"]["content"]
            return message_result
        except Exception as e:
            logging.info("Error in read_receipt")
            logging.info(js)
            raise e
