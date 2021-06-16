# International Vegetation Classification (IVC or EcoVeg)
https://www.natureserve.org/conservation-tools/projects/international-vegetation-classification


## Africa
https://www.natureserve.org/conservation-tools/projects/map-potential-distribution-vegetation-macrogroups-africa
Map of Potential Distribution of Vegetation Macrogroups of Africa

Download data
https://rmgsc.cr.usgs.gov/outgoing/ecosystems/AfricaData/

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/vegetation/regional/IVC-EcoVeg/Africa
cd $GISDATA/vegetation/regional/IVC-EcoVeg/Africa

wget https://rmgsc.cr.usgs.gov/outgoing/ecosystems/AfricaData/
grep HREF index.html > enlaces
wget -b --continue -i enlaces --force-html --base=https://rmgsc.cr.usgs.gov/
##wget -b --continue https://rmgsc.cr.usgs.gov/outgoing/ecosystems/AfricaData/af_labeled_ecosys.zip
```

```sh
cd $WORKDIR
unzip $GISDATA/ecosistemas/NatureServe/af_labeled_ecosys.zip
```

```r
require(readxl)
require(dplyr)
read_excel('African and Malagasy Veg_Macrogroups_2013.xlsx') %>% select('FORMATION') %>% table
```


## North America and South America

Data set description in:
http://hub.arcgis.com/datasets/b25fa8f7673749fc85e0ba7980374c5f
http://hub.arcgis.com/datasets/Natureserve::southamerica-ivc-macrogroups-potential-natureserve-v1

 The original files of the potential distribution of the Macrogroups in geotiff format were delivered by NatureServe, files were encoded in .lpk format, I extracted them using the 7z extraction command.

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/vegetation/regional/IVC-EcoVeg/SAM
mkdir -p $GISDATA/vegetation/regional/IVC-EcoVeg/NAC
cd $GISDATA/vegetation/regional/IVC-EcoVeg/
## scp from local copies of data in terra:
# scp /opt/gisdata/ecosistemas/Natureserve/IUCN/*/*potential*tif.lpk $zID@kdm.restech.unsw.edu.au:/srv/scratch/cesdata/gisdata/vegetation/regional/IVC-EcoVeg/...

cd $GISDATA/vegetation/regional/IVC-EcoVeg/SAM
7z x SouthAmerica_IVC_MacroGroups_potential_NatureServe_v7_270m_tif.lpk

cd $GISDATA/vegetation/regional/IVC-EcoVeg/NAC
7z x NorthAmerica_Caribbean_IVC_MacroGroups_potential_NatureServe_v5_270m_tif.lpk

```
The layer package contains different files, raster are located in folder `commondata/raster_data/`. Original projections: files differed in the original projection, the South America file also includes a table with raster attributes

Reprojection: In order to combine both layers in one file with a common projection, I used gdalwarp create option COMPRESS=LZW allows for lossless data compression   I chose the robin projection for the whole continent. output file is IVC_NS_v7_270m_robin.tif

```sh
qsub -I -l select=1:ncpus=1:mem=120gb,walltime=12:00:00

source ~/proyectos/UNSW/cesdata/env/project-env.sh


module add python/3.8.3 perl/5.28.0 gdal/3.2.1 geos/3.8.1

gdalinfo $GISDATA/vegetation/regional/IVC-EcoVeg/NAC/commondata/raster_data/NorthAmerica_Caribbean_IVC_MacroGroups_potential_NatureServe_v5_270m.tif

gdalinfo $GISDATA/vegetation/regional/IVC-EcoVeg/SAM/commondata/raster_data/SouthAmerica_IVC_MacroGroups_potential_NatureServe_v7_270m.tif | less

cd $GISDATA/vegetation/regional/IVC-EcoVeg/Americas
gdalwarp -co "COMPRESS=LZW" -t_srs '+proj=robin +lon_0=-80 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs +ellps=WGS84 +towgs84=0,0,0' $GISDATA/vegetation/regional/IVC-EcoVeg/NAC/commondata/raster_data/NorthAmerica_Caribbean_IVC_MacroGroups_potential_NatureServe_v5_270m.tif $GISDATA/vegetation/regional/IVC-EcoVeg/SAM/commondata/raster_data/SouthAmerica_IVC_MacroGroups_potential_NatureServe_v7_270m.tif $GISDATA/vegetation/regional/IVC-EcoVeg/Americas/IVC_NS_v7_270m_robin.tif


## generate shapefile version...
##gdal_polygonize.py IVC_NS_v7_270m_robin.tif IVC_NS_v7_270m_robin_polygons.shp
```
