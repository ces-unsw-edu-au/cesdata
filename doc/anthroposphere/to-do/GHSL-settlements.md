# GHSL - Global Human Settlement Layer

https://ghsl.jrc.ec.europa.eu/dataToolsOverview.php

Documentation: https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2019.pdf?t=1478q532234372

## Citation
Dataset:
> Pesaresi, Martino; Florczyk, Aneta; Schiavina, Marcello; Melchiorri, Michele; Maffenini, Luca (2019): GHS settlement grid, updated and refined REGIO model 2014 in application to GHS-BUILT R2018A and GHS-POP R2019A, multitemporal (1975-1990-2000-2015), R2019A. European Commission, Joint Research Centre (JRC) [Dataset] doi:10.2905/42E8BE89-54FF-464E-BE7B-BF9E64DA5218 PID: http://data.europa.eu/89h/42e8be89-54ff-464e-be7b-bf9e64da5218

Concept & Methodology:
> Florczyk, Aneta J.; Corbane, Christina; Ehrlich, Daniele; Freire, Sergio; Kemper, Thomas; Maffenini, Luca; Melchiorri, Michele; Pesaresi, Martino; Politis, Panagiotis; Schiavina, Marcello; Sabo, Filip; Zanchetta, Luigi (2019): GHSL Data Package 2019, EUR 29788 EN, Publications Office of the European Union, Luxembourg, ISBN 978-92-76-13187-8 doi:10.2760/0726, JRC 117104

## Data access and download

Choose from different products , times and resolutions

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/antroposphere/global/GHSL
cd $GISDATA/antroposphere/global/GHSL

wget --continue -b https://cidportal.jrc.ec.europa.eu/ftp/jrc-opendata/GHSL/GHS_BUILT_LDSMT_GLOBE_R2018A/GHS_BUILT_LDS2000_GLOBE_R2018A_54009_1K/V2-0/GHS_BUILT_LDS2000_GLOBE_R2018A_54009_1K_V2_0.zip
wget --continue -b https://cidportal.jrc.ec.europa.eu/ftp/jrc-opendata/GHSL/GHS_BUILT_LDSMT_GLOBE_R2018A/GHS_BUILT_LDSMT_GLOBE_R2018A_3857_30/V2-0/GHS_BUILT_LDSMT_GLOBE_R2018A_3857_30_V2_0.zip

wget --continue -b https://cidportal.jrc.ec.europa.eu/ftp/jrc-opendata/GHSL/GHS_SMOD_POP_GLOBE_R2019A/GHS_SMOD_POP2000_GLOBE_R2019A_54009_1K/V2-0/GHS_SMOD_POP2000_GLOBE_R2019A_54009_1K_V2_0.zip
```
