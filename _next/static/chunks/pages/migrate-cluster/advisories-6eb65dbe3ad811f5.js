(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[400],{26361:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/migrate-cluster/advisories",function(){return s(11319)}])},10912:function(e,t,s){"use strict";var n=s(85893),i=s(96497),r=s(67294),a=s(42672),o=s(30272);t.Z=e=>{let{advisoriesData:t,onSubmit:s}=e,[u,c]=(0,r.useState)(t.map((e,t)=>{let{contentTitle:i,texts:r,links:u,terms:c,enableNextStep:l,rank:d,title:p,value:m}=e;return{content:(e,t,o,l)=>(0,n.jsx)(a.B,{onSubmit:s,title:i,texts:r,links:u,terms:c,rank:e,enableNextStep:t,onAccept:o,onBack:l}),enableNextStep:l,rank:d,state:(0,o.d$)(t),title:p,value:m}})),[l,d]=(0,r.useState)(u[0]);return(0,n.jsxs)(i.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,n.jsx)(i.xv,{variant:"h3",children:"Advisories"}),(0,n.jsx)(i.I,{itemSelected:l,items:u,onItemChange:e=>{d(e)},onComplete:()=>{},onUpdateState:e=>{c(u.map(t=>t.rank===e+1?(d(t),{...t,state:"enabled"}):t))},onBack:e=>{c(u.map(t=>t.rank===e?{...t,state:"upcoming"}:t));let t=u.find(t=>t.rank===e-1);t&&d(t)}})]})}},11319:function(e,t,s){"use strict";s.r(t);var n=s(85893),i=s(84496),r=s(67294),a=s(11163),o=s(10912),u=s(33147);let Advisories=()=>{let e=(0,a.useRouter)(),t=(0,i.o)((0,r.useCallback)(e=>e.completeMigrateClusterStep,[])),s=(0,i.o)(e=>e.enableMigrateClusterStep),onSubmit=()=>{t("advisories-migrate");let n=s("config-cluster-migrate");e.push(n.href)};return(0,n.jsx)(o.Z,{advisoriesData:u.Op,onSubmit:()=>onSubmit()})};t.default=Advisories,Advisories.cssLayout={px:"15%"},Advisories.layout="MigrateProgressTrackerLayout"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=26361)}),_N_E=e.O()}]);