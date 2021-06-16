export SHAREDSCRATCH=/srv/scratch/cesdata
export GISDATA=$SHAREDSCRATCH/gisdata
export GISDB=$SHAREDSCRATCH/gisdb
source $HOME/.secrets
export WORKDIR=/srv/scratch/$USER/tmp/$PROJECTNAME

mkdir -p $WORKDIR
