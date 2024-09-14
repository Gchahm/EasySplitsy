
from fastapi import APIRouter
from app.api.v1.endpoints import health 

# Create a version 1 API router
api_v1_router = APIRouter()

# Include the user and item routers
api_v1_router.include_router(health.router, prefix="/health", tags=["health"])

