## modis burned area
##http://modis-fire.umd.edu/BA_getdata.html
##active fires
##ftp://fuoco.geog.umd.edu/ ## user fire, passwd burnt
## o mejor la página de FIRMS
## https://earthdata.nasa.gov/data/near-real-time-data/firms/active-fire-data

mkdir -p ~/sensores/Modis/FIRMS
cd ~/sensores/Modis/FIRMS

## alli consultamos https://firms.modaps.eosdis.nasa.gov/download/request.php
## y llenamos el formulario
## -74 -58 0 13
##Area of Interest: Custom Polygon (View Map)
##Date Range: 2004-01-01 TO 2004-12-31
##Data Format: shp
##Request Date: 2014-04-04 21:23:50
##cd ~/CEBA/data/gisdata/FIRMS
wget https://firms.modaps.eosdis.nasa.gov/download/tmp/firms114461396662301_MCD14ML.zip


## Area of Interest: Custom Polygon (View Map)
## Date Range: 2005-01-01 TO 2005-12-31
## Data Format: shp
## Request Date: 2014-04-05 07:02:55
wget https://firms.modaps.eosdis.nasa.gov/download/tmp/firms114481396698301_MCD14ML.zip

## Area of Interest: Custom Polygon (View Map)
## Date Range: 2000-01-01 TO 2000-12-31
## Data Format: shp
## Request Date: 2014-04-06 18:42:39
wget https://firms.modaps.eosdis.nasa.gov/download/tmp/firms114571396824306_MCD14ML.zip

## Date Range: 2001-01-01 TO 2001-12-31
## Request Date: 2014-04-06 19:00:14
wget https://firms.modaps.eosdis.nasa.gov/download/tmp/firms114581396827901_MCD14ML.zip


##Date Range: 2002-01-01 to 2002-12-31
##Date of Request: 2014-09-15 12:03:24
wget https://firms.modaps.eosdis.nasa.gov/download/tmp/firms150621410799501_MCD14ML.zip

##Date Range: 2003-01-01 TO 2003-12-31
##Request Date: 2014-09-15 16:18:12
wget https://firms.modaps.eosdis.nasa.gov/download/tmp/firms150821410814100_MCD14ML.zip

##Date Range: 2006-01-01 TO 2006-12-31
##Request Date: 2014-09-15 17:09:43
wget  https://firms.modaps.eosdis.nasa.gov/download/tmp/firms150831410817502_MCD14ML.zip


## Date Range: 2007-01-01 TO 2007-12-31
## Request Date: 2015-01-27 10:24:22
wget  https://firms.modaps.eosdis.nasa.gov/download/tmp/firms182491422373753_MCD14ML.zip
## Date Range: 2008-01-01 TO 2008-12-31
## Request Date: 2015-01-27 10:29:03
wget https://firms.modaps.eosdis.nasa.gov/download/tmp/firms182501422373770_MCD14ML.zip

## Date Range: 2009-01-01 TO 2009-12-31
## Request Date: 2015-01-27 11:00:26
wget https://firms.modaps.eosdis.nasa.gov/download/tmp/firms182531422377101_MCD14ML.zip

##Date Range: 2010-01-01 TO 2010-12-31
## Request Date: 2015-01-27 11:02:04
wget https://firms.modaps.eosdis.nasa.gov/download/tmp/firms182541422377112_MCD14ML.zip

## Date Range: 2011-01-01 TO 2011-12-31
## Request Date: 2015-01-27 11:03:04
wget --continue https://firms.modaps.eosdis.nasa.gov/download/tmp/firms182551422377124_MCD14ML.zip
wget --continue https://firms.modaps.eosdis.nasa.gov/download/tmp/firms183431422636301_MCD14ML.zip

##Date Range: 2012-01-01 TO 2012-12-31
## Request Date: 2015-01-27 13:32:35
wget --continue https://firms.modaps.eosdis.nasa.gov/download/tmp/firms182651422384301_MCD14ML.zip
##Date Range: 2013-01-01 TO 2013-12-31
## Request Date: 2015-01-27 13:34:23
wget --continue https://firms.modaps.eosdis.nasa.gov/download/tmp/firms182661422384314_MCD14ML.zip
##Date Range: 2014-01-01 TO 2014-12-31
## Request Date: 2015-01-27 13:35:57
wget --continue https://firms.modaps.eosdis.nasa.gov/download/tmp/firms182671422384327_MCD14MDT.zip

##Date Range: 2015-01-01 to 2015-12-31
##Date of Request: 2016-03-16 10:00:38
wget --continue https://firms.modaps.eosdis.nasa.gov/download/tmp/firms315181458124226_MCD14DT.zip
##Date Range: 2016-01-01 to 2016-03-16
##Date of Request: 2016-03-16 10:03:10
wget --continue https://firms.modaps.eosdis.nasa.gov/download/tmp/firms315171458124201_MCD14ML.zip
###############
##
