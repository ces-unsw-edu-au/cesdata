# Map of the terrestrial ecosystems of Myanmar, Version 1.0

## Citation for this map

> Murray, Nicholas; Keith, David A.; TIzard, Robert; Duncan, Adam; Htut, Win Thuya; Hlaing, Nyan; et al. (2020): Map of the terrestrial ecosystems of Myanmar, Version 1.0. figshare. Dataset. https://doi.org/10.6084/m9.figshare.12364067.v3

> Murray, N.J., Keith, D.A., Tizard, R., Duncan, A., Htut, W.T., Hlaing, N., Oo, A.H., Ya, K.Z., Grantham, H. (2020) Threatened Ecosystems of Myanmar. An IUCN Red List of Ecosystems Assessment. Version 1.0. Wildlife Conservation Society. ISBN: 978-0-9903852-5-7.


```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/ecosystems/regional/Myanmar
cd $GISDATA/ecosystems/regional/Myanmar

wget --continue https://ndownloader.figshare.com/files/24190931 --output-document=MMR_EcosystemsMap.zip


unzip -u MMR_EcosystemsMap.zip

ogrinfo MMR_EcosystemsMap_v1_1.shp -al -geom=no

```
