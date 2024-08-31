from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    dev_mode: bool = False
    github_token: str
    model_config = SettingsConfigDict(env_file=".env")
