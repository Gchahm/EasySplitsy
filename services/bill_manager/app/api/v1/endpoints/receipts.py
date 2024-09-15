import base64
from app import mocks
from fastapi import APIRouter, UploadFile
from app.core import config, image_converter
from app.models import Receipt

router = APIRouter()

@router.post("/upload/")
async def upload(file: UploadFile) -> Receipt:
    settings = config.get_settings()
    if settings.dev_mode:
        return mocks.get_mock_receipt()

    secrets = config.get_secrets()
    open_ai = image_converter.OpenAIHelper(secrets.github_token)
    base64_image = base64.b64encode(file.file.read()).decode('utf-8')
    gpt_answer = open_ai.read_receipt(base64_image)
    return Receipt.from_csv(gpt_answer, delimiter="|")


@router.get("/")
async def get_receipt() -> Receipt:
    return mocks.get_mock_receipt()


