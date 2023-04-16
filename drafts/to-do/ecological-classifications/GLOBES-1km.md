# GLOBES – 1-KM RESOLUTION GLOBAL ECOSYSTEM DATA CUBE
Dataset Creator: Ruben Remelgado
Publication Year: 2020
Global data cube on the yearly extent of ecosystems following the habitat classification scheme of the IUCN Red List, used in the assessment of over 100,000 species. This data cube is composed by 65 ecosystem types and covers the period between 1992 and 2018, where each layer depicts per-pixel areas of a given ecosystem within a given year.

https://portal.geobon.org/ebv-detail?id=8

```sh
mkdir -p $GISDATA/ecosystems/GLOBES-1km
cd $GISDATA/ecosystems/GLOBES-1km


nohup wget --continue https://portal.geobon.org/data/10/netcdf/globES.nc &
wget --continue https://portal.geobon.org/data/10/metadata.xml
```
