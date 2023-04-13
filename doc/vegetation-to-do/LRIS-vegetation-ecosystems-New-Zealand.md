#Vegetative Cover Map
The 1:1,000,000 scale Vegetative Cover Map of New Zealand is the first vegetation survey which can be applied nationally for planning, research, and education. It optimises the cartographic potential of the vegetation information available in the early 1980s and provides a historical record which will aid in future analyses of vegetative cover and land utilisation. The map classification recognises 47 Vegetative Cover Classes identified by alphanumeric code and 17 Vegetative Cover Elements identified (only on the printed map) by symbols and patterns. The map is published as two sheets 730mm x 880mm covering the three principal islands of New Zealand and all offshore islands within 100km of the coast. The map was accompanied by a 153 page, illustrated, book which discusses New Zealand's vegetation and describes the 47 classes.

The book to accompany this dataset is available as an epub from:
https://mebooks.co.nz/index.php?route=product/product&product_id=402

#Basic Ecosystems
This layer was derived from three existing data layers: the Land Cover Database 2 (LCDB2) (MfE 2002); the Land Use Map (LUM) from the Land Use Carbon Analysis System (MfE 2008; Dymond et al. 2012); and EcoSat Forests (Shepherd et al. 2002). Indigenous forest classes from EcoSat Forests were combined with classes from LCDB2 to form basic ecosystems classes. Where indigenous forest was mapped by LCDB2, the type of forest was determined from the EcoSat Forests layer. The eight forest types of EcoSat Forests were reduced to three basic types: beech forest; podocarp-broadleaved forest; and mixed beech and podocarp-broadleaved forest. To produce a recent 2008 layer the LUM was used to update indigenous and exotic forest changes since 2002. The mapping was performed using 15 m pixels, which is equivalent to a mapping scale of approximately 1:50 000.

#Threatened Environments Classification 2012
Cieraad E, Walker S, Price R, Barringer J. 2015. An updated assessment of indigenous cover remaining and legal protection in New Zealand’s land environments. New Zealand Journal of Ecology 39(2) - downloadable from newzealandecology.org/nzje/3235.pdf .

register in LRIS portal
create download

```sh
mkdir -p $GISDATA/vegetation/LRIS-New-Zealand
cd $GISDATA/vegetation/LRIS-New-Zealand

mv ~/Downloads/lris-*.zip $GISDATA/vegetation/LRIS-New-Zealand
unzip lris-vegetative-cover-map-of-new-zealand-SHP.zip


mv ~/Downloads/tec2012*csv $GISDATA/vegetation/LRIS-New-Zealand
```
