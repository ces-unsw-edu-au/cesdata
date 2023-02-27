Burned Area Products (MCD64A1)
Global fire location product (MCD14ML)


The latest version (Collection 6.1) of the MODIS Global Burned Area Product was released in 2017.

http://modis-fire.umd.edu/ba.html

MODIS Burned Area Product User's Guide at 
http://modis-fire.umd.edu/files/MODIS_C6_Fire_User_Guide_B.pdf
https://modis-fire.umd.edu/files/MODIS_C61_BA_User_Guide_1.1.pdf

MODIS Collection 6 and Collection 6.1 Active Fire Product User's Guide v1.0 (May 2021): 
https://modis-fire.umd.edu/files/MODIS_C6_C6.1_Fire_User_Guide_1.0.pdf


```sh

mkdir -p $GISDATA/fire/global/MCD64A1/HDF
cd $GISDATA/fire/global/MCD64A1/HDF

touch  ~/.wgetrc
## user and password from user guide (chapter 4)
echo "user=XXXX" > ~/.wgetrc
echo "password=XXXX" >> ~/.wgetrc

SRV=fuoco.geog.umd.edu
VRS=C61
PRD=MCD64A1

mkdir -p $GISDATA/fire/global/MCD64A1/HDF/
cd $GISDATA/fire/global/MCD64A1/HDF/

sftp fire@fuoco.geog.umd.edu
cd data/MODIS/C61/MCD64A1/HDF/
lmkdir h30v12 
lmkdir h29v12 
lmkdir h29v13  
lmkdir h28v13

lcd ../h30v12
get h30v12/MCD64A1.A2014*
lcd ../h29v12
get h29v12/MCD64A1.A2014*
lcd ../h29v13
get h29v13/MCD64A1.A2014*
lcd ../h28v13
get h28v13/MCD64A1.A2014*
bye

rm ~/.wgetrc

```



```sh
mkdir -p $GISDATA/fire/global/MCD14ML/
cd $GISDATA/fire/global/MCD14ML/
sftp fire@fuoco.geog.umd.edu
cd data/MODIS/C6/MCD14ML
ls MCD14ML.200*
progress
get -p MCD14ML.200*
get -p MCD14ML.202*
get -p MCD14ML.201*




```

