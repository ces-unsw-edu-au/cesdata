---
title: "Censo Agricola Venezuela"
description: "Data from SIGMAT, Venezuela"
tags: [Venezuela, deforestation, Tropical Alpine]
---


## Citation

> Gustavo Aguerrevere & Maria M. Primera (2008) HERRAMIENTAS DE GEOMÁTICA DESARROLLADAS Y EMPLEADAS EN EL CPDI PARA EL APOYO A LA GESTIÓN AGRÍCOLA.
> En agradecimientos mencionar al SIGMAT del Ministerio de Agricultura y Tierras

## Data description


## Links

- https://www.cepal.org/pt-br/node/35156
- http://censo.mat.gob.ve/ (broken link)

## Data download

Data provided by Grisel Velasquez, from UniSIG, Centro de Ecologia, IVIC. 

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh
mkdir -p $GISDATA/antroposphere/regional/SIGMAT
cd $GISDATA/antroposphere/regional/SIGMAT

```

## Data preparation

### with GDAL and OGR


```sh

cd $WORKDIR
unzip -u $GISDATA/antroposphere/regional/SIGMAT/DatosautorizadosdelSIGMATparaIVIC2014.zip -d $WORKDIR

ogrinfo DatosautorizadosdelSIGMATparaIVIC2014/vene_segm_zulia.shp vene_segm_zulia -geom=no
ogrmerge.py -o tmp.gpkg DatosautorizadosdelSIGMATparaIVIC2014/vene_segm_zulia.shp\
    DatosautorizadosdelSIGMATparaIVIC2014/vene_segm_tachira.shp\
    DatosautorizadosdelSIGMATparaIVIC2014/vene_segm_merida.shp\
    DatosautorizadosdelSIGMATparaIVIC2014/vene_segm_trujillo.shp\
    DatosautorizadosdelSIGMATparaIVIC2014/vene_segm_lara.shp\
    -f GPKG -single -nln sigmat_segm 

ogr2ogr SIGMAT-segm.gpkg tmp.gpkg -nlt MULTIPOLYGON -dialect SQLite \
    -nln sigmat_segm\
    -sql "SELECT *, CASE WHEN GRID_CODE = 1 THEN 'Área Agrícola' WHEN GRID_CODE = 2 THEN 'Pastizal' WHEN GRID_CODE = 30 THEN 'Bosque' WHEN GRID_CODE = 31 THEN 'Plantación Forestal' WHEN GRID_CODE = 32 THEN 'Matorral' WHEN GRID_CODE = 40 THEN 'Eriales' WHEN GRID_CODE = 41 THEN 'Área Inundable' WHEN GRID_CODE = 42 THEN 'Cuerpos de Agua' WHEN GRID_CODE = 5 THEN 'Área Urbana'  ELSE '' END Clase FROM sigmat_segm;" 

zip SIGMAT-segm.zip SIGMAT-segm.gpkg 
bzip2 SIGMAT-segm.gpkg 
xz --format=lzma SIGMAT-segm.gpkg
ls -lah SIGMAT-segm.*

rm tmp.gpkg
ogrmerge.py -o tmp.gpkg DatosautorizadosdelSIGMATparaIVIC2014/CEREALES.shp\
    DatosautorizadosdelSIGMATparaIVIC2014/CULTIVOS_TROPICALES.shp\
    DatosautorizadosdelSIGMATparaIVIC2014/FRUTAS_TROPICALES.shp\
    DatosautorizadosdelSIGMATparaIVIC2014/GRANOS_Y_LEGUMINOSAS.shp\
    DatosautorizadosdelSIGMATparaIVIC2014/HORTALIZAS.shp\
    DatosautorizadosdelSIGMATparaIVIC2014/RAICES_Y_TUBERCULOS.shp\
    DatosautorizadosdelSIGMATparaIVIC2014/TEXTILES_Y_OLEAGINOSAS.shp\
    -f GPKG -single -nln rubros
ogr2ogr SIGMAT-censo-agricola.gpkg tmp.gpkg -spat -73.377670 7.364236 -68.887879 11.854234
ogr2ogr SIGMAT-censo-pecuario.gpkg DatosautorizadosdelSIGMATparaIVIC2014/PECUARIO.shp -f GPKG -nln pecuario -spat -73.377670 7.364236 -68.887879 11.854234

tar -cjvf SIGMAT-Andes.tar.bz2 SIGMAT-*gpkg
zip SIGMAT-Andes.zip SIGMAT-*gpkg
tar -czvf SIGMAT-Andes.tar.gz SIGMAT-*gpkg
tar -c --lzma -f SIGMAT-Andes.tar.lzma SIGMAT-*gpkg
```
