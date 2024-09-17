from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    dev_mode: bool = False
    github_token: str = ""
    keyvault_name: str = "ezsplit-kv"
    github_secret_name: str = "github-secret"
    app_name_secret_name: str = "app-secret"
    model_config = SettingsConfigDict(env_file=".env")
    otel_python_log_correlation: bool = True
    applicationinsights_connection_string: str = ""

class SecretSettings(BaseSettings):
    github_token: str = ""
    app_name: str = "undefined"


