
Let's try these
https://oceandata.sci.gsfc.nasa.gov/directdataaccess/Level-3%20Mapped/Terra-MODIS/1999/355/

Download instructions here: https://oceancolor.gsfc.nasa.gov/data/download_methods/

Login details for earthdata in ~/.netrc as follow:

```sh
echo "machine urs.earthdata.nasa.gov login USERNAME password PASSWD" > ~/.netrc ; > ~/.urs_cookies
chmod  0600 ~/.netrc
```
where USERNAME and PASSWD are your Earthdata Login credentials.

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/ocean/global/OceanColorData
cd $GISDATA/ocean/global/OceanColorData

wget --load-cookies ~/.urs_cookies --save-cookies ~/.urs_cookies --auth-no-challenge=on --content-disposition https://oceandata.sci.gsfc.nasa.gov/ob/getfile/TERRA_MODIS.19991221_20000320.L3m.SNWI.SST4.sst4.9km.nc
wget --load-cookies ~/.urs_cookies --save-cookies ~/.urs_cookies --auth-no-challenge=on --content-disposition  https://oceandata.sci.gsfc.nasa.gov/ob/getfile/AQUA_MODIS.20020101_20021231.L3m.YR.SST4.sst4.9km.nc

```
