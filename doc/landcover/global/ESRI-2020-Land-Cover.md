# Esri 2020 Land Cover

## About Esri 2020 Land Cover
Variable mapped: 2020 land use/land cover
Data Projection: Universal Transverse Mercator (UTM)
Extent: Global
Source imagery: Sentinel-2
Cell Size: 10m (0.00008983152098239751 degrees)
Type: Thematic
Source: Esri Inc.
Publication date: July 2021

Links:
* https://samapriya.github.io/awesome-gee-community-datasets/projects/esrilc2020/?s=09
* https://caitlin-kontgis.medium.com/mapping-the-world-in-unprecedented-detail-7c0513205b90
* https://www.arcgis.com/home/item.html?id=d6642f8a4f6d4685a24ae2dc0c73d4ac
* https://www.arcgis.com/home/item.html?id=fc92d38533d440078f17678ebc20e8e2

## Reference
> Karra, Kontgis, et al. “Global land use/land cover with Sentinel-2 and deep learning.” IGARSS 2021-2021 IEEE International Geoscience and Remote Sensing Symposium. IEEE, 2021.

This dataset is based on the dataset produced for the Dynamic World Project by National Geographic Society in partnership with Google and the World Resources Institute.

## Download data


Esri 2020 Land Cover Downloader (GeoTIFF): https://www.arcgis.com/apps/instant/media/index.html?appid=fc92d38533d440078f17678ebc20e8e2

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

## download zipped composite
mkdir -p $GISDATA/landcover/global/ESRI-2020-LC/composite
cd $GISDATA/landcover/global/ESRI-2020-LC/composite

wget -b --continue https://ai4edataeuwest.blob.core.windows.net/io-lulc/io-lulc-model-001-v01-composite-v03-supercell-v02-clip-v01.zip

## or download all tiles

mkdir -p $GISDATA/landcover/global/ESRI-2020-LC/raw
cd $GISDATA/landcover/global/ESRI-2020-LC/raw

## example ## wget --continue https://ai4edataeuwest.blob.core.windows.net/io-lulc/io-lulc-model-001-v01-composite-v03-supercell-v02-clip-v01/42F_20200101-20210101.tif

for p in A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
do
  for k in $(seq 1 60)
  do
    export v=$(printf %02d $k)
    wget --continue https://ai4edataeuwest.blob.core.windows.net/io-lulc/io-lulc-model-001-v01-composite-v03-supercell-v02-clip-v01/${v}${p}_20200101-20210101.tif
  done
done

```

Virtual Raster Tileset will not work due to different projections. Even with `-allow_projection_difference` option it will not produce useful resutls. So we will first reproject each tile to Eckert IV projection and then use VRT.

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
cd $WORKDIR
qsub $SCRIPTDIR/bin/pbs/reproject-ESRI-2020-LC.pbs


qsub -I -l select=1:ncpus=8:mem=120gb,walltime=12:00:00


module add python/intel-3.6.8 perl/5.28.0 gdal/3.2.1 geos/3.8.1

mkdir -p $GISDATA/landcover/global/ESRI-2020-LC/eck4
cd $GISDATA/landcover/global/ESRI-2020-LC/eck4

SRCDIR=$GISDATA/landcover/global/ESRI-2020-LC/raw
DSTDIR=$GISDATA/landcover/global/ESRI-2020-LC/eck4
for l in $(ls $SRCDIR | grep tif$)
do
  if [ -e $DSTDIR/$l ]
  then
    echo "$l listo"
  else
  gdalwarp -co "COMPRESS=DEFLATE" -t_srs '+proj=eck4 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs' -tr 10 10 -r nearest -dstnodata "0" $SRCDIR/$l $DSTDIR/$l
  fi
done



cd $GISDATA/landcover/global/ESRI-2020-LC/
export VRS="20200101-20210101"
gdalbuildvrt -allow_projection_difference index_${VRS}.vrt $GISDATA/landcover/global/ESRI-2020-LC/raw/*_${VRS}.tif

```

## Examples

### R

