from app.core.config.settings import Settings, SecretSettings


def get_settings():
     return Settings()

def get_secrets():
    settings = get_settings()
    if settings.dev_mode:
        return SecretSettings(github_token=settings.github_token)
    else:
        from app.core.config.azure_key_vault import get_key_vault_secrets
        return get_key_vault_secrets()
