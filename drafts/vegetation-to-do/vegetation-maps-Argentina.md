# Base de Datos Geoespacial Institucional del  Instituto Geográfico Nacional de la República Argentina

> Datos extraídos de la Base de Datos Institucional del Instituto Geográfico Nacional (IDEIGN02) y convertidos en archivos shapefile.

#### Data access
https://www.ign.gob.ar/NuestrasActividades/InformacionGeoespacial/CapasSIG

Under category "Vegetación natural y de cultivo" there are several layers: Cultivo, Sin vegetación, Vegetación arbórea, Vegetación arbustiva, Vegetación herbacea, Vegetación hidrófila

http://ramsac.ign.gob.ar/operaciones_sig/shp_from_geoserver/download.php?f=c2hwOjp2ZWdldGFjaW9uX2FyYm9yZWEuemlw

Download:

```sh
mkdir -p $GISDATA/vegetation/Argentina
cd $GISDATA/vegetation/Argentina

for arch in cultivo sin_vegetacion vegetacion_arborea  vegetacion_arbustiva  vegetacion_herbacea_EB010  vegetacion_hidrofila_ED020
do
  mv ~/Downloads/$arch.zip $GISDATA/vegetation/Argentina/
done
```

Import in postgis
```sh

psql gisdata -c "CREATE SCHEMA ignra"

 cd $WORKDIR

for arch in vegetacion_herbacea_EB010  vegetacion_hidrofila_ED020
do
   unzip $GISDATA/vegetation/Argentina/$arch.zip
   ogr2ogr -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=ignra -nlt PROMOTE_TO_MULTI $arch.shp
   rm $arch.*
done

for arch in cultivo sin_vegetacion vegetacion_arborea  vegetacion_arbustiva  
do
   unzip $GISDATA/vegetation/Argentina/$arch.zip
   for ziparch in $(ls shp/*zip)
   do
      unzip $ziparch
      ogr2ogr -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=ignra -nlt PROMOTE_TO_MULTI $(basename $ziparch | sed s/.zip/.shp/)
   done
   rm -r *
done

psql gisdata -c "SELECT objeto,count(*) AS n FROM ignra.vegetacion_arbustiva_eb015 GROUP BY objeto"
psql gisdata -c"SELECT count(*) FROM ignra.vegetacion_arbustiva_eb015 WHERE objeto IN ('Estepa Arbustiva','Etapa arbustiva','Estepa arbustiva')"
psql gisdata -c "SELECT objeto,count(*) AS n FROM ignra.vegetacion_arbustiva_eb020 GROUP BY objeto"

```
