# HWSD-v1.2

Harmonized World Soil Database, version 1.2. Raster database with harmonized soil property data.

http://www.fao.org/soils-portal/soil-survey/soil-maps-and-databases/harmonized-world-soil-database-v12/en/

## Citation
> Fischer, G., F. Nachtergaele, S. Prieler, H.T. van Velthuizen, L. Verelst, D. Wiberg, 2008. Global Agro-ecological Zones Assessment for Agriculture (GAEZ 2008). IIASA, Laxenburg, Austria and FAO, Rome, Italy.

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh


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

Raster maps:

sq1.asc Nutrient availability
sq2.asc Nutrient retention capacity
sq3.asc Rooting conditions
sq4.asc Oxygen availability to roots
sq5.asc Excess salts.
sq6.asc Toxicity
sq7.asc Workability (constraining field management)

Note that the classes used in the Soil Quality evaluation are:

1: No or slight limitations
2: Moderate limitations
3: Sever limitations
4: Very severe limitations
5: Mainly non-soil
6: Permafrost area
7: Water bodies

> Remember that classes are qualitative not quantitative. Only classes 1 to 4 are corresponding to an assessment of soil limitations for plant growth. Class 1 is generally rated between 80 and 100% of the growth potential, class 2 between 60 and 80%, class 3 between 40 and 60%, and class 4 less than 40%.
