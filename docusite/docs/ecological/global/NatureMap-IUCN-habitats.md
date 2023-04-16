# A global map of terrestrial habitat types

#### Citation


Data paper:
> Jung, M., Dahal, P.R., Butchart, S.H.M. et al. A global map of terrestrial habitat types. Sci Data 7, 256 (2020). https://doi.org/10.1038/s41597-020-00599-8

Zenodo dataset:
> Martin Jung, Prabhat Raj Dahal, Stuart H. M. Butchart, Paul F. Donald, Xavier De Lamo, Myroslava Lesiv, … Piero Visconti. (2020). A global map of terrestrial habitat types (Version 001_full) [Data set]. Zenodo. http://doi.org/10.5281/zenodo.3673586
> Martin Jung, Prabhat Raj Dahal, Stuart H. M. Butchart, Paul F. Donald, Xavier De Lamo, Myroslava Lesiv, … Piero Visconti. (2020). A global map of terrestrial habitat types (Version 003) [Data set]. Zenodo. http://doi.org/10.5281/zenodo.3925749

#### Data

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh


mkdir -p $GISDATA/ecological/global/NatureMap
cd $GISDATA/ecological/global/NatureMap

# version 1`
wget -b --continue 'https://zenodo.org/record/3673586/files/iucn_habitatclassification_composite_ver001.zip?download=1' --output-document=iucn_habitatclassification_composite_ver001.zip

# version 3
for k in iucn_habitatclassification_composite_lvl1_ver003.zip iucn_habitatclassification_composite_lvl2_ver003.zip lvl1_frac_1km_ver003.zip  lvl2_frac_1km_ver003.zip iucn_habitatclassification_code_ver003.zip
do
  wget -b --continue 'https://zenodo.org/record/3925749/files/'${k}'?download=1' --output-document=${k}
done
```

```sh
cd $WORKDIR
 unzip $GISDATA/ecosystems/NatureMap/iucn_habitatclassification_composite_lvl2_ver003.zip
 gdalinfo  iucn_habitatclassification_composite_lvl2_ver003.tif

## 1km aggregations
 unzip $GISDATA/ecosystems/NatureMap/lvl2_frac_1km_ver003.zip

 unzip $GISDATA/ecosystems/NatureMap/iucn_habitatclassification_code_ver003.zip

gdalwarp -te -180 -90 180 90 lvl2_frac_1km_ver003/iucn_habitatclassification_fraction_lvl2__108_Forest\ –\ Subtropical-tropical\ swamp__ver003.tif NatureMap-108-1km.tif

```
