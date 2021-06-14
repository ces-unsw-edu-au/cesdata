# Global Mangrove Watch (1996 - 2016)

> The GMW aims to provide geospatial information about mangrove extent and changes to the Ramsar Convention, national wetland practitioners, decision makers and NGOs. It is part of the Ramsar Science and Technical Review Panel (STRP) work plan for 2016-2018 and a Pilot Project to the Ramsar Global Wetlands Observation System (GWOS), which is implemented under the GEO-Wetlands Initiative. The primary objective of the GMW has been to provide countries lacking a national mangrove monitoring system with first cut mangrove extent and change maps, to help safeguard against further mangrove forest loss and degradation.

> The GMW has generated a global baseline map of mangroves for 2010 using ALOS PALSAR and Landsat (optical) data, and changes from this baseline for six epochs between 1996 and 2016 derived from JERS-1 SAR, ALOS PALSAR and ALOS-2 PALSAR-2. Annual maps are planned from 2018 and onwards.

## Citation

> Bunting P., Rosenqvist A., Lucas R., Rebelo L-M., Hilarides L., Thomas N., Hardy A., Itoh T., Shimada M. and Finlayson C.M. (2018). The Global Mangrove Watch – a New 2010 Global Baseline of Mangrove Extent. Remote Sensing 10(10): 1669. doi: 10.3390/rs1010669.

> Thomas N, Lucas R, Bunting P, Hardy A, Rosenqvist A, Simard M. (2017). Distribution and drivers of global mangrove forest change, 1996-2010. PLOS ONE 12: e0179302. doi: 10.1371/journal.pone.0179302

## Data access
Available at WCMC:
http://data.unep-wcmc.org/datasets/45


## Data download and preparation

```sh
source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh

mkdir -p $GISDATA/ecosystems/global/WCMC-mangroves-GMW
cd $GISDATA/ecosystems/global/WCMC-mangroves-GMW

wget --continue http://wcmc.io/GMW_001 --output-document=WCMC-mangroves-GMW.zip

```
