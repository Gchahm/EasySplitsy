from fastapi import APIRouter
from app.core.config import get_secrets, get_settings 


router = APIRouter()


@router.get("/")
def health():
    settings = get_settings()
    secret_settings = get_secrets()
    return {
            'dev_mode': settings.dev_mode,
            'app_name': secret_settings.app_name,
            'constring': settings.applicationinsights_connection_string
            }
