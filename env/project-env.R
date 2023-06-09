#!R --vanilla
projectname <- "cesdata"
projectfolder <- "proyectos/CES"

if (Sys.getenv("GISDATA") != "") {
   gis.data <- Sys.getenv("GISDATA")
   work.dir <- Sys.getenv("WORKDIR")
   script.dir <- Sys.getenv("SCRIPTDIR")
} else {
   out <- Sys.info()
   username <- out[["user"]]
   hostname <- out[["nodename"]]
   script.dir <- sprintf("%s/%s/%s", Sys.getenv("HOME"), projectfolder, projectname)

   switch(hostname,
      terra={
         gis.data <- sprintf("/opt/gisdata/")
         work.dir <- sprintf("%s/tmp/%s",Sys.getenv("HOME"),projectname)
      },
      roraima={
         gis.data <- sprintf("%s/gisdata/",Sys.getenv("HOME"))
         work.dir <- sprintf("%s/tmp/%s",Sys.getenv("HOME"),projectname)
      },
      {
         if (file.exists("/srv/scratch/cesdata")) {
            gis.data <- sprintf("/srv/scratch/cesdata/gisdata/")
            work.dir <- sprintf("/srv/scratch/%s/tmp/%s/",username,projectname)
         } else {
            stop("Can't figure out where I am, please customize `project-env.R` script\n")
         }
      })
}

setwd(work.dir)
