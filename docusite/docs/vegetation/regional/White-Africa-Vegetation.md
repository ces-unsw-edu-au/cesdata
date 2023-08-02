---
title: "Vegetation map Africa"
description: "White's vegetation map of Africa"
tags: [IUCN GET]
---

# White's vegetation map of Africa

> White, F. (1983) The Vegetation of Africa, a Descriptive Memoir to Accompany the UNESCO/AETFAT/UNSO Vegetation Map of Africa (3 Plates, Northwestern Africa, Northeastern Africa, and Southern Africa, 1:5,000,000. UNESCO, Paris.
https://openlibrary.org/books/OL16203606M/Vegetation_of_Africa

> The UNESCO/AETFAT/UNSO (White's) Vegetation Map of Africa was published in 1983 after more than 15 years of collaboration between UNESCO and AETFAT (Association pour l'Etude Taxonomique de la Flore De l'Afrique Tropicale). The original product comprises three map sheets at a scale of 1:5,000,000. These maps were digitized by GRID in their original Miller Oblated Stereographic Projection, and later rasterized at a cell (pixel) size of 30 seconds latitude/longitude resolution (approximately one-kilometer square). The digital product distributed by GRID covers the entire continent of Africa and Madagascar in a single data file.

Alternative versions of the spatial data are available at the GeoScience Lab Landscape portal:
http://www.landscapesportal.org/layers/geonode:white_shp
http://landscapeportal.org/layers/geonode%3Aafrica_white

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh

mkdir -p $GISDATA/vegetation/regional/Africa
cd $GISDATA/vegetation/regional/Africa

module add python/3.8.3 perl/5.28.0 gdal/3.2.1 geos/3.8.1


wget --continue "http://landscapeportal.org/geoserver/wfs?format_options=charset%3AUTF-8&typename=geonode%3Aafrica_white&outputFormat=SHAPE-ZIP&version=1.0.0&service=WFS&request=GetFeature" --output-document=White-Africa-Vegetation.zip

wget --continue "http://landscapeportal.org/geoserver/wfs?format_options=charset%3AUTF-8&typename=geonode%3Awhite_shp&outputFormat=SHAPE-ZIP&version=1.0.0&service=WFS&request=GetFeature" --output-document=White-Africa-Vegetation-alt2.zip

## this did not work
## ogr2ogr -f GeoJSON White-Africa-Vegetation.json "http://landscapeportal.org/geoserver/wfs?srsName=EPSG%3A4326&typename=geonode%3Aafrica_white&outputFormat=json&version=1.0.0&service=WFS&request=GetFeature" GeoJSONSeq

```

The attribute table of the shapefiles does not have complete information, and use different nomenclature for the codes. We will need to find a table that matches the codes to vegetation classes and descriptions.
