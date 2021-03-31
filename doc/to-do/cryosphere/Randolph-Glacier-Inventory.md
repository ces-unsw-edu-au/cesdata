# Randolph Glacier Inventory, version 6.0

Global inventory of glacier outlines. It is supplemental to the Global Land Ice Measurements from Space initiative (GLIMS). RGI Version 6.0: released July 28, 2017.

[Website](https://www.glims.org/RGI/) /
[user guidelines](http://www.glims.org/RGI/00_rgi60_TechnicalNote.pdf)

#### Citation
> RGI Consortium (2017). Randolph Glacier Inventory – A Dataset of Global Glacier Outlines: Version 6.0: Technical Report, Global Land Ice Measurements from Space, Colorado, USA. Digital Media. DOI: https://doi.org/10.7265/N5-RGI-60

#### Data access

http://www.glims.org/RGI/rgi60_dl.html

#### Data download and preparation


```sh
mkdir -p $GISDATA/inventories/RGI_6.0
cd $GISDATA/inventories/RGI_6.0
wget --continue https://www.glims.org/RGI/rgi60_files/00_rgi60.zip
##Additionally download the geotiff
wget--continue  http://www.glims.org/RGI/rgi60_files/00_rgi60_30-30grid.tif
```

We import this dataset in postgis for further data preparation and selection

```sh
mkdir -p $WORKDIR/RGI60
cd $WORKDIR/RGI60
unzip $GISDATA/inventories/RGI_6.0/00_rgi60.zip
for ZIPFILE in $(ls *zip)
do
  unzip -u $ZIPFILE
done

psql gisdata jferrer -c "CREATE SCHEMA rgi60"
for SHPFILE in 00_rgi60_O1Regions 00_rgi60_O2Regions
do
   ogr2ogr -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=rgi60 -nlt PROMOTE_TO_MULTI  $SHPFILE.shp $SHPFILE
 done

## one by one to test for errors:
 ogr2ogr -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=rgi60 -nlt PROMOTE_TO_MULTI 01_rgi60_Alaska.shp 01_rgi60_Alaska -nln rgi60_total
 psql gisdata jferrer -c "ALTER TABLE rgi60.rgi60_total DROP column ogc_fid"

## some files have old encodings
 file 19_rgi60_AntarcticSubantarctic.dbf
 dbfdump 19_rgi60_AntarcticSubantarctic.dbf > test
 file test
 iconv -f ISO-8859-1 -t utf-8 test > test.utf8.txt

## easily fixed with:
 echo "ISO-8859-1" > 19_rgi60_AntarcticSubantarctic.cpg
 echo "ISO-8859-1" > 07_rgi60_Svalbard.cpg
 echo "ISO-8859-1" > 08_rgi60_Scandinavia.cpg


 ## now we can proceed with all files
for SHPFILE in 02_rgi60_WesternCanadaUS.shp 03_rgi60_ArcticCanadaNorth.shp 04_rgi60_ArcticCanadaSouth.shp 05_rgi60_GreenlandPeriphery.shp 06_rgi60_Iceland.shp 09_rgi60_RussianArctic.shp 10_rgi60_NorthAsia.shp 11_rgi60_CentralEurope.shp 12_rgi60_CaucasusMiddleEast.shp 13_rgi60_CentralAsia.shp 14_rgi60_SouthAsiaWest.shp 15_rgi60_SouthAsiaEast.shp 16_rgi60_LowLatitudes.shp 17_rgi60_SouthernAndes.shp 18_rgi60_NewZealand.shp 07_rgi60_Svalbard.shp 08_rgi60_Scandinavia.shp 19_rgi60_AntarcticSubantarctic.shp
do
   echo $SHPFILE
   ogr2ogr -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=rgi60 -lco OVERWRITE=yes -nlt PROMOTE_TO_MULTI $SHPFILE -nln rgi60_tmp
   psql gisdata jferrer -c "ALTER TABLE rgi60.rgi60_tmp DROP column ogc_fid"
   psql gisdata jferrer -c "INSERT INTO rgi60.rgi60_total SELECT * FROM rgi60.rgi60_tmp"
   echo " |--> Listo\n"
done
psql gisdata jferrer -c "DROP TABLE rgi60.rgi60_tmp"
 psql gisdata jferrer -c "ALTER TABLE rgi60.rgi60_total ADD CONSTRAINT rgi_idx PRIMARY KEY (rgiid)"
rm *
```

This way we can summarize information according to documented variables, for example, just `psql gisdata` and:

```sql
SELECT o1region,o2region,count(*) as nr from rgi60.rgi60_total group by o1region,o2region order by o1region,o2region;
SELECT o1region,count(*) as nr from rgi60.rgi60_total group by o1region order by o1region;
select count(distinct rgiid),count(distinct glimsid),count(*) from rgi60.rgi60_total;

```
