# Cropland and Pasture Area in 2000

### Citation

> Ramankutty, N., A.T. Evan, C. Monfreda, and J.A. Foley (2008), Farming the planet: 1. Geographic distribution of global agricultural lands in the year 2000. Global Biogeochemical Cycles 22, GB1003, doi:10.1029/2007GB002952.

### Data download and preparation

http://www.earthstat.org/cropland-pasture-area-2000/

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/antroposphere/global/Earthstats
cd $GISDATA/antroposphere/global/Earthstats

wget --continue -b https://s3.us-east-2.amazonaws.com/earthstatdata/CroplandPastureArea2000_Geotiff.zip
unzip -u CroplandPastureArea2000_Geotiff.zip
```
