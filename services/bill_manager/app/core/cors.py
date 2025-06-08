from fastapi.middleware.cors import CORSMiddleware
from app.core import config


def setup_cors(app):
    settings = config.get_settings() 
    origins = ("http://localhost:8081", "http://localhost:8000",) if settings.dev_mode else ()

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
