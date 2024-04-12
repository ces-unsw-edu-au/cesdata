---
title: "Vegetación de Bolivia"
description: "Vegetación de Bolivia"
tags: [tropical glaciers, IUCN RLE, DataBasin, ogr, shapefile]
---

## Description

"Vegetación de Bolivia" 

Data Provided By:
    TNC & RUMBOL 

Content date:
    not specified 

Citation:
    G. Navarro & W. Ferreira 

Spatial Resolution:
    1:250,000

Temporal Resolution:
    Static, the layer name refers to the year 2007, but unclear the time frame of the underlying data.

Contact Organization:
    TNC 

Contact Person(s):

        Javier chambi 

Use Constraints:
    Creative Commons License
    This work is licensed under a Creative Commons Attribution 3.0 License.

Uploaded by:

    [Conservation Biology Institute](https://databasin.org/people/consbio/)

## Citation:

Related to:

> Clasificación de la Vegetación de Bolivia. January 2011. Edition: 1ªPublisher: Centro de Ecología Difusión Simón I. PatiñoEditor: Centro de Ecología Difusión Simón I. Patiño, Santa Cruz de la Sierra (Bolivia)ISBN: 978-99954-776-2-2. Authors: Gonzalo Navarro. Universidad Católica Boliviana "San Pablo", 

> Mapa Biogeografico Bolivia Doblecarta. In book: NAVARRO, G. W. FERREIRA (2009) Biogeografía y Mapa Biogeográfico de Bolivia. Capítulo En: Libro Rojo de Parientes Silvestres de Bolivia VMABCC – BIOVERSITY INTERNATIONAL PLURAL EDITORES. La Paz, Bolivia.Publisher: VMABCC – BIOVERSITY INTERNATIONAL PLURAL EDITORES. La Paz, Bolivia. Gonzalo Navarro (Universidad Católica Boliviana "San Pablo", Cochabamba) and Wanderley Ferreira (RUMBOL, Cochabamba, Bolivia).


## Links

- Found at [Data Basin](https://databasin.org/datasets/c55afd11a959403e8ba538f6edf708fe/)

- Available at the [IABIN - Ecosystem Thematic Network](https://databasin.org/galleries/5f72b9f7b2894ba387516a1e81f8096a/) gallery

- Some sources in [ResearchGate](https://www.researchgate.net/publication/331653339_Mapa_Biogeografico_Bolivia_Doblecarta)



## Data access and pre-processing

Manual download from Data Basin. Login required.

Copy to our local directory:

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh

mkdir -p $GISDATA/vegetation/regional/Bolivia-vegetacion
cd  $GISDATA/vegetation/regional/Bolivia-vegetacion

## download and copy
##cp ~/Downloads/'Vegetacion de Bolivia.zip' $GISDATA/vegetation/regional/Bolivia-vegetacion

```
Unzip in a temporal repository

```sh
unzip -u $GISDATA/vegetation/regional/Bolivia-vegetacion/'Vegetacion de Bolivia.zip' -d $TMPDIR

```

Explore data with `ogrinfo`:
```sh
ogrinfo -al $TMPDIR/data/commondata/data0/vegetacion_2007.shp -geom=no | less

```

Query data with descriptions of 'subnival' vegetation close to glaciers:

```sh
ogrinfo -al data/commondata/data0/vegetacion_2007.shp -geom=no -sql "SELECT DESCRIP, descr_abb FROM vegetacion_2007 WHERE DESCRIP like '%nival%'"
```


Data is in WGS 84 / Pseudo-Mercator projection, it has 2709 features with class codes, short and extended descriptions. Vegetation units are referred as ecological systems and the classification is related to the IVC or EcoVeg classification approach.

## This dataset is used for...

### IUCN RLE assessment of tropical glaciers 
- [OSF project component](https://osf.io/432sb/)


### IUCN RLE assessment in Bolivia 

Work in progress...
