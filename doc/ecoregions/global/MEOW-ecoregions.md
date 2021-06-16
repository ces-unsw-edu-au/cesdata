#  MEOW : Marine ecoregions of the world

#### CITATION
>  Spalding MD et al. (2008) Marine ecoregions of the world: a bioregionalization of coastal and shelf areas. Bioscience 57: 573–583.

#### data availability

https://www.worldwildlife.org/publications/marine-ecoregions-of-the-world-a-bioregionalization-of-coastal-and-shelf-areas


#### Data download and preparation

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/ecoregions/global/MEOW/
cd $GISDATA/ecoregions/global/MEOW/

wget --continue 'https://c402277.ssl.cf1.rackcdn.com/publications/351/files/original/MEOW_FINAL.zip?1349120553' --output-document=MEOW_FINAL.zip

```


```sh
cd $WORKDIR
unzip $GISDATA/biogeografia/MEOW/MEOW_FINAL.zip

psql gisdata -c "CREATE SCHEMA MEOW"
ogr2ogr -overwrite -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=meow MEOW/meow_ecos.shp  -nlt PROMOTE_TO_MULTI


```
