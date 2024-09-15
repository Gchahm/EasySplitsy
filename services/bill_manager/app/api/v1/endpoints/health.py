from fastapi import APIRouter
from app.core.config import get_secrets, get_settings 


router = APIRouter()

import logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@router.get("/")
def health():
    logger.info('Health check')
    settings = get_settings()
    secret_settings = get_secrets()
    return {
            'dev_mode': settings.dev_mode,
            'app_name': secret_settings.app_name,
            }
