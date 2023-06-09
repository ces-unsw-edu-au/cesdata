---
tags: [wget]
---
# TMWB 

The world borders used by thematicmapping.org.

## Links 

http://thematicmapping.org/downloads/world_borders.php

## Data download and preparation

The *Thematic Mapping World Borders* can be downloaded directly from the website, I use `wget` to download from the commandline. 

Current version is 0.3, is nice for display, but is an unofficial version of the borders.

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh
mkdir -p $GISDATA/admin/global/TMWB/
cd $GISDATA/admin/global/TMWB/

wget --continue http://thematicmapping.org/downloads/TM_WORLD_BORDERS-0.3.zip
wget --continue http://thematicmapping.org/downloads/TM_WORLD_BORDERS_SIMPL-0.3.zip

unzip -u TM_WORLD_BORDERS-0.3.zip
unzip -u TM_WORLD_BORDERS_SIMPL-0.3.zip 
```
