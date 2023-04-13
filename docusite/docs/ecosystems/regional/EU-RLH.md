# European Red List of habitats data deliverables

https://forum.eionet.europa.eu/european-red-list-habitats/library/project-deliverables-data

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/ecosystems/regional/EU-RLH
cd $GISDATA/ecosystems/regional/EU-RLH

wget --continue https://forum.eionet.europa.eu/european-red-list-habitats/library/project-deliverables-data/geodatabases/zip_export/do_export --output-document=geodatabases.zip

unzip -u geodatabases.zip
# for some obscure reason this is read-protected
chmod 740 Geodatabases/*
chmod 640 Geodatabases/*/*.*
```
