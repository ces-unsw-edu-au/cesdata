---
title: "SI-Volcanos"
description: "Volcanoes of the World database"
tags: [tropical glaciers, IUCN-GET, IUCN-RLE, wget, excel, xml]
---

## Description

The Volcanoes of the World database is a catalog of Holocene and Pleistocene volcanoes, and eruptions from the past 12,000 years.

## Links

- https://volcano.si.edu/
- https://doi.org/10.5479/si.GVP.VOTW5-2022.5.0
- https://volcano.si.edu/volcanolist_pleistocene.cfm
- https://volcano.si.edu/volcanolist_holocene.cfm

## Citation

> Global Volcanism Program, 2023. [Database] Volcanoes of the World (v. 5.0.4; 17 Apr 2023). Distributed by Smithsonian Institution, compiled by Venzke, E. https://doi.org/10.5479/si.GVP.VOTW5-2022.5.0

@Venzke_2013_Volcano_List


## Data access

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/geology/global/SI-Volcanos
cd $GISDATA/geology/global/SI-Volcanos

wget --continue https://volcano.si.edu/database/list_volcano_holocene_excel.cfm --output-document=GVP_Volcano_List_Holocene.xml
#Need to open in excel and then save as xlsx
wget --continue https://volcano.si.edu/database/list_volcano_pleistocene_excel.cfm --output-document=GVP_Volcano_List_Pleistocene.xml
#Need to open in excel and then save as xlsx
```



## This dataset is used for...

### IUCN RLE assessment of tropical glaciers 

- [OSF project component](https://osf.io/432sb/)

