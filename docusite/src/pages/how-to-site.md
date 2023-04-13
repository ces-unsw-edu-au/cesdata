---
title: How to set up this site
---

# We built this site with Rock'n'Roll

Well, not quite but near enough...

We built this awesome documentation site using https://docusaurus.io/docs

First we installed [Node.js](https://nodejs.org/en/download/) (recommended version 16.14 or above).

:::warning npx version

Make sure we deactivate conda to use the downloaded npx version:

```sh
conda deactivate
which npx
npx -v
```

This sites works with `9.5.1`.

:::

Then we _npx_ docusaurus:

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

I have done most of this using just markdown, because I just haven't got much time to properly learn react.js, but that's OK, you don't need React to write simple standalone pages.

I am using the **classic template** because I just don't have time to explore and tweak templates and themes.

### Where to locate stuff

The `docusaurus.config.js` file is the place for titles and bottom menus, logos and icons, and other configuration stuff. 

I haven't touch the sidebars.js, I just don't have time for that much customisation. [^2] 

The `pages/index.js` looks scary, I only edited a couple of lines with the main text, but the funny thing is that the feature list is located in `/src/components/index.js`, so that is the place to edit those boxes. 

This `how-to-site` file is in the `pages` folder, which is the place for stand-alone pages. All other stuff is neatly organised in the `docs` folder. The documents in the `docs` folder appear automatically in the left hand side menu, but we have to create explicit links for the ones in the `pages` folder, for example in the `docusaurus.config.js` if we want these to appear in the bottom bar.



[^1]: But I have not clue yet what is the difference between npx and npm...
[^2]: This is kind of a theme here