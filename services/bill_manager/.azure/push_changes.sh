#!/bin/bash
set -e

SCRIPT_DIR="$(dirname "$(realpath "$0")")"
source "$SCRIPT_DIR/variables.sh"

az acr build \
  --resource-group "$resource_group" \
  --registry "$acr_name" \
  --image "$image_name:$image_tag" .

