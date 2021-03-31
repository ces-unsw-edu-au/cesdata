
## Download Glacier location data into the Katana Data Mover

### World Glacier Inventory, Version 1
The World Glacier Inventory ([WGI](https://nsidc.org/data/g01130)) represents a a snapshot of the glacier distribution in the second half of the 20th century. It contains information for over 130,000 glaciers, based primarily on aerial photographs and maps, most glaciers have a single data entry. It is based on the World Glacier Monitoring Service (WGMS 1989).

```sh
mkdir -p $GISDATA/inventories/WGI_2012
cd $GISDATA/inventories/WGI_2012
wget --continue ftp://sidads.colorado.edu/pub/DATASETS/NOAA/G01130/wgi_shapefile_feb2012.zip

```
### Global Land Ice Measurements from Space initiative (GLIMS)

This is the most recent version of these data.

To download data from the [Global Land Ice Measurements from Space initiative
(GLIMS)](http://glims.colorado.edu/glacierdata/):

```sh
mkdir -p $GISDATA/inventories/GLIMS_2019
cd $GISDATA/inventories/GLIMS_2019
wget --continue http://www.glims.org/download/glims_db_20191217.zip
unzip glims_db_20191217.zip
```

### Randolph Glacier Inventory 6.0
To download data from the [Randolph Glacier Inventory 6.0](https://www.glims.org/RGI/), check the [user guidelines](http://www.glims.org/RGI/00_rgi60_TechnicalNote.pdf)

```sh
mkdir -p $GISDATA/inventories/RGI_6.0
cd $GISDATA/inventories/RGI_6.0
wget --continue https://www.glims.org/RGI/rgi60_files/00_rgi60.zip
unzip 00_rgi60.zip
```
