# World database on Protected Areas

## About

The World Database on Protected Areas (WDPA) is the most comprehensive global database of marine and terrestrial protected areas, updated on a monthly basis.
[Documentation](http://pp-import-production.s3.amazonaws.com/WDPA_Manual_1_5.pdf)


### Reference
> UNEP-WCMC and IUCN (2021), Protected Planet: The World Database on Protected Areas (WDPA) [Online], March 2021, Cambridge, UK: UNEP-WCMC and IUCN. Available at: www.protectedplanet.net.

### data:

Data downloaded in gdb format from https://www.protectedplanet.net

Regular updates:

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh


mkdir -p $GISDATA/protected/global/WDPA
cd $GISDATA/protected/global/WDPA

# April 2021
wget -b --continue https://d1gam3xoknrgr2.cloudfront.net/current/WDPA_Apr2021_Public.zip
# March 2021
## wget -b --continue https://d1gam3xoknrgr2.cloudfront.net/current/WDPA_Mar2021_Public.zip

```
