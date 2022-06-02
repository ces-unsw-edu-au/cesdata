# GEDI - Global Forest Canopy Height, 2019

## Citation
> P. Potapov, X. Li, A. Hernandez-Serna, A. Tyukavina, M.C. Hansen, A. Kommareddy, A. Pickens, S. Turubanova, H. Tang, C.E. Silva, J. Armston, R. Dubayah, J. B. Blair, M. Hofton (2020) Mapping and monitoring global forest canopy height through integration of GEDI and Landsat data. Remote Sensing of Environment, 112165. https://doi.org/10.1016/j.rse.2020.112165

## Data access
In Google Earth Engine
Image Collection id: users/potapovpeter/GEDI_V27
Data provided only within GEDI data range
Data value: Forest canopy height, meters. No data = 0.

## Data Download
Map data within the GEDI data range provided in the geographic coordinates using the WGS84 reference system.
Data format:  8-bit unsigned LZW-compressed GeoTiff. Pixel size is 0.00025 x 0.00025 degree. Data aggregated into continental mosaics.
Pixel values:
- 0-60 Forest canopy height, meters
- 101 Water
- 102 Snow/ice
- 103 No data

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/veglayer/global/GEDI-forest-canopy-height
cd $GISDATA/veglayer/global/GEDI-forest-canopy-height
for rgn in AUS SASIA NAFR SAFR NASIA NAM SAM
do
  wget --continue https://glad.geog.umd.edu/Potapov/Forest_height_2019/Forest_height_2019_${rgn}.tif
done

```
