subscription_id=$(az account show --query id --output tsv)
resource_group="ez-split-rg"
location="westeurope"
acr_name="ezsplitacr"  # Ensure uniqueness and valid format
identity_name="ez-split-identity"
keyvault_name="ezplit-kv"  # Ensure uniqueness and valid format
app_service_name="ez-split-webapp"
webapp_name="ez-split-webapp"
plan="ez-split-plan"
image_name="ez-split-image"
image_tag="latest"

