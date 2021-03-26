# glUV: a global UV‐B radiation data set

[Webpage](https://www.ufz.de/gluv/)

#### Citation
> Beckmann M., Václavík T., Manceur A.M., Šprtová L., von Wehrden H., Welk E., Cord A.F. (2014) glUV: A global UV-B radiation dataset for macroecological studies, Methods in Ecology and Evolution, 5: 372–383. ￼doi: 10.1111/2041-210X.12168


#### Data access

Data available on-line at https://www.ufz.de/gluv/index.php?en=32435

#### Data download and preparation


```sh
mkdir -p $GISDATA/sensores/glUV
cd $GISDATA/sensores/glUV

export BASEURL=https://www.ufz.de/export/data/443

for VAR in 56459_UVB1_Annual_Mean_UV-B.asc 56460_UVB2_UV-B_Seasonality.asc 56461_UVB3_Mean_UV-B_of_Highest_Month.asc 56462_UVB4_Mean_UV-B_of_Lowest_Month.asc 56463_UVB5_Sum_of_UV-B_Radiation_of_Highest_Quarter.asc 56464_UVB6_Sum_of_UV-B_Radiation_of_Lowest_Quarter.asc
do
   echo $VAR
   curl -C - -O ${BASEURL}/${VAR}
done

for VAR in 56465_glUV_January_monthly_mean.asc 56466_glUV_February_monthly_mean.asc 56467_glUV_March_monthly_mean.asc 56468_glUV_April_monthly_mean.asc 56468_glUV_April_monthly_mean.asc 56469_glUV_May_monthly_mean.asc 56470_glUV_June_monthly_mean.asc 56471_glUV_July_monthly_mean.asc 56472_glUV_August_monthly_mean.asc 56473_glUV_September_monthly_mean.asc 56474_glUV_October_monthly_means.asc 56475_glUV_November_monthly_means.asc 56476_glUV_December_monthly_means.asc
do
   curl -C - -O ${BASEURL}/${VAR}
done


```
