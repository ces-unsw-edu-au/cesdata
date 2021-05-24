http://whrc.org/publications-data/datasets/detailed-vegetation-height-estimates-across-the-tropics/

WHRC scientists produced a dataset of below hectare scale estimates of forest heights across the tropics. Based on consistent measurements from satellite RADAR and Lidar instruments, the new dataset is a first-of-its-kind example of how future satellites can provide regular estimates on vertical forest structure. This kind of information is invaluable to applications such as forest cover estimates, biodiversity monitoring, carbon emissions accounting, wildlife habitat characterization and timber management.

The team combined more than 17,000 radar images from the Japanese ALOS satellite with LIDAR point height measurements from NASA’s ICESat/GLAS mission to develop three continental scale models for the Americas, Africa, and Asia for the year 2007. The models allow for the continuous mapping of vegetation height up to 15 m height based on the sensitivity of the models. The vegetation height postings are provided at 30 m horizontal pixel spacing.

This project was made possible by the generous support of the Gordon and Betty Moore Foundation, google.org, and the David and Lucille Packard Foundation and NASA. Key project partners include the Japanese Aerospace Exploration Agency (JAXA), the Alaska Satellite Facility (ASF), SARMAP and GammaRemote Sensing.

https://www.dropbox.com/sh/rv1ftdpvp3lhtxn/AADXGYDYXEGmG8FBLQVlAGQ8a?dl=0

```sh

source ~/proyectos/UNSW/cesdata/env/project-env.sh
source ~/proyectos/UNSW/cesdata/env/katana-env.sh

mkdir -p $GISDATA/veglayer/global/WHRC-tropics/
cd $GISDATA/veglayer/global/WHRC-tropics/

##scp $GISDATA/vegetation/WHRC-tropics/* $zID@kdm.restech.unsw.edu.au:/srv/scratch/cesdata/gisdata/veglayer/global/WHRC-tropics

```
