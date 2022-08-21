# Inventario Nacional de Glaciares - Argentina

https://www.glaciaresargentinos.gob.ar/

> Zalazar, L., Ferri, L., Castro, M., Gargantini, H., Gimenez, M., Pitte, P., . . . Villalba, R. (2020). Spatial distribution and characteristics of Andean ice masses in Argentina: Results from the first National Glacier Inventory. Journal of Glaciology, 66(260), 938-949. doi:10.1017/jog.2020.55

>  IANIGLA-Inventario Nacional de Glaciares. 2018. Resumen ejecutivo de los resultados del Inventario Nacional de Glaciares. IANIGLA-CONICET, Ministerio de Ambiente y Desarrollo Sustentable de la Nación. Pp. 27.

Register and download from https://www.glaciaresargentinos.gob.ar/?page_id=2571

````sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

DPATH=cryosphere/regional
DNAME=NGI-Argentina

mkdir -p $GISDATA/$DPATH/$DNAME/
cd $GISDATA/$DPATH/$DNAME/

## copy from local download
# scp ~/Downloads/00-Shapefile-Completo.zip $zID@kdm.restech.unsw.edu.au:/srv/scratch/cesdata/gisdata/cryosphere/regional/NGI-Argentina/
```
