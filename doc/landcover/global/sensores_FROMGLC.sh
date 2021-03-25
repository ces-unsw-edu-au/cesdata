##GlobeLand30
##http://geospatialworldforum.org/speaker/SpeakersImages/Chen%20Jun.pdf
##http://data.ess.tsinghua.edu.cn/
##About FROM-GLC
##Global land cover data are key sources of information for understanding the complex interactions between human activities and global change. FROM-GLC (Finer Resolution Observation and Monitoring of Global Land Cover) is the first 30 m resolution global land cover maps produced using Landsat Thematic Mapper (TM) and Enhanced Thematic Mapper Plus (ETM+) data. Our long-term goal in FROM-GLC is to develop a multiple stage approach to mapping global land cover so that the results can better meet the needs of land process modeling and can be easily cross-walked to existing global land cover classification schemes.

##Methods:
##[5] FROM-GLC-Hierarchy
##FROM-GLC-Hierarchy (Yu et al., 2014) is land cover dataset with multi-resolution (i.e. 30 m, 250 m, 500 m, 1 km, 5 km, 10 km, 25 km, 50 km, 100 km) to meet requirements for different resolutions from different applications. The 30 m base map was improved from FROM-GLC-agg with additional coarse resolution datasets (i.e., MCD12Q1 (Friedl et al., 2010), GlobCover2009 (Bontemps et al., 2010) etc.) to reduce land cover type confusion. Around 1.1% pixels were replaced by coarse resolution products. Validation based assessments indicate the accuracy for land cover maps at 30 m, 250 m, 500 m, 1 km resolutions are 69.50%, 76.65%, 74.65%, and 73.47%, respectively. Further analysis of area-estimation biases for different land cover types at different resolutions suggests that maps at coarser than 5 km resolution contain at least 5% area estimation error for most land cover types. Proportion layers, which contain precise information on land cover percentage, are suggested for use when coarser resolution land cover data are required.

##MODIS tiles in http://modis-land.gsfc.nasa.gov/MODLAND_grid.html
##http://data.ess.tsinghua.edu.cn/data/FROMGLC_Hierarchy_MODISLIKE_GZ/
MPTC="/opt/gisdata/sensores/"
MPTC="/media/jferrer/INTENSO/humboldt.bkp/gisdata/sensores/"
MPTC="/media/jferrer/Elements/gisdata/sensores/"
mkdir -p $MPTC/FROMGLC
cd $MPTC/FROMGLC
curl -O -C - http://data.ess.tsinghua.edu.cn/data/FROMGLC_Hierarchy_MODISLIKE_GZ/FROM_GLC_Hierarchy_h[09-14]v[07-14].tar.gz

##NorteAmerica
curl -O -C - http://data.ess.tsinghua.edu.cn/data/FROMGLC_Hierarchy_MODISLIKE_GZ/FROM_GLC_Hierarchy_h[07-14]v[03-07].tar.gz
curl -O -C - http://data.ess.tsinghua.edu.cn/data/FROMGLC_Hierarchy_MODISLIKE_GZ/FROM_GLC_Hierarchy_h[07-14]v07.tar.gz

for i in `ls *tar.gz`;
do tar --wildcards -xzvf $i '*_250m_Majority.tif';
done

##gdal_merge.py -ul_lr -90 15 -25 -60 -o FROMGLC.SAM.tif *_250m_Majority.tif
gdalwarp -t_srs '+proj=longlat +datum=WGS84' -te -90 -60 -25 15 *_250m_Majority.tif FROMGLC.SAM.tif
##rm FROMGLC.NAC.tif
gdalwarp -t_srs '+proj=longlat +datum=WGS84' -te -138 3 -40 60 *_250m_Majority.tif FROMGLC.NAC.tif

rm *250m_Majority.tif
