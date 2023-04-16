---
tags: [IUCN-GET,Typology web,OGR]
---

# EEZ boundaries

Maritime Boundaries and Exclusive Economic Zones

## Links

https://www.marineregions.org/eez.php

## Citation
> Flanders Marine Institute (2019). Maritime Boundaries Geodatabase: Maritime Boundaries and Exclusive Economic Zones (200NM), version 11. Available online at https://www.marineregions.org/. https://doi.org/10.14284/386

 ## Data download and preparation

This dataset is available after registration, I have not found a method for direct download from the commandline.

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/admin/global/EEZ/
cd $GISDATA/admin/global/EEZ/

# register and download, then move to current folder.
mv ~/Downloads/World_EEZ_v11_20191118_gpkg.zip $GISDATA/admin/global/EEZ/
```

## Data preparation
In Katana we need to load the appropriate modules

```sh title="Load modules for Katana"
module add sqlite/3.31.1 spatialite/5.0.0b0 python/3.8.3 perl/5.28.0 gdal/3.2.1 geos/3.8.1 proj/7.2.0
```

Prepare data for use in GIS using `ogr2ogr` with option `-makevalid` and `-simplify`

```sh title="OGR, do your thing!"
unzip -u World_EEZ_v11_20191118_gpkg.zip
ogr2ogr -f "GPKG" eez-valid.gpkg World_EEZ_v11_20191118_gpkg/eez_v11.gpkg -nlt PROMOTE_TO_MULTI -makevalid -simplify 0.0001
```
