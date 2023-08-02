---
title: How to set up this site
---

# We built this site with Rock'n'Roll

Well, not quite but near enough...

We built this awesome documentation site using https://docusaurus.io/docs

First we installed [Node.js](https://nodejs.org/en/download/) (recommended version 16.14 or above).

Install docusaurus with:

```sh
npm install docusaurus
```

Then we updated packages and run an audit
```sh
sudo npm install -g npm@9.7.1
npm i @docusaurus/core@latest @docusaurus/preset-classic@latest @docusaurus/module-type-aliases@latest
npm audit fix
```


:::caution npx version

Make sure we deactivate conda to use the downloaded npx version:

```sh
conda deactivate
which npx
npx -v # This sites works with `9.5.1`, updated in June to `9.7.1`
# New minor version of npm available! 9.7.1 -> 9.8.1
sudo npm install -g npm@9.8.1 

```
:::

The first time we _npx_ docusaurus (skip this if docusite is already created and configured):

```sh
npx create-docusaurus@latest $REPO_PATH/docusite classic
```
You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.


## Start your site

Run the development server:

```sh
cd $REPO_PATH/docusite
npx docusaurus start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npx docusaurus start` (apparently you could use `npm run start` also[^1]) command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

The I started with opening `docs/intro.md` and editing some lines: the site **reloads automatically** and displays your changes. Feels like magic!


## My experience so far

From there I just trial-ed and error-ed enough to get most of what we needed, a lot of what we wanted and all that I could. 

I have done most of this using just markdown, because I just haven't got much time to properly learn react.js, but that's OK, you don't need React to write simple standalone pages.[^2]

I am using the **classic template** because I just don't have time to explore and tweak templates and themes.

### build, serve and deply

Build a optimized static site:
```sh
npx docusaurus build
```

This will serve this site at `localhost:3000/cesdata`
```sh
npx docusaurus serve
```


*Should I use Github pages?*

[Seems straightforward](https://docusaurus.io/docs/deployment#deploying-to-github-pages)...

My steps:

- In GitHub: go to `Settings` / `Pages`, set Source to _Deploy from a branch_ and then the name of the branch.

- If the repository is private, this will serve the site at a random url, something like `https://curly-bassoon-6989k23.pages.github.io/`, once the repository is public it will work with the `https://ces-unsw-edu-au.github.io/`

- Then, modify `docusaurus.config.js` and add: `url`, `baseUrl`, `organizationName`, `projectName` and `deploymentBranch`. 

- Also there, set `trailingSlash` to `false`

- Add an empty file named .nojekyll to the static directory.

- set up the environment variables: USE_SSH and GIT_USER and call the docusaurus deploy command:

    cd $REPO_PATH/docusite
    USE_SSH=TRUE && GIT_USER=`my user name` && npx docusaurus deploy


### Using fontawesome

I will need to read the docs...

https://docusaurus.community/knowledge/design/icons/fontawesome/

### Images

- undraw svgs shipped with docusaurus
- https://www.svgrepo.com/svg/26855/sloth CC0 license
- https://www.svgrepo.com/svg/2155/wombat CC0 license
- https://www.svgrepo.com/svg/293158/maps-and-flags-global CCO license
- https://www.svgrepo.com/svg/293157/maps-and-flags-maps-and-flags CCO license

### Where to locate stuff

The `docusaurus.config.js` file is the place for titles and bottom menus, logos and icons, and other configuration stuff. 

I haven't touch the sidebars.js, I just don't have time for that much customisation. [^2] 

The `pages/index.js` looks scary, I only edited a couple of lines with the main text, but the funny thing is that the feature list is located in `/src/components/index.js`, so that is the place to edit those boxes. 

This `how-to-site` file is in the `pages` folder, which is the place for stand-alone pages. All other stuff is neatly organised in the `docs` folder. The documents in the `docs` folder appear automatically in the left hand side menu, but we have to create explicit links for the ones in the `pages` folder, for example in the `docusaurus.config.js` if we want these to appear in the bottom bar.

### update packages

After manual edits in `package-lock.json`, or problems with `ERR! could not determine executable to run` do:

```sh
# npm install
npm update
npm audit fix
```

[^1]: But I have not clue yet what is the difference between npx and npm...
[^2]: Well, it seems `mdx` is a thing... 🤔
[^3]: This is kind of a theme here