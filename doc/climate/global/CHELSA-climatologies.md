# CHELSA Version 1.2

Links to:
/ [Map visualization]()
/ [Webpage](http://chelsa-climate.org/)


#### Citation
> Karger, D.N., Conrad, O., Böhner, J., Kawohl, T., Kreft, H., Soria-Auza, R.W., Zimmermann, N.E., Linder, H.P. & Kessler, M. (2017) Climatologies at high resolution for the earth’s land surface areas. Scientific Data 4, 170122.

#### Technical specification

Technical specification at https://chelsa-climate.org/wp-admin/download-page/CHELSA_tech_specification.pdf

#### Data access

Download from Dryad:
> Karger, D.N., Conrad, O., Böhner, J., Kawohl, T., Kreft, H., Soria-Auza, R.W., Zimmermann, N.E., Linder, H.P., Kessler, M. (2017) Data from: Climatologies at high resolution for the earth’s land surface areas. Dryad Digital Repository. https://doi.org/10.5061/dryad.kd1d4

## Data download and preparation

```bash
mkdir -p $GISDATA/climate/global/CHELSA
cd $GISDATA/climate/global/CHELSA

```

On February 2021 the recommended method is to use the [download server](https://envicloud.wsl.ch/#/?prefix=chelsa%2Fchelsa_V1).

Once in the server, is easy to select the files needed, and download a list of files paths for download with several tools. Here I use wget

```bash
##mv ~/Downloads/envidatS3paths.txt  $GISDATA/climate/global/CHELSA/GDD0
wget -b -nH -x --cut-dirs=3 --continue -i envidatS3paths.txt
```


#### older attempts:

Download from Dryad (not easy to customize)
```bash
cd $GISDATA/clima/CHELSA
mkdir Dryad
 wget --continue http://merritt.cdlib.org/cloudcontainer/mrtstore1/849117839.tar.gz

```

Alternative **link for bulk download**: https://envidatrepo.wsl.ch/uploads/chelsa/chelsa_V1/

```sh
cd $GISDATA/clima/CHELSA

mkdir bioclim/
mkdir chelsa_cmip5_ts/
mkdir chelsa_trace/
￼mkdir climatologies/
￼mkdir -p cmip5/2041-2060/bio
￼mkdir exchelsa/
￼mkdir pmip3/
￼mkdir timeseries/
￼mkdir timeseries20c/

cd  $GISDATA/clima/CHELSA/bioclim
## https://envidatrepo.wsl.ch/uploads/chelsa/chelsa_V1/bioclim/float/
wget https://envidatrepo.wsl.ch/uploads/chelsa/chelsa_V1/bioclim/integer/
￼sed -n 's/.*href="\([^"]*\).*/\1/p' index.html | grep docx > links
sed -n 's/.*href="\([^"]*\).*/\1/p' index.html | grep tif >> links
sed -n 's/.*href="\([^"]*\).*/\1/p' index.html | grep 7z >> links
wget --continue -i links --base=https://envidatrepo.wsl.ch/uploads/chelsa/chelsa_V1/bioclim/integer/


cd cmip5/2041-2060/bio
 wget https://envidatrepo.wsl.ch/uploads/chelsa/chelsa_V1/cmip5/2041-2060/bio/

for ARCH in $(sed -n 's/.*href="\([^"]*\).*/\1/p' index.html | grep tif)
do
 wget --continue https://envidatrepo.wsl.ch/uploads/chelsa/chelsa_V1/cmip5/2041-2060/bio/${ARCH}
done

```

In august 2020 the bioclim link changed, so now:

```sh
 wget https://envidatrepo.wsl.ch/uploads/chelsa/chelsa_V1/climatologies/bio/
 sed -n 's/.*href="\([^"]*\).*/\1/p' index.html | grep tif > links
 wget --continue -i links --base=https://envidatrepo.wsl.ch/uploads/chelsa/chelsa_V1/climatologies/bio/

```
