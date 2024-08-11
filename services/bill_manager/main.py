from fastapi import FastAPI, File, UploadFile
from typing import Annotated
from fastapi.staticfiles import StaticFiles
import base64

from modules.image_converter.openAIConverter import convert_image_to_text

app = FastAPI()


@app.post("/api/bills/")
async def create_upload_file(file: UploadFile):
    base64_image = base64.b64encode(file.file.read()).decode('utf-8')
    gpt_conversion = convert_image_to_text(base64_image)
    return gpt_conversion


class SPAStaticFiles(StaticFiles):
    async def get_response(self, path: str, scope):
        response = await super().get_response(path, scope)
        if response.status_code == 404:
            response = await super().get_response('.', scope)
        return response


app.mount('/', SPAStaticFiles(directory='spa_dist', html=True), name='spa')
app.mount('/assets/', SPAStaticFiles(directory='spa_dist/assets', html=True), name='spa-assets')
