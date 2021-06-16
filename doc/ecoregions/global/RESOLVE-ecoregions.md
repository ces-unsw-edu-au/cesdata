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
