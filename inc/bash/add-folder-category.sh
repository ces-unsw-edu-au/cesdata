## This script will add a `_category_.json` file for each subfolder in the current folder
#cd $SCRIPTDIR/docusite/docs/
for thedir in $(find . -type d)
do
    if [ -e $thedir/_category_.json ] 
    then 
        echo $thedir 
    else 
        thename=$(basename $thedir)
        echo '{
        "label": "'${thename}'",
        "link": {
            "type": "generated-index",
            "description": "'${thedir}'."
        }
        }' > $thedir/_category_.json
    fi
done



