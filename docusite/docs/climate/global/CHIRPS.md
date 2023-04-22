---
title: "CHIRPS"
description: "Climate Hazards Group InfraRed Precipitation with Station"
tags: [wget, gdal, netcdf]
---

## Description

Quasi-global distribution (50S-50N), gridded 0.05 degree resolution, 1981 to near-real time precipitation time series.


## Links 

[The Climate Hazards Group InfraRed Precipitation with Station](http://chg.geog.ucsb.edu/data/chirps)

https://www.chc.ucsb.edu/data/chirps

Old links:

- [README](ftp://ftp.chg.ucsb.edu/pub/org/chg/products/CHIRPS-2.0/README-CHIRPS.txt) 
- [FAQ](http://chg-wiki.geog.ucsb.edu/wiki/CHIRPS_FAQ) 
- [Publication](http://pubs.usgs.gov/ds/832/)

Publication: https://www.nature.com/articles/sdata201566

- https://data.chc.ucsb.edu/products/CHIRPS-2.0/
- https://data.chc.ucsb.edu/products/CHIRPS-2.0/
- README-CHIRPS.txt

## Data access and preparation

```sh
source proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/climate/global/CHIRPS
cd $GISDATA/climate/global/CHIRPS

# all in one file:
wget --continue https://data.chc.ucsb.edu/products/CHIRPS-2.0/global_monthly/netcdf/chirps-v2.0.monthly.nc


```


Time steps are months (days since 1980-1-1 0:0:0), and they are stored as bands:

```sh
module add python/3.8.3 perl/5.28.0 gdal/3.2.1 geos/3.8.1
gdalinfo chirps-v2.0.monthly.nc


gdalwarp NETCDF:$GISDATA/climate/global/CHIRPS/chirps-v2.0.monthly.nc:precip -t_srs EPSG:4326 -te -74 0 -58 13 -of 'GTiff' Test1.tif
```
