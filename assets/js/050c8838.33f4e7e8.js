"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[181],{6168:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var o=e(5893),n=e(1151);const l={},s="Deltas at Risk",r={id:"hydrology/global/Deltas-at-Risk",title:"Deltas at Risk",description:"Links to:",source:"@site/docs/hydrology/global/Deltas-at-Risk.md",sourceDirName:"hydrology/global",slug:"/hydrology/global/Deltas-at-Risk",permalink:"/cesdata/docs/hydrology/global/Deltas-at-Risk",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"global",permalink:"/cesdata/docs/category/global-7"},next:{title:"Global prevalence of non-perennial rivers and streams",permalink:"/cesdata/docs/hydrology/global/GIRES-v10"}},i={},d=[{value:"Citation",id:"citation",level:4},{value:"Data download and preparation",id:"data-download-and-preparation",level:4}];function c(a){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...a.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"deltas-at-risk",children:"Deltas at Risk"}),"\n",(0,o.jsxs)(t.p,{children:["Links to:\n/ ",(0,o.jsx)(t.a,{href:"http://www.globaldeltarisk.net/",children:"Webpage"}),"\n/ ",(0,o.jsx)(t.a,{href:"http://www.globaldeltarisk.net/data.html",children:"Download"})]}),"\n",(0,o.jsx)(t.h4,{id:"citation",children:"Citation"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Z.D. Tessler, C.J. V\xf6r\xf6smarty, M. Grossberg, I. Gladkova, H. Aizenman, J.P.M. Syvitski, E. Foufoula-Georgiou. Profiling Risk and Sustainability in Coastal Deltas of the World. Science 349(6248), 638-643 (2015) doi:10.1126/science.aab3574."}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"data-download-and-preparation",children:"Data download and preparation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"source ~/proyectos/CES/cesdata/env/project-env.sh\n\nmkdir -p $GISDATA/hydrology/global/Deltas-at-Risk\n cd $GISDATA/hydrology/global/Deltas-at-Risk\n\nwget --continue http://www.globaldeltarisk.net/data/maps/global_map_30sec.tiff.tar.gz\nwget --continue https://www.globaldeltarisk.net/data/maps/global_map_shp.tar.gz\n\n##cd $WORKDIR\ntar -xzvf $GISDATA/hydrology/global/Deltas-at-Risk/global_map_30sec.tiff.tar.gz\ntar -xzvf $GISDATA/hydrology/global/Deltas-at-Risk/global_map_shp.tar.gz\n"})})]})}function p(a={}){const{wrapper:t}={...(0,n.a)(),...a.components};return t?(0,o.jsx)(t,{...a,children:(0,o.jsx)(c,{...a})}):c(a)}},1151:(a,t,e)=>{e.d(t,{Z:()=>r,a:()=>s});var o=e(7294);const n={},l=o.createContext(n);function s(a){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof a?a(t):{...t,...a}}),[t,a])}function r(a){let t;return t=a.disableParentContext?"function"==typeof a.components?a.components(n):a.components||n:s(a.components),o.createElement(l.Provider,{value:t},a.children)}}}]);