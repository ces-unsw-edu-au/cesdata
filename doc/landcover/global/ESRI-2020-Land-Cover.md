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
* https://caitlin-kontgis.medium.com/mapping-the-world-in-unprecedented-detail-7c0513205b90
* https://www.arcgis.com/home/item.html?id=d6642f8a4f6d4685a24ae2dc0c73d4ac
* https://www.arcgis.com/home/item.html?id=fc92d38533d440078f17678ebc20e8e2

## Reference
> Karra, Kontgis, et al. “Global land use/land cover with Sentinel-2 and deep learning.” IGARSS 2021-2021 IEEE International Geoscience and Remote Sensing Symposium. IEEE, 2021.

This dataset is based on the dataset produced for the Dynamic World Project by National Geographic Society in partnership with Google and the World Resources Institute.

### data:


Esri 2020 Land Cover Downloader (GeoTIFF): https://www.arcgis.com/apps/instant/media/index.html?appid=fc92d38533d440078f17678ebc20e8e2

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh


mkdir -p $GISDATA/landcover/global/ESRI-2020-LC/
cd $GISDATA/landcover/global/ESRI-2020-LC/

wget --continue https://ai4edataeuwest.blob.core.windows.net/io-lulc/io-lulc-model-001-v01-composite-v03-supercell-v02-clip-v01.zip

## example ## wget --continue https://ai4edataeuwest.blob.core.windows.net/io-lulc/io-lulc-model-001-v01-composite-v03-supercell-v02-clip-v01/42F_20200101-20210101.tif

for p in C D E F G H I J K L M N O P Q R S T U V W X Y Z
do
  for k in $(seq 1 60)
  do
    export v=$(printf %02d $k)
    wget --continue https://ai4edataeuwest.blob.core.windows.net/io-lulc/io-lulc-model-001-v01-composite-v03-supercell-v02-clip-v01/${v}${p}_20200101-20210101.tif
  done
done
```

```{r}
source("~/proyectos/UNSW/cesdata/env/project-env.R")
```

Earth Engine Snippet

```js
var esri_lulc2020= ee.ImageCollection("projects/sat-io/open-datasets/landcover/ESRI_Global-LULC_10m")
```
Sample Code: https://code.earthengine.google.com/514a294747ee5e7a136372b7e947d7bc
