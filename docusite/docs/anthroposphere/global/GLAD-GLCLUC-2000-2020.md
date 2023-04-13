# Global Land Cover and Land Use Change, 2000-2020
Datasets: https://glad.umd.edu/dataset/GLCLUC2020
Tool: https://glad.umd.edu/ard/home

## Citation
> Potapov P., Hansen M.C., Pickens A., Hernandez-Serna A., Tyukavina A., Turubanova S., Zalles V., Li X., Khan A., Stolle F., Harris N., Song X.-P., Baggett A., Kommareddy I., Kommareddy A. (2022) The global 2000-2020 land cover and land use change dataset derived from the Landsat archive: first results. Frontiers in Remote Sensing [https://doi.org/10.3389/frsen.2022.856903] 

> P. Potapov, X. Li, A. Hernandez-Serna, A. Tyukavina, M.C. Hansen, A. Kommareddy, A. Pickens, S. Turubanova, H. Tang, C.E. Silva, J. Armston, R. Dubayah, J. B. Blair, M. Hofton (2020) Mapping and monitoring global forest canopy height through integration of GEDI and Landsat data. Remote Sensing of Environment, 112165. https://doi.org/10.1016/j.rse.2020.112165 

P. Potapov, S. Turubanova, M.C. Hansen, A. Tyukavina, V. Zalles, A. Khan, X.-P. Song, A. Pickens, Q. Shen, J. Cortez. (2021) Global maps of cropland extent and change show accelerated cropland expansion in the twenty-first century. Nature Food. https://doi.org/10.1038/s43016-021-00429-z 


```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/antroposphere/global/GLAD-GLCLUC
cd $GISDATA/antroposphere/global/GLAD-GLCLUC

wget -b --continue https://glad.umd.edu/users/Potapov/GLCLUC2020/10d_tiles.zip

SRV=https://glad.umd.edu/users/Potapov/GLCLUC2020/
for YEAR in 2000 2020 
do 
    VAR=Forest_height_${YEAR}
    curl --create-dirs --output-dir $VAR -C - -O $SRV/$VAR/${YEAR}_[0-1]0N_0[5-7]0W.tif
done 

for YEAR in 2000 2020 
do 
    VAR=Forest_extent_${YEAR}
    curl --create-dirs --output-dir $VAR -C - -O $SRV/$VAR/[0-1]0N_0[5-7]0W.tif
done 


for VAR in Built-up_change_2000_2020
do 
    curl --create-dirs --output-dir $VAR -C - -O $SRV/$VAR/Change_[0-2]0N_0[5-8]0W.tif
done 


for SFX in loss gain 
do 
    VAR=Forest_height_${SFX}_2000_2020
    curl --create-dirs --output-dir $VAR -C - -O $SRV/$VAR/net${SFX}_[0-1]0N_0[5-7]0W.tif
done 

mkdir -p $GISDATA/antroposphere/global/GLAD-GLCLUC/Croplands
cd $GISDATA/antroposphere/global/GLAD-GLCLUC/Croplands

for YEAR in 2003 2007 2011 2015 2019
do 
    wget -b --continue https://glad.geog.umd.edu/Potapov/Global_Crop/Data/Global_cropland_NW_${YEAR}.tif
done
```