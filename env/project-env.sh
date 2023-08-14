export MIHOST=$(hostname -s)

export PROJECTNAME=cesdata
export SCRIPTDIR=$HOME/proyectos/CES/$PROJECTNAME
# store the zenodo API token in a file in home directory
export ZENODOTOKEN=$(cat $HOME/.ZenodoToken)

case $MIHOST in
terra)
  export GISDATA=/opt/gisdata
  export GISDB=/opt/gisdb
  export WORKDIR=$HOME/workdir/tmp/$PROJECTNAME
  ;;
roraima)
  export GISDATA=$HOME/gisdata
  export GISDB=$HOME/gisdb
  export WORKDIR=$HOME/tmp/$PROJECTNAME
  ;;
L-T14N5WR66Q)
  export GISDATA=$HOME/gisdata
  export GISDB=$HOME/gisdb
  export WORKDIR=$HOME/tmp/$PROJECTNAME
;;
Auyantepui)
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
grep -A4 IUCNdb $HOME/.database.ini | tail -n +2 > tmpfile
while IFS="=" read -r key value; do
  case "$key" in
    "host") export DBHOST="$value" ;;
    "port") export DBPORT="$value" ;;
    "database") export DBNAME="$value" ;;
    "user") export DBUSER="$value" ;;
  esac
done < tmpfile
rm tmpfile


mkdir -p $WORKDIR
