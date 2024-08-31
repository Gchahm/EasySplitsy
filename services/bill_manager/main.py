import base64

from config import Settings 

from fastapi import FastAPI, UploadFile
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from models.Receipt import Receipt
from modules.image_converter import open_ai_helper



settings = Settings()
app = FastAPI()

origins = ("http://localhost:8081",) if settings.dev_mode else ()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/mode")
def index():
    return {'dev_mode': settings.dev_mode}


@app.post("/api/bills/")
async def create_upload_file(file: UploadFile) -> Receipt:
    base64_image = base64.b64encode(file.file.read()).decode('utf-8')
    gpt_answer = open_ai_helper.read_receipt(base64_image)
    return Receipt.from_csv(gpt_answer, delimiter="|")


@app.get("/api/bills/")
async def get_receipt() -> Receipt:
    return Receipt.from_csv("1|apple|1.00\n2|banana|2.00\n3|carrot|3.00\n", delimiter="|")


class SPAStaticFiles(StaticFiles):
    async def get_response(self, path: str, scope):
        response = await super().get_response(path, scope)
        if response.status_code == 404:
            response = await super().get_response('.', scope)
        return response


app.mount('/', SPAStaticFiles(directory='spa_dist', html=True), name='spa')
app.mount('/assets/', SPAStaticFiles(directory='spa_dist/assets', html=True), name='spa-assets')
