---
tags: [IUCN-GET,wget]
---

#  GMIA 5

Global Map of Irrigation Areas, v 5.0

## Links 

- https://www.lap.uni-bonn.de/research/downloads/gmia/siebert_et_al_2013_gmia5
- http://www.fao.org/aquastat/en/geospatial-information/global-maps-irrigated-areas

## Citation
> Siebert, S., Henrich, V., Frenken, K., Burke, J. (2013): **Update of the Global Map of Irrigation Areas to version 5**. Project report, 178 p. (4 MB)
> Siebert, S., Döll, P., Hoogeveen, J., Faures, J.-M., Frenken, K., Feick, S. (2005): *Development and validation of the global map of irrigation areas*. **Hydrology and Earth System Sciences**, 9, 535-547.

## Data download:
http://www.fao.org/aquastat/en/geospatial-information/global-maps-irrigated-areas

> For the GIS-users the map is distributed in two different formats: as zipped ASCII-grid that can be easily imported in most GIS-software that supports raster data or grids; and, to accommodate people who use GIS-software that doesn't support raster data or grids, as a zipped ESRI shape files. It should be noted, however, that the values in the ASCII-grids have a precision of 6 decimals while the values in the shape-file have a precision of 2 decimals. For model calculations it is therefore recommended to use the grid-version. As a service to those people who would need to know the absolute area equipped for irrigation, another ASCII-grid is available in which the area equipped for irrigation is expressed in hectares per cell. Non-GIS-users can download the map as PDF-file in two different resolutions.


```sh
source ~/proyectos/CES/cesdata/env/project-env.sh

mkdir -p $GISDATA/antroposphere/global/Aquastat-v5
cd $GISDATA/antroposphere/global/Aquastat-v5

wget --continue 'https://firebasestorage.googleapis.com/v0/b/fao-aquastat.appspot.com/o/GIS%2Fgmia_v5_aei_pct_asc.zip?alt=media&token=e448ce53-296f-4756-90c1-75c87f74e569' --output-document=gmia_v5_aei_pct_asc.zip

cd $WORKDIR
unzip -u $GISDATA/antroposphere/global/Aquastat-v5/gmia_v5_aei_pct_asc.zip
```
