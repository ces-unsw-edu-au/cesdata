# thematicmapping World Borders Dataset

http://thematicmapping.org/downloads/world_borders.php

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/admin/global/TMWB/
cd $GISDATA/admin/global/TMWB/

wget --continue http://thematicmapping.org/downloads/TM_WORLD_BORDERS-0.3.zip
wget --continue http://thematicmapping.org/downloads/TM_WORLD_BORDERS_SIMPL-0.3.zip

 unzip -u TM_WORLD_BORDERS-0.3.zip
  unzip -u TM_WORLD_BORDERS_SIMPL-0.3.zip 
```
