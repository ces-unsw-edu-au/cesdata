"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[2005],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),g=o,v=p["".concat(l,".").concat(g)]||p[g]||d[g]||a;return t?r.createElement(v,i(i({ref:n},u),{},{components:t})):r.createElement(v,i({ref:n},u))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4256:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={},i="MOD44B Version 6 Vegetation Continuous Fields (VCF)",s={unversionedId:"vegcover/global/Modis-VCF-v6",id:"vegcover/global/Modis-VCF-v6",title:"MOD44B Version 6 Vegetation Continuous Fields (VCF)",description:"https://lpdaac.usgs.gov/products/mod44bv006/",source:"@site/docs/vegcover/global/Modis-VCF-v6.md",sourceDirName:"vegcover/global",slug:"/vegcover/global/Modis-VCF-v6",permalink:"/docs/vegcover/global/Modis-VCF-v6",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Geomorfologia Peru",permalink:"/docs/topography/regional/Geomorfologia-Peru"},next:{title:"Unidades de vegetaci\xf3n de la Argentina",permalink:"/docs/vegetation/regional/Argentina-vegetation"}},l={},c=[{value:"Reference",id:"reference",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mod44b-version-6-vegetation-continuous-fields-vcf"},"MOD44B Version 6 Vegetation Continuous Fields (VCF)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://lpdaac.usgs.gov/products/mod44bv006/"},"https://lpdaac.usgs.gov/products/mod44bv006/")),(0,o.kt)("h3",{id:"reference"},"Reference"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"DiMiceli, C.M., M.L. Carroll, R.A. Sohlberg, C. Huang, M.C. Hansen, and J.R.G. Townshend (2011), Annual Global Automated MODIS Vegetation Continuous Fields (MOD44B) at 250 m Spatial Resolution for Data Years Beginning Day 65, 2000 - 2010, Collection 5 Percent Tree Cover, University of Maryland, College Park, MD, USA.\nDimiceli, C., Carroll, M., Sohlberg, R., Kim, D.H., Kelly, M., Townshend, J.R.G. (2015). MOD44B MODIS/Terra Vegetation Continuous Fields Yearly L3 Global 250m SIN Grid V006 ","[Data set]",". NASA EOSDIS Land Processes DAAC. Accessed 2020-09-22 from ",(0,o.kt)("a",{parentName:"p",href:"https://doi.org/10.5067/MODIS/MOD44B.006"},"https://doi.org/10.5067/MODIS/MOD44B.006"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"source ~/proyectos/UNSW/cesdata/env/project-env.sh\n\n\n\nexport MFTP=https://e4ftl01.cr.usgs.gov/\nexport VAR=MOD44B\nexport VRS=006\nexport REPO=MOLT\nmkdir -p $GISDATA/vegcover/global/Modis-${VAR}.${VRS}\ncd  $GISDATA/vegcover/global/Modis-${VAR}.${VRS}\n\nwget --continue ${MFTP}/${REPO}/${VAR}.${VRS} --output-document=fechas\ngrep 20 fechas | sed -n 's/.*href=\"\\([^\"]*\\).*/\\1/p' > links\n\nfor FECHA in $(cat links)\ndo\n  mkdir -p $GISDATA/vegcover/global/Modis-${VAR}.${VRS}/$FECHA\n  cd $GISDATA/vegcover/global/Modis-${VAR}.${VRS}/$FECHA\n  wget --continue ${MFTP}/${REPO}/${VAR}.${VRS}/${FECHA}\n  grep hdf index.html | sed -n 's/.*href=\"\\([^\"]*\\).*/\\1/p' > links\n  wget -b --user=$EARTHDATAUSR --password=$EARTHDATAPWD --continue -i links --base=${MFTP}${REPO}/${VAR}.${VRS}/${FECHA}/\n\ndone\n")),(0,o.kt)("p",null,"If we want a subset, for example, for Venezuela we need tiles: h10 h11 h12 v07 v08"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd $GISDATA/sensores/Modis/$VAR/$VRS\n\nfor FECHA in $(cat links)\ndo\n  cd $GISDATA/sensores/$VAR/$VRS/$FECHA\n  rm qry\n  touch qry\n  for h in h10 h11 h12; do for v in v07 v08;   do grep $h$v links >> qry; done ;done ;\n  sort qry | uniq  > qry2\n  wget -b --user=$EARTHDATAUSR --password=$EARTHDATAPWD --continue -i qry2 --base=${MFTP}${REPO}/${VAR}.${VRS}/${FECHA}/\ndone\n\n")))}d.isMDXComponent=!0}}]);