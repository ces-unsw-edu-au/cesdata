#  MEOW : Marine ecoregions of the world

#### Citation

>  Spalding MD, Fox HE, Allen GR, Davidson N, Ferdaña ZA, Finlayson M, Halpern BS, Jorge MA, Lombana A, Lourie SA, Martin KD, McManus E, Molnar J, Recchia CA, Robertson J (2007). Marine Ecoregions of the World: a bioregionalization of coast and shelf areas. BioScience 57: 573-583. doi: 10.1641/B570707. Data URL: http://data.unep-wcmc.org/datasets/38

> The Nature Conservancy (2012). Marine Ecoregions and Pelagic Provinces of the World. GIS layers developed by The Nature Conservancy with multiple partners, combined from Spalding et al. (2007) and Spalding et al. (2012). Cambridge (UK): The Nature Conservancy. DOIs: 10.1641/B570707; 10.1016/j.ocecoaman.2011.12.016. Data URL: http://data.unep-wcmc.org/datasets/38

> Spalding MD, Agostini VN, Rice J, Grant SM (2012). Pelagic provinces of the world): a biogeographic classification of the world’s surface pelagic waters. Ocean and Coastal Management 60: 19-30. DOI: 10.1016/j.ocecoaman.2011.12.016. Data URL: http://data.unep-wcmc.org/datasets/38

#### Data download and preparation

We download the versions available at:
* <https://www.worldwildlife.org/publications/marine-ecoregions-of-the-world-a-bioregionalization-of-coastal-and-shelf-areas>
* <https://data.unep-wcmc.org/datasets/38>



#### Data download and preparation

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh

mkdir -p $GISDATA/ecoregions/global/MEOW/
cd $GISDATA/ecoregions/global/MEOW/

wget --continue 'https://c402277.ssl.cf1.rackcdn.com/publications/351/files/original/MEOW_FINAL.zip?1349120553' --output-document=MEOW_FINAL.zip

wget --continue 'https://datadownload-production.s3.amazonaws.com/WCMC036_MEOW_PPOW_2007_2012_v1.zip'
```


```sh
qsub -I -l select=1:ncpus=2:mem=120gb,walltime=12:00:00

source ~/proyectos/CES/cesdata/env/project-env.sh

module add sqlite/3.31.1 spatialite/5.0.0b0 python/3.8.3 perl/5.28.0 gdal/3.2.1 geos/3.8.1

export WD=$GISDATA/ecoregions/global/MEOW/
cd  $WD
unzip -u $WD/MEOW_FINAL.zip
unzip -u $WD/WCMC036_MEOW_PPOW_2007_2012_v1.zip

if [ $(ogrinfo --version | grep "GDAL 3.2" -c) -eq 1 ]
then
     ogr2ogr -f "GPKG" meow_ecos_valid.gpkg $WD/MEOW/meow_ecos.shp meow_ecos -nlt PROMOTE_TO_MULTI -t_srs "+proj=longlat +datum=WGS84" -makevalid
fi

if [ $(ogrinfo --version | grep "GDAL 3.2" -c) -eq 1 ]
then
     ogr2ogr -f "GPKG" meow_ppow_valid.gpkg $WD/DataPack-14_001_WCMC036_MEOW_PPOW_2007_2012_v1/01_Data/WCMC-036-MEOW-PPOW-2007-2012.shp WCMC-036-MEOW-PPOW-2007-2012 -nlt PROMOTE_TO_MULTI -t_srs "+proj=longlat +datum=WGS84" -makevalid -nln meow_ppow
     ogr2ogr -f "GPKG" meow_ppow_noCoast_valid.gpkg $WD/DataPack-14_001_WCMC036_MEOW_PPOW_2007_2012_v1/01_Data/WCMC-036-MEOW-PPOW-2007-2012-NoCoast.shp WCMC-036-MEOW-PPOW-2007-2012-NoCoast -nlt PROMOTE_TO_MULTI -t_srs "+proj=longlat +datum=WGS84" -makevalid -nln meow_ppow_no_coast
fi

```


```sh
cd $WORKDIR
unzip $GISDATA/biogeografia/MEOW/MEOW_FINAL.zip

psql gisdata -c "CREATE SCHEMA MEOW"
ogr2ogr -overwrite -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=meow MEOW/meow_ecos.shp  -nlt PROMOTE_TO_MULTI


```
