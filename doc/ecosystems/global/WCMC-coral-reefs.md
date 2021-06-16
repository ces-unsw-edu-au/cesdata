# Global-Coral-Reefs-2018

#### citation

> UNEP-WCMC, WorldFish Centre, WRI, TNC (2018). Global distribution of warm-water coral reefs, compiled from multiple sources including the Millennium Coral Reef Mapping Project. Version 4.0. Cambridge (UK): UN Environment World Conservation Monitoring Centre. URL: http://data.unep-wcmc.org/datasets/1

> IMaRS-USF (Institute for Marine Remote Sensing-University of South Florida) (2005). Millennium Coral Reef Mapping Project. Unvalidated maps. These maps are unendorsed by IRD, but were further interpreted by UNEP World Conservation Monitoring Centre. Cambridge (UK): UNEP World Conservation Monitoring Centre

> Spalding MD, Ravilious C, Green EP (2001). World Atlas of Coral Reefs. Berkeley (California, USA): The University of California Press. 436 pp.

> IMaRS-USF, IRD (Institut de Recherche pour le Developpement) (2005). Millennium Coral Reef Mapping Project. Validated maps. Cambridge (UK): UNEP World Conservation Monitoring Centre

#### data access
```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh


mkdir -p $GISDATA/ecosystems/global/WCMC-coral-reefs
cd $GISDATA/ecosystems/global/WCMC-coral-reefs

wget --continue http://wcmc.io/WCMC_008 --output-document=WCMC_008.zip

```
