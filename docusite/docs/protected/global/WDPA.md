---
title: "WDPA"
description: "World database on Protected Areas"
tags: [deforestation,Venezuela,Australia,Adaptative monitoring,wget,IUCN Knowledge products, GDB]
---



The World Database on Protected Areas (WDPA) is the most comprehensive global database of marine and terrestrial protected areas, updated on a monthly basis.

## Links 

- https://www.protectedplanet.net
- [Documentation](http://pp-import-production.s3.amazonaws.com/WDPA_Manual_1_5.pdf)


## Reference
> UNEP-WCMC and IUCN (2021), Protected Planet: The World Database on Protected Areas (WDPA) [Online], March 2021, Cambridge, UK: UNEP-WCMC and IUCN. Available at: www.protectedplanet.net.

> UUNEP-WCMC and IUCN (2023), Protected Planet: The World Database on Protected Areas (WDPA) and World Database on Other Effective Area-based Conservation Measures (WD-OECM) [Online], February 2023, Cambridge, UK: UNEP-WCMC and IUCN. Available at: www.protectedplanet.net.
## Data access

From https://www.protectedplanet.net/ there are several options to download datasets

### Global data

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh


mkdir -p $GISDATA/protected/global/WDPA
cd $GISDATA/protected/global/WDPA

# April 2021
wget -b --continue https://d1gam3xoknrgr2.cloudfront.net/current/WDPA_Apr2021_Public.zip
# March 2021
## wget -b --continue https://d1gam3xoknrgr2.cloudfront.net/current/WDPA_Mar2021_Public.zip

```

### Example for one country

#### Australia

> UNEP-WCMC (2023). Protected Area Profile for Australia from the World Database on Protected Areas, April 2023. Available at: www.protectedplanet.net

```{bash}
wget --continue https://d1gam3xoknrgr2.cloudfront.net/current/WDPA_WDOECM_Apr2023_Public_AUS.zip

INPUTDIR=protected/global/WDPA/
mkdir -p $WORKDIR/WDPA
unzip -d $WORKDIR/WDPA -u $GISDATA/$INPUTDIR/WDPA_WDOECM_Apr2023_Public_AUS.zip

ogr2ogr -f GPKG WDPA.gpkg WDPA_WDOECM_Apr2023_Public_AUS.gdb -makevalid
```

#### Venezuela

Usamos `ogr2ogr` y `ogrmerge.py` para preparar una capa con toda la información de WDPA

```sh
INPUTDIR=protected/global/WDPA/
mkdir -p $WORKDIR/WDPA
unzip -d $WORKDIR/WDPA $GISDATA/$INPUTDIR/WDPA_WDOECM_Feb2023_Public_VEN_shp.zip
cd $WORKDIR/WDPA
for k in 0 1 2
do
  unzip -u WDPA_WDOECM_Feb2023_Public_VEN_shp_${k}.zip
  ogr2ogr WDPA_polygons_${k}.gpkg WDPA_WDOECM_Feb2023_Public_VEN_shp-polygons.shp -nlt MULTIPOLYGON
  rm *WDPA_WDOECM_Feb2023_Public_VEN_shp-polygons*
done

ogrmerge.py -o $WORKDIR/WDPA-Venezuela.gpkg $WORKDIR/WDPA/WDPA_polygons_0.gpkg $WORKDIR/WDPA/WDPA_polygons_1.gpkg $WORKDIR/WDPA/WDPA_polygons_2.gpkg -single

## update the entry for Caura
ogrinfo $WORKDIR/WDPA-Venezuela.gpkg -update -sql "UPDATE merged SET STATUS_YR=2015 WHERE IUCN_CAT='II' AND STATUS_YR=1968"

 ```

## This dataset is used for...

### Deforestation analysis in Venezuela 

[GitHub repo](https://github.com/NeoMapas/datos-deforestacion-venezuela)



