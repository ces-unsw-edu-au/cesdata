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

wget --continue https://glad.umd.edu/users/Potapov/GLCLUC2020/10d_tiles.zip

https://glad.umd.edu/users/Potapov/GLCLUC2020/Forest_height_2000/
https://glad.umd.edu/users/Potapov/GLCLUC2020/Forest_height_gain_2000_2020/
https://glad.umd.edu/users/Potapov/GLCLUC2020/Forest_height_2020/
http://glad.umd.edu/users/Potapov/GLCLUC2020/Forest_height_loss_2000_2020/
http://glad.umd.edu/users/Potapov/GLCLUC2020/Forest_extent_2000/
http://glad.umd.edu/users/Potapov/GLCLUC2020/Forest_extent_2020/
http://glad.umd.edu/users/Potapov/GLCLUC2020/Built-up_change_2000_2020/

2003 2007 2011 2015 2019
https://glad.geog.umd.edu/Potapov/Global_Crop/Data/Global_cropland_NW_2003.tif
https://glad.geog.umd.edu/Potapov/Global_Crop/Data/Global_cropland_NW_2019.tif

```