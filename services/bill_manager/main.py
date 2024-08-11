import base64
import os

from fastapi import FastAPI, UploadFile
from fastapi.staticfiles import StaticFiles

from models.Receipt import Receipt
from modules.image_converter import open_ai_helper

app = FastAPI()


@app.post("/api/bills/")
async def create_upload_file(file: UploadFile):
    base64_image = base64.b64encode(file.file.read()).decode('utf-8')
    gpt_answer = open_ai_helper.read_receipt(base64_image)
    return Receipt.from_csv(gpt_answer)


@app.get("/api/bills/")
async def get_receipt():
    env_test = os.getenv("ENV_TEST")
    return {"message": env_test}


class SPAStaticFiles(StaticFiles):
    async def get_response(self, path: str, scope):
        response = await super().get_response(path, scope)
        if response.status_code == 404:
            response = await super().get_response('.', scope)
        return response


app.mount('/', SPAStaticFiles(directory='spa_dist', html=True), name='spa')
app.mount('/assets/', SPAStaticFiles(directory='spa_dist/assets', html=True), name='spa-assets')
