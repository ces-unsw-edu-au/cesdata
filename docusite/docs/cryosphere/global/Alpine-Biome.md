## *Alpine biomes*

Maps created by Testolin et al 2020 by modelling the regional treeline elevation. Available at https://doi.org/10.6084/m9.figshare.11710002.v1


> Testolin, R., Attorre, F. and Jiménez‐Alfaro, B. (2020), Global distribution and bioclimatic characterization of alpine biomes. Ecography, 43: 779-788. doi:10.1111/ecog.05012

> Testolin, Riccardo; Attorre, Fabio; Jiménez-Alfaro, Borja (2020): Global distribution and bioclimatic characterization of alpine biomes. figshare. Dataset. https://doi.org/10.6084/m9.figshare.11710002.v1


## Data download and preparation

```sh
DPATH=cryosphere/global
DNAME=Alpine-biomes

mkdir -p $GISDATA/$DPATH/$DNAME/
cd $GISDATA/$DPATH/$DNAME/

wget -b --continue https://ndownloader.figshare.com/articles/11710002/versions/1 --output-document=Global-alpine-biomes.zip
```
