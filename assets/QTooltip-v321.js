import{g as te,B as oe,C as T,D as ae,E as ne,n as C,h as f,G as ie,u as se,H as le,I as re,J as ue,v as E,K as k,L as H,M as x,N as ce,i as A,T as de,y as fe,m as he,O as ve}from"./index-v321.js";import{u as me,v as D,a as ge,b as Te,c as ye,r as M,s as pe,p as q,d as Se}from"./position-engine-v321.js";import{c as L}from"./selection-v321.js";const Oe=te({name:"QTooltip",inheritAttrs:!1,props:{...me,...oe,...T,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...T.transitionShow,default:"jump-down"},transitionHide:{...T.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:D},self:{type:String,default:"top middle",validator:D},offset:{type:Array,default:()=>[14,14],validator:ge},scrollTarget:ae,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...ne],setup(e,{slots:j,emit:y,attrs:h}){let i,s;const v=fe(),{proxy:{$q:o}}=v,l=C(null),c=C(!1),B=f(()=>q(e.anchor,o.lang.rtl)),N=f(()=>q(e.self,o.lang.rtl)),Q=f(()=>e.persistent!==!0),{registerTick:W,removeTick:I}=ie(),{registerTimeout:d}=se(),{transitionProps:R,transitionStyle:_}=le(e),{localScrollTarget:p,changeScrollEvent:G,unconfigureScrollTarget:J}=Te(e,w),{anchorEl:a,canShow:K,anchorEvents:r}=ye({showing:c,configureAnchorEl:Y}),{show:U,hide:m}=re({showing:c,canShow:K,handleShow:$,handleHide:z,hideOnRouteChange:Q,processOnMount:!0});Object.assign(r,{delayShow:F,delayHide:X});const{showPortal:S,hidePortal:b,renderPortal:V}=ue(v,l,ee,"tooltip");if(o.platform.is.mobile===!0){const t={anchorEl:a,innerRef:l,onClickOutside(n){return m(n),n.target.classList.contains("q-dialog__backdrop")&&ve(n),!0}},g=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);E(g,n=>{(n===!0?Se:M)(t)}),k(()=>{M(t)})}function $(t){S(),W(()=>{s=new MutationObserver(()=>u()),s.observe(l.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),w()}),i===void 0&&(i=E(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,u)),d(()=>{S(!0),y("show",t)},e.transitionDuration)}function z(t){I(),b(),P(),d(()=>{b(!0),y("hide",t)},e.transitionDuration)}function P(){s!==void 0&&(s.disconnect(),s=void 0),i!==void 0&&(i(),i=void 0),J(),H(r,"tooltipTemp")}function u(){pe({targetEl:l.value,offset:e.offset,anchorEl:a.value,anchorOrigin:B.value,selfOrigin:N.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function F(t){if(o.platform.is.mobile===!0){L(),document.body.classList.add("non-selectable");const g=a.value,n=["touchmove","touchcancel","touchend","click"].map(O=>[g,O,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{U(t)},e.delay)}function X(t){o.platform.is.mobile===!0&&(H(r,"tooltipTemp"),L(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{m(t)},e.hideDelay)}function Y(){if(e.noParentEvent===!0||a.value===null)return;const t=o.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function w(){if(a.value!==null||e.scrollTarget!==void 0){p.value=ce(a.value,e.scrollTarget);const t=e.noParentEvent===!0?u:m;G(p.value,t)}}function Z(){return c.value===!0?A("div",{...h,ref:l,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",h.class],style:[h.style,_.value],role:"tooltip"},he(j.default)):null}function ee(){return A(de,R.value,Z)}return k(P),Object.assign(v.proxy,{updatePosition:u}),V}});export{Oe as Q};
