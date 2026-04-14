#!/bin/bash
set -e

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
}
download_module "Exporter"
download_module "file-reader"
download_module "toJSON-convertor"
download_module "BETL"

cd ..
read -n 1 -p "Remove LICENSE & README files to save space? (y/n): " cleanup
echo ""
if [[ "$cleanup" == [Yy] ]]; then
    find . -name "LICENSE" -delete
    find . -name "README.md" -delete
    echo "Cleaned up."
else
    echo "Thanks for keeping them."
fi

echo "Module update COMPLETED!"