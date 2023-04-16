"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[3844],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||g[d]||o;return n?t.createElement(f,i(i({ref:r},p),{},{components:n})):t.createElement(f,i({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3809:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=n(7462),a=(n(7294),n(3905));const o={},i="Inventario Nacional de Glaciares - Argentina",l={unversionedId:"cryosphere/regional/NGI-Argentina",id:"cryosphere/regional/NGI-Argentina",title:"Inventario Nacional de Glaciares - Argentina",description:"https://www.glaciaresargentinos.gob.ar/",source:"@site/docs/cryosphere/regional/NGI-Argentina.md",sourceDirName:"cryosphere/regional",slug:"/cryosphere/regional/NGI-Argentina",permalink:"/docs/cryosphere/regional/NGI-Argentina",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Inventario Publico de Glaciares - Chile",permalink:"/docs/cryosphere/regional/IPG-Chile"},next:{title:"Ecological Marine Units",permalink:"/docs/ecological/global/Ecological-Marine-Units"}},c={},s=[],p={toc:s},u="wrapper";function g(e){let{components:r,...n}=e;return(0,a.kt)(u,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"inventario-nacional-de-glaciares---argentina"},"Inventario Nacional de Glaciares - Argentina"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.glaciaresargentinos.gob.ar/"},"https://www.glaciaresargentinos.gob.ar/")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Zalazar, L., Ferri, L., Castro, M., Gargantini, H., Gimenez, M., Pitte, P., . . . Villalba, R. (2020). Spatial distribution and characteristics of Andean ice masses in Argentina: Results from the first National Glacier Inventory. Journal of Glaciology, 66(260), 938-949. doi:10.1017/jog.2020.55")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," IANIGLA-Inventario Nacional de Glaciares. 2018. Resumen ejecutivo de los resultados del Inventario Nacional de Glaciares. IANIGLA-CONICET, Ministerio de Ambiente y Desarrollo Sustentable de la Naci\xf3n. Pp. 27.")),(0,a.kt)("p",null,"Register and download from ",(0,a.kt)("a",{parentName:"p",href:"https://www.glaciaresargentinos.gob.ar/?page_id=2571"},"https://www.glaciaresargentinos.gob.ar/?page_id=2571")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"source ~/proyectos/UNSW/cesdata/env/project-env.sh\n\nDPATH=cryosphere/regional\nDNAME=NGI-Argentina\n\nmkdir -p $GISDATA/$DPATH/$DNAME/\ncd $GISDATA/$DPATH/$DNAME/\n\n## copy from local download\n# scp ~/Downloads/00-Shapefile-Completo.zip $zID@kdm.restech.unsw.edu.au:/srv/scratch/cesdata/gisdata/cryosphere/regional/NGI-Argentina/\n```\n")))}g.isMDXComponent=!0}}]);