## Soil Water Index

Available from the [Copernicus Global Land Service](https://land.copernicus.eu/global/products/swi). Need to log in to VITO COPERNICUS GLOBAL LAND DATA ,search for the SWI product at global scale, with 0.1 degree or 12.5km resolution, based on SSM observations from MetOp-ASCAT. Then place an order for the data set, download link from the order e-mail. [User manual](https://land.copernicus.eu/global/sites/cgls.vito.be/files/products/CGLOPS1_PUM_SWIV3-SWI10-SWI-TS_I2.60.pdf)


```sh
source ~/proyectos/CES/cesdata/env/project-env.sh
mkdir -p $GISDATA/soil/global/COPERNICUS-SWI
cd $GISDATA/soil/global/COPERNICUS-SWI

wget --user=$COPERNICUSUSR --password=$COPERNICUSPWD  ftp://ftp.copernicus.vgt.vito.be/C0061185/SWI_TS_201906300000_ASCAT_V3.0.1/
wget --user=$COPERNICUSUSR --password=$COPERNICUSPWD --continue --force-html -i index.html

```
