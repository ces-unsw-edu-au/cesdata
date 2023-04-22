---
title: "WGI 2012"
description: "World Glacier Inventory, Version 1"
tags: [tropical glaciers, IUCN RLE]
---

## Description

 World Glacier Inventory, Version 1

The World Glacier Inventory ([WGI](https://nsidc.org/data/g01130)) represents a a snapshot of the glacier distribution in the second half of the 20th century. It contains information for over 130,000 glaciers, based primarily on aerial photographs and maps, most glaciers have a single data entry. It is based on the World Glacier Monitoring Service (WGMS 1989).

## Citation
> WGMS, and National Snow and Ice Data Center (comps.). 1999, updated 2012. World Glacier Inventory, Version 1. [Indicate subset used]. Boulder, Colorado USA. NSIDC: National Snow and Ice Data Center. doi: https://doi.org/10.7265/N5/NSIDC-WGI-2012-02. [Date Accessed].

## Data access
Available at: ftp://sidads.colorado.edu/pub/DATASETS/NOAA/G01130/

## Data download and preparation


```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh


DPATH=cryosphere/global
DNAME=WGI_2012

mkdir -p $GISDATA/$DPATH/$DNAME/
cd $GISDATA/$DPATH/$DNAME/

wget --continue ftp://sidads.colorado.edu/pub/DATASETS/NOAA/G01130/wgi_shapefile_feb2012.zip

```

We import this dataset in postgis for further data preparation and selection

```sh
psql gisdata jferrer -c "CREATE SCHEMA wgi"

ogr2ogr -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=wgi -nlt PROMOTE_TO_MULTI $GISDATA/inventories/WGI_2012/wgi_shapefile_feb2012.shp WGI_2012

```

This way we can summarize information according to documented variables, for example:

```sql
SELECT prim_class,count(*) as nr from wgi.wgi_shapefile_feb2012 group by prim_class;
```

En el que ''prim_class'' es una de las siguientes:

| Code | Name | Description |
|---|---|---|
|0 | Miscellaneous | Any type not listed below. |
|1 | Continental Ice Sheet | Inundates areas of continental size. |
|2 | Ice Field | Ice masses of the sheet or blanket type with a thickness that is insufficient to obscure the subsurface topography. |
|3 | Ice Cap | Dome-shaped ice masses with radial flow. |
|4 | Outlet Glacier | Drains an ice sheet, ice field, or ice cap, usually of valley glacier form; the catchment area may not be easily defined. |
|5 | Valley Glacier | Flows down a valley; the catchment area is well defined. |
|6 | Mountain Glacier | Cirque, niche type, crater type, or hanging glacier; also includes ice aprons and groups of small units. |
|7 | Glacieret and Snowfield | Small ice masses of indefinite shape in hollows, river beds, or on protected slopes that have developed from snow drift, avalanches, and/or particularly heavy accumulation in certain years. Usually no marked flow pattern is visible; and it has been in existence for at least two consecutive years. |
|8 | Ice Shelf | Floating ice sheet of considerable thickness attached to a coast nourished by a glacier or glaciers; snow accumulation on its surface or bottom freezing. |
|9 | Rock Glacier | Lava-stream-like debris mass containing ice in several possible forms and moving slowly downslope. |


## This dataset is used for...

### IUCN RLE assessment of tropical glaciers 

![](/img/osf-logo.png) 

- [OSF project component](https://osf.io/432sb/)

