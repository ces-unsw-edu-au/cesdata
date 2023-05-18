---
title: "Mining-footprint"
description: "Global mining footprint"
tags: [Venezuela,deforestation,zenodo]
---

## Description

From original repository:

> Mining is of major economic, environmental and societal consequence, yet  knowledge and understanding of its global footprint is still limited. Here, we produce a global mining land use dataset via remote sensing analysis of high-resolution, publicly available satellite imagery. The dataset comprises 74,548 polygons, covering ~66,000 km2 of features like waste rock dumps, pits, water ponds, tailings dams, heap leach pads and processing/milling infrastructure. Our polygons finely contour the edges of mine features and do not include the space between them. This distinguishes our dataset from others that employ broader definitions of mining lands. Hence, despite our database being the largest to date by number of polygons, comparisons show relatively lower global land use. Our database is made freely available to support future studies of global mining impacts. A series of spatial analyses are also presented that highlight global mine distribution patterns and broader environmental risks.

## Citation
Tang, L., Werner, T.T. Global mining footprint mapped from high-resolution satellite imagery. Commun Earth Environ 4, 134 (2023). https://doi.org/10.1038/s43247-023-00805-6

### Data citation
Tang, Liang, & Werner, Tim T. (2023). Global mining footprint mapped from high-resolution satellite imagery. Communications earth & environment, 4(134). https://doi.org/10.5281/zenodo.7894216


## Data download and preparation


```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/antroposphere/global/mining-footprint
cd $GISDATA/antroposphere/global/mining-footprint
```

### Download from Zenodo

We use the [zenodo_get](https://gitlab.com/dvolgyes/zenodo_get) python tool to download the whole repo:

```sh
source $HOME/.venvs/GIS-python/bin/activate
python -m zenodo_get 10.5281/zenodo.7894216 -m -e -k
```

Check downloaded file

```sh
ogrinfo 74548_projected\ polygons.shp -al -geom=no | less
```

## This dataset is used for...

- Deforestation analysis in Venezuela [GitHub repo](https://github.com/NeoMapas/datos-deforestacion-venezuela)