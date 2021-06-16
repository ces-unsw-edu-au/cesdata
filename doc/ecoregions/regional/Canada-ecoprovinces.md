# Terrestrial Ecoprovinces of Canada


Ecological Framework Levels
Level	Number of Units	Definition
Ecozone	15	At the top of the hierarchy, it defines the ecological mosaic of Canada on a sub-continental scale. They represent an area of the earth's surface representative of large and very generalized ecological units characterized by interactive and adjusting abiotic and biotic factors. Canada is divided into 15 terrestrial ecozones.
Ecoprovince	53	A subdivision of an ecozone characterized by major assemblages of structural or surface forms, faunal realms, and vegetation, hydrology, soil, and macro climate. For example, the Newfoundland ecoprovince (no. 6.4) is one of six ecoprovinces within the Boreal Shield Ecozone.
Ecoregion	194	A subdivision of an ecoprovince characterized by distinctive regional ecological factors, including climate, physiography, vegetation, soil, water, and fauna. For example, the Maritime Barrens ecoregion (no. 114) is one of nine ecoregions within the Newfoundland ecoprovince.
Ecodistrict	1021	A subdivision of an ecoregion characterized by a distinctive assemblages of relief, landforms, geology, soil, vegetation, water bodies and fauna. For example, the Jeddore Lake ecodistrict (no. 473) is one of five within the Maritime Barrens ecoregion.

https://open.canada.ca/data/en/dataset/98fa7335-fbfe-4289-9a0e-d6bf3874b424

> Marshall, I.B., Schut, P.H., and Ballard, M. 1999. A National Ecological Framework for Canada: Attribute Data. Agriculture and Agri-Food Canada, Research Branch, Centre for Land and Biological Resources Research and Environment Canada, State of the Environment Directorate, Ecozone Analysis Branch. Ottawa/Hull. http://sis.agr.gc.ca/cansis/nsdb/ecostrat/1999report/index.html (accessed July 4, 2017).

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/ecoregions/regional/Canada
cd $GISDATA/ecoregions/regional/Canada

##mv ~/Downloads/ECOPROVINCE_V2_2_GDB.zip $GISDATA/vegetation/Canada

wget --continue  http://www.agr.gc.ca/atlas/supportdocument_documentdesupport/aafcEcostratification/en/ISO_19131_National_Ecological_Framework_for_Canada_Data_Product_Specification.pdf

wget -b --continue http://www.agr.gc.ca/atlas/data_donnees/bio/aafcEcostratification/gml/ECOPROVINCE_V2_2_GML.zip

wget -b  --continue http://www.agr.gc.ca/atlas/data_donnees/bio/aafcEcostratification/gml/ECODISTRICT_V2_2_GML.zip

```

Import data into postgis

```sh
unzip ECOPROVINCE_V2_2_GML.zip
unzip ECODISTRICT_V2_2_GML.zip
psql gisdata -c "CREATE SCHEMA opencanada"
ogr2ogr -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=opencanada $GISDATA/vegetation/Canada/BIO_CA_TER_ECOPROVINCE_V2_2/BIO_CA_TER_ECOPROVINCE_V2_2.gml
ogr2ogr -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=opencanada $GISDATA/vegetation/Canada/BIO_CA_TER_ECODISTRICT_V2_2/BIO_CA_TER_ECODISTRICT_V2_2.gml


select distinct ecozone_id,ecoprovince_id,ecoregion_id,ecodistrict_id from opencanada.bio_ca_ter_ecodistrict_v2_2 order by ecozone_id,ecoprovince_id,ecoregion_id,ecodistrict_id;

```
