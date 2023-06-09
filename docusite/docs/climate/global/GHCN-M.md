---
title: "GHCN-M"
description: "GLOBAL HISTORICAL CLIMATOLOGY NETWORK - MONTHLY, Version 4"
tags: [wget]
---

## Description

GLOBAL HISTORICAL CLIMATOLOGY NETWORK - MONTHLY () Version 4

> GHCN-M version 4 currently contains monthly mean temperature for over 25,000 stations across the globe.

> There are currently three versions of GHCN-M version 4 , QCU: Quality Control, Unadjusted; QCF: Quality Control, Adjusted, using the Pairwise Homogeneity Algorithm (PHA, Menne and Williams, 2009); QFE: Quality Control, Adjusted, Estimated using the Pairwise Homogeneity Algorithm. Only the years 1961-2010 are provided. This is to help maximize station coverage when calculating  normals. For more information, see Williams et al, 2012.

## Links

https://www.ncei.noaa.gov/pub/data/ghcn/v4/readme.txt

## Data access and preparation

```sh

source proyectos/CES/cesdata/env/project-env.sh
mkdir -p $GISDATA/climate/global/GHCN-M
cd $GISDATA/climate/global/GHCN-M

wget https://www.ncei.noaa.gov/pub/data/ghcn/v4/ghcnm.tavg.latest.qcf.tar.gz

wget https://www.ncei.noaa.gov/data/ghcnm/v4beta/archive/ghcn-m_v4.00.00_prcp_s16970101_e20220831_c20220907.tar.gz
```
