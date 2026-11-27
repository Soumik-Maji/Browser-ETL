#!/bin/bash
set -e

cd "$(dirname "${BASH_SOURCE[0]}")"
rm -rf modules/*
cd modules
echo "Downloading & extracting modules from github artifacts..."

# function for the modules setup
download_module() {
  local name=$1
  echo "${name} module"
  curl -fL --progress-bar "https://github.com/Soumik-Maji/${name}/releases/latest/download/${name}.tar.gz" -o "${name}.tar.gz" || { echo "Failed to download ${name}"; exit 1; }
  tar -xzf "${name}.tar.gz"
  rm "${name}.tar.gz"
  rm -f "${name}/LICENSE" "${name}/README.md"
}
download_module "Exporter"
download_module "file-reader"
download_module "toJSON-convertor"
download_module "BETL"

echo "Module update COMPLETED!"