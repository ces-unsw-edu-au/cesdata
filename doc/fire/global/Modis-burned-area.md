Burned Area Products (MCD64A1)

The latest version (Collection 6.1) of the MODIS Global Burned Area Product was released in 2017.

http://modis-fire.umd.edu/ba.html

MODIS Burned Area Product User's Guide at 
http://modis-fire.umd.edu/files/MODIS_C6_Fire_User_Guide_B.pdf
https://modis-fire.umd.edu/files/MODIS_C61_BA_User_Guide_1.1.pdf


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

sftp fire@fuoco.geog.umd.edu
cd data/MODIS/C61/MCD64A1/HDF/h30v12/
get MCD64A1*

for ss in h30v12 #h29v12 h29v13  h28v13
do
   wget ftp://$SRV/data/MODIS/$VRS/$PRD/HDF/${ss}/
   wget -i index.html --force-html --continue
done
rm ~/.wgetrc

```