```{r}
source("~/proyectos/UNSW/cesdata/env/project-env.R")
data.dir <- sprintf("%s/landcover/global/ESRI-2020-LC/",gis.data)
dir(data.dir)
require(raster)
r0  <- raster(sprintf("%s/58U_20200101-20210101.tif",data.dir))
e1 <- extent(241421.961084288, 389113.288517916, 6214178.44918707, 6295936.14830211)

plot(r0)
plot(e1,add=T,col=2,lwd=3)

r1 <- crop(r0,e1)
plot(r1)
v1 <- values(r1)
table(v1)

r0_snow <- r0 == 9
r0_snow_1km_max <- raster::aggregate(r0_snow,100,fun=max)
r0_snow_1km_mean <- raster::aggregate(r0_snow,100,fun=mean)
r0_snow_1km_sum <- raster::aggregate(r0_snow,100,fun=sum)

plot(r0_snow_1km_mean)
plot(r0_snow)
plot(r0_snow_1km_sum)
writeRaster(r0_snow_1km_mean,filename='test_mean.tif',datatype='FLT4S',options=c("COMPRESS=DEFLATE"),overwrite=T)
writeRaster(r0_snow_1km_sum,filename='test_sum.tif',datatype='INT2S',options=c("COMPRESS=DEFLATE"),overwrite=T)
```


### Gdal
```sh
cd $WORKDIR
gdal_calc.py -A $GISDATA/landcover/global/ESRI-2020-LC/58U_20200101-20210101.tif --calc="A == 2" --outfile equals2.tif --creation-option="COMPRESS=DEFLATE" --type=UInt16 --NoDataValue=65535 --overwrite
 gdalinfo equals2.tif -stats

gdalwarp -tr 1000 1000 -r sum equals2.tif equals2-averaged_1km.tif -co "COMPRESS=DEFLATE"
gdalinfo equals2-averaged_1km.tif -stats

```

### Example code in python
```python

from osgeo import gdal
import numpy as np
import sys ,os

# from osgeo.gdalconst import *
data_dir='/srv/scratch/cesdata/gisdata/landcover/global/ESRI-2020-LC'
gtf = os.path.join(data_dir,"58U_20200101-20210101.tif")
raster = gdal.Open(gtf)
columns = raster.RasterXSize
lines = raster.RasterYSize
band = raster.GetRasterBand(1).ReadAsArray(0,0,columns,lines)
band.shape

driver=gdal.GetDriverByName('GTIff')
driver.Register()


paths = []
paths.append(gtf)
raster_px = []
rasters_px = []
bands = []

```

### Earth Engine Snippet

```js
var esri_lulc2020= ee.ImageCollection("projects/sat-io/open-datasets/landcover/ESRI_Global-LULC_10m")
```
Sample Code: https://code.earthengine.google.com/514a294747ee5e7a136372b7e947d7bc


## Class definitions
* 1 _Water_: Areas where water was predominantly present throughout the year; may not cover areas with sporadic or ephemeral water; contains little to no sparse vegetation, no rock outcrop nor built up features like docks; examples: rivers, ponds, lakes, oceans, flooded salt plains.
* 2 _Trees_: Any significant clustering of tall (~15-m or higher) dense vegetation, typically with a closed or dense canopy; examples: wooded vegetation, clusters of dense tall vegetation within savannas, plantations, swamp or mangroves (dense/tall vegetation with ephemeral water or canopy too thick to detect water underneath).
* 3 _Grass_: Open areas covered in homogenous grasses with little to no taller vegetation; wild cereals and grasses with no obvious human plotting (i.e., not a plotted field); examples: natural meadows and fields with sparse to no tree cover, open savanna with few to no trees, parks/golf courses/lawns, pastures.
* 4 _Flooded vegetation_: Areas of any type of vegetation with obvious intermixing of water throughout a majority of the year; seasonally flooded area that is a mix of grass/shrub/trees/bare ground; examples: flooded mangroves, emergent vegetation, rice paddies and other heavily irrigated and inundated agriculture.
* 5 _Crops_: Human planted/plotted cereals, grasses, and crops not at tree height; examples: corn, wheat, soy, fallow plots of structured land.
* 6 _Scrub/shrub_: Mix of small clusters of plants or single plants dispersed on a landscape that shows exposed soil or rock; scrub-filled clearings within dense forests that are clearly not taller than trees; examples: moderate to sparse cover of bushes, shrubs and tufts of grass, savannas with very sparse grasses, trees or other plants
* 7 _Built Area_: Human made structures; major road and rail networks; large homogenous impervious surfaces including parking structures, office buildings and residential housing; examples: houses, dense villages / towns / cities, paved roads, asphalt.
* 8 _Bare_: ground Areas of rock or soil with very sparse to no vegetation for the entire year; large areas of sand and deserts with no to little vegetation; examples: exposed rock or soil, desert and sand dunes, dry salt flats/pans, dried lake beds, mines.
* 9 _Snow/Ice_: Large homogenous areas of permanent snow or ice, typically only in mountain areas or highest latitudes; examples: glaciers, permanent snowpack, snow fields.
* 10 _Clouds_: No land cover information due to persistent cloud cover.
