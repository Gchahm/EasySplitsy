from fastapi import FastAPI

from app.core import logging, cors, spa
from app import api 

app = FastAPI()

api.setup_routes(app)
cors.setup_cors(app)
spa.setup_spa(app)
logging.setup_telemetry(app)
