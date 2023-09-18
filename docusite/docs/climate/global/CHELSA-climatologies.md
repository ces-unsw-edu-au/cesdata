---
title: "CHELSA"
description: "Climatologies at high resolution for the earth’s land surface areas"
tags: [tropical glaciers, IUCN-GET, IUCN-RLE, wget,tropical alpine]
---

# CHELSA 

Climatologies at high resolution for the earth’s land surface areas

## Versions

Version 1.2
Version 2.1

## Links 

- [Webpage](http://chelsa-climate.org/)
- [Technical specification](https://chelsa-climate.org/wp-admin/download-page/CHELSA_tech_specification.pdf)
- [Metadata](https://envidat.ch/#/metadata/bioclim_plus)

## Citation
### version 2.1 CHELSA BIOCLIM +

> Brun, P., Zimmermann, N. E., Hari, C., Pellissier, L., and Karger, D. N.: Global climate-related predictors at kilometer resolution for the past and future, Earth Syst. Sci. Data, 14, 5573–5603, https://doi.org/10.5194/essd-14-5573-2022, 2022. 

> Brun, P., Zimmermann, N. E., Hari, C., Pellissier, L., Karger, D. N. (2022). CHELSA-BIOCLIM+ A novel set of global climate-related predictors at kilometre-resolution. EnviDat. https://www.doi.org/10.16904/envidat.332.

### Older versions
> Karger, D.N., Conrad, O., Böhner, J., Kawohl, T., Kreft, H., Soria-Auza, R.W., Zimmermann, N.E., Linder, H.P. & Kessler, M. (2017) Climatologies at high resolution for the earth’s land surface areas. Scientific Data 4, 170122.


## Data access

Originally accessible to download from Dryad:
> Karger, D.N., Conrad, O., Böhner, J., Kawohl, T., Kreft, H., Soria-Auza, R.W., Zimmermann, N.E., Linder, H.P., Kessler, M. (2017) Data from: Climatologies at high resolution for the earth’s land surface areas. Dryad Digital Repository. https://doi.org/10.5061/dryad.kd1d4

On February 2021 the recommended method is to use the [download server](https://envicloud.wsl.ch/#/?prefix=chelsa%2Fchelsa_V1).

Once in the server, is easy to select the files needed, and download a list of files paths for download with several tools. Here I use wget

## Data download and preparation

For version 2.1 / CHELSA Bioclim + variables 


```bash
source proyectos/CES/cesdata/env/project-env.sh
mkdir -p $GISDATA/climate/global/CHELSA
cd $GISDATA/climate/global/CHELSA


SRV=https://os.zhdk.cloud.switch.ch/envicloud/chelsa/chelsa_V2/GLOBAL/climatologies
GRP=1981-2010/bio

for VAR in ai fcf fgd gsl swe lgd gsp gst swb npp scd 
do 
  wget --continue ${SRV}/${GRP}/CHELSA_${VAR}_1981-2010_V.2.1.tif 
done

for VAR in hurs pet_penman clt cmi vpd sfcWind 
do 
  for SMR in min max mean range
  do
    wget --continue ${SRV}/${GRP}/CHELSA_${VAR}_${SMR}_1981-2010_V.2.1.tif 
  done
done

for VAR in rsds # for some weird reason this one has a different order
do 
  for SMR in min max mean range
  do
    wget --continue ${SRV}/${GRP}/CHELSA_${VAR}_1981-2010_${SMR}_V.2.1.tif 
  done
done

for VAR in gdd gdgfgd gddglgd ngd 
do 
  for SMR in 0 5 10
  do
    wget --continue ${SRV}/${GRP}/CHELSA_${VAR}${SMR}_1981-2010_V.2.1.tif 
  done
done

for VAR in bio 
do 
  for SMR in $(seq 1 19)
  do
    wget --continue ${SRV}/${GRP}/CHELSA_${VAR}${SMR}_1981-2010_V.2.1.tif 
  done
done


```

Older versions

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
- [OSF project component](https://osf.io/432sb/)


### IUCN GET map of tropical glaciers ecosystems 
- [OSF project component](https://osf.io/9yzhn/)


### Global suitability map of tropical alpine ecosystems
- [OSF project component](https://osf.io/vaund/)