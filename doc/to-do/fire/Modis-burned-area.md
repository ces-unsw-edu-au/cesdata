Burned Area Products (MCD64A1)

The latest version (Collection 6) of the MODIS Global Burned Area Product was released in 2017.

http://modis-fire.umd.edu/ba.html

MODIS Burned Area Product User's Guide at http://modis-fire.umd.edu/files/MODIS_C6_Fire_User_Guide_B.pdf



fuoco.geog.umd.edu
cat ~/.wgetrc
mkdir -p $GISDATA/sensors/Modis/MCD64A1
cd $GISDATA/sensors/Modis/MCD64A1
touch  ~/.wgetrc

## user and password from user guide (chapter 4)
echo "user=XXXX" > ~/.wgetrc
echo "password=XXXX" >> ~/.wgetrc

for ss in h30v12 h29v12 h29v13  h28v13
do
   mkdir  $GISDATA/sensors/Modis/MCD64A1/${ss}
   cd $GISDATA/sensors/Modis/MCD64A1/${ss}
   wget ftp://fuoco.geog.umd.edu/MCD64A1/C6/${ss}/
   wget -i index.html --force-html --continue
done
rm ~/.wgetrc
