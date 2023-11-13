"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7106],{6867:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(5893),s=a(1151);const o={},l="ausplots",i={id:"vegetation-plots/regional/ausplots",title:"ausplots",description:"Citation",source:"@site/docs/vegetation-plots/regional/ausplots.md",sourceDirName:"vegetation-plots/regional",slug:"/vegetation-plots/regional/ausplots",permalink:"/cesdata/docs/vegetation-plots/regional/ausplots",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"regional",permalink:"/cesdata/docs/category/regional-9"},next:{title:"veglayer",permalink:"/cesdata/docs/category/veglayer"}},r={},u=[{value:"Citation",id:"citation",level:2},{value:"Data availability",id:"data-availability",level:2},{value:"Data download",id:"data-download",level:2}];function c(t){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"ausplots",children:"ausplots"}),"\n",(0,n.jsx)(e.blockquote,{children:"\n"}),"\n",(0,n.jsx)(e.h2,{id:"citation",children:"Citation"}),"\n",(0,n.jsx)(e.blockquote,{children:"\n"}),"\n",(0,n.jsx)(e.h2,{id:"data-availability",children:"Data availability"}),"\n",(0,n.jsx)(e.h2,{id:"data-download",children:"Data download"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-{r}",children:'library(ausplotsR)\nlibrary(dplyr)\nmy.ausplots.data <- get_ausplots()\nnames(my.ausplots.data)\nmy.ausplots.data$site.info %>% slice(1)\n#map_ausplots(my.ausplots.data)\nmy.ausplots.data$veg.PI %>% group_by(site_location_name) %>% summarise(height=max(height,na.rm=T)) %>% select(height) %>% boxplot\nmy.ausplots.data$veg.PI %>% slice(1)\n\nmy.ausplots.data$veg.PI %>% filter(genus_species %in% "Eucalyptus regnans")\n\nEreg <- get_ausplots(veg.PI=TRUE,\n  basal.wedge=TRUE, structural_summaries=TRUE,\n  herbarium_determination_search="Eucalyptus marginata")\n\nausplot_struct <- get_ausplots(veg.PI=FALSE,\n    veg.vouch=FALSE, structural_summaries=TRUE)\nhead(grep("forest",plotdesc,value=T))\nhead(Eucalyptus_moderata$veg.vouch,10)\n\n'})})]})}function d(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(c,{...t})}):c(t)}},1151:(t,e,a)=>{a.d(e,{Z:()=>i,a:()=>l});var n=a(7294);const s={},o=n.createContext(s);function l(t){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:l(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);