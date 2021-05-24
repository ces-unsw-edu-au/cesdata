# cesdata
GIS data for analysis at the Centre for Ecosystem Science

Maintained by [@jrfep](https://github.com/jrfep)

## Folder contents

```sh
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
│       ├── CRU_TS
│       └── Terraclimate
├── cryosphere
│   └── global
│       ├── Modis-MOD10A2
│       ├── Modis-MOD10C2
│       ├── SeaIceIndex
│       └── SMMR_SeaIceTrends
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
│   │   └── WCMC-coral-reefs
│   └── regional
│       ├── MAES
│       └── worldbank-Central-America
├── fire
│   └── regional
│       └── australia-forest-fire-2011-16
├── forest
│   ├── GFC
│   │   └── GFC-2019-v1.7
│   ├── global
│   │   └── 3d-forest-JPL
│   └── regional
│       ├── Boreal-Forest-Monitoring
│       └── China
├── hydrology
│   └── global
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

94 directories, 0 files
```


### Anthroposphere


### Fire
### Forest
### Forest


### Cryosphere

### Water datasets

|Dataset|source|local|progress|
|---|---|---|---|
| Daily surface water |  [10.1029/2018wr023060](http://dx.doi.org/10.1029/2018wr023060) | $GISDATA/water/ModisDailyWater/ |decompressing|


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
| Modis MCD12Q1.006 | [10.5067/MODIS/MCD12Q1.006](https://doi.org/10.5067/MODIS/MCD12Q1.006) | $GISDATA/landcover/global/Modis/MCD12Q1.006 | downloading |
| FROMGLC
| USGS EROS
| Geowiki
| Copernicus
