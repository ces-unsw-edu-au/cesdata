---
title: "RAMSAR RSIS"
description: "Ramsar Sites Information Service"
tags: [wetlands,Adaptative monitoring,wget,ramsar-monitoring.org]
---

## Links

https://rsis.ramsar.org/

## Data access

All data in a xml file:
```{sh}
wget --continue https://rsis.ramsar.org/rss/ris.xml
```

Also, read or download boundaries:
```{sh}
https://rsis.ramsar.org/geoserver/wfs?request=GetFeature&service=wfs&version=1.0.0&typename=ramsar_sdi:features_published&outputformat=SHAPE-ZIP
```


You requested an export of Ramsar sites (CSV file) through the "Ramsar Sites
Information Service" web site at https://rsis.ramsar.org/. Please find below
a summary of your search filter and the download links to the files that have
been generated.

# Summary
Number of sites: 2,431
Search key(s): *
Search filter(s): None

# Files
Click on the links to download the file.

CSV file:
https://rsis.ramsar.org/sites/default/files/rsiswp_search/exports/ris-tabular-20210923-070057-6272b1edde6c6c81c7e2376a30fdb960.csv
