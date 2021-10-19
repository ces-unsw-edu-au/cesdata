# ISRIC SoilGrids

SoilGrids — global gridded soil information
A system for digital soil mapping based on global compilation of soil profile data and environmental layers

> SoilGridsTM (hereafter SoilGrids) is a system for global digital soil mapping that uses state-of-the-art machine learning methods to map the spatial distribution of soil properties across the globe. SoilGrids prediction models are fitted using over 230 000 soil profile observations from the WoSIS database and a series of environmental covariates. Covariates were selected from a pool of over 400 environmental layers from Earth observation derived products and other environmental information including climate, land cover and terrain morphology. The outputs of SoilGrids are global soil property maps at six standard depth intervals (according to the GlobalSoilMap IUSS working group and its specifications) at a spatial resolution of 250 meters. Prediction uncertainty is quantified by the lower and upper limits of a 90% prediction interval. The additional uncertainty layer displayed at soilgrids.org is the ratio between the inter-quantile range and the median. The SoilGrids maps are publicly available under the CC-BY 4.0 License.

Maps of the following soil properties are available: pH, soil organic carbon content, bulk density, coarse fragments content, sand content, silt content, clay content, cation exchange capacity (CEC), total nitrogen as well as soil organic carbon density and soil organic carbon stock.



www.globalsoilmap.net
https://www.isric.org/projects/globalsoilmapnet
https://www.isric.org/explore/soilgrids

https://git.wur.nl/isric/soilgrids/soilgrids.notebooks/activity

https://git.wur.nl/isric/soilgrids/soilgrids.notebooks/-/blob/master/markdown/webdav_from_bash.md

## Citation
> Poggio, L., de Sousa, L. M., Batjes, N. H., Heuvelink, G. B. M., Kempen, B., Ribeiro, E., and Rossiter, D.: SoilGrids 2.0: producing soil information for the globe with quantified spatial uncertainty, SOIL, 7, 217–240, 2021. DOI


```{bash}
source ~/proyectos/UNSW/cesdata/env/project-env.sh


mkdir -p $GISDATA/soil/global/ISRIC-SoilGrids
cd $GISDATA/soil/global/ISRIC-SoilGrids

module add gdal/3.2.1 python/3.8.3 perl geos

IGH="+proj=igh +lat_0=0 +lon_0=0 +datum=WGS84 +units=m +no_defs" # proj string for Homolosine projection
SG_URL="/vsicurl?max_retry=3&retry_delay=1&list_dir=no&url=https://files.isric.org/soilgrids/latest/data"

gdalwarp $SG_URL"/ocs/ocs_0-30cm_mean.vrt" tst.vrt -of VRT

gdal_translate \
    -co "TILED=YES" -co "COMPRESS=DEFLATE" -co "PREDICTOR=2" -co "BIGTIFF=YES" \
    $SG_URL"/ocs/ocs_0-30cm_mean.vrt" \
    "ocs_0-5cm_mean.tif"

```

https://git.wur.nl/isric/soilgrids/soilgrids.notebooks/-/blob/master/markdown/webdav_from_R.md

```{r}
library(rgdal)
library(gdalUtils)
igh='+proj=igh +lat_0=0 +lon_0=0 +datum=WGS84 +units=m +no_defs' # proj string for Homolosine projection

sg_url="/vsicurl?max_retry=3&retry_delay=1&list_dir=no&url=https://files.isric.org/soilgrids/latest/data/"
gdal_translate(paste0(sg_url,'ocs/ocs_0-30cm_mean.vrt'),
    "./crop_roi_igh_r.tif",
    verbose=TRUE)

```
