---
title: "PyGEM-OGGM"
description: "Global PyGEM-OGGM Glacier Projections"
tags: [tropical glaciers, IUCN RLE]
---

## Description

Global PyGEM-OGGM Glacier Projections with RCP and SSP Scenarios, Version 1 (HMA2_GGP)

> This data set comprises results from a hybrid glacier evolution model that uses the mass balance module of the Python Glacier Evolution Model (PyGEM) and the glacier dynamics module of the Open Global Glacier Model (OGGM). Output parameters include projections of glacier mass change, fixed runoff, and various mass balance components at regionally aggregated and glacier scales.

## Links 

https://nsidc.org/data/hma2_ggp/versions/1

## Citation

> Rounce, D., R. Hock, and F. Maussion. (2022). Global PyGEM-OGGM Glacier Projections with RCP and SSP Scenarios, Version 1 [Data Set]. Boulder, Colorado USA. NASA National Snow and Ice Data Center Distributed Active Archive Center. https://doi.org/10.5067/P8BN9VO9N5C7. Date Accessed 03-19-2023.

@article{
doi:10.1126/science.abo1324,
author = {David R. Rounce  and Regine Hock  and Fabien Maussion  and Romain Hugonnet  and William Kochtitzky  and Matthias Huss  and Etienne Berthier  and Douglas Brinkerhoff  and Loris Compagno  and Luke Copland  and Daniel Farinotti  and Brian Menounos  and Robert W. McNabb },
title = {Global glacier change in the 21st century: Every increase in temperature matters},
journal = {Science},
volume = {379},
number = {6627},
pages = {78-83},
year = {2023},
doi = {10.1126/science.abo1324},
URL = {https://www.science.org/doi/abs/10.1126/science.abo1324},
eprint = {https://www.science.org/doi/pdf/10.1126/science.abo1324},
abstract = {Glacier mass loss affects sea level rise, water resources, and natural hazards. We present global glacier projections, excluding the ice sheets, for shared socioeconomic pathways calibrated with data for each glacier. Glaciers are projected to lose 26 ± 6\% (+1.5°C) to 41 ± 11\% (+4°C) of their mass by 2100, relative to 2015, for global temperature change scenarios. This corresponds to 90 ± 26 to 154 ± 44 millimeters sea level equivalent and will cause 49 ± 9 to 83 ± 7\% of glaciers to disappear. Mass loss is linearly related to temperature increase and thus reductions in temperature increase reduce mass loss. Based on climate pledges from the Conference of the Parties (COP26), global mean temperature is projected to increase by +2.7°C, which would lead to a sea level contribution of 115 ± 40 millimeters and cause widespread deglaciation in most mid-latitude regions by 2100. Mountain glaciers, perennial ice masses excluding the Greenland and Antarctic ice sheets, are a critical water resource for nearly two billion people and are threatened by global warming. Rounce et al. projected how those glaciers will be affected under global temperature increases of 1.5° to 4°C, finding losses of one quarter to nearly one half of their mass by 2100 (see the Perspective by Aðalgeirsdóttir and James). Their calculations suggest that glaciers will lose substantially more mass and contribute more to sea level rise than current estimates indicate. —HJS Glaciers are melting more rapidly than expected due to global warming.}}

## User Guide

https://nsidc.org/sites/default/files/documents/user-guide/hma2_ggp-v001-userguide_0.pdf

## Data access

Instructions for Programmatic Data Access are here: https://nsidc.org/data/user-resources/help-center/programmatic-data-access-guide

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh
mkdir -p $GISDATA/cryosphere/global/PyGEM-OGGM
cd $GISDATA/cryosphere/global/PyGEM-OGGM


for VAR in mass_annual_mad_50sets_2000_2100 mass_annual_50sets_2000_2100
do 
    for SCN in ssp119 ssp126 ssp245 ssp370 ssp585 
    do
        wget --load-cookies ~/.urs_cookies --save-cookies ~/.urs_cookies --keep-session-cookies --no-check-certificate --auth-no-challenge=on -r --reject "index.html*" -np -e robots=off -nd --continue https://n5eil01u.ecs.nsidc.org/HMA/HMA2_GGP.001/2000.01.01/R16_glac_${VAR}-${SCN}.nc        
    done
done 

gdalwarp NETCDF:$GISDATA/climate/global/CHIRPS/chirps-v2.0.monthly.nc:precip -t_srs EPSG:4326 -te -74 0 -58 13 -of 'GTiff' Test1.tif

```


## This dataset is used for...

### IUCN RLE assessment of tropical glaciers 

![](/img/osf-logo.png) 

- [OSF project component](https://osf.io/432sb/)

