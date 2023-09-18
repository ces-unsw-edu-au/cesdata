---
title: "Colombia"
description: "Ecosistemas terrestres de Colombia"
tags: [tropical glaciers, tropical alpine, IUCN RLE, IUCN GET]
---

## Citation

> Etter A., Andrade A., Saavedra K., Amaya P. y P. Arévalo 2017. Risk assessment of Colombian continental ecosystems: An application of the Red List of Ecosystems methodology (v. 2.0). Final Report. Pontificia Universidad Javeriana and Conservación Internacional-Colombia. Bogotá. 138 pp. Final Report. Pontificia Universidad Javeriana and Conservación Internacional-Colombia. Bogotá. 138 pp. [Report](https://www.researchgate.net/publication/325498072_Risk_assessment_of_Colombian_continental_ecosystems_An_application_of_the_Red_List_of_Ecosystems_methodology_v_20). [Summary](https://iucnrle.org/static/media/uploads/references/published-assessments/Brochures/brochure_lre_colombia_v_2.0.pdf)

## Data access
Files provided by Andrés Etter -()- Alaska to Patagonia project

## Data preparation

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh
mkdir -p $GISDATA/ecosystems-status/regional/Colombia
cd $GISDATA/ecosystems-status/regional/Colombia
## cp .. $GISDATA/ecosystems-status/regional/Colombia
```

Original projection in WGS_1984_UTM_Zone_18N, o EPSG 32618

```sh
ogrinfo -al -geom=NO EcoOri_12052015_2014_TodosCriterios.shp | less
```

### Import into postGIS
This gets the data in the original projection and promoted to multi-geometry

```sh
 psql gisdata  jferrer -c "CREATE SCHEMA colombia_rle"
 ## exclude shape_area column to avoid column precision error
ogr2ogr -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -nlt PROMOTE_TO_MULTI -lco SCHEMA=ecocolombia $GISDATA/ecosystems-status/regional/EcoOri_12052015_2014_TodosCriterios.shp -sql "SELECT COD, A1P, A1E, A2aP, A2aE, A2bP, A2bE, A3P, A3E, C2,  D2, B1ai, B1aiiV1, B1aiiV2, B1aiii, B2ai, B2aiiV1, B2aiiV2, B2aiii, C2Precp, EvFinal FROM EcoOri_12052015_2014_TodosCriterios"
```

### Reformat and make valid



```sh
cd $GISDATA/ecosystems-status/regional/Colombia
ogr2ogr Colombia-Ecosystems.gpkg EcoOri_12052015_2014_TodosCriterios.shp -nlt PROMOTE_TO_MULTI -makevalid
```

## Crosswalk

We checked the file `GETcrosswalk_Colombia_AEtter.xlsx`

```sh
cp ~/proyectos/CES/ecosphere-db/input/xwalks/GETcrosswalk_Colombia_AEtter.xlsx $GISDATA/ecosistemas/RLEDB/Colombia
```

Run `R --vanilla`:

```{r}
require(gdata)
require(dplyr)
require(readxl)
require(tidyr)
require("RPostgreSQL")

gis.data <- Sys.getenv("GISDATA")

XW <- read_excel(sprintf("%s/ecosistemas/RLEDB/Colombia/GETcrosswalk_Colombia_AEtter.xlsx",gis.data),sheet=3) %>% select(1:51)
colnames(XW)[2] <- "fullcode"

XW %>% pivot_longer(cols=3:51, names_to = "EFG name", values_to = "membership") %>% filter(!is.na(membership)) %>% mutate(code=gsub("^[A-Za-z_]+-","",fullcode),EFG=gsub(" ","",gsub("(^[A-Za-z 0-9]+.[0-9]+)[A-Za-z -,/-]+","\\1",`EFG name`))) -> rslt

drv <- dbDriver("PostgreSQL") ## remember to update .pgpass file
con <- dbConnect(drv, dbname = "gisdata", port = 5432,user = "jferrer",
                 host = ifelse( system("hostname -s",intern=T)=="terra","localhost","terra.ad.unsw.edu.au"))

rslts <- dbWriteTable(con,c("ecocolombia","iucnget_xwalk"),rslt)
dbDisconnect(con)
```

Now we can make some queries in `psql`:

```sql
select cod,evfinal,ST_Area(wkb_geometry),ST_Centroid(wkb_geometry) from ecocolombia.ecoori_12052015_2014_todoscriterios m left join ecocolombia.iucnget_xwalk x on m.cod=x.code where "EFG" IN ('T1.3');
select cod,evfinal,ST_Centroid(wkb_geometry) from ecocolombia.ecoori_12052015_2014_todoscriterios m left join ecocolombia.iucnget_xwalk x on m.cod=x.code where "EFG" IN ('T6.1');
select cod,evfinal,ST_Centroid(wkb_geometry) from ecocolombia.ecoori_12052015_2014_todoscriterios m left join ecocolombia.iucnget_xwalk x on m.cod=x.code where "EFG" IN ('T6.5');

select fullcode,cod,EFG from ecocolombia.ecoori_12052015_2014_todoscriterios m left join ecocolombia.iucnget_xwalk x on m.cod=x.code where "EFG" IN ('T6.5');

```


## This dataset is used for...

### IUCN RLE assessment of tropical glaciers 
- [OSF project component](https://osf.io/432sb/)

### Global suitability map of tropical alpine ecosystems

