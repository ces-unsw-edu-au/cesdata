# Murray-Darling Basin Authority

There is a repository of spatial data
https://www.mdba.gov.au/publications-and-data/maps-and-spatial-data


## Data access

Most datasets are available through the <data.gov.au> repository.

```sh
mkdir -p $HOME/proyectos/adaptative-monitoring/RLE-NSW-gisdata/sandbox
cd $HOME/proyectos/adaptative-monitoring/RLE-NSW-gisdata/sandbox

```

### Wetlands GIS of the Murray-Darling Basin Series 2.0

https://data.gov.au/dataset/ds-dga-bbe5c1ca-2ff8-4a3b-9c32-08db210a6fd3/details

or 

https://data.gov.au/data/dataset/wetlands-gis-of-the-murray-darling-basin-series-2-0

```sh
wget --continue https://data.gov.au/data/dataset/bbe5c1ca-2ff8-4a3b-9c32-08db210a6fd3/resource/816e0d3b-287f-4e1b-b736-c9fe0b64b02d/download/wetlands.zip
unzip wetlands.zip 
```

### Murray Darling Basin Boundary - Water Act 2007

```sh
wget --continue https://data.gov.au/data/dataset/4ede9aed-5620-47db-a72b-0b3aa0a3ced0/resource/8a6d889d-723b-492d-8c12-b8b0d1ba4b5a/download/sworkingadhocjobsj4430dataoutputsmdb_boundarymdb_boundary.zip
```

### Basin plan data sets

https://www.mdba.gov.au/publications-and-data/publications/basin-plan-data-sets

```sh
wget --continue 'https://www.mdba.gov.au/sites/default/files/publications/basin-plan-data-sets-april-2020.zip'

unzip basin-plan-data-sets-april-2020.zip
cd Basin\ Plan\ Data\ Sets\ as\ at\ April\ 2020
unzip Surface\ Water\ Water\ Resource\ Plan\ Areas.zip 
```

## Traditional Owner Groups for water resource plan areas

> This data provides the boundaries of the water resource plan (WRP) areas as defined by the Basin Plan and the names of the Traditional Owners within each area. This data applies for both groundwater and surface water WRP areas.

> Download the spatial data sets for the Traditional Owner Groups for water resource plan areas on [www.data.gov.au](https://data.gov.au/dataset/ds-dga-bdb71cb8-daa1-4d6c-bc15-a151c4aeed65/details).

[View the printed maps](https://www.mdba.gov.au/sites/default/files/publications/guide-to-traditional-owner-groups-for-wrp-areas-combined-maps.pdf)

```sh
wget --continue 'https://data.gov.au/data/dataset/bdb71cb8-daa1-4d6c-bc15-a151c4aeed65/resource/c6290f37-afda-4a58-9527-d6ca10761e91/download/sworkingadhocjobsp3827dataoutputsupdate-april-2019traditional-owners-for-wrptraditional-owner-gr.zip' 

unzip sworkingadhocjobsp3827dataoutputsupdate-april-2019traditional-owners-for-wrptraditional-owner-gr.zip

```

### BasinView 1.0

Earth Engine Apps available at: <https://geemdbamgr01.users.earthengine.app/view/basinview>

## Preview of data in R

Using `mapview`:

```{r}
library(mapview)
library(sf)
library(dplyr)

surface_water <- read_sf("Basin\ Plan\ Data\ Sets\ as\ at\ April\ 2020/Surface Water Water Resource Plan Areas.shp")
traditional_owners <- read_sf("sw_wrpa_traditional_owners.shp")

NariNari <- traditional_owners |>
    filter(grepl("Nari",Nations))


wetlands <- read_sf("wetlands/wetlands_gda.shp")

mapview(surface_water) + mapview(NariNari)
```
