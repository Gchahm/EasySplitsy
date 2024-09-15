from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient

from app.core.config.settings import Settings, SecretSettings 

settings = Settings()

def get_key_vault_secrets() -> SecretSettings:
    # Replace with your Key Vault URL
    key_vault_url = f"https://{settings.keyvault_name}.vault.azure.net/"

    # Create a credential using the DefaultAzureCredential
    credential = DefaultAzureCredential()

    # Create a SecretClient using the Key Vault URL and credential
    client = SecretClient(vault_url=key_vault_url, credential=credential)

    github_secret = client.get_secret(settings.github_secret_name)
    app_name = client.get_secret(settings.app_name_secret_name)

    return SecretSettings(github_token=str(github_secret.value), app_name=str(app_name.value))

