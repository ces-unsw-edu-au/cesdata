---
title: "WorldClim"
description: "Interpolated monthly climate data"
tags: [wget]
---

## Description WorldClim-2.1

Interpolated monthly climate data for minimum, mean, and maximum temperature, precipitation, solar radiation, wind speed, water vapor pressure, and for total precipitation. There are also 19 bioclimatic variables.
urls:

## Versions

- version 2.1: https://worldclim.org/data/index.html

- version 1.4: https://worldclim.org/data/v1.4/worldclim14.html


## Citation

> Fick, S.E. and R.J. Hijmans, 2017. WorldClim 2: new 1km spatial resolution climate surfaces for global land areas. International Journal of Climatology 37 (12): 4302-4315 

## Data access and download

```bash
source proyectos/CES/cesdata/env/project-env.sh
mkdir -p $GISDATA/climate/global/WorldClim
cd $GISDATA/climate/global/WorldClim

```

For the historical data, focusing on 30 arcsecond resolution:

```bash
mkdir -p $GISDATA/climate/global/WorldClim/v2.1/Historical
cd $GISDATA/climate/global/WorldClim/v2.1/Historical
wget https://worldclim.org/data/worldclim21.html
grep href worldclim21.html | grep "_30s_" > links
wget --continue -b --input-file=links --force-html

```

For the future climate projections (CMIP6) data, at 30 arcsecond:

```bash
mkdir -p $GISDATA/climate/global/WorldClim/v2.1/CMIP6
cd $GISDATA/climate/global/WorldClim/v2.1/CMIP6

wget https://worldclim.org/data/cmip6/cmip6_clim30s.html
grep href  cmip6_clim30s.html | grep ".tif" > links
wget -b --continue --input-file=links --force-html


```
