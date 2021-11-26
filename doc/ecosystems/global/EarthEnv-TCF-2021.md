# EarthEnv Tropical Cloud Forests

## citation

> Karger, D.N., Kessler, M., Lehnert, M. et al. Limited protection and ongoing loss of tropical cloud forest biodiversity and ecosystems worldwide. Nat Ecol Evol (2021). https://doi.org/10.1038/s41559-021-01450-y

## data access

https://www.earthenv.org/cloudforest

## data preparation

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/ecosystems/global/EarthEnv-TCF-2021
cd $GISDATA/ecosystems/global/EarthEnv-TCF-2021

wget --continue https://data.earthenv.org/tcf/tcf_ensemble_mnv16_2001-2018.tif
wget --continue https://data.earthenv.org/tcf/tcf_ensemble_mn_sd_2001-2018_v16.zip

```

The model used locations of known cloud forests were obtained from the Tropical Montane Cloud Forest Sites database Tropical Montane Cloud Forest Sites database. This data can be obtained from https://www.unep-wcmc.org/resources-and-data/tropical-montane-cloud-forest-sites, download requires registration. Once downloaded we move the data to this directory:

```sh
scp Tropical_Montane_Cloud_Forest_Sites_1997.zip $zID@kdm.restech.unsw.edu.au:/srv/scratch/cesdata/gisdata/ecosystems/global/EarthEnv-TCF-2021

```
