---
title: "NSW State Vegetation Type Map"
description: "NSW State Vegetation Type Map"
tags: [IUCN GET]
---

Technical notes: https://www.environment.nsw.gov.au/research-and-publications/publications-search/nsw-state-vegetation-type-map-technical-notes

NSW State Vegetation Type Map
https://datasets.seed.nsw.gov.au/dataset/nsw-state-vegetation-type-map

Current Release C1.1.M1.1 (December 2022)

## Citation

> State Government of NSW and Department of Planning and Environment 2022, NSW State Vegetation Type Map, accessed from The Sharing and Enabling Environmental Data Portal [https://datasets.seed.nsw.gov.au/dataset/95437fbd-2ef7-44df-8579-d7a64402d42d], date accessed 2023-08-31.

## Data download and preparation


```sh
source ~/proyectos/CES/cesdata/env/project-env.sh
mkdir -p $GISDATA/vegetation/regional/NSW-SVTM/
cd $GISDATA/vegetation/regional/NSW-SVTM/

wget --continue https://datasets.seed.nsw.gov.au/dataset/95437fbd-2ef7-44df-8579-d7a64402d42d/resource/6e2e707e-d434-45bd-a94c-a7fdd8c7782d/download/svtm_nsw_extant_pct_vc1_1_m1_1.zip


```
