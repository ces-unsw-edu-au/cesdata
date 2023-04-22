---
title: "CMCC-BioClimInd"
description: "CMCC-BioClimInd"
tags: [PANGAEA, wget]
---

## Description


> The complete CMCC-BioClimInd dataset is available through PANGAEA (https://doi.org/10.1594/PANGAEA.904278). It consists in 805 files in NetCDF4 format with a 0.5° by 0.5° grid resolution and global coverage (except Antarctica). Files represent 35 bioclimatic indicators calculated for a 40-years historical interval (1960–1999) under climate reanalysis and for two future 40-years time intervals (2040–2079 and 2060–2099) under 6 ESMs’ projections and 2 RCPs (except RCP4.5 for CMCC-CESM).

> The individual file names follow this structure: “BIOx institute-model rcp yyyy zz.nc” where x identifies the code of the bioclimatic indicator, institute-model (see Table 3, first column) identifies the source of data (short name for historical observation or for the producing Center and/or ESMs), rcp is the Representative Concentration Pathway (RCP 4.5 or RCP 8.5), yyyy is the starting year of time interval and zz the last two digits of the ending year of the time interval.

## Citation

 ```sh
 @misc{noce2019cang,
  author={Sergio {Noce} and Luca {Caporaso} and Monia {Santini}},
  title={{CMCC-BioClimInd. A new globaldataset of bioclimatic indicators}},
  year={2019},
  doi={10.1594/PANGAEA.904278},
  url={https://doi.org/10.1594/PANGAEA.904278},
  organization={Fondazione Centro Euromediterraneo sui Cambiamenti Climatici},
  abstract={CMCC-BioClimInd is a new global gridded dataset of bioclimatic indicators at 0.5{\textdegree} by 0.5 {\textdegree}resolution for historical and future conditions. The dataset provides a set of 35 bioclimatic indices, expressed as mean values over each time interval, derived from post-processing both climate reanalysis for historical period (1960-1999) and an ensemble of 11 bias corrected CMIP5 simulations under two emission scenarios for future climate projections alongtwo periods (2040-2079 and 2060-2099). This new dataset complements the availability of spatialized bioclimatic information, crucial aspect in many ecological and environmental wide scale applications and for several disciplines, including forestry, biodiversity conservation, plant and landscape ecology. The data of individual indices are publicly available for download in the commonly used Network Common Data Form 4 (NetCDF4) format.},
  type={data set},
  publisher={PANGAEA}
 }

 ```

 ## Data download and preparation

 ```sh
 source proyectos/UNSW/cesdata/env/project-env.sh
 mkdir -p $GISDATA/climate/global/CMCC-BioClimInd
 cd $GISDATA/climate/global/CMCC-BioClimInd

for k in $(seq 1 35)
do
  wget --continue https://hs.pangaea.de/model/NoceS-etal_2019/BIO${k}.zip
done
 ```
