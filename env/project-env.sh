export MIHOST=$(hostname -s)

export PROJECTNAME=cesdata
export SCRIPTDIR=$HOME/proyectos/UNSW/$PROJECTNAME
# store the zenodo API token in a file in home directory
export ZENODOTOKEN=$(cat $HOME/.ZenodoToken)

case $MIHOST in
terra)
  export GISDATA=/opt/gisdata
  export GISDB=/opt/gisdb
  export WORKDIR=$HOME/tmp/$PROJECTNAME
  ;;
roraima)
  export GISDATA=$HOME/gisdata
  export GISDB=$HOME/gisdb
  export WORKDIR=$HOME/tmp/$PROJECTNAME
  ;;
  *)
   if [ -e /srv/scratch/cesdata ]
   then
      export SHAREDSCRATCH=/srv/scratch/cesdata
      export GISDATA=$SHAREDSCRATCH/gisdata
      export GISDB=$SHAREDSCRATCH/gisdb
      source $HOME/.secrets
      export WORKDIR=/srv/scratch/$USER/tmp/$PROJECTNAME
   else
      echo "I DON'T KNOW WHERE I AM, please customize project-env.sh file"
   fi
  ;;
esac



mkdir -p $WORKDIR
