---
title: "Chile-pisos"
description: "Pisos de Vegetación de Chile"
tags: [tropical glaciers, IUCN RLE]
---

## Description

Pisos de Vegetación de Chile (Terrestrial Ecosystems of Chile)

> Clasificación de Pisos de Vegetación para Chile continental presentada en el libro "Sinopsis Bioclimatica y Vegetacional de Chile" de Federico Luebert y Patricio Pliscoff, Editorial Universitaria, 2006. El concepto de piso de vegetación es defindo aquí como "espacios caracterizados por un conjunto de comunidades vegetales zonales con estructura y fisionomía uniforme, situadas bajo condiciones mesoclimáticamente homogéneas, que ocupan una posición determinada a lo largo de un gradiente de elevación, a una escala espacio-temporal específica".

> Un piso de vegetación se caracteriza típicamente por una formación vegetal con especies dominantes específicas y un piso bioclimático bajo el cual tales formaciones pueden ser encontradas. El espacio que se identifica con un piso de vegetación puede ser caracterizado, a posteriori, por su composición florística, su dinámica y su heterogeneidad interna.


## Citation

> Federico Luebert, Patricio Pliscoff (2006) **Sinopsis bioclimática y vegetacional de Chile**.  Editorial Universitaria. Santiago de Chile.
> Federico Luebert, Patricio Pliscoff (2018) **Sinopsis bioclimática y vegetacional de Chile**, Segunda edición.  Editorial Universitaria. Santiago de Chile.

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

We also add the files: `Chile_IUCN_redlist` and `Functional_Group_Chile_Arg` provided by Patricio Pliscoff -()- Alaska to Patagonia project.


Original projection in WGS_1984_UTM_Zone_19S

```sh
ogrinfo -geom=NO Chile_IUCN_redlist.shp Chile_IUCN_redlist | less

```
This gets the data in the original projection and promoted to multi-geometry

```sh
psql -h $DBHOST -U $DBUSER -d $DBNAME  -c "CREATE SCHEMA chile_rle"

# old version with assessment outcome
## ogr2ogr: driver `PostgreSQL' not installed on katana
## problem with older version of gdal in terra
ogr2ogr -f "PostgreSQL" PG:"host=$DBHOST user=$DBUSER dbname=$DBNAME"  -nlt PROMOTE_TO_MULTI -lco SCHEMA=chile_rle Chile_IUCN_redlist.shp -nln assessment_criteria

# newer version from Zenodo
ogr2ogr -f "PostgreSQL" PG:"host=$DBHOST user=$DBUSER dbname=$DBNAME"  shape_pisos.shp -lco SCHEMA=chile_rle -nlt PROMOTE_TO_MULTI -nln assessment_units

```



#### Crosswalk

We checked the file `GETcrosswalk_sample_Chile_PatricioPliscoff_correct.xlsx`, there are however some inconsistencies in the numbering/naming. For EFG T3.3 the selection of units correspond to this (but *Bosque caducifolio templado andino de Nothofagus pumilio y Chiliotrichum diffusum* is actually named as a *Matorral arborescente caducifolio templado* in the crosswalk, and numbers are different):

```sh
 psql gisdata  jferrer -c "SELECT id,pisos from vegchile.chile_iucn_redlist WHERE id>60 and id <71 ORDER BY id"

```

Login to postgis `psql -d gisdata` :

```sql
CREATE TABLE vegchile.T3_3_Chile AS
 SELECT ogc_fid,id,formacion,pisos,ST_Transform(wkb_geometry,4326) AS wkb_geometry
 FROM vegchile.chile_iucn_redlist
WHERE id>60 and id <71
 ;
```
#### Red list of ecosystem assessments

Compare results from continental and national RLE assessment with Alaniz et al.

this is inv-projected to longlat wgs84

```sh
ogr2ogr  -t_srs EPSG:4326 Chile_IUCN_redlist.shp   $GISDATA/ecosistemas/RLEDB/Chile/Chile_IUCN_redlist.shp
ogr2ogr -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=rle_gis_db" -nlt PROMOTE_TO_MULTI -lco SCHEMA=chile -lco OVERWRITE=YES Chile_IUCN_redlist.shp
ogr2ogr  -t_srs EPSG:4326 -where "id IN ('32','33','34','35','38','39','40','41','42','43','44','45')" Selected_Alaniz.shp   $GISDATA/ecosistemas/RLEDB/Chile/Chile_IUCN_redlist.shp
```

From Alaniz
Cross classified as forest macrogroup M652:
32	Interior mediterranean thorn forest of A. caven and Prosopis chilensis
33	Andean mediterranean thorn forest of A. caven and Baccharis paniculata
34	Coastal Mediterranean thorn forest of A. caven and Maytenus boaria
35	Interior mediterranean thorn forest of A. caven and Lithraea caustica
38	Andean Mediterranean sclerophyll forest of Kageneckia angustifolia and Guindilia trinervis
39	Coastal Mediterranean sclerophyll forest of Cryptocarya alba and P. boldus
40	Coastal Mediterranean sclerophyll forest of L. caustica and C. alba
41	Andean Mediterranean sclerophyll forest of Q. saponaria and L. caustica
42	Coastal Mediterranean sclerophyll forest of L. caustica and Azara integrifolia
43	Interior Mediterranean sclerophyll forest of L. caustica and P. boldus
44	Andean Mediterranean sclerophyll forest of L. caustica and Lomatia hirsuta
45	Interior Mediterranean sclerophyll psammophytic forest of Q. saponaria and Fabiana imbricata


Cross classified as forest macrogroup M653:
46	Coastal Mediterranean deciduous forest of Nothofagus macrocarpa and Ribes punctatum
47	Interior Mediterranean deciduous forest of Nothofagus obliqua and C. alba
48	Andean Mediterranean deciduous forest of N. obliqua and Austrocedrus chilensis
49	Coastal Mediterranean deciduous forest of Nothofagus glauca and Azara petiolaris
50	Coastal Mediterranean deciduous forest of N. glauca and Persea lingue

Other non-forest macrogroups (not evaluated)
36	Coastal mediterranean sclerophyll arborescent scrub of Peumus boldus and Schinus latifolius
37	Interior mediterranean sclerophyll arborescent scrub of Quillaja saponaria and Porlieria chilesis
111	Coastal Mediterranean short scrub of Chuquiraga oppositifolia and Mulinum spinosum


## This dataset is used for...

### IUCN RLE assessment of tropical glaciers 

- [OSF project component](https://osf.io/432sb/)

