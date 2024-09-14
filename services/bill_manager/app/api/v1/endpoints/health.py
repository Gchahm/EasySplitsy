from fastapi import APIRouter
from app.core.config.settings import Settings 
from app.core.config.secrets import get_secrets 


router = APIRouter()
settings = Settings()
secret_settings = get_secrets()


@router.get("/")
def health():
    return {'dev_mode': settings.dev_mode, 'app_name': secret_settings.app_name}
