# GHSL - Global Human Settlement Layer

https://ghsl.jrc.ec.europa.eu/dataToolsOverview.php

Choose different products , times and resolutions

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh
mkdir -p $GISDATA/antroposphere/global/GHSL
cd $GISDATA/antroposphere/global/GHSL

wget --continue -b https://cidportal.jrc.ec.europa.eu/ftp/jrc-opendata/GHSL/GHS_BUILT_LDSMT_GLOBE_R2018A/GHS_BUILT_LDS2000_GLOBE_R2018A_54009_1K/V2-0/GHS_BUILT_LDS2000_GLOBE_R2018A_54009_1K_V2_0.zip
wget --continue -b https://cidportal.jrc.ec.europa.eu/ftp/jrc-opendata/GHSL/GHS_BUILT_LDSMT_GLOBE_R2018A/GHS_BUILT_LDSMT_GLOBE_R2018A_3857_30/V2-0/GHS_BUILT_LDSMT_GLOBE_R2018A_3857_30_V2_0.zip
```
