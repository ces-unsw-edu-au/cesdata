# Copernicus Global Land Service: Land Cover 100m

Links to:
/ [Map visualization](https://lcviewer.vito.be/)
/ [Webpage](https://land.copernicus.eu/global/documents/lc100/v2/pum)
/ [More info](https://blog.vito.be/remotesensing/towards-mapping-annual-land-cover-changes)

#### Citation
> Buchhorn, M. ; Smets, B. ; Bertels, L. ; Lesiv, M. ; Tsendbazar, N. - E. ; Herold, M. ; Fritz, S. Copernicus Global Land Service: Land Cover 100m: epoch 2015: Globe. Dataset of the global component of the Copernicus Land Monitoring Service 2019. DOI 10.5281/zenodo.3243509

#### Data access

Through Zenodo at DOI 10.5281/zenodo.3243509

#### Documentation:

> Marcel Buchhorn, Bruno Smets, Luc Bertels, Myroslava Lesiv, Nandin-Erdene Tsendbazar, & Linlin Li. (2019, November 10). Copernicus Global Land Service: Land Cover 100m: version 2 Globe 2015: Product User Manual (Version Dataset v2.0, doc issue 2.20). Zenodo. http://doi.org/10.5281/zenodo.3606408

> Marcel Buchhorn, Luc Bertels, Bruno Smets, Myroslava Lesiv, & Nandin-Erdene Tsendbazar. (2019, August 26). Copernicus Global Land Service: Land Cover 100m: version 2 Globe 2015: Algorithm Theoretical Basis Document (Version Dataset v2.0, doc issue 2.00). Zenodo. http://doi.org/10.5281/zenodo.3606446


#### Data download and preparation

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/landcover/global/CGLS
cd $GISDATA/landcover/global/CGLS

for arch in ProbaV_LC100_epoch2015_global_v2.0.2_snow-coverfraction-layer_EPSG-4326.tif LandCover_global_v2_discrete-and-FCC.png ProbaV_LC100_epoch2015_global_v2.0.2_bare-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_bare-coverfraction-StdDev_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_crops-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_crops-coverfraction-StdDev_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_DataDensityIndicator_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_discrete-classification-proba_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_discrete-classification_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_forest-type-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_grass-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_grass-coverfraction-StdDev_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_moss-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_moss-coverfraction-StdDev_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_shrub-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_shrub-coverfraction-StdDev_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_snow-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_tree-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_tree-coverfraction-StdDev_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_urban-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_water-permanent-coverfraction-layer_EPSG-4326.tif ProbaV_LC100_epoch2015_global_v2.0.2_water-seasonal-coverfraction-layer_EPSG-4326.tif
do
   wget --continue https://zenodo.org/record/3243509/files/${arch}'?download=1' --output-document=${arch}
done

```

Download from R using the *R* package **[zen4R](https://github.com/eblondel/zen4R)**. We need to retrieve the Zenodo API token from a file in the home directory or from an environment variable.

```r
##R --vanilla
require(zen4R)
library(parallel)

##output directory
gisdata <- Sys.getenv("GISDATA")
targetDir <- sprintf("%s/landcover/global/CGLS/v3.0.1",gisdata)
system(sprintf("mkdir -p %s",targetDir))
setwd(targetDir)

#download files as parallel using a cluster approach (for both Unix/Win systems)
download_zenodo("10.5281/zenodo.3939050",
parallel = TRUE, parallel_handler = parLapply, cl = makeCluster(8))


```
