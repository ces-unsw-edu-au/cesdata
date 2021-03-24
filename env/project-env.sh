export MIHOST=$(hostname -s)

case $MIHOST in
terra)
  export GISDATA=/opt/gisdata
  export GISDB=/opt/gisdb
  ;;
roraima)
  export GISDATA=$HOME/gisdata
  export GISDB=$HOME/gisdb
  ;;
esac

# store the zenodo API token in a file in home directory
export ZENODOTOKEN=$(cat $HOME/.ZenodoToken)

export PROJECTNAME=cesdata
export SCRIPTDIR=$HOME/proyectos/UNSW/$PROJECTNAME
export WORKDIR=$HOME/tmp/$PROJECTNAME

mkdir -p $WORKDIR
