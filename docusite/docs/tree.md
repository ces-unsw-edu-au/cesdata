---
sidebar_position: 3
---
# Folder structure

We have explored so many datasets that our folder tree keeps growing and growing. I have made my best effort to add documentation for each dataset, sometimes a very thin placeholder, sometimes a more meticulous guide, sometimes I forget or procrastinate... but they will be there eventually.

Expand the menus on the left to navigate the intructions for the datasets. 

### What a tree!

<details><summary>This tree listing gives an overview of the datasets available in `$GISDATA` in Katana </summary>

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh
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

</details>

