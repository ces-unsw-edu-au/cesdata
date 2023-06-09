# USGS:  Ecological land Units

https://www.usgs.gov/centers/gecsc/science/global-ecosystems?qt-science_center_objects=4#qt-science_center_objects

#### Citation
> Roger Sayre; Deniz Karagulle; Charlie Frye; Timothy Boucher; Nicholas H. Wolff; Sean Breyer; Dawn Wright; Madeline Martin; Kevin Butler; Keith Van Graafeiland; Jerry Touval; Leonardo Sotomayor; Jennifer McGowan; Edward T. Game; Hugh Possingham (2020) *An assessment of the representation of ecosystems in global protected areas using new maps of World Climate Regions and World Ecosystems*. **Global Ecology and Conservation**, 21: e00860. DOI [10.1016/j.gecco.2019.e00860](http:doi.org/10.1016/j.gecco.2019.e00860) [Web](https://www.sciencedirect.com/science/article/pii/S2351989419307231)

https://pubs.er.usgs.gov/publication/70187380

#### Data download

https://rmgsc.cr.usgs.gov/ecosystems/datadownload.shtml
https://rmgsc.cr.usgs.gov/outgoing/ecosystems/

#### Data processing


```sh
mkdir -p $GISDATA/ecosystems/USGS/Ecological-Land-Units/
cd $GISDATA/ecosystems/USGS/Ecological-Land-Units/

wget https://rmgsc.cr.usgs.gov/outgoing/ecosystems/Global/
grep zip index.html > enlaces

wget --continue https://rmgsc.cr.usgs.gov/outgoing/ecosystems/Global/World_ELU_2015.zip

# sed -n 's/.*HREF="\([^"]*\).*/\1/p' index.html > enlaces
 ## this one is better for this file:
 grep -Po '(?<=HREF=")[^"]*' index.html | grep LandUnits > ELUs
 wget --continue -i ELUs  --base=https://rmgsc.cr.usgs.gov/ -b

 grep -Po '(?<=HREF=")[^"]*' index.html > enlaces
wget --continue -i enlaces  --base=https://rmgsc.cr.usgs.gov/ -b



```

#### New version: `WorldEcologicalLandUnits2015data`


```sh
mkdir $WORKDIR/ELU
 cd $WORKDIR/ELU
unzip $GISDATA/ecosystems/USGS/Ecological-Land-Units/WorldEcologicalLandUnits2015data.zip
#unzip $GISDATA/ecosystems/USGS/Ecological-Land-Units/WorldEcologicalLandUnits2015symb.zip
#7z x $GISDATA/ecosystems/USGS/Ecological-Land-Units/WorldTerrestrialEcosystemsUSGSEsriTNC2020.mpk
unzip $GISDATA/ecosistemas/NatureServe/af_labeled_ecosys.zip

```


```r
##R --vanilla
require(foreign)
require(dplyr)

colormap <- read.dbf("globalelus_query/World_Ecological_2015.tif.vat.dbf")
##colormap <- read.dbf("globalelu/World_ELU_2015.tif.vat.dbf")

head(table(colormap$ELU))
 str(colormap)

(table(colormap$ELU_Bio_De))
(table(colormap$ELU_GLC_De))

require(readxl)
xwalk <- read_excel("~/proyectos/CES/ecosphere-db/input/xwalks/GETcrosswalk-Sayre-2020.xlsx")

require(raster)
r0 <- raster("globalelus_query/World_Ecological_2015.tif")
r1 <- r0
 colormap %>% filter(EF_Lit_Des %in% "Unconsolidated Sediment" ) %>% pull(Value) -> slc

## wont work with my RAM
values(r1) <- values(r0) %in% slc

colormap$alpha <- 255
colormap$Red <- 0
colormap$Green <- 0
colormap$Blue <- 0
colormap$Red[colormap$Value %in% slc] <- 200

write.table(file="globalelu_colourmap.clr", colormap[,c("Value","Red","Green","Blue","alpha","ELU")], row.names=F, col.names=F)
q()
```


```r
##R --vanilla
require(foreign)
require(dplyr)
require(readxl)
require(raster)

colormap <- read.dbf("Africa_IVC_20130316_final_MG.tif.vat.dbf")
 colormap %>% filter(formation %in% "1.A.1 Tropical Seasonally Dry Forest" ) %>% pull(Value) -> slc


head(colormap)

r0 <- raster("Africa_IVC_20130316_final_MG.tif")
r1 <- r0 %in% slc


 str(colormap)

(table(colormap$ELU_Bio_De))
(table(colormap$ELU_GLC_De))

xwalk <- read_excel("~/proyectos/CES/ecosphere-db/input/xwalks/GETcrosswalk-Sayre-2020.xlsx")

r1 <- r0
 colormap %>% filter(EF_Lit_Des %in% "Unconsolidated Sediment" ) %>% pull(Value) -> slc

## wont work with my RAM
values(r1) <- values(r0) %in% slc

colormap$alpha <- 255
colormap$Red <- 0
colormap$Green <- 0
colormap$Blue <- 0
colormap$Red[colormap$Value %in% slc] <- 200

write.table(file="globalelu_colourmap.clr", colormap[,c("Value","Red","Green","Blue","alpha","ELU")], row.names=F, col.names=F)
q()
```

#### Old version
(This was replaced in repo by `WorldEcologicalLandUnits2015data` see above)

Create a colourmap for QGIS

```sh
cd $WORKDIR
unzip $GISDATA/ecosystems/USGS/Ecological-Land-Units/World_ELU_2015.zip
```

```r
##R --vanilla
require(foreign)
colormap <- read.dbf("globalelu/World_ELU_2015.tif.vat.dbf")
colormap$alpha <- 255
write.table(file="globalelu_colourmap.clr", colormap[,c("Value","Red","Green","Blue","alpha","ClassName")], row.names=F, col.names=F)
q()
```

```sh
mv globalelu_colourmap.clr $GISDATA/ecosystems/USGS/Ecological-Land-Units/
```

Crosswalk with typology available at: https://www.landscale.org/how-it-works/ [PDF](https://www.landscale.org/wp-content/uploads/2020/10/Annex-2-World-Ecosystems-Map-and-IUCN-Typology_V0.2_Oct2020.pdf) but the labels are more generic than the ones in the tif.vat.dbf file.
