This repo is the final project repo which uses following repos as modules - [BETL](https://github.com/Soumik-Maji/BETL), [file-reader](https://github.com/Soumik-Maji/file-reader), [toJSON-convertor](https://github.com/Soumik-Maji/toJSON-convertor), [Exporter](https://github.com/Soumik-Maji/Exporter) to function as a local browser based data manipulation tool.

Recommended: It requires some file serving mechanism like vscode's live-server extension to work locally.

Alternately you can also put them in the index.html to make it work with out any file serving but that might create *functions with same name issue*. (**Not fixing this.**)

Check out the *downloader.sh* & *updater.sh* scripts which you can use to setup projects automatically.

Need to run only *downloader.sh* & rest works automatically. [Click to get downloader.sh](https://github.com/Soumik-Maji/Browser-ETL/releases/latest/download/downloader.sh)

**Alternatively** you can download the pre-built project from [here](https://github.com/Soumik-Maji/Browser-ETL/releases/latest/download/Browser-ETL.zip). It has all working components except-
- naming project during creation (comes with repo name as project name only)
- doesn't have the updater.sh file (did this for Windows)
- no aggressive cleanup inside modules (README.md & LICENSE stays doubling the base project size)
