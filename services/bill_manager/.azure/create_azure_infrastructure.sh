#!/bin/bash
set -e

SCRIPT_DIR="$(dirname "$(realpath "$0")")"
source "$SCRIPT_DIR/variables.sh"

echo "create azure resource group"
az group create --name $resource_group --location $location


echo "Create an Azure Container Registry with the az acr create command."
az acr create \
    --resource-group "$resource_group" \
    --name "$acr_name" \
    --sku Basic \
    --admin-enabled true


echo "Get the ACR password"
acr_password=$(az acr credential show \
    --resource-group "$resource_group" \
    --name "$acr_name" \
    --query "passwords[?name == 'password'].value" \
    --output tsv)


echo "Create an identity manager"
az identity create --resource-group "$resource_group" --name "$identity_name"


echo "Get the principal ID of the identity"
principal_id=$(az identity show --resource-group "$resource_group" --name "$identity_name" --query principalId --output tsv)


echo "Create a keyvault"
az keyvault create --resource-group "$resource_group" --name "$keyvault_name"


echo "Assign the identity access to the keyvault "
az role assignment create \
  --assignee "$principal_id" \
  --role "Key Vault Secrets User" \
  --scope "/subscriptions/$subscription_id/resourceGroups/$resource_group/providers/Microsoft.KeyVault/vaults/$keyvault_name"


echo "Deploy web app to Azure"
az acr build \
  --resource-group "$resource_group" \
  --registry "$acr_name" \
  --image "$image_name:$image_tag" .



echo "Create an App Service plan with the az appservice plan command."
az appservice plan create \
    --name "$app_service_name" \
    --resource-group "$resource_group" \
    --sku B1 \
    --is-linux


echo "Create the web app with the az webapp create command."
az webapp create \
    --resource-group "$resource_group" \
    --plan "$app_service_name" \
    --name "$webapp_name" \
    --container-registry-password "$acr_password" \
    --container-registry-user "$acr_name" \
    --deployment-container-image-name "$acr_name.azurecr.io/$image_name:$image_tag" 


echo "After creating the web app"
echo "Assign managed identity to the web app"
az webapp identity assign --resource-group "$resource_group" --name "$webapp_name"

