---
title: "Vegetación de la Argentina"
description: "Unidades de vegetación de la Argentina"
tags: [tropical glaciers, IUCN RLE]
---

## Description

Unidades de vegetación de la Argentina.

Abstract in Spanish:

> Existen numerosos mapas de la vegetación espontánea de la Argentina. Sin embargo, no contamos aún con uno de todo el país con una resolución que permita distinguir unidades de vegetación dentro de las provincias fitogeográficas descriptas por Cabrera (1976). Analizamos las descripciones de vegetación publicadas en las últimas décadas, con especial atención sobre aquellas que produjeron mapas fisonómico-florísticos. Como resultado de ese análisis, presentamos aquí un mapa fisonómico-florístico de la vegetación espontánea de la Argentina que muestra la heterogeneidad dentro de provincias fitogeográficas. El mapa tiene 50 unidades de vegetación como subdivisiones de las provincias fitogeográficas y el ecotono descritos con anterioridad, acompañadas de una breve descripción de la fisonomía y la composición florística. Proponemos una nomenclatura de las unidades de vegetación según el tipo de vegetación espontánea dominante y especies características, y presentamos material cartográfico electrónico.

## Citation

> Oyarzabal, M., Clavijo, J., Oakley, L., Biganzoli, F., Tognetti, P., Barberis, I., Maturo, H. M., Aragón, R., Campanello, P. I., Prado, D., Oesterheld, M., & León, R. J. (2018). Unidades de vegetación de la Argentina. Ecología Austral, 28(1), 040–063. https://doi.org/10.25260/EA.18.28.1.0.399

## Links 

- Peer reviewed publication available at: 
    - http://ojs.ecologiaaustral.com.ar/index.php/Ecologia_Austral/article/view/399
    - https://doi.org/10.25260/EA.18.28.1.0.399

- Spatial data available at: [Geoportal IDESA](http://geoportal.idesa.gob.ar/layers/geonode%3Aunidades_vegetacion)

## License

Public Domain (PD)

## Data access and pre-processing

Set up destination directory in local file system:

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh

mkdir -p $GISDATA/vegetation/regional/Argentina-vegetacion
cd  $GISDATA/vegetation/regional/Argentina-vegetacion
```

Download directly from geoportal, different output formats.

```sh
wget --continue 'http://geoportal.idesa.gob.ar/geoserver/wfs?format_options=charset%3AUTF-8&typename=geonode%3Aunidades_vegetacion&outputFormat=SHAPE-ZIP&version=1.0.0&service=WFS&request=GetFeature' --output-document=Unidades-vegetacion-Argentina.zip
```


## This dataset is used for...

### IUCN RLE assessment of tropical glaciers 
- [OSF project component](https://osf.io/432sb/)

