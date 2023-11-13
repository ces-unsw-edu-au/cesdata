"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6390],{2149:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>r});var n=e(5893),i=e(1151);const c={title:"CRU TS v. 4.03",description:"High-resolution gridded datasets of the Climatic Research Unit.",tags:["NETCDF","wget","gdalinfo"]},s=void 0,d={id:"climate/global/CRU-TS",title:"CRU TS v. 4.03",description:"High-resolution gridded datasets of the Climatic Research Unit.",source:"@site/docs/climate/global/CRU-TS.md",sourceDirName:"climate/global",slug:"/climate/global/CRU-TS",permalink:"/cesdata/docs/climate/global/CRU-TS",draft:!1,unlisted:!1,tags:[{label:"NETCDF",permalink:"/cesdata/docs/tags/netcdf"},{label:"wget",permalink:"/cesdata/docs/tags/wget"},{label:"gdalinfo",permalink:"/cesdata/docs/tags/gdalinfo"}],version:"current",frontMatter:{title:"CRU TS v. 4.03",description:"High-resolution gridded datasets of the Climatic Research Unit.",tags:["NETCDF","wget","gdalinfo"]},sidebar:"tutorialSidebar",previous:{title:"CMCC-BioClimInd",permalink:"/cesdata/docs/climate/global/CMCC-BioClimInd"},next:{title:"CliMond",permalink:"/cesdata/docs/climate/global/CliMond"}},l={},r=[{value:"Links",id:"links",level:2},{value:"Citation",id:"citation",level:2},{value:"Data access",id:"data-access",level:2},{value:"Data download and preparation",id:"data-download-and-preparation",level:2}];function o(t){const a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"High-resolution gridded datasets of the Climatic Research Unit."}),"\n",(0,n.jsx)(a.h2,{id:"links",children:"Links"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://crudata.uea.ac.uk/cru/data/hrg/",children:"CRU TS v. 4.03"})}),"\n",(0,n.jsx)(a.h2,{id:"citation",children:"Citation"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:["Harris, I., Jones, P.D., Osborn, T.J. and Lister, D.H. (2014), Updated high-resolution grids of monthly climatic observations - the CRU TS3.10 Dataset. International Journal of Climatology 34, 623-642 ",(0,n.jsx)(a.a,{href:"http://dx.doi.org/10.1002/joc.3711",children:"doi:10.1002/joc.3711"}),"\n",(0,n.jsx)(a.a,{href:"https://crudata.uea.ac.uk/cru/data/hrg/Revised_Appendix_3_CLD.pdf",children:"Revised appendix"})]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"data-access",children:"Data access"}),"\n",(0,n.jsx)(a.p,{children:"Data is available at:"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://crudata.uea.ac.uk/cru/data/hrg/",children:"https://crudata.uea.ac.uk/cru/data/hrg/"}),"\nDocumentation:"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Metadata:"}),"\n",(0,n.jsx)(a.h2,{id:"data-download-and-preparation",children:"Data download and preparation"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sh",children:"mkdir -p $GISDATA/climate/global/CRU_TS\ncd $GISDATA/climate/global/CRU_TS\nwget https://crudata.uea.ac.uk/cru/data/hrg/cru_ts_4.03/Release_Notes_CRU_TS4.03.txt\n\n\nfor VAR in cld dtr frs pet pre tmn tmp tmx vap wet\ndo\n   mkdir -p $GISDATA/climate/global/CRU_TS/$VAR\n   cd $GISDATA/climate/global/CRU_TS/$VAR\n   wget --continue https://crudata.uea.ac.uk/cru/data/hrg/cru_ts_4.03/cruts.1905011326.v4.03/${VAR}/ -O ${VAR}.list\n\n   for ARCH in $(grep nc.gz ${VAR}.list | sed -n 's/.*href=\"\\([^\"]*\\).*/\\1/p')\n   do\n      wget --continue https://crudata.uea.ac.uk/cru/data/hrg/cru_ts_4.03/cruts.1905011326.v4.03/${VAR}/${ARCH}\n   done\ndone\n\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sh",children:'cd $WORKDIR\nls $GISDATA/climate/global/CRU_TS\n\ncp $GISDATA/climate/global/CRU_TS/cru_ts4.03.1901.2018.pre.dat.nc.gz .\ngunzip cru_ts4.03.1901.2018.pre.dat.nc.gz\n\ncp $GISDATA/climate/global/CRU_TS/cru_ts4.03.1901.2018.pet.dat.nc.gz .\ngunzip cru_ts4.03.1901.2018.pet.dat.nc.gz\n\ngdalinfo NETCDF:"cru_ts4.03.1901.2018.pre.dat.nc" -sd 1 | less\n\n'})})]})}function u(t={}){const{wrapper:a}={...(0,i.a)(),...t.components};return a?(0,n.jsx)(a,{...t,children:(0,n.jsx)(o,{...t})}):o(t)}},1151:(t,a,e)=>{e.d(a,{Z:()=>d,a:()=>s});var n=e(7294);const i={},c=n.createContext(i);function s(t){const a=n.useContext(c);return n.useMemo((function(){return"function"==typeof t?t(a):{...a,...t}}),[a,t])}function d(t){let a;return a=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),n.createElement(c.Provider,{value:a},t.children)}}}]);