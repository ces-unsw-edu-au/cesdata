---
slug: forest-macrogroups-americas
title: Distribution maps for the Forest macrogroups 
authors: jrfep
tags: [Distribution maps, IUCN RLE, OSF cloud storage, QGIS, GPKG, IVC macrogroups]
---

I have been asked a couple of times to share the maps of the forest macrogroups that we assessed with the IUCN Red List of Ecosystems back in 2019.

Here are some instructions to explore and download the maps.

<!--truncate-->

## The assessment

The *IUCN Red List of Ecosystems (RLE) assessment of the forest macrogroups of the Americas*[^1] was a continental level application of the RLE protocol.

The assessment report is accessible in the [RLE assessment database](https://assessments.iucnrle.org/systematics/8).

I am preparing a series of repositories to share results (output data) and code of the assessment[^2].

## The distribution maps
The input maps for the assessment represent _potential distribution_ of vegetation macrogroups of the Americas. Vegetation macrogroups are one level of the* International Vegetation Classification* (know as IVC or EcoVeg[^3]), I have included in our documentation an entry with download scripts for several datasets related to the: [-> Go to the entry](/docs/vegetation/regional/IVC-potential-macrogroups).

### Original raster data
The original spatial data of the vegetation macrogroups for North and South America was prepared by NatureServe and should be available in their data portals:

- [geohub](https://geohub-natureserve.opendata.arcgis.com/maps/Natureserve::macrogroups-of-the-americas-1/explore?location=2.669578%2C114.745000%2C2.74) 
- [MapServer](https://securemaps.natureserve.org/pub2/rest/services/Americas/Macrogroup/MapServer) 

### Derived vector data
I created my own version of the potential distribution maps and shared them in one [OSF repository](https://osf.io/wme3b). 

Many people have requested vector data, so I exported this using the Geopackage (".gpkg") format. This format should open in open source software like QGIS without any problem.


[^1]: Ferrer-Paris, J. R., Zager, I., Keith, D. A., Oliveira-Miranda, M., Rodríguez, J. P., Josse, C., González-Gil, M., Miller, R. M., Zambrana-Torrelio, C., & Barrow, E. (2019) An ecosystem risk assessment of temperate and tropical forests of the Americas with an outlook on future conservation strategies. Conserv. Lett. 12. https://doi.org/10.1111/conl.12623

[^2]: Ferrer-Paris, J. R. (2023, April 5). Lista Roja de Ecosistemas de UICN de los bosques de las Américas. https://doi.org/10.17605/OSF.IO/M6AFP

[^3]: Faber-Langendoen, D., Baldwin, K., Peet, R. K., Meidinger, D., Muldavin, E., Keeler-Wolf, T., & Josse, C. (2018). The EcoVeg approach in the Americas: U.S., Canadian and International Vegetation Classifications. In Phytocoenologia (Vol. 48, Issue 2, pp. 215–237). Schweizerbart. https://doi.org/10.1127/phyto/2017/0165