# Workflow on Katana @ UNSW

Please check [Katana User’s documentation](https://unsw-restech.github.io/index.html).

Here some useful tips

## Log-in / authentication

In Linux I set up my bash terminal to recognize my zID (as env variable `$zID`) and set up [SSH Public key authentication](https://www.ssh.com/ssh/public-key-authentication).

## Copying files

From Linux/MacOSX I use `ssh` and `scp` to copy some datasources using the *katana data mover* (kdm) node:

```sh
export OUTPUTDIR=...
ssh $zID@kdm.restech.unsw.edu.au mkdir -p /srv/scratch/cesdata/$OUTPUTDIR

scp -r $WORKDIR/... $zID@kdm.restech.unsw.edu.au:/srv/scratch/cesdata/$OUTPUTDIR
```

## Version control with `git`

Log into the katana node with `ssh` and use `git` to clone and update repositories:

```sh
ssh $zID@katana.restech.unsw.edu.au
## SSH Public key authentication for github
eval $(ssh-agent)
ssh-add

git clone ...

## load bash environment variables
source $HOME/proyectos/.../env/project.env
cd $SCRIPTDIR
git status
```

## Running interactive jobs with `pbs`

It is always useful to run interactive `pbs` jobs:

```sh
ssh $zID@katana.restech.unsw.edu.au
source $HOME/proyectos/.../env/project.env
cd $WORKDIR

qsub -I -l select=1:ncpus=1:mem=120gb,walltime=12:00:00
#" if we need a graphical session "
##qsub -I -X -l select=1:ncpus=1:mem=32gb,walltime=4:00:00

```

Some recomendations from Duncan:

* Use skylake-avx512 by making your interactive job request become something like: `qsub -I -l select=1:ncpus=1:cpuflags=skylake-avx512:mem=120gb -l walltime=12:00:00`. This will take a little longer to start but will mean running on newer hardware.

* Walltime should be 12:00:00 unless you need more. i.e. nothing shorter.
* When requesting memory you the point at which you have less options is 124gb, 180gb, 248gb, 370gb, 750gb and 1000gb. i.e. requesting 126gb is not a great idea.

These are the cpuflags:
```sh
cputype       : "sandybridge", "ivybridge", "broadwell", "haswell", "skylake-avx512"
cpuflags      : "avx", "avx2", "avx512bw", "avx512cd", "avx512dq", "avx512f", "avx512vl", "avx512vnni", "avx512_vnni"
```

## Running batch jobs with `pbs`

Now run the batch scripts for Growing degree days (GDD) based on NARCLiM data for all models and scenarios:

```sh
ssh $zID@katana.restech.unsw.edu.au
source $HOME/proyectos/.../env/project-env.sh
source $HOME/proyectos/.../env/katana-env.sh

cd $WORKDIR

qsub -l select=1:ncpus=1:mem=32gb,walltime=4:00:00 -J 1-2 $SCRIPTDIR/bin/pbs/....pbs

qsub -l select=1:ncpus=2:mem=16gb,walltime=4:00:00 -J 3-4 $SCRIPTDIR/bin/pbs/....pbs

qsub -J 5-36 $SCRIPTDIR/bin/pbs/....pbs
qstat -tu $(whoami)
```
