# Present and future Köppen-Geiger climate classification maps

Webpage at http://www.gloh2o.org/koppen/

#### Citation
> Beck, H., Zimmermann, N., McVicar, T. et al. Present and future Köppen-Geiger climate classification maps at 1-km resolution. Sci Data 5, 180214 (2018). https://doi.org/10.1038/sdata.2018.214

#### Data access

Data is available at https://doi.org/10.6084/m9.figshare.6396959


#### Data download and preparation

```sh
mkdir -p $GISDATA//climate-classification/global/koppengeiger_1km
cd $GISDATA//climate-classification/global/koppengeiger_1km
wget --continue https://figshare.com/ndownloader/files/12407516 --output-document=Beck_KG_V1.zip

#ls *zip
#cd $WORKDIR
#unzip -u $GISDATA//climate-classification/global/koppengeiger_1km/Beck_KG_V1.zip
```

|map nr|Code|Description|color code|matching EFG|
|---|---|---|---|---|
| 1 |  Af |  Tropical, rainforest | [0 0 255]|T1.1|
| 2 |  Am |  Tropical, monsoon |  [0 120 255]|---|
| 3 |  Aw |  Tropical, savannah | [70 170 250]|---|
| 4 |  BWh | Arid, desert, hot |  [255 0 0]|---|
| 5 |  BWk | Arid, desert, cold | [255 150 150]|---|
| 6 |  BSh | Arid, steppe, hot |  [245 165 0]|---|
| 7 |  BSk | Arid, steppe, cold | [255 220 100]|---|
| 8 |  Csa | Temperate, dry summer, hot summer |  [255 255 0]|---|
| 9 |  Csb | Temperate, dry summer, warm summer | [200 200 0]|---|
| 10 | Csc | Temperate, dry summer, cold summer | [150 150 0]|---|
| 11 | Cwa | Temperate, dry winter, hot summer |  [150 255 150]|---|
| 12 | Cwb | Temperate, dry winter, warm summer | [100 200 100]|---|
| 13 | Cwc | Temperate, dry winter, cold summer | [50 150 50]|---|
| 14 | Cfa | Temperate, no dry season, hot summer | [200 255 80]|---|
| 15 | Cfb | Temperate, no dry season, warm summer |  [100 255 80]|---|
| 16 | Cfc | Temperate, no dry season, cold summer  | [50 200 0]|---|
| 17 | Dsa | Cold, dry summer, hot summer | [255 0 255]|---|
| 18 | Dsb | Cold, dry summer, warm summer |  [200 0 200]|---|
| 19 | Dsc | Cold, dry summer, cold summer |  [150 50 150]|---|
| 20 | Dsd | Cold, dry summer, very cold winter | [150 100 150]|---|
| 21 | Dwa | Cold, dry winter, hot summer | [170 175 255]|---|
| 22 | Dwb | Cold, dry winter, warm summer |  [90 120 220]|---|
| 23 | Dwc | Cold, dry winter, cold summer |  [75 80 180]|---|
| 24 | Dwd | Cold, dry winter, very cold winter | [50 0 135]|---|
| 25 | Dfa | Cold, no dry season, hot summer |  [0 255 255]|---|
| 26 | Dfb | Cold, no dry season, warm summer | [55 200 255]|---|
| 27 | Dfc | Cold, no dry season, cold summer | [0 125 125]|---|
| 28 | Dfd | Cold, no dry season, very cold winter  | [0 70 95]|---|
| 29 | ET |  Polar, tundra  | [178 178 178]| T6.3|
| 30 | EF |  Polar, frost | [102 102 102]|---|
