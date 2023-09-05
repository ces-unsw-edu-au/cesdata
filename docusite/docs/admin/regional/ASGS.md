---
title: "ASGS"
description: "Australian Statistical Geography Standard "
tags: [Australia,Adaptative monitoring,wget,OGR,GPKG]
---

Australian Statistical Geography Standard (ASGS) Edition 3

A classification of Australia into a hierarchy of statistical areas for the publication and analysis of official statistics and other data

## Links

- https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs-edition-3/jul2021-jun2026

- https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs-edition-3/jul2021-jun2026/access-and-downloads/digital-boundary-files

## Data access and download

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh
export INPUTDIR=admin/regional/ASGS
mkdir -p $GISDATA/$INPUTDIR/
cd $GISDATA/$INPUTDIR/

for arch in ASGS_Ed3_2021_Indigenous_Structure_GDA2020_GPKG.zip ASGS_2021_MAIN_STRUCTURE_GPKG_GDA2020.zip ASGS_Ed3_Non_ABS_Structures_GDA2020_GPKG_updated_2022.zip ASGS_2021_SUA_UCL_SOS_SOSR_GPKG_GDA2020.zip ASGS_Ed3_2021_RA_GPKG_GDA2020.zip
do
 wget --continue https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs-edition-3/jul2021-jun2026/access-and-downloads/digital-boundary-files/${arch}
done
```


## Data preparation

### With OGR

```sh
cd $WORKDIR
unzip $GISDATA/$INPUTDIR/ASGS_Ed3_2021_Indigenous_Structure_GDA2020_GPKG.zip
unzip $GISDATA/$INPUTDIR/ASGS_Ed3_Non_ABS_Structures_GDA2020_GPKG_updated_2022.zip 

ogrinfo ASGS_Ed3_2021_Indigenous_Structure_GDA2020.gpkg 

ogrinfo ASGS_Ed3_2021_Indigenous_Structure_GDA2020.gpkg  IARE_2021_AUST_GDA2020 -geom=no -where "IREG_NAME_2021 = 'Riverina - Orange'"

ogrinfo ASGS_Ed3_Non_ABS_Structures_GDA2020_updated_2022.gpkg ADD_2021_AUST_GDA2020 -geom=no | less
```