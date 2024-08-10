from openai import OpenAI



def convert_image_to_text(base64_image):
    endpoint = "https://models.inference.ai.azure.com"
    model_name = "gpt-4o-mini"

    client = OpenAI(
        base_url=endpoint,
        api_key=api_key
    )

    response = client.chat.completions.create(
        model=model_name,
        messages=[
            {
                "role": "system",
                "content": """You will be provided
    with an image that contains a receipt.
    Your task is to extract the list of items that were consumed in the receipt.
    Your response should be in a csv format without any text formatting like numbering, bullet points, bold, italic etc.
    quantity, item_name, price
    item_1_quantity, item_1_name, item_1_price
    item_2_quantity, item_2_name, item_2_price`
    """},
            {
                "role": "user",
                "content": [
                    {
                        "type": "image_url",
                        "img_url": {
                            "url": f"data:image/jpeg;base64,{base64_image}"
                        }
                    }
                ]
            },
        ],
        max_tokens=300,
    )

    return response.choices[0]
