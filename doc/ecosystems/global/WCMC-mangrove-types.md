# Mangrove-Typology-2020
A global biophysical typology of mangroves

## Citation

> Worthington, T.A., zu Ermgassen, P.S.E., Friess, D.A., Krauss, K.W., Lovelock, C.E., Thorley, J., Tingey, R., Woodroffe, C.D., Bunting, P., Cormier, N., Lagomasino, D., Lucas, R., Murray, N.J., Sutherland, W.J., Spalding, M., 2020. A global biophysical typology of mangroves and its relevance for ecosystem structure and deforestation. Sci. Rep. 10, 14652. https://doi.org/10.1038/s41598-020-71194-5

## Data access

Available at WCMC:
https://data.unep-wcmc.org/datasets/48

## Data download and preparation

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh


mkdir -p $GISDATA/ecosystems/global/WCMC-mangrove-types
cd $GISDATA/ecosystems/global/WCMC-mangrove-types

wget --continue https://wcmc.io/TNC-006 --output-document=WCMC-mangrove-types.zip

```

Check download
```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh


cd $WORKDIR

unzip $GISDATA/ecosystems/global/WCMC-mangrove-types/WCMC-mangrove-types.zip
tree TNC-006_BiophysicalTypologyMangroves/


```
