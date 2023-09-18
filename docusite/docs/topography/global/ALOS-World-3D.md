---
title: "ALOS World 3D"
description: "Global 1,5,10,100-km Topography - EarthEnv"
tags: [tropical shrublands, IUCN-GET, IUCN-RLE, JAXA, ALOS]
---


## Links

- https://www.eorc.jaxa.jp/ALOS/en/dataset/aw3d30/aw3d30_e.htm
- https://www.eorc.jaxa.jp/ALOS/en/dataset/aw3d30/data/aw3d30v4.0_product_e_1.0.pdf

```sh
source ~/proyectos/CES/cesdata/env/project-env.sh

DPATH=topography/global
DNAME=ALOS-World-3D

mkdir -p $GISDATA/$DPATH/$DNAME/
cd $GISDATA/$DPATH/$DNAME/


wget --continue https://www.eorc.jaxa.jp/ALOS/en/aw3d30/data/html_v2303/s010w090_n020w060.htm

touch  ~/.wgetrc
## user and password from user guide (chapter 4)
echo "user=XXXX" > ~/.wgetrc
echo "password=XXXX" >> ~/.wgetrc

wget --continue https://www.eorc.jaxa.jp/ALOS/en/aw3d30/data/html_v2303/s010w090_n020w060.htm

VRS=https://www.eorc.jaxa.jp/ALOS/aw3d30/data/release_v2303
for ARCH in N015W090_N020W085 N010W060_N015W055 N005W070_N010W065 N000W070_N005W065 S005W070_N000W065 N005W065_N010W060 N000W065_N005W060 N005W060_N010W055 N000W060_N005W055 N005W055_N010W050 N000W055_N005W050 S005W055_N000W050 S005W060_N000W055 S005W065_N000W060
do
    wget -b --continue $VRS/$ARCH.zip # all simultaneously
done

rm ~/.wgetrc


```