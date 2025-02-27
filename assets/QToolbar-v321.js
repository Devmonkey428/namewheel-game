import{n as w,p as _,q as C,g as q,K as Q,aP as K,aJ as j,i as g,y as H,aK as B,$,h as d,v as T,bc as J,a0 as k,a1 as N,m as U,b5 as A,a2 as G,D as X,N as Y,bd as Z,be as ee,aN as E,bf as P,bg as te,j as ne}from"./index-v321.js";function oe(){const e=w(!_.value);return e.value===!1&&C(()=>{e.value=!0}),{isHydrated:e}}const I=typeof ResizeObserver!="undefined",D=I===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},F=q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:m}){let o=null,t,i={width:-1,height:-1};function s(a){a===!0||e.debounce===0||e.debounce==="0"?u():o===null&&(o=setTimeout(u,e.debounce))}function u(){if(o!==null&&(clearTimeout(o),o=null),t){const{offsetWidth:a,offsetHeight:l}=t;(a!==i.width||l!==i.height)&&(i={width:a,height:l},m("resize",i))}}const{proxy:v}=H();if(v.trigger=s,I===!0){let a;const l=b=>{t=v.$el.parentNode,t?(a=new ResizeObserver(s),a.observe(t),u()):b!==!0&&j(()=>{l(!0)})};return C(()=>{l()}),Q(()=>{o!==null&&clearTimeout(o),a!==void 0&&(a.disconnect!==void 0?a.disconnect():t&&a.unobserve(t))}),K}else{let a=function(){o!==null&&(clearTimeout(o),o=null),f!==void 0&&(f.removeEventListener!==void 0&&f.removeEventListener("resize",s,B.passive),f=void 0)},l=function(){a(),t&&t.contentDocument&&(f=t.contentDocument.defaultView,f.addEventListener("resize",s,B.passive),u())};const{isHydrated:b}=oe();let f;return C(()=>{j(()=>{t=v.$el,t&&l()})}),Q(a),()=>{if(b.value===!0)return g("object",{class:"q--avoid-card-border",style:D.style,tabindex:-1,type:"text/html",data:D.url,"aria-hidden":"true",onLoad:l})}}}}),re=q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:m,emit:o}){const{proxy:{$q:t}}=H(),i=k(N,$);if(i===$)return console.error("QHeader needs to be child of QLayout"),$;const s=w(parseInt(e.heightHint,10)),u=w(!0),v=d(()=>e.reveal===!0||i.view.value.indexOf("H")!==-1||t.platform.is.ios&&i.isContainer.value===!0),a=d(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return u.value===!0?s.value:0;const n=s.value-i.scroll.value.position;return n>0?n:0}),l=d(()=>e.modelValue!==!0||v.value===!0&&u.value!==!0),b=d(()=>e.modelValue===!0&&l.value===!0&&e.reveal===!0),f=d(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),S=d(()=>{const n=i.rows.value.top,y={};return n[0]==="l"&&i.left.space===!0&&(y[t.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),n[2]==="r"&&i.right.space===!0&&(y[t.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),y});function c(n,y){i.update("header",n,y)}function p(n,y){n.value!==y&&(n.value=y)}function R({height:n}){p(s,n),c("size",n)}function O(n){b.value===!0&&p(u,!0),o("focusin",n)}T(()=>e.modelValue,n=>{c("space",n),p(u,!0),i.animate()}),T(a,n=>{c("offset",n)}),T(()=>e.reveal,n=>{n===!1&&p(u,e.modelValue)}),T(u,n=>{i.animate(),o("reveal",n)}),T(i.scroll,n=>{e.reveal===!0&&p(u,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const L={};return i.instances.header=L,e.modelValue===!0&&c("size",s.value),c("space",e.modelValue),c("offset",a.value),Q(()=>{i.instances.header===L&&(i.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const n=J(m.default,[]);return e.elevated===!0&&n.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(g(F,{debounce:0,onResize:R})),g("header",{class:f.value,style:S.value,onFocusin:O},n)}}}),se=q({name:"QPageContainer",setup(e,{slots:m}){const{proxy:{$q:o}}=H(),t=k(N,$);if(t===$)return console.error("QPageContainer needs to be child of QLayout"),$;A(G,!0);const i=d(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>g("div",{class:"q-page-container",style:i.value},U(m.default))}}),{passive:M}=B,ie=["both","horizontal","vertical"],le=q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ie.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:X},emits:["scroll"],setup(e,{emit:m}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,i,s;T(()=>e.scrollTarget,()=>{a(),v()});function u(){t!==null&&t();const f=Math.max(0,Z(i)),S=ee(i),c={top:f-o.position.top,left:S-o.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const p=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";o.position={top:f,left:S},o.directionChanged=o.direction!==p,o.delta=c,o.directionChanged===!0&&(o.direction=p,o.inflectionPoint=o.position),m("scroll",{...o})}function v(){i=Y(s,e.scrollTarget),i.addEventListener("scroll",l,M),l(!0)}function a(){i!==void 0&&(i.removeEventListener("scroll",l,M),i=void 0)}function l(f){if(f===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[S,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{c(S),t=null}}}const{proxy:b}=H();return T(()=>b.$q.lang.rtl,u),C(()=>{s=b.$el.parentNode,v()}),Q(()=>{t!==null&&t(),a()}),Object.assign(b,{trigger:l,getPosition:()=>o}),K}}),ue=q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:m,emit:o}){const{proxy:{$q:t}}=H(),i=w(null),s=w(t.screen.height),u=w(e.container===!0?0:t.screen.width),v=w({position:0,direction:"down",inflectionPoint:0}),a=w(0),l=w(_.value===!0?0:E()),b=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),f=d(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),S=d(()=>l.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),c=d(()=>l.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function p(r){if(e.container===!0||document.qScrollPrevented!==!0){const h={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};v.value=h,e.onScroll!==void 0&&o("scroll",h)}}function R(r){const{height:h,width:x}=r;let z=!1;s.value!==h&&(z=!0,s.value=h,e.onScrollHeight!==void 0&&o("scrollHeight",h),L()),u.value!==x&&(z=!0,u.value=x),z===!0&&e.onResize!==void 0&&o("resize",r)}function O({height:r}){a.value!==r&&(a.value=r,L())}function L(){if(e.container===!0){const r=s.value>a.value?E():0;l.value!==r&&(l.value=r)}}let n=null;const y={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:i,height:s,containerHeight:a,scrollbarWidth:l,totalWidth:d(()=>u.value+l.value),rows:d(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:P({size:0,offset:0,space:!1}),right:P({size:300,offset:0,space:!1}),footer:P({size:0,offset:0,space:!1}),left:P({size:300,offset:0,space:!1}),scroll:v,animate(){n!==null?clearTimeout(n):document.body.classList.add("q-body--layout-animate"),n=setTimeout(()=>{n=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,h,x){y[r][h]=x}};if(A(N,y),E()>0){let r=function(){z=null,V.classList.remove("hide-scrollbar")},h=function(){if(z===null){if(V.scrollHeight>t.screen.height)return;V.classList.add("hide-scrollbar")}else clearTimeout(z);z=setTimeout(r,300)},x=function(W){z!==null&&W==="remove"&&(clearTimeout(z),r()),window[`${W}EventListener`]("resize",h)},z=null;const V=document.body;T(()=>e.container!==!0?"add":"remove",x),e.container!==!0&&x("add"),te(()=>{x("remove")})}return()=>{const r=ne(m.default,[g(le,{onScroll:p}),g(F,{onResize:R})]),h=g("div",{class:b.value,style:f.value,ref:e.container===!0?void 0:i,tabindex:-1},r);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:i},[g(F,{onResize:O}),g("div",{class:"absolute-full",style:S.value},[g("div",{class:"scroll",style:c.value},[h])])]):h}}}),ce=q({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:m}){const o=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>g("div",{class:o.value,role:"toolbar"},U(m.default))}});export{ue as Q,re as a,se as b,ce as c,F as d,le as e};
