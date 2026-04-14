#!/bin/bash
set -e

read -n 1 -p "Project will be created as a sibling to this bash script. OK with it? (y/n): " answer
echo "" # Move to a new line
if [[ "$answer" == [Yy] ]]; then
    echo "Cool. Let's begin."
else
    echo "Figure out the solution then come back."
    exit 0
fi

read -p "Enter project name (default: my-project): " project_name
project_name=${project_name:-my-project}

mkdir "${project_name}" || { echo "Failed to create directory. Exiting."; exit 1; }
echo "${project_name} directory created"
cd "${project_name}"

echo "Downloading the Browser-ETL repo contents"
curl -fL --progress-bar "https://github.com/Soumik-Maji/Browser-ETL/archive/refs/heads/main.tar.gz" -o main.tar.gz

echo "Extracting Browser-ETL repo contents & Setting up project structure..."
tar -xzf main.tar.gz
cp -r Browser-ETL-main/. .
rm -rf Browser-ETL-main
rm "modules/.gitkeep" "resources/.gitkeep" "main.tar.gz" "downloader.sh"

chmod +x updater.sh
./updater.sh

echo "Initial set up COMPLETED!"