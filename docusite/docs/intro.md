---
sidebar_position: 2
---

# First steps

I work mostly in Linux or Mac operating systems, and use bash (or equivalent) in the terminal for most of the data preparation steps.  

## Set up your environment

I have written a text file with the `bash` commands required to set up computing environment variables, for example the exact location of the GIS data folder is stored in the variable `$GISDATA`, etc. 

The file is called `project-env.sh` and is located in the `env` folder of the repository, I start my session by sourcing that file into the terminal from the repository folder:

```sh
cd $PATH_TO_REPOSITORY
source env/project-env.sh
```

## Setting the path

Next I create a folder for the dataset and navigate to that folder to do all the data preparation steps. 

I use the `mkdir` command with argument `-p` to create the folder. 

I follow some simple rules to organise my folders. I always start with `$GISDATA` folder, then I select a group name for the type of variable and in each group I have subfolder for `global` and `regional` data sets. I choose a short but meaningful folder name for each datasetm, for example:

```sh
mkdir -p $GISDATA/vegetation/regional/Peru-vegetacion
cd  $GISDATA/vegetation/regional/Peru-vegetacion
```

