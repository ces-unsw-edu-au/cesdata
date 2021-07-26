# Cropland and Pasture Area in 2000

http://www.earthstat.org/cropland-pasture-area-2000/

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/antroposphere/global/Earthstats
cd $GISDATA/antroposphere/global/Earthstats

wget --continue -b https://s3.us-east-2.amazonaws.com/earthstatdata/CroplandPastureArea2000_Geotiff.zip
unzip -u CroplandPastureArea2000_Geotiff.zip
```
