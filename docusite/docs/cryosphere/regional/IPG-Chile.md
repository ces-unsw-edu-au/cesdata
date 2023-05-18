---
title: "IPG-Chile"
description: "Inventario Publico de Glaciares - Chile"
tags: [tropical glaciers, IUCN RLE]
---

## Links

- https://dga.mop.gob.cl/Paginas/InventarioGlaciares.aspx
- https://www.ide.cl/index.php/noticias/item/2167-inventario-publico-de-glaciares-2022-disponible-para-la-ciudadania

## Citation

> Dirección General de Aguas (DGA), 2022. METODOLOGÍA DEL INVENTARIO PÚBLICO DE GLACIARES, SDT N°447, 2022. Ministerio de Obras Públicas, Dirección General de Aguas Unidad de Glaciología y Nieves. Realizado por: Casassa, G., Espinoza, A., Segovia, A., Huenante, J.

## Data access and preparation

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

DPATH=cryosphere/regional
DNAME=IPG-Chile

mkdir -p $GISDATA/$DPATH/$DNAME/
cd $GISDATA/$DPATH/$DNAME/

## Download error
# wget --continue https://dga.mop.gob.cl/estudiospublicaciones/mapoteca/Documents/IPG2022.zip

## copy from local download
# scp ~/Downloads/IPG2022.zip $zID@kdm.restech.unsw.edu.au:/srv/scratch/cesdata/gisdata/cryosphere/regional/IPG-Chile/
```

## This dataset is used for...

### IUCN RLE assessment of tropical glaciers 

![](/img/osf-logo.png) 

- [OSF project component](https://osf.io/432sb/)

