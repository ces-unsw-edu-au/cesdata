# RLTS - spatial data

## About

The IUCN Red List of Threatened Species™ contains global assessments for almost 134,400 species. More than 82% of these (>111,000 species) have spatial data.

### Reference

> Users MUST provide the appropriate credit(s)for this spatial data if it is used in any product
produced in any media. For individual species maps, credit information is provided in the citation field of the attribute data for that species. This information should be used in conjunction with the credit information for the spatial dataset as a whole using the following format:

> <citation field information><year>. The IUCN Red List of Threatened Species. Version <Red List version>.
https://www.iucnredlist.org. Downloaded on <insert appropriate date>.

### Documentation

https://nc.iucnredlist.org/redlist/content/attachment_files/RLSpatial_metadata_v6.2.pdf

### data:

Spatial data download from https://www.iucnredlist.org/resources/spatial-data-download
Register and download

Download from webpage into downloads folder, then move to gisdata folder:

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/species-dist/global/IUCN_RLTS
cd $GISDATA/species-dist/global/IUCN_RLTS
#mv ~/Downloads/TERRESTRIAL_MAMMALS.zip $GISDATA/species-dist/global/IUCN_RLTS
#mv ~/Downloads/MAMMALS.zip $GISDATA/species-dist/global/IUCN_RLTS
#mv ~/Downloads/AMPHIBIANS.zip $GISDATA/species-dist/global/IUCN_RLTS
#mv ~/Downloads/REPTILES.zip $GISDATA/species-dist/global/IUCN_RLTS
#mv ~/Downloads/MANGROVES.zip $GISDATA/species-dist/global/IUCN_RLTS

for j in MAMMALS AMPHIBIANS REPTILES MANGROVES
do
  unzip -u $j
done

```
