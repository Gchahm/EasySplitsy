Deploying to azure

## Create local docker

First create the container

```bash
sudo docker build --tag bill_manager .
```

deploy the container, this is not necessary, but it is good for testing before deploying

```bash
sudo docker run --detach --publish 3100:3100 bill_manager
```

## Deploying to azure

```bash
bash .azure/create_azure_infrastructure.sh
```
