
Deploying to azure
## Create local docker

First create the container
```bash
sudo docker build --tag bill_manager .
```

deploy the container, this is not necessary, but it is good for testing before deploying
````bash
sudo docker run --detach --publish 3100:3100 bill_manager
````

## Deploying to azure

skip steps as necessary

create resource group
````bash
az group create --name BillManager --location <location>
````
Create an Azure Container Registry with the az acr create command.
````bash
az acr create \
--resource-group BillManager \
--name billmanageracr \
--sku Basic \
--admin-enabled true
````
Build the image in Azure Container Registry

Set an environment variable to the value of the password for the registry.
````bash
ACR_PASSWORD=$(az acr credential show \
--resource-group BillManager \
--name billmanageracr \
--query "passwords[?name == 'password'].value" \
--output tsv)
````

Build the Docker image in Azure with the az acr build command. The command uses the Dockerfile in the current directory, and pushes the image to the registry.
````bash
az acr build \
  --resource-group BillManager \
  --registry billmanageracr \
  --image bill_manager:latest .
````

Deploy web app to Azure

Create an App Service plan with the az appservice plan command.
```bash
az appservice plan create \
--name billmanageracr-webplan \
--resource-group BillManager \
--sku B1 \
--is-linux
````
Create the web app with the az webapp create command.
```bash
az webapp create \
--resource-group BillManager \
--plan billmanageracr-webplan \
--name easysplit \
--container-registry-password $ACR_PASSWORD \
--container-registry-user billmanageracr \
--role acrpull \
--deployment-container-image-name billmanageracr.azurecr.io/bill_manager:latest 
```
`az webapp log tail --resource-group BillManager --name easysplit`
## Redeploy after app is updated

rebuild the azure container
````bash
az acr build \
  --resource-group BillManager \
  --registry billmanageracr \
  --image bill_manager:latest .
````

restart the web app (I don't have the command for this yet)