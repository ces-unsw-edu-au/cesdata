# ausplots

>
## Citation
>
## Data availability


## Data download

```{r}
library(ausplotsR)
library(dplyr)
my.ausplots.data <- get_ausplots()
names(my.ausplots.data)
my.ausplots.data$site.info %>% slice(1)
#map_ausplots(my.ausplots.data)
my.ausplots.data$veg.PI %>% group_by(site_location_name) %>% summarise(height=max(height,na.rm=T)) %>% select(height) %>% boxplot
my.ausplots.data$veg.PI %>% slice(1)

my.ausplots.data$veg.PI %>% filter(genus_species %in% "Eucalyptus regnans")

Ereg <- get_ausplots(veg.PI=TRUE,
  basal.wedge=TRUE, structural_summaries=TRUE,
  herbarium_determination_search="Eucalyptus marginata")

ausplot_struct <- get_ausplots(veg.PI=FALSE,
    veg.vouch=FALSE, structural_summaries=TRUE)
head(grep("forest",plotdesc,value=T))
head(Eucalyptus_moderata$veg.vouch,10)

```
