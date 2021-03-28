# FAO-GEZ  
The Global Forest Resources Assessment (FRA) of the Food and Agriculture Organization of the United Nations (FAO) presents global and regional forest data by global ecological zone (GEZ). The GEZ spa...

#### Citation

> FAO (2012) Global Ecological Zones for FAO Forest Reporting: 2010 Update

#### Data

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh

mkdir -p $GISDATA/ecological/global/FAO-GEZ
cd $GISDATA/ecological/global/FAO-GEZ
wget -b --continue 'http://www.fao.org/geonetwork/srv/en/resources.get?id=47105&fname=gez2010.zip&access=private' --output-document=gez2010.zip

```

```sh
cd $WORKDIR
 unzip $GISDATA/ecosystems/FAO-GEZ/gez2010.zip

 ogrinfo -al -geom=no gez_2010_wgs84.shp | less

```
