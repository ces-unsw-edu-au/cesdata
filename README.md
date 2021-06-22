# cesdata
GIS data for analysis at the Centre for Ecosystem Science

Maintained by [@jrfep](https://github.com/jrfep)

## Folder contents

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
tree -L 3 $GISDATA

/srv/scratch/cesdata/gisdata
├── admin
│   └── global
│       └── World-Bank
├── antroposphere
│   └── global
│       └── Earthstats
├── climate
│   └── global
│       ├── CHELSA
│       ├── CRU_TS
│       └── Terraclimate
├── cryosphere
│   └── global
│       ├── GLIMS_2019
│       ├── LIAG_Ice
│       ├── Modis-MOD10A2-V006
│       ├── Modis-MOD10C2
│       ├── RGI_6.0
│       ├── SeaIceIndex
│       ├── SMMR_SeaIceTrends
│       ├── subglacial-lakes
│       ├── VIIRS-VNP10A1F-V001
│       └── WGI_2012
├── ecological
│   └── global
│       ├── EcologicalMarineUnits
│       ├── FAO-GEZ
│       └── NatureMap
├── ecoregions
│   ├── global
│   │   ├── FEOW
│   │   ├── LME
│   │   ├── MEOW
│   │   └── TEOW
│   └── regional
│       ├── Canada
│       └── IBRAv7
├── ecosystems
│   ├── global
│   │   ├── WCMC-coral-reefs
│   │   ├── WCMC-mangroves-2000
│   │   ├── WCMC-mangroves-GMW
│   │   └── WCMC-mangrove-types
│   └── regional
│       ├── MAES
│       └── worldbank-Central-America
├── fire
│   └── regional
│       └── australia-forest-fire-2011-16
├── forest
│   ├── global
│   │   ├── 3d-forest-JPL
│   │   └── GFC
│   └── regional
│       ├── Boreal-Forest-Monitoring
│       └── China
├── hydrology
│   └── global
│       ├── GIRES
│       ├── HydroATLAS
│       └── HydroLAKES
├── landcover
│   └── global
│       ├── FROM-GLC10
│       ├── GLC2000
│       ├── GlobCover
│       └── Modis
├── land-surface-temperature
│   └── global
│       ├── Modis-.
│       └── Modis-MOD11A2.006
├── plant-traits
│   └── global
│       └── TRY-leaf-trait-maps
├── protected
│   └── global
│       └── WDPA
├── radiation
│   └── global
│       └── glUV
├── soil
│   ├── global
│   │   └── permafrost
│   └── regional
│       ├── circumpolar_permafrost
│       └── soil-landscape-grid-australia
├── species-dist
│   └── global
│       ├── BOTW
│       └── IUCN_RLTS
├── topography
│   └── global
│       ├── EarthEnv-topography
│       ├── GMBA-Mountain-Inventory
│       ├── GME-Mountain-Inventory
│       └── SRTM30-plus
├── vegcover
│   └── global
│       └── Modis-MOD44B.006
├── vegetation
│   └── regional
│       ├── IVC-EcoVeg
│       └── NVIS-Australia
├── veglayer
│   ├── global
│   │   └── WHRC-tropics
│   └── regional
│       └── TERN-Vegetation-height
└── water
    └── global
        └── ModisDailyWater

111 directories, 0 files

```


## Overview of datasets

### Admin

|Dataset|source|local|progress|
|---|---|---|---|
| World Bank political boundaries | ... | $GISDATA/ | done |

### Anthroposphere


|Dataset|source|local|progress|
|---|---|---|---|
| ... | ... | $GISDATA/ | ... |

### Climatic datasets

|Dataset|source|local|progress|
|---|---|---|---|
| Terraclimate | [10.1038/sdata.2017.191](http://dx.doi.org/10.1038/sdata.2017.191) | $GISDATA/climate/Terraclimate | done |
| CRU TS | [10.1002/joc.3711](http://dx.doi.org/10.1002/joc.3711) | $GISDATA/climate/CRU_TS | done |


### Cryosphere

|Dataset|source|local|progress|
|---|---|---|---|
| ... | ... | $GISDATA/ | ... |

### Ecological classifications

|Dataset|source|local|progress|
|---|---|---|---|
| ... | ... | $GISDATA/ | ... |


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

### Ecosystem maps

|Dataset|source|local|progress|
|---|---|---|---|
| ... | ... | $GISDATA/ | ... |

### Fire


|Dataset|source|local|progress|
|---|---|---|---|
| ... | ... | $GISDATA/ | ... |

### Forest


|Dataset|source|local|progress|
|---|---|---|---|
| ... | ... | $GISDATA/ | ... |

### Hydrology



|Dataset|source|local|progress|
|---|---|---|---|
| ... | ... | $GISDATA/ | ... |


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

### Other datasets...

|Dataset|source|local|progress|
|---|---|---|---|
| ... | ... | $GISDATA/ | ... |

### Water datasets

|Dataset|source|local|progress|
|---|---|---|---|
| Daily surface water |  [10.1029/2018wr023060](http://dx.doi.org/10.1029/2018wr023060) | $GISDATA/water/ModisDailyWater/ |done|
