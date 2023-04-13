# Biogeography and ecoregions


## [RESOLVE ecoregions](https://ecoregions2017.appspot.com)

*Citation*: Dinerstein E, Olson D, Joshi A, Vynne C, Burgess ND, Wikramanayake E, Hahn N, Palminteri S, Hedao P, Noss R, Hansen M, Locke H, Ellis EE, Jones B, Barber CV, Hayes R, Kormos C, Martin V, Crist E, Sechrest W, Price L, Baillie JEM, Weeden D, Suckling K, Davis C, Sizer N, Moore R, Thau D, Birch T, Potapov P, Turubanova S, Tyukavina A, de Souza N, Pintea L, Brito JC, Llewellyn Barnekow Lillesø JP, van Breugel P, Graudal L, Voge M, Al-Shammari KF, Saleem M (2017) An Ecoregion-Based Approach to Protecting Half the Terrestrial Realm, BioScience 67: 534–545. [DOI: 10.1093/biosci/bix014](https://doi.org/10.1093/biosci/bix014)

[Documentation](https://developers.google.com/earth-engine/datasets/catalog/RESOLVE_ECOREGIONS_2017)


```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/ecoregions/global/TEOW/
cd $GISDATA/ecoregions/global/TEOW/

wget -b --continue https://storage.googleapis.com/teow2016/Ecoregions2017.zip

```




```sh
qsub -I -l select=1:ncpus=12:mem=120gb,walltime=24:00:00

source ~/proyectos/UNSW/cesdata/env/project-env.sh

module add sqlite/3.31.1 spatialite/5.0.0b0 python/3.8.3 perl/5.28.0 gdal/3.2.1 geos/3.8.1

export WD=$GISDATA/ecoregions/global/TEOW/
export OUTPUT=$WD/teow2017-valid-output
cd  $WD
unzip -u $WD/Ecoregions2017.zip

ogr2ogr -f "CSV" $OUTPUT Ecoregions2017.shp -sql "SELECT ECO_BIOME_,ECO_ID,ECO_NAME FROM Ecoregions2017"

cd $OUTPUT

for BIOME in $(cut ${OUTPUT}/Ecoregions2017.csv -d, -f1 | tail -n+2 | sort | uniq)
do
   mkdir -p $OUTPUT/$BIOME
   cd $OUTPUT/$BIOME
   grep $BIOME $OUTPUT/Ecoregions2017.csv > list
   for ECOID in $(cut list -d, -f2 | sed -s s/'"'//g)
   do
      if [ $(ogrinfo --version | grep "GDAL 3.2" -c) -eq 1 ]
      then
         ogr2ogr -f "GPKG" teow_${ECOID}_valid.gpkg $WD/Ecoregions2017.shp Ecoregions2017 -where "ECO_ID='${ECOID}'" -nlt PROMOTE_TO_MULTI -t_srs "+proj=longlat +datum=WGS84" -makevalid
      else
         ogr2ogr -f "GPKG" teow_${ECOID}.gpkg $WD/Ecoregions2017.shp Ecoregions2017 -where "ECO_ID='${ECOID}'" -nlt PROMOTE_TO_MULTI -t_srs "+proj=longlat +datum=WGS84"
      fi
    echo $BIOME $ECOID done! $(date)
   done
done

if [ $(ogrinfo --version | grep "GDAL 3.2" -c) -eq 1 ]
then
  ogr2ogr -f "GPKG" teow_2017_valid.gpkg $WD/Ecoregions2017.shp Ecoregions2017  -nlt PROMOTE_TO_MULTI -t_srs "+proj=longlat +datum=WGS84" -makevalid
else
   echo " update GDAL version"
fi
```




```sql

cd $WORKDIR
unzip $GISDATA/biogeografia/RESOLVE_Ecoregions/Ecoregions2017.zip

psql gisdata -c "CREATE SCHEMA resolve"
ogr2ogr -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata"  Ecoregions2017.shp -lco SCHEMA=resolve -nlt PROMOTE_TO_MULTI
```

Now in `psql gisdata`:

```sql

CREATE UNIQUE INDEX CONCURRENTLY ecoregions2017_idx
ON resolve.Ecoregions2017 (eco_name, eco_biome_, eco_id);

CREATE TABLE IF NOT EXISTS resolve.typology_xwalk (
  eco_name character varying(150),
  eco_biome_ character varying(254),
  eco_id numeric(11,0),
  efg_code varchar(10),
  version varchar(10),
  map_code varchar(20),
  map_version varchar(10),
  occurrence smallint,
  contributors text[],
  FOREIGN KEY (eco_name, eco_biome_, eco_id) REFERENCES resolve.Ecoregions2017 (eco_name, eco_biome_, eco_id),
  PRIMARY KEY (map_code, map_version, eco_id)
);



```

Use script xwalk-resolve-ecoregions.R to populate the table.


` select * from resolve.typology_xwalk where efg_code='TF1.4'; `
