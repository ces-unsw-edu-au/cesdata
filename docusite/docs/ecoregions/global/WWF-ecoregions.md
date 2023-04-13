
# Terrestrial ecoregions according to  WWF

http://www.worldwildlife.org/publications/terrestrial-ecoregions-of-the-world

Terrestrial Ecoregions of the World (TEOW) is a biogeographic regionalization of the Earth's terrestrial biodiversity. Our biogeographic units are ecoregions, which are defined as relatively large units of land or water containing a distinct assemblage of natural communities sharing a large majority of species, dynamics, and environmental conditions. There are 867 terrestrial ecoregions, classified into 14 different biomes such as forests, grasslands, or deserts. Ecoregions represent the original distribution of distinct assemblages of species and communities.

##GIS data
##

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/ecoregions/global/TEOW/
cd $GISDATA/ecoregions/global/TEOW/

wget -b -o wwf-wget-log --continue 'http://assets.worldwildlife.org/publications/15/files/original/official_teow.zip?1349272619&_ga=1.109260037.1823268057.1469281022' --output-document=official_teow.zip
```

cd /opt/gisdata/vectorial/WWF/
unzip official_teow.zip

cd /opt/gisdata/vectorial/WWF/official/
ogr2ogr -spat -90 -60 -25 15 SAM_terr_ecos.shp wwf_terr_ecos.shp
ogr2ogr -spat -138 3 -40 60 NAC_terr_ecos.shp wwf_terr_ecos.shp
