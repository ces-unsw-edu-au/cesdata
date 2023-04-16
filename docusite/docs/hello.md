---
sidebar_label: 'GIS data'
sidebar_position: 1
---

# GIS data

GIS data for analysis at the [Centre for Ecosystem Science](https://www.unsw.edu.au/research/ecosystem) at the [University of New South Wales, Sydney](https://www.unsw.edu.au/)

Maintained by [@jrfep](https://github.com/jrfep)

## Why?

This is a repository for the documentation of steps for data access, import, and preparation from different sources.

Each one of these sources is used for one or more analyses and projects, and thus these lines of codes are used and re-used, modified and improved over and over, thus it makes sense to keep this repo here. 

These datasets have been used for:

- IUCN Red List of Ecosystem projects
- IUCN Global Ecosystem Typology projects
- Ecosystem monitoring for adaptative management
- Species occupancy and distribution analysis in tropical countries
- Deforestation analysis in tropical countries[^1]


## How?

We run these steps prior to analysis in different environments:

- on the Katana HPC at UNSW, 
- on a Desktop using Linux Solus,
- on a laptop running MacOS. 

Thus we have tried to adapt the code for both Linux and MacOS. We run a bash script to detect the host and set up programing environment variables for the other steps. 

## Workflow on Katana @ UNSW

For some computations we use the computational cluster Katana supported by Research Technology Services at UNSW Sydney. https://doi.org/10.26190/669x-a286

Please check [Katana User’s documentation](https://unsw-restech.github.io/index.html).

[^1]: Ok, just Venezuela for now, but it could be replicated elsewhere...

