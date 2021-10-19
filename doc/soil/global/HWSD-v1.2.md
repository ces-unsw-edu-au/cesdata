# HWSD-v1.2

Harmonized World Soil Database, version 1.2. Raster database with harmonized soil property data.

http://www.fao.org/soils-portal/soil-survey/soil-maps-and-databases/harmonized-world-soil-database-v12/en/

## Citation
> Fischer, G., F. Nachtergaele, S. Prieler, H.T. van Velthuizen, L. Verelst, D. Wiberg, 2008. Global Agro-ecological Zones Assessment for Agriculture (GAEZ 2008). IIASA, Laxenburg, Austria and FAO, Rome, Italy.

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh


mkdir -p $GISDATA/soil/global/HWSD-v1.2
cd $GISDATA/soil/global/HWSD-v1.2

for layer in sq1 sq2 sq3 sq4 sq5 sq6 sq7
do
  wget --continue https://www.fao.org/fileadmin/user_upload/soils/docs/HWSD/Soil_Quality_data/${layer}.asc
done

for layer in HWSD_RASTER HWSD
do
  wget --continue https://www.fao.org/fileadmin/user_upload/soils/HWSD%20Viewer/${layer}.zip
done
wget https://www.fao.org/docrep/018/aq361e/aq361e.pdf
unzip -u HWSD_RASTER.zip

unzip -u HWSD.zip
```
