# Pisos de Vegetación de Chile (Terrestrial Ecosystems of Chile)
> Clasificación de Pisos de Vegetación para Chile continental presentada en el libro "Sinopsis Bioclimatica y Vegetacional de Chile" de Federico Luebert y Patricio Pliscoff, Editorial Universitaria, 2006. El concepto de piso de vegetación es defindo aquí como "espacios caracterizados por un conjunto de comunidades vegetales zonales con estructura y fisionomía uniforme, situadas bajo condiciones mesoclimáticamente homogéneas, que ocupan una posición determinada a lo largo de un gradiente de elevación, a una escala espacio-temporal específica".

> Un piso de vegetación se caracteriza típicamente por una formación vegetal con especies dominantes específicas y un piso bioclimático bajo el cual tales formaciones pueden ser encontradas. El espacio que se identifica con un piso de vegetación puede ser caracterizado, a posteriori, por su composición florística, su dinámica y su heterogeneidad interna.


## Citation

> Luebert, F. and Pliscoff, P. (2006) **Sinopsis bioclimática y vegetacional de Chile**. Editorial Universitaria. Santiago de Chile.

> Federico Luebert, & Patricio Pliscoff. (2016). Sinopsis bioclimática y vegetacional de Chile / Bioclimatic and vegetational synopsis of Chile [Data set]. In Sinopsis bioclimática y vegetacional de Chile. Editorial Universitaria. https://doi.org/10.5281/zenodo.60800


## Data availability

The updated layers (2nd edition of the book) are available in a Zenodo repository.

Alternative sources (older file version?) are:
https://databasin.org/datasets/46a0ca242b174b09aaa24e34e613023e/
http://datos.cedeus.cl/layers/geonode:pisos_vegetacionales_pliscoff

## Data download and preparation

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/vegetation/regional/Chile-pisos
cd  $GISDATA/vegetation/regional/Chile-pisos
wget 'https://zenodo.org/record/60800/files/shape_pisos.zip?download=1' -O shape_pisos.zip
unzip -u shape_pisos.zip
```

Export to postGIS database

```sh
psql -h $DBHOST -U $DBUSER -d $DBNAME  -c "CREATE SCHEMA chile_rle"

ogr2ogr -f "PostgreSQL" PG:"host=$DBHOST user=$DBUSER dbname=$DBNAME"  shape_pisos.shp -lco SCHEMA=chile_rle -nlt PROMOTE_TO_MULTI -nln assessment_units

```
