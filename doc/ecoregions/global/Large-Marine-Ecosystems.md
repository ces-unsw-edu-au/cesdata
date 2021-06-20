# Large Marine Ecosystems of the World

https://ioc.unesco.org/topics/large-marine-ecosystems
https://celebrating200years.noaa.gov/breakthroughs/ecosystems/lme_map.jpg
https://www.lmehub.net/#patagonian-shelf
https://iwlearn.net/marine/lmes/list
https://www.marineregions.org/sources.php#ecosystems


## Citation
> Pope, Addy. (2017). Large Marine Ecosystems of the World, [Dataset]. University of Edinburgh. https://doi.org/10.7488/ds/1902.


## Data download and preparation

https://datashare.ed.ac.uk/handle/10283/2552


```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh


mkdir -p $GISDATA/ecoregions/global/LME/
cd $GISDATA/ecoregions/global/LME/

wget --continue 'https://datashare.ed.ac.uk/bitstream/handle/10283/2552/lmes_64.zip?sequence=1&isAllowed=y' --output-document=lmes_64.zip
## use --no-check-certificate if necessary


```


```sh
qsub -I -l select=1:ncpus=2:mem=120gb,walltime=12:00:00

source ~/proyectos/UNSW/cesdata/env/project-env.sh

module add sqlite/3.31.1 spatialite/5.0.0b0 python/3.8.3 perl/5.28.0 gdal/3.2.1 geos/3.8.1

export WD=$GISDATA/ecoregions/global/LME/
cd  $WD
unzip -u $WD/lmes_64.zip

if [ $(ogrinfo --version | grep "GDAL 3.2" -c) -eq 1 ]
  then
     ogr2ogr -f "GPKG" lmes_64_valid.gpkg $WD/lmes_64.shp lmes_64 -nlt PROMOTE_TO_MULTI -t_srs "+proj=longlat +datum=WGS84" -makevalid
  else
     ogr2ogr -f "GPKG" lmes_64_valid.gpkg $WD/lmes_64.shp lmes_64 -nlt PROMOTE_TO_MULTI -t_srs "+proj=longlat +datum=WGS84"
fi

```
