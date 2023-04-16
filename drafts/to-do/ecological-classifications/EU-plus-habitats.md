##

http://ec.europa.eu/environment/nature/knowledge/redlist_en.htm
##

fact sheets per habitat in https://forum.eionet.europa.eu/european-red-list-habitats/library/


Red list database  https://forum.eionet.europa.eu/european-red-list-habitats/library/project-deliverables-data/database

Download all data at once
```sh
mkdir -p $GISDATA/ecosystems/EUplus-RLH
cd $GISDATA/ecosystems/EUplus-RLH
wget --continue https://forum.eionet.europa.eu/european-red-list-habitats/library/zip_export/do_export --output-document=EURLHDB.zip

```

unzip and export from accdb to sql
```sh

cd $WORKDIR

unzip $GISDATA/ecosystems/EUplus-RLH/EURLHDB.zip
chmod 704 -R Library/
mdb-tables -1 Library/Project\ data\ deliverables/Database/Raw\ Database\ .accdb
mdb-schema Library/Project\ data\ deliverables/Database/Raw\ Database\ .accdb  > EURLHschema.sql postgres

mdb-export -I postgres Library/Project\ data\ deliverables/Database/Raw\ Database\ .accdb 'European Red List of Habitats Table' | sed -e 's/)$/)\;/' > EURLHexport.sql

echo "SET search_path TO euplus;" > EURLH-schema-plus.sql
 cat EURLHschema.sql >> EURLH-schema-plus.sql
psql -d gisdata -c "CREATE SCHEMA euplus"
psql -d gisdata < EURLH-schema-plus.sql

SET search_path TO euplus;
drop table "Biogeographical Regions Table";
drop table "Conservation Measures Table"   ;
drop table "European Red List of Habitats Table";
drop table "Look-up Conservation Measures Table";
drop table "Look-up Countries Table"            ;
drop table "Look-up Pressures and Threats Table" ;
drop table "Look-up Seas Table"             ;
drop table "Marine Habitats Area and Trends Table";
drop table "Pressures and Threats Table"          ;
drop table "Terrestrial Habitats Area and Trends Table";

echo "SET search_path TO euplus;" > EURLH-export-plus.sql
 cat EURLHexport.sql >> EURLH-export-plus.sql

 psql -d gisdata < EURLH-export-plus.sql &

```
