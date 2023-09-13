---
title: "Vegetation map for Africa"
description: "Potential natural vegetation of eastern Africa"
tags: [IUCN GET]
---
# Potential natural vegetation of eastern Africa

> Spatial data layer (raster layer at geotif format) describing the potential natural vegetation of eastern Africa (Kenya, Uganda, Tanzania, Rwanda, Malawi, Zambia). The map is based on the potential natural vegetation (PNV) map for eastern Africa developed by the VECEA (Vegetation and Climate change in East Africa) project.

## Links 

https://vegetationmap4africa.org/Home.html

## Citation

> van Breugel P, Kindt R, Lillesø JPB, Bingham M, Demissew S, Dudley C, Friis I, Gachathi F, Kalema J, Mbago F, Moshi HN, Mulumba, J, Namaganda M, Ndangalasi HJ, Ruffo CK, Védaste M, Jamnadass R and Graudal L (2015) Potential Natural Vegetation Map of Eastern Africa (Burundi, Ethiopia, Kenya, Malawi, Rwanda, Tanzania, Uganda and Zambia). Version 2.0. Forest and Landscape (Denmark) and World Agroforestry Centre (ICRAF). URL: //vegetationmap4africa.org

> Van Breugel, Paulo; Kindt, Roeland; Barnekow Lillesø, Jens-Peter; Graudal, Lars (2015). An alternative simplified version of the VECEA potential natural vegetation map for eastern Africa. figshare. Dataset. https://doi.org/10.6084/m9.figshare.1306936.v1

## Data access

The `alternative simplified` version is available in Figshare. It has one value per pixel based on modeled potential distribution.

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh

mkdir -p $GISDATA/vegetation/regional/VECEA
cd $GISDATA/vegetation/regional/VECEA

wget --continue https://figshare.com/ndownloader/files/1896053 --output-document=pnv-ea-data.zip
wget --continue https://figshare.com/ndownloader/files/1923723 --output-document=pnv_ea_documentation.pdf 
```