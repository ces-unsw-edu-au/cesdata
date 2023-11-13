---
title: "EUplus RLH"
description: "European Red List of habitats"
tags: [IUCN RLE, RLE spatial data, wget, R, sf]
---

The European Red List of habitats project reports are available at European Commission web site: http://ec.europa.eu/environment/nature/knowledge/redlist_en.htm

Navigate through the factsheets using the webapp at: https://eunis.eea.europa.eu/habitats-code-browser-redlist.jsp

## Citation

> Gubbay, et al. (2016). European Red List of Habitats. Part 1: Marine habitats. European Commission, Brussels. DOI: [10.2779/032638](https://doi.org/10.2779/032638)

> Janssen, et al. (2016). European Red List of Habitats. Part 2: Terrestrial and
freshwater habitats. European Commission, Brussels. DOI: [10.2779/091372](https://doi.org/10.2779/091372)

## Links

- [Project Library](https://forum.eionet.europa.eu/european-red-list-habitats/library)
- [Data deliverables](https://forum.eionet.europa.eu/european-red-list-habitats/library/project-deliverables-data)


## Data access and download

The original data for the EU Red List of Habitats is public access but not necessarily user-friendly. 

Start navigating this link for an overview of the project and follow the link to the deliverables. Read the Final report (PDF) in that folder.

It is possible to download the whole folder as a zip file, for example using `wget` in the commandline:

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh
mkdir -p $GISDATA/ecosystems-status/regional/EU-RLH
cd $GISDATA/ecosystems-status/regional/EU-RLH

wget --continue https://forum.eionet.europa.eu/european-red-list-habitats/library/project-deliverables-data/geodatabases/zip_export/do_export --output-document=geodatabases.zip

wget --continue https://forum.eionet.europa.eu/european-red-list-habitats/library/project-deliverables-data/database/zip_export/do_export --output-document=database.zip

```

## Data preparation

Unzip and change permission

```sh
unzip -u geodatabases.zip -d $WORKDIR
# for some obscure reason this is read-protected
chmod 740 $WORKDIR/Geodatabases/*
chmod 640 $WORKDIR/Geodatabases/*/*.*
```

### Terrestrial

For the terrestrial and freshwater habitats locate the folder called "Terrestrial Geodatabase" under the Geodatabases folder.

The shapefile contains the distribution of each habitat type mapped into a regular grid (10x10km), so there are hundreds of squares per habitat type, and they overlap with the other types. So to see the individual types you have to filter the data in a GIS program.

The shapefile only has the distribution data, to get the status (red list categories) and other data per habitat you will need to open the access database (folder "Database").

Combining the spatial data with the information in the access database requires a bit of programming, in my case I exported the access database table to a csv file and then used R to combine it with the shapefile table.

### With R



Read data in R


```r
require(sf)
require(dplyr)
library(readr)
library(units)
library(stringr)
here::i_am("inc/R/read-Macaronesia-data.R")

EEZ <- read_sf(here::here("Data","EEZ_land_union_v3_202003", "EEZ_Land_v3_202030.shp"))

### EU assessments
EURLH.mar <- read_sf(
  here::here("Data", "EURLH", "Geodatabases", 
             "North\ East\ Atlantic\ Sea\ geodatabase\ v03/"), 
  'NEA geodatabase')

EURLH.ter <- read_sf(
  here::here("Data", "EURLH", "Geodatabases", "Terrestrial\ geodatabase"), 
  'RDB_Final_Maps_Terrestrial')

RLH <- read_csv(here::here("Data", "EURLH","EURLH.csv"))

#### cut the European Union RLH data for the Macaronesian islands
EEZ.EU <- EEZ %>% 
  filter(grepl("Canary Islands|Madeira",UNAME)) %>% 
  st_transform(crs=st_crs(EURLH.mar))
EURLH.mar.qry <- EURLH.mar %>% st_intersection(EEZ.EU) %>% st_drop_geometry()
EURLH.ter.qry <- EURLH.ter %>% st_intersection(EEZ.EU) %>% st_drop_geometry()

cell_area <- EURLH.mar %>% st_area %>% mean %>% set_units('km2')

RLH_results <- RLH %>% select("Habitat Group":"Habitat Type Name",
               "Overall Category EU28") %>% 
  mutate(code=str_replace(`Habitat Type Name`,"<p>","") %>% 
           str_extract("[A-Z0-9a-z\\.]+")) %>% 
  filter(`Habitat Subgroup` %in% c("North East Atlantic",NA)) %>%
  select(code,`Overall Category EU28`)

 EURLH.ter %>% filter(TYPE_NAME %in% "Permanent lake of glaciers and ice sheets") %>% st_geometry() %>% st_union()

```



Emily asked to double check some territories included in the EU assessment


```r
## 

require(sf)
require(dplyr)

NEA <- read_sf("Data/EURLH/Geodatabases/North East Atlantic Sea geodatabase v03/NEA geodatabase.shp")
Terr_eco <- read_sf("Data/EURLH/Geodatabases/Terrestrial geodatabase/RDB_Final_Maps_Terrestrial.shp")
WB <- read_sf("Data/WB_Boundaries_GeoJSON_lowres/WB_countries_Admin0_lowres.geojson")

WB %>% 
  filter(grepl("Guern",FORMAL_EN)) %>% 
  st_transform(st_crs(Terr_eco)) %>% 
  st_geometry %>% 
  plot

plot(st_geometry(Terr_eco), add=T)

WB %>% 
  filter(grepl("Portu",FORMAL_EN)) %>% 
  st_transform(st_crs(Terr_eco)) %>% 
  st_geometry %>% 
  plot
plot(st_geometry(Terr_eco), add=T)
```