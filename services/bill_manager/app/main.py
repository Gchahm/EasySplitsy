from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

from app.core.config.settings import Settings 
from app.core.logging import setup_telemetry
from app.api import setup_routes

settings = Settings()
app = FastAPI()

setup_telemetry(app)
setup_routes(app)

origins = ("http://localhost:8081",) if settings.dev_mode else ()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



# @app.post("/api/bills/")
# async def create_upload_file(file: UploadFile) -> Receipt:
#     open_ai = open_ai_helper.OpenAIHelper(secret_settings.github_token)
#     if settings.dev_mode:
#         return mocks.mock_result
#     base64_image = base64.b64encode(file.file.read()).decode('utf-8')
#     gpt_answer = open_ai.read_receipt(base64_image)
#     return Receipt.from_csv(gpt_answer, delimiter="|")
#
#
# @app.get("/api/bills/")
# async def get_receipt() -> Receipt:
#     return Receipt.from_csv("1|apple|1.00\n2|banana|2.00\n3|carrot|3.00\n", delimiter="|")
#
#
# class SPAStaticFiles(StaticFiles):
#     async def get_response(self, path: str, scope):
#         response = await super().get_response(path, scope)
#         if response.status_code == 404:
#             response = await super().get_response('.', scope)
#         return response
#
#
# app.mount('/', SPAStaticFiles(directory='spa_dist', html=True), name='spa')
# app.mount('/assets/', SPAStaticFiles(directory='spa_dist/assets', html=True), name='spa-assets')
