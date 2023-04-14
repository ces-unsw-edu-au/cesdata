---
title: "Consistent-Land-Use-2000"
description: "Land-use 2000 consistent with national census data"
tags: [IUCN-GET,wget]
---

Global 5 min resolution land-use for the year 2000 consistent with national census data

> Karl-Heinz Erb , Veronika Gaube , Fridolin Krausmann , Christoph Plutzar , Alberte Bondeau & Helmut Haberl (2007) A comprehensive global 5 min resolution land-use data set for the year 2000 consistent with national census data, Journal of Land Use Science, 2:3, 191-224, DOI: 10.1080/17474230701622981

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/antroposphere/global/Consistent-Land-Use-2000
cd $GISDATA/antroposphere/global/Consistent-Land-Use-2000

wget --continue https://boku.ac.at/fileadmin/data/H03000/H73000/H73700/Data_Download/Data/Land_Use_Download_as_package.zip

unzip -u Land_Use_Download_as_package.zip
unzip -u 2Download\ as\ package/1all\ data\ as\ ascii-files/ascii_landuse.zip

```
