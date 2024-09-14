from app.core.config.azure_key_vault import get_key_vault_secrets 
from app.core.config.settings import Settings, SecretSettings 

settings = Settings()

def get_secrets() -> SecretSettings: 
    if settings.dev_mode:
        return SecretSettings(github_token=settings.github_token)
    else:
        return get_key_vault_secrets()
       


