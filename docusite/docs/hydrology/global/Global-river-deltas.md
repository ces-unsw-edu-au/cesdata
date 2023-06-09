# Global River Deltas and vulnerability

> Global river delta dataset combines 2174 delta locations with polygons that define delta area. We define delta area as the extent of geomorphic activity created by deltaic channel movement, and delta progradation. We focus on channel network activity because it defines the most flood-prone zone and creates the resources and natural infrastructures that make deltas attractive sites for habitation. We define deltaic polygons with five points that encompass deltaic activity. These five points mark visible traces of deltaic activity with two points capturing the lateral extent of deposition along the shoreline, and with three points enclosing the up and downstream extent of deposition. The convex hull around these five points defines a delta polygon.

#### Citation

> Edmonds, D.A., Caldwell, R.L., Brondizio, E.S. et al. Coastal flooding will disproportionately impact people on river deltas. Nat Commun 11, 4741 (2020). https://doi.org/10.1038/s41467-020-18531-4
> Caldwell, R. L., Edmonds, D. A., Baumgardner, S., Paola, C., Roy, S., and Nienhuis, J. H.: A global delta dataset and the environmental variables that predict delta formation on marine coastlines, Earth Surf. Dynam., 7, 773–787, https://doi.org/10.5194/esurf-7-773-2019, 2019.

#### Data access


Original data for delta polygons in: https://static-content.springer.com/esm/art%3A10.1038%2Fs41467-020-18531-4/MediaObjects/41467_2020_18531_MOESM3_ESM.xlsx

Code for recreating dataset using matlab: https://scholarworks.iu.edu/dspace/handle/2022/25788



#### Data download and preparation

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh

mkdir -p $GISDATA/hydrology/global/River-Deltas
cd $GISDATA/hydrology/global/River-Deltas

wget --continue https://static-content.springer.com/esm/art%3A10.1038%2Fs41467-020-18531-4/MediaObjects/41467_2020_18531_MOESM3_ESM.xlsx
wget --continue  https://esurf.copernicus.org/articles/7/773/2019/esurf-7-773-2019-supplement.zip
 unzip -u esurf-7-773-2019-supplement.zip
```

Create spatial polygons in R:
```sh
module add  R/4.0.2
R --vanilla
```

```{r}
require(readxl)
require(dplyr)
require(sf)
require(tidyr)
require(ggplot2)
require(rnaturalearth)
require(rnaturalearthdata)
require(rgeos)
theme_set(theme_bw())
setwd("~/Downloads")

xdata <- read_excel("41467_2020_18531_MOESM3_ESM.xlsx",skip=2)

pivot_wider()

xdata %>% select("ID",ends_with("_Lat"),ends_with("_Lon")) %>%
  pivot_longer(cols=c(ends_with("Lon"),ends_with("Lat")), names_to=c("point","coord"),
               names_sep=3, values_to = "value") %>%
  pivot_wider(id_cols=c("ID","point"),names_from='coord',values_from = 'value') -> my_df


my_sf <- st_as_sf(my_df,
                     coords = c('Lon', 'Lat')) %>%
  st_set_crs(4326) %>%
  group_by(ID) %>%
  summarise() %>%
  ungroup() %>%  # Just in case
  st_convex_hull()

plot(my_sf)

##st_write(my_sf,"delta-polygons.gpkg")

world <- ne_countries(scale = "medium", returnclass = "sf")
class(world)

ggplot(data = world) +
  geom_sf(fill = "antiquewhite1") +
  geom_sf(data = my_sf, fill = "red",colour=2) +
  coord_sf(xlim = c(-108, -68), ylim = c(-24.5, 33), expand = FALSE)


ggplot(data = world,fill='aliceblue',colour='orange') +
  geom_sf(colour = "grey76",fill='grey95',alpha=.2) +
  geom_sf(data = my_sf, fill = "red",colour=2)

```

#### Notes
*
