# Kelpforest-potential-dist
Modelled Global Distribution of the Kelp Biome

## citation

> Jayathilake D.R.M., Costello MJ. 2020. A modelled global distribution of the kelp biome. Biological Conservation 252, 108815. https://doi.org/10.1016/j.biocon.2020.108815

> Jayathilake D.R.M., Costello M.J. 2021. Version 2 of the world map of laminarian kelp benefits from more Arctic data and makes it the largest marine biome. Biological Conservation online. https://doi.org/10.1016/j.biocon.2021.109099


## data access

The map is available at WCMC: https://data.unep-wcmc.org/datasets/49

This seems to be the original version 1. For the version 2, I haven't found the map, but the validation and training points are available in additional FigShare repositories:
https://doi.org/10.17608/k6.auckland.12278786.v2
https://doi.org/10.17608/k6.auckland.12272033.v1


```sh
source ~/proyectos/CES/cesdata/env/project-env.sh

mkdir -p $GISDATA/ecosystems/global/WCMC-kelp
cd $GISDATA/ecosystems/global/WCMC-kelp

wget --continue http://wcmc.io/UniAuk-004 --output-document=UniAuk-004-ModelledDistributionKelpBiome.zip
wget https://auckland.figshare.com/ndownloader/files/22623905 --output-document=validation-data.csv
wget https://auckland.figshare.com/ndownloader/files/22623896 --output-document=training-data.csv

```
