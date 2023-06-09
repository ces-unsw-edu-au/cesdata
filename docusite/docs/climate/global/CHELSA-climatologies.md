---
title: "CHELSA"
description: "Climatologies at high resolution for the earth’s land surface areas"
tags: [tropical glaciers, IUCN-GET, IUCN-RLE, wget]
---

# CHELSA 

Climatologies at high resolution for the earth’s land surface areas

## Versions

Version 1.2

## Links 

- [Webpage](http://chelsa-climate.org/)
- [Technical specification](https://chelsa-climate.org/wp-admin/download-page/CHELSA_tech_specification.pdf)

## Citation
> Karger, D.N., Conrad, O., Böhner, J., Kawohl, T., Kreft, H., Soria-Auza, R.W., Zimmermann, N.E., Linder, H.P. & Kessler, M. (2017) Climatologies at high resolution for the earth’s land surface areas. Scientific Data 4, 170122.

## Data access

Originally accessible to download from Dryad:
> Karger, D.N., Conrad, O., Böhner, J., Kawohl, T., Kreft, H., Soria-Auza, R.W., Zimmermann, N.E., Linder, H.P., Kessler, M. (2017) Data from: Climatologies at high resolution for the earth’s land surface areas. Dryad Digital Repository. https://doi.org/10.5061/dryad.kd1d4

On February 2021 the recommended method is to use the [download server](https://envicloud.wsl.ch/#/?prefix=chelsa%2Fchelsa_V1).

Once in the server, is easy to select the files needed, and download a list of files paths for download with several tools. Here I use wget

## Data download and preparation

```bash
source proyectos/CES/cesdata/env/project-env.sh
mkdir -p $GISDATA/climate/global/CHELSA
cd $GISDATA/climate/global/CHELSA

# scp downloaded file with document links: envidatS3paths.txt
wget -b -nH -x --cut-dirs=3 --continue -i envidatS3paths.txt
wget -b -nH -x --cut-dirs=3 --continue -i envidatS3paths3.txt
wget -b -nH -x --cut-dirs=3 --continue -i envidatS3paths4.txt
grep -h swe envidatS3paths* > links
wget -b -nH -x --cut-dirs=3 --continue -i links

```


## This dataset is used for...

### IUCN RLE assessment of tropical glaciers 

![](/img/osf-logo.png) 

- [OSF project component](https://osf.io/432sb/)

