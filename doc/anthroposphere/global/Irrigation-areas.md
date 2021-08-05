# Global Irrigation Areas

https://zenodo.org/record/4659476

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh

mkdir -p $GISDATA/antroposphere/global/Irrigation-Areas
cd $GISDATA/antroposphere/global/Irrigation-Areas

wget --continue "https://zenodo.org/record/4659476/files/v3b_combined_2015.tif?download=1" --output-document v3b_combined_2015.tif
unzip -u CroplandPastureArea2000_Geotiff.zip
```
