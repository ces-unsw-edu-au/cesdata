---
title: "Vegetation Formations and Classes of NSW"
description: "Vegetation Formations and Classes of NSW"
tags: [IUCN GET, ecosystems NSW]
---

# Vegetation Formations and Classes of NSW

> This vegetation map shows the extant distributions of vegetation formations and classes throughout NSW, and provides users with information about the resolution, currency and uncertainties in the underlying data that were used to assemble the map. Data represents NSW native vegetation extent, compiled from various vegetation maps using methods outlined in Simpson et al. (2011) and in Keith and Simpson (2010). The NSW vegetation map (version 2.2, Keith and Simpson 2006) was revised by interpreting additional candidate maps as vector layers and synthesising these into a single raster-based data set. 



## Links 

- This dataset is available through [SEED](https://www.seed.nsw.gov.au/) (Sharing and Enabling Environmental Data in NSW)
    - [Quality assessment](https://datasets.seed.nsw.gov.au/dataset/vegetation-classes-of-nsw-version-3-03-200m-raster-david-a-keith-and-christopher-c-simpc0917/resource/debe5cf1-cbff-4e23-b768-ffbdbd8ec006)
    - [Dataset info](https://datasets.seed.nsw.gov.au/dataset/vegetation-classes-of-nsw-version-3-03-200m-raster-david-a-keith-and-christopher-c-simpc0917)

## Versions

Version numbers are confusing, and not linked in SEED

- The main links reported in this document refer to version 3.03 (2012? updated 2017?)
- There is also a [version 2 available on SEED](https://datasets.seed.nsw.gov.au/dataset/vegetation-formations-and-classes-of-nsw-version-2-david-a-keith-christopher-c-simpson-b0fef) 
- For version 2 there is also a [extant native vegetation layer](https://datasets.seed.nsw.gov.au/dataset/nsw-extant-native-vegetation-keith-and-simpson-2006-version-0021b84f).

## Citation

> David A. Keith and Christopher C. Simpson (2016) Vegetation Formations and Classes of NSW (version 3.03 - 200m Raster). VIS_ID 384


## References

- Keith D. A. (2004) Ocean Shores to Desert Dunes: The native vegetation of New South Wales and the ACT. Department of Environment and Conservation, Sydney. 
- Keith, D. A. and Simpson, C. C. (2010) Vegetation Formations of NSW (version 3.0): A seamless map for modelling fire spread and behaviour. Report to the Rural Fire Service. NSW Department of Environment and Climate Change. October 2010. 
- Keith, D. A. and Simpson, C. C. (2006). A protocol for assessment and integration of vegetation maps, with an application to spatial data sets from south-eastern Australia. Austral Ecology 33, 761–774. 
- Pressey, R.L., Hager, T.C., Ryan, K.M., Schwarz, J., Wall, S., Ferrier, S. and Creaser, P.M. (2000). Using abiotic data for conservation assessments over extensive regions: quantitative methods applied across New South Wales, Australia. Biological Conservation 96, 55-82

## Data download and preparation

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh
mkdir -p $GISDATA/vegetation/regional/NSW-veg-forms-classes/
cd $GISDATA/vegetation/regional/NSW-veg-forms-classes/

wget --continue https://datasets.seed.nsw.gov.au/dataset/31986103-db62-4994-9702-054949281f56/resource/34a8cc72-5753-4993-8957-8d8af4fab008/download/ygeonetworkzipsvegetationnswmap3848.zip

```

### Uncompress into a working directory

```sh
cd $WORKDIR
unzip $GISDATA/vegetation/regional/NSW-veg-forms-classes/ygeonetworkzipsvegetationnswmap3848.zip
```

The `Vegetation_NSWmap3848/Documents` subfolder contains several reports and descriptions of the data. 

### Use the data in R

The `Vegetation_NSWmap3848/Data` subfolder has the raster file in GeoTiff format with an attribute table in dbf format 

```sh
library(sf)
library(terra)
library(dplyr)

setwd("~/workdir/tmp/cesdata")
veg_map <- read_sf("Vegetation_NSWmap3848/Data/GDB/MapData.gdb/")
veg_map <- read_sf("Vegetation_NSWmap3848/Data/GeoTIFF/NSWmap_v3_03_E_3848.tif.vat.dbf")
veg_map_rast <- rast("Vegetation_NSWmap3848/Data/GeoTIFF/NSWmap_v3_03_E_3848.tif")

veg_map %>% filter(ClassNumbe %in% 52) %>% select(Value,ClassName)

slc <- veg_map %>% 
            filter(ClassNumbe %in% 52) %>% 
            pull(Value) 

plot(veg_map_rast %in% {slc})

veg_map %>% filter(ClassNumbe %in% 60) %>% select(Value,ClassName)

slc <- veg_map %>% 
            filter(ClassNumbe %in% 60) %>% 
            pull(Value) 

plot(veg_map_rast %in% {slc})

```
