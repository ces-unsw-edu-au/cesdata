# Gridded-Landcover-Classification

https://cds.climate.copernicus.eu/cdsapp#!/dataset/satellite-land-cover


```sh
source ~/proyectos/CES/cesdata/env/project-env.sh
mkdir -p $GISDATA/landcover/global/Copernicus-Gridded-Landcover
cd $GISDATA/landcover/global/Copernicus-Gridded-Landcover

wget --continue https://download-0000.copernicus-climate.eu/cache-compute-0000/cache/data1/dataset-satellite-land-cover-27e96432-1999-4965-83c5-d07b0a66e371.tar.gz

tar -xzvf $GISDATA/landcover/Copernicus-Gridded-Landcover/dataset-satellite-land-cover-27e96432-1999-4965-83c5-d07b0a66e371.tar.gz
```
