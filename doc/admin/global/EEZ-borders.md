# EEZ boundaries

https://www.marineregions.org/eez.php

## Citation
> Flanders Marine Institute (2019). Maritime Boundaries Geodatabase: Maritime Boundaries and Exclusive Economic Zones (200NM), version 11. Available online at https://www.marineregions.org/. https://doi.org/10.14284/386

 ## Data download and preparation

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/admin/global/EEZ/
cd $GISDATA/admin/global/EEZ/

# register and download
mv ~/Downloads/World_EEZ_v11_20191118_gpkg.zip $GISDATA/admin/global/EEZ/

unzip -u World_EEZ_v11_20191118_gpkg.zip
```
