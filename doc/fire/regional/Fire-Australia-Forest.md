# Fires in Australia's forests 2011–16 (2018)

https://data.gov.au/data/dataset/fires-in-australia-s-forests-2011-16-2018

Continental spatial dataset of the extent and frequency of planned and unplanned fires occurring in forest in the five financial years between July 2011 and June 2016, assembled for Australia's State of the Forests Report 2018.

https://www.agriculture.gov.au/abares/forestsaustralia/sofr/sofr-2018

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh

mkdir -p $GISDATA/fire/regional/australia-forest-fire-2011-16
cd $GISDATA/fire/regional/australia-forest-fire-2011-16
wget --continue https://data.gov.au/dataset/c0cd6f5a-6b0f-4cd0-8980-1ca5b2c31006/resource/e99002e3-05b5-4a4f-8c1c-823d1b3e9713/download/fire_publish.zip

unzip fire_publish.zip

```
