---
title: "FML"
description: "Global forest management data, 100m, (2015)"
tags: [deforestation,Venezuela,wget,OGR,python,zenodo]
---


Global forest management data at a 100m resolution for the year 2015

## Citation

> Myroslava Lesiv, Dmitry Schepaschenko, Marcel Buchhorn, Linda See, Martina Dürauer, Ivelina Georgieva, Martin Jung, Florian Hofhansl, Katharina Schulze, Andrii Bilous, Volodymyr Blyshchyk, Liudmila Mukhortova, Carlos Luis Muñoz Brenes, Leonid Krivobokov, Stephan Ntie, Khongor Tsogt, Stephan Alexander Pietsch, Elena Tikhonova, Moonil Kim, … Steffen Fritz. (2021). Global forest management data at a 100m resolution for the year 2015 [Data set]. In Nature Scientific Data (Version 3). Zenodo. https://doi.org/10.5281/zenodo.5879022

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/forest/global/forest-management
cd $GISDATA/forest/global/forest-management

wget --continue 'https://zenodo.org/record/5879022/files/FML_v3-2_with-colorbar.tif?download=1' --output-document=FML_v3-2_with-colorbar.tif
```

### Download from Zenodo

Or better, use the [zenodo_get](https://gitlab.com/dvolgyes/zenodo_get) python tool to download the whole repo:

```sh
source $HOME/.venvs/GIS-python/bin/activate
python -m zenodo_get 10.5281/zenodo.5879022 -m -e -k
```

## This dataset is used for...

- Deforestation analysis in Venezuela [GitHub repo](https://github.com/NeoMapas/datos-deforestacion-venezuela)