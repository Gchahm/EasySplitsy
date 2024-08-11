import base64
import requests

from models.Receipt import Receipt, ReceiptItem

# OpenAI API Key

def convert_image_to_text(base64_image):
    answer = ask_gpt(base64_image)
    return convert_gpt_answer_to_model_output(answer)

def ask_gpt(base64_image):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {VITE_GITHUB_TOKEN}"
    }

    payload = {
        "model": "gpt-4o-mini",
        "messages": [
            {
                "role": "system",
                "content": """
            You will be provided with an image that contains a receipt Your task is to extract the
            list of items that were consumed in the receipt Your response should be in a csv format without any
            text formatting like numbering, bullet points, bold, italic etc. Use | for separating columns.
            quantity, item_name, price
            item_1_quantity, item_1_name, item_1_price
            item_2_quantity, item_2_name, item_2_price
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
    message_result = js["choices"][0]["message"]["content"] = js["choices"][0]["message"]["content"]
    return message_result


def convert_gpt_answer_to_model_output(gpt_answer):
    lines = gpt_answer.split("\n")
    receipt = Receipt()
    for line in lines:
        if line.strip() != "":
            try:
                item = ReceiptItem(*line.split("|"))
                receipt.add_item(item)
            except Exception as e:
                print(e)
    return Receipt
