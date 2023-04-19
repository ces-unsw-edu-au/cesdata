# cesdata
GIS data for analysis at the Centre for Ecosystem Science

Maintained by [@jrfep](https://github.com/jrfep)

## Documentation with docusaurus

I started to move all documentation to [docusaurus](https://docusaurus.io/docs) in order to generate a friendly website for sharing. 

In a nutshell:

Install [Node.js](https://nodejs.org/en/download)

Then npx docusaurus

```sh
npx create-docusaurus@latest ~/sandbox/my-docusite classic
cd ~/sandbox/my-docusite
npx docusaurus start
```

 And start editing!

## Branches

- Main branch is `dont-panic`.
- Day to day work is on `mostly-harmless` branch.
- Deployment of site goes to `alpha-centaury` branch.


## Overview of datasets



### Climatic datasets

|Dataset|source|local|progress|
|---|---|---|---|
| Terraclimate | [10.1038/sdata.2017.191](http://dx.doi.org/10.1038/sdata.2017.191) | $GISDATA/climate/Terraclimate | done |
| CRU TS | [10.1002/joc.3711](http://dx.doi.org/10.1002/joc.3711) | $GISDATA/climate/CRU_TS | done |



### Ecoregions

|Dataset|source|local|progress|
|---|---|---|---|
| FEOW | [10.1641/B580507](https://doi.org/10.1641/B580507) | $GISDATA/ecoregions/global/FEOW/ |done|
| MEOW |  | $GISDATA/ecoregions/global/MEOW/ |done|
| TEOW / RESOLVE | [DOI: 10.1093/biosci/bix014](https://doi.org/10.1093/biosci/bix014) | $GISDATA/ecoregions/global/TEOW/ |done|
| TEOW / TNC |  | $GISDATA/ecoregions/global/TEOW/ |done|
| TEOW / WWF |  | $GISDATA/ecoregions/global/TEOW/ |done|
| Canada|  | $GISDATA/ecoregions/regional/Canada |done|
| IBRA v7|  | $GISDATA/ecoregions/regional/IBRAv7/ |done|


### Landcover

|Dataset|source|local|progress|
|---|---|---|---|
| GLC 2000 | [10.1080/01431160412331291297](https://doi.org/10.1080/01431160412331291297) | $GISDATA/landcover/global/GLC2000/ |done|
| Globcover| [GLOBCOVER 2009](http://due.esrin.esa.int/page_globcover.php) |  $GISDATA/landcover/global/GlobCover |done|
| Modis MCD12Q1.006 | [10.5067/MODIS/MCD12Q1.006](https://doi.org/10.5067/MODIS/MCD12Q1.006) | $GISDATA/landcover/global/Modis/MCD12Q1.006 | done |
| FROMGLC
| USGS EROS
| Geowiki
| Copernicus


### Water datasets

|Dataset|source|local|progress|
|---|---|---|---|
| Daily surface water |  [10.1029/2018wr023060](http://dx.doi.org/10.1029/2018wr023060) | $GISDATA/water/ModisDailyWater/ |done|

