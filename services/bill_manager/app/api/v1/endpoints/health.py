from fastapi import APIRouter
from app.core.config import get_settings
from app.core.logging import get_logger 

router = APIRouter()

@router.get("/")
def health():
    get_logger(__name__).info("Health check")
    settings = get_settings()
    return {
            'dev_mode': settings.dev_mode,
            }
