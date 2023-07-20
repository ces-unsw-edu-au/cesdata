---
title: "South Africa RLE"
description: "Terrestrial and marine ecosystems of South Africa"
tags: [South Africa,IUCN RLE,RLE spatial data]
---


## Citation 

> Skowno AL, Monyeki MS. South Africa’s Red List of Terrestrial Ecosystems (RLEs). Land. 2021; 10(10):1048. https://doi.org/10.3390/land10101048

## Links:

- South African terrestrial data and scripts in  Suppements of https://doi.org/10.3390/land10101048
- [National Biodiversity Assessmet](https://ba.sanbi.org.za/contentmanagement/index?guid=96f2b64e-da8f-48ec-8f1a-0d1ab770bf21)
- Explore data at [SANBI data portal BGIS](http://bgis.sanbi.org/Projects/Detail/221)
- Component datasets:
    - Terrestrial: http://bgis.sanbi.org/SpatialDataset/Detail/2675
    - Coastal: http://bgis.sanbi.org/SpatialDataset/Detail/2688
    - Marine: http://bgis.sanbi.org/SpatialDataset/Detail/2682
    - Sub-Antarctic: http://bgis.sanbi.org/SpatialDataset/Detail/2680
    - Estuary ecosystesm: http://bgis.sanbi.org/SpatialDataset/Detail/2684
    - Inland aquatic: http://bgis.sanbi.org/Projects/Detail/217
    - [Historical extent: Terrestrial](http://bgis.sanbi.org/SpatialDataset/Detail/6715)

## Data access and download

Register and download from BGIS, then:

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh

mkdir -p $GISDATA/ecosystems-status/regional/South-Africa
cd $GISDATA/ecosystems-status/regional/South-Africa

mv ~/Downloads/NBA2018_*zip $GISDATA/ecosystems-status/regional/South-Africa

```

We can extract all to a target directory:

```sh
mkdir -p $WORKDIR/South-Africa
for ARCH in $(ls $GISDATA/ecosystems-status/regional/South-Africa/*zip)
do 
  unzip -u '$ARCH' -d $WORKDIR/South-Africa
done

```
