# Inventario Publico de Glaciares - Chile

https://dga.mop.gob.cl/Paginas/InventarioGlaciares.aspx
https://www.ide.cl/index.php/noticias/item/2167-inventario-publico-de-glaciares-2022-disponible-para-la-ciudadania

````sh
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