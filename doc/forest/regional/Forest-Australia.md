#  Forests of Australia

> A forest is defined in this dataset as:
> An area, incorporating all living and non-living components, that is dominated by trees having usually a single stem and a mature or potentially mature stand height exceeding two metres and with existing or potential crown cover of overstorey​ strata about equal to or greater than 20 per cent. This includes Australia's diverse native forests and commercial plantations, regardless of age. It is also sufficiently broad to encompass areas of trees that are sometimes described as woodlands.


## versions
### Forests of Australia (2013) v2.0


https://data.agriculture.gov.au/geonetwork/srv/eng/catalog.search;jsessionid=D688ADA3B12D94651DAA85ABC3639CC1#/metadata/f732afe7-b7d0-485a-bd27-1892cee55dcc

### Forests of Australia (2018)

> continental spatial ​dataset of forest extent, by national forest categories and types, assembled for Australia's State of the Forests Report 2018. It was developed from multiple forest, vegetation and land cover data inputs, including contributions from Australian, state and territory government agencies and external sources.

https://www.awe.gov.au/abares/forestsaustralia/forest-data-maps-and-tools/spatial-data/forest-cover

## Refernce
>



```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh


mkdir -p $GISDATA/forest/regional/Australia
cd $GISDATA/forest/regional/Australia

# 2018 version:
baseurl=https://www.awe.gov.au/sites/default/files/abares/forestsaustralia/documents/datasets/sofr2018

for arch in aus_for18_publish.zip Forests_of_Australia_2018_Lineage.pdf Forests_of_Australia_2018_Lookup_tables.pdf Forests_of_Australia_2018_Metadata.pdf
do
  wget --continue $baseurl/$arch
done

# 2013 version:

wget --continue https://www.awe.gov.au/sites/default/files/abares/forestsaustralia/documents/datasets/foa13g9abfs20160212egialb132.zip

wget --continue https://anrdl-integration-web-catalog-saxfirxkxt.s3-ap-southeast-2.amazonaws.com/warehouse/9aaf/foa/2013_v2/foa13d9abfs20160212mwx______/ForOfAust2013_v2_Lineage.docx

wget --continue  https://anrdl-integration-web-catalog-saxfirxkxt.s3-ap-southeast-2.amazonaws.com/warehouse/9aaf/foa/2013_v2/foa13d9abfs20160212mwx______/ForOfAust2013_v2_AttribsAndLookupTables.docx
wget --continue  https://anrdl-integration-web-catalog-saxfirxkxt.s3-ap-southeast-2.amazonaws.com/warehouse/9aaf/foa/2013_v2/foa13g9abfs20160212egialb132.zip
wget --continue https://anrdl-integration-web-catalog-saxfirxkxt.s3-ap-southeast-2.amazonaws.com/warehouse/9aaf/foa/2013_v2/foa13g9abfs20160212gipalb132/foa13_v2_ExtAndDist.png
```
