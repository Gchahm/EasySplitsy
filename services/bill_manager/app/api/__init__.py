from .v1 import api_v1_router

def setup_routes(app):
    app.include_router(api_v1_router, prefix="/api/v1")


