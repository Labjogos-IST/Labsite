# For downloading
`git clone --recursive git@github.com:Labjogos-IST/Labsite.git`

setup/install:
- hugo 
- pnpm
- nodejs/npm?

# Editing Notes:
- Create new content with the command "hugo new content <SECTIONNAME>/<FILENAME>.<FORMAT>".

- Start the embedded web server with the command "hugo server -D".

- To edit non content, go into the theme folder and then follow the bottom instructions

# For the theme (https://github.com/nusserstudios/tailbliss)
```
cd themes/tailbliss
pnpm install
# or: npm install
pnpm run build:css:dev
cp static/css/main.*.css ../../static/css/
cd ../..

# If you see "no layout file" warnings: add theme = "tailbliss" to hugo.toml,
# or remove hugo.toml so the rsync'd hugo.yaml (which has theme: tailbliss) is used.

# Start developing
hugo server
```
