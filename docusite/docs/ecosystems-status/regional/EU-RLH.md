---
title: "EUplus RLH"
description: "European Red List of habitats"
tags: [IUCN RLE, RLE spatial data]
---


## Links

[Data deliverables](https://forum.eionet.europa.eu/european-red-list-habitats/library/project-deliverables-data)


## Data access and download

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh
mkdir -p $GISDATA/ecosystems-status/regional/EU-RLH
cd $GISDATA/ecosystems-status/regional/EU-RLH

wget --continue https://forum.eionet.europa.eu/european-red-list-habitats/library/project-deliverables-data/geodatabases/zip_export/do_export --output-document=geodatabases.zip
```

## Data preparation

Unzip and change permission

```sh
unzip -u geodatabases.zip -d $WORKDIR
# for some obscure reason this is read-protected
chmod 740 $WORKDIR/Geodatabases/*
chmod 640 $WORKDIR/Geodatabases/*/*.*
```

### With R

```r

```