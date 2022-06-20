# Global Environmental Stratification - GEnS v3
Bioclimatic stratification of the world:

## Citation
> Metzger, Marc J. (2018). The Global Environmental Stratification: A high-resolution bioclimate map of the world. The University of Edinburgh. https://doi.org/10.7488/ds/2354

## Data download and preparation

```sh
mkdir -p $GISDATA/climate-classification/global/GEnS


cd $GISDATA/climate-classification/global/GEnS
nohup wget --continue http://datashare.is.ed.ac.uk/download/DS_10283_3089.zip &
unzip DS_10283_3089.zip
unzip GEnSv3.zip

##module add python/2.7.15 perl/5.28.0 gdal/2.3.2
##GEnSv3/gens_v3.tif
```
