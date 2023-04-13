# [CRU TS v. 4.03](https://crudata.uea.ac.uk/cru/data/hrg/)

High-resolution gridded datasets of the Climatic Research Unit.

## Citation

> Harris, I., Jones, P.D., Osborn, T.J. and Lister, D.H. (2014), Updated high-resolution grids of monthly climatic observations - the CRU TS3.10 Dataset. International Journal of Climatology 34, 623-642 [doi:10.1002/joc.3711](http://dx.doi.org/10.1002/joc.3711)
> [Revised appendix](https://crudata.uea.ac.uk/cru/data/hrg/Revised_Appendix_3_CLD.pdf)

## Data access

Data is available at:
>
Documentation:

Metadata:


## Data download and preparation

```sh
mkdir -p $GISDATA/climate/global/CRU_TS
cd $GISDATA/climate/global/CRU_TS
wget https://crudata.uea.ac.uk/cru/data/hrg/cru_ts_4.03/Release_Notes_CRU_TS4.03.txt


for VAR in cld dtr frs pet pre tmn tmp tmx vap wet
do
   mkdir -p $GISDATA/climate/global/CRU_TS/$VAR
   cd $GISDATA/climate/global/CRU_TS/$VAR
   wget --continue https://crudata.uea.ac.uk/cru/data/hrg/cru_ts_4.03/cruts.1905011326.v4.03/${VAR}/ -O ${VAR}.list

   for ARCH in $(grep nc.gz ${VAR}.list | sed -n 's/.*href="\([^"]*\).*/\1/p')
   do
      wget --continue https://crudata.uea.ac.uk/cru/data/hrg/cru_ts_4.03/cruts.1905011326.v4.03/${VAR}/${ARCH}
   done
done

```




```sh
cd $WORKDIR
ls $GISDATA/climate/global/CRU_TS

cp $GISDATA/climate/global/CRU_TS/cru_ts4.03.1901.2018.pre.dat.nc.gz .
gunzip cru_ts4.03.1901.2018.pre.dat.nc.gz

cp $GISDATA/climate/global/CRU_TS/cru_ts4.03.1901.2018.pet.dat.nc.gz .
gunzip cru_ts4.03.1901.2018.pet.dat.nc.gz

gdalinfo NETCDF:"cru_ts4.03.1901.2018.pre.dat.nc" -sd 1 | less

```
