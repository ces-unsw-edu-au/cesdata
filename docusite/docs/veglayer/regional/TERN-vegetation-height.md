# Vegetation height and structure - derived from ALOS-1 PALSAR, Landsat and ICESat/GLAS, Australia coverage

## source URL:
http://data.auscover.org.au/xwiki/bin/view/Product+pages/ICESat+Vegetation+Structure

## Citation:
> Armston, J., Scarth, P., Lucas, R., Lewis, P., Disney, M., Phinn, S. (2015). *Validation of continental scale vertical plant profile mapping using waveform lidar airborne laser scanning*. In Conference Proceedings: **Silvilaser 2015**, La Grande Motte, France, 28-30 September.

> Hao Tang, John Armston, Steven Hancock, Suzanne Marselis, Scott Goetz, Ralph Dubayah (2019) *Characterizing global forest canopy cover distribution using spaceborne lidar*, **Remote Sensing of Environment** 231: 111262 DOI: [10.1016/j.rse.2019.111262](https://doi.org/10.1016/j.rse.2019.111262.)


```sh

source ~/proyectos/CES/cesdata/env/project-env.sh


mkdir -p $GISDATA/veglayer/regional/TERN-Vegetation-height
cd $GISDATA/veglayer/regional/TERN-Vegetation-height

wget --continue --no-directories --no-parent -r ftp://qld.auscover.org.au/spatial_other/jrsrp/height/
```


See this for more ideas on analysis
https://github.com/ternaustralia/ml-biomass/blob/master/ml-biomass.ipynb
