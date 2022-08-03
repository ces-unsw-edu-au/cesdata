# ISRIC SoilGrids

SoilGrids — global gridded soil information
A system for digital soil mapping based on global compilation of soil profile data and environmental layers

> SoilGridsTM (hereafter SoilGrids) is a system for global digital soil mapping that uses state-of-the-art machine learning methods to map the spatial distribution of soil properties across the globe. SoilGrids prediction models are fitted using over 230 000 soil profile observations from the WoSIS database and a series of environmental covariates. Covariates were selected from a pool of over 400 environmental layers from Earth observation derived products and other environmental information including climate, land cover and terrain morphology. The outputs of SoilGrids are global soil property maps at six standard depth intervals (according to the GlobalSoilMap IUSS working group and its specifications) at a spatial resolution of 250 meters. Prediction uncertainty is quantified by the lower and upper limits of a 90% prediction interval. The additional uncertainty layer displayed at soilgrids.org is the ratio between the inter-quantile range and the median. The SoilGrids maps are publicly available under the CC-BY 4.0 License.

Maps of the following soil properties are available: pH, soil organic carbon content, bulk density, coarse fragments content, sand content, silt content, clay content, cation exchange capacity (CEC), total nitrogen as well as soil organic carbon density and soil organic carbon stock.



www.globalsoilmap.net
https://www.isric.org/projects/globalsoilmapnet
https://www.isric.org/explore/soilgrids

https://git.wur.nl/isric/soilgrids/soilgrids.notebooks/activity


## Citation
> Poggio, L., de Sousa, L. M., Batjes, N. H., Heuvelink, G. B. M., Kempen, B., Ribeiro, E., and Rossiter, D.: SoilGrids 2.0: producing soil information for the globe with quantified spatial uncertainty, SOIL, 7, 217–240, 2021. DOI

## Data access and preparation


```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/soil/global/ISRIC-SoilGrids
cd $GISDATA/soil/global/ISRIC-SoilGrids

module add python/3.9.9 perl geos gdal/3.2.1

IGH="+proj=igh +lat_0=0 +lon_0=0 +datum=WGS84 +units=m +no_defs" # proj string for Homolosine projection
SG_URL="/vsicurl?max_retry=3&retry_delay=1&list_dir=no&url=https://files.isric.org/soilgrids/latest/data"
CELL_SIZE="250 250"

```

Detailed instructions here:

https://git.wur.nl/isric/soilgrids/soilgrids.notebooks/-/blob/master/markdown/webdav_from_bash.md

> To local VRT in homolosine (directly from the webdav connection)
> The first step is to obtain a VRT for the area of interest in the Homolosine projection. We suggest to use VRT for the intermediate steps to save space and computation times.
```{bash}
gdal_translate -of VRT -tr $CELL_SIZE -co "TILED=YES" -co "COMPRESS=DEFLATE" -co "PREDICTOR=2" -co "BIGTIFF=YES" \
    $SG_URL"/ocs/ocs_0-30cm_mean.vrt" "ocs_0-5cm_mean.vrt"
```

> To a VRT in, for example, LatLong
> The following command will generate a VRT in the projection of your choice:

```{bash}
gdalwarp -overwrite -t_srs EPSG:4326 -of VRT "ocs_0-5cm_mean.vrt" "ocs_0-5cm_mean_4326.vrt"
```

> To a final Geotiff
>The following command will generate a Geotiff in the projection of your choice for the area of interest defined above

```{bash}
gdal_translate ocs_0-5cm_mean_4326.vrt ocs_0-5cm_mean_4326.tif \
    -co "TILED=YES" -co "COMPRESS=DEFLATE" -co "PREDICTOR=2" -co "BIGTIFF=YES"
```

List of variables: bdod cec cfvo clay nitrogen ocd ocs phh2o sand silt soc wrb # landmask
Depths: 0-5cm 5-15cm 15-30cm  30-60cm 60-100cm 100-200cm
stats: mean uncertainty Q0.05 Q0.5 Q0.95

We prepared a PBS script to download and reproject several layers:

```{bash}
source ~/proyectos/UNSW/cesdata/env/project-env.sh
cd $WORKDIR
echo "bdod
cec
cfvo
clay
nitrogen
ocd
ocs
phh2o
sand
silt
soc
wrb" > $GISDATA/soil/global/ISRIC-SoilGrids/varlist

qsub -l select=1:ncpus=2:mem=60gb,walltime=20:00:00 -J 1-3 $SCRIPTDIR/inc/pbs/download-soilgrids-from-vrt.pbs
qsub -l select=1:ncpus=2:mem=80gb,walltime=20:00:00 -J 4-7 $SCRIPTDIR/inc/pbs/download-soilgrids-from-vrt.pbs
qsub -l select=1:ncpus=2:mem=100gb,walltime=20:00:00 -J 8-12 $SCRIPTDIR/inc/pbs/download-soilgrids-from-vrt.pbs

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
