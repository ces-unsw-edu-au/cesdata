---
title: "Irrigation-Areas"
description: "Global Irrigation Areas"
tags: [IUCN-GET,wget,zenodo]
---

A new dataset of global irrigation areas from 2001 to 2015

## Citation

> Nagaraj, Deepak, Proust, Eleanor, Todeschini, Alberto, Rulli, Maria Cristina, & D'Odorico, Paolo. (2021). A new dataset of global irrigation areas from 2001 to 2015. Zenodo. https://doi.org/10.5281/zenodo.4659476

## Links
https://zenodo.org/record/4659476

## Data access
```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/antroposphere/global/Irrigation-Areas
cd $GISDATA/antroposphere/global/Irrigation-Areas

wget --continue "https://zenodo.org/record/4659476/files/v3b_combined_2015.tif?download=1" --output-document v3b_combined_2015.tif
```
