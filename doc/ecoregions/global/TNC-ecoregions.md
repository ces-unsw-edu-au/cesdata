# TNC terrestrial ecoregions

http://maps.tnc.org/gis_data.html

This is the master spatial data layer for TNC's terrestrial ecoregions of the world, exported from the geodatabase listed above. Note that it includes Mangroves, Inland Water, and Rock and Ice MHTs, although they are not being handled by terrestrial assessments. This layer is based on WWF's ecoregions outside the United States, and loosely based on Bailey's ecoregions (from the USDA Forest Service) within the United States.

##Metadata
http://maps.tnc.org/files/metadata/TerrEcos.xml

##GIS data


```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh
mkdir -p $GISDATA/ecoregions/global/TEOW/
cd $GISDATA/ecoregions/global/TEOW/

wget -b --continue http://maps.tnc.org/files/shp/terr-ecoregions-TNC.zip
```


ls /opt/gisdata/vectorial/TNC/
