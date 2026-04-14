# #!/bin/bash
# set -e

# cd modules
# rm -rf .
# echo "Downloading & extracting modules from github artifacts..."

# # function for the modules setup
# download_module() {
#   local name=$1
#   echo "${name} module"
#   curl -fL --progress-bar "https://github.com/Soumik-Maji/${name}/releases/latest/download/${name}.tar.gz" -o "${name}.tar.gz" || { echo "Failed to download ${name}"; exit 1; }
#   tar -xzf "${name}.tar.gz"
#   rm "${name}.tar.gz"
# }
# download_module "Exporter"
# download_module "file-reader"
# download_module "toJSON-convertor"
# download_module "BETL"

# echo "DONE!"
# echo "Delete the LICENSEs, READMEs & other irrelevant files in case you need to make project size smaller."

echo "updating modules"