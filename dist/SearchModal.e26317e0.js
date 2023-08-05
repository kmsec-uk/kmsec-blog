import{i as ve,S as J,a as X,s as Y,e as y,t as R,b as U,c as H,d as w,f as S,g as A,h as d,j as q,k as _,l as L,m as g,n as W,o as M,p as pe,q as Z,r as ee,u as te,v as ae,w as Q,x as le,y as C,z as re,A as P,B as se,C as ge,D as be,E as ke,F as oe,G as O,H as ye}from"./chunks/SvgIcon.43859173.js";import{S as we,i as F}from"./chunks/SearchIcon.57185861.js";function G(i,{delay:e=0,duration:r=400,easing:l=ve}={}){const t=+getComputedStyle(i).opacity;return{delay:e,duration:r,easing:l,css:n=>`opacity: ${n*t}`}}const $e="modulepreload",Ee=function(i){return"/"+i},ce={},Se=function(e,r,l){if(!r||r.length===0)return e();const t=document.getElementsByTagName("link");return Promise.all(r.map(n=>{if(n=Ee(n),n in ce)return;ce[n]=!0;const s=n.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!l)for(let h=t.length-1;h>=0;h--){const f=t[h];if(f.href===n&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${a}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":$e,s||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),s)return new Promise((h,f)=>{c.addEventListener("load",h),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};function fe(i,e,r){const l=i.slice();return l[2]=e[r],l}function ue(i){let e,r=i[2]+"",l,t,n;return{c(){e=y("a"),l=R(r),this.h()},l(s){e=w(s,"A",{class:!0,href:!0,title:!0});var a=S(e);l=A(a,r),a.forEach(d),this.h()},h(){_(e,"class","inline-block text-xs px-4 py-1 rounded-full text-theme-primary bg-theme-dark-primary hover:border-theme-dark-primary hover:bg-theme-primary hover:text-theme-dark-primary"),_(e,"href",t=`/tags/${i[2]}`),_(e,"title",n=i[2])},m(s,a){L(s,e,a),g(e,l)},p(s,a){a&1&&r!==(r=s[2]+"")&&W(l,r),a&1&&t!==(t=`/tags/${s[2]}`)&&_(e,"href",t),a&1&&n!==(n=s[2])&&_(e,"title",n)},d(s){s&&d(e)}}}function he(i){let e;return{c(){e=y("hr"),this.h()},l(r){e=w(r,"HR",{class:!0}),this.h()},h(){_(e,"class","my-4 text-theme-dark-secondary")},m(r,l){L(r,e,l)},d(r){r&&d(e)}}}function Ie(i){let e,r,l,t,n=i[0].title+"",s,a,o,c,h,f,p=i[0].description+"",I,j,D,K,x,V=i[0].tags,k=[];for(let u=0;u<V.length;u+=1)k[u]=ue(fe(i,V,u));let $=!i[1]&&he();return{c(){e=y("div"),r=y("div"),l=y("h4"),t=y("a"),s=R(n),a=R(" \u2192"),h=U(),f=y("p"),I=R(p),j=U(),D=y("ul");for(let u=0;u<k.length;u+=1)k[u].c();K=U(),$&&$.c(),x=H(),this.h()},l(u){e=w(u,"DIV",{class:!0});var b=S(e);r=w(b,"DIV",{class:!0});var m=S(r);l=w(m,"H4",{class:!0});var v=S(l);t=w(v,"A",{href:!0,title:!0});var E=S(t);s=A(E,n),a=A(E," \u2192"),E.forEach(d),v.forEach(d),h=q(m),f=w(m,"P",{class:!0});var B=S(f);I=A(B,p),B.forEach(d),j=q(m),D=w(m,"UL",{class:!0});var N=S(D);for(let z=0;z<k.length;z+=1)k[z].l(N);N.forEach(d),m.forEach(d),b.forEach(d),K=q(u),$&&$.l(u),x=H(),this.h()},h(){_(t,"href",o=`/${i[0].category}/${i[0].slug}`),_(t,"title",c=i[0].title),_(l,"class","text-lg leading-tight font-semibold text-white mb-2"),_(f,"class","text-base text-theme-dark-primary leading-5 line-clamp-2"),_(D,"class","list-none py-2 flex flex-wrap gap-2"),_(r,"class","flex-1"),_(e,"class","flex gap-6 text-left hover:bg-theme-primary")},m(u,b){L(u,e,b),g(e,r),g(r,l),g(l,t),g(t,s),g(t,a),g(r,h),g(r,f),g(f,I),g(r,j),g(r,D);for(let m=0;m<k.length;m+=1)k[m]&&k[m].m(D,null);L(u,K,b),$&&$.m(u,b),L(u,x,b)},p(u,[b]){if(b&1&&n!==(n=u[0].title+"")&&W(s,n),b&1&&o!==(o=`/${u[0].category}/${u[0].slug}`)&&_(t,"href",o),b&1&&c!==(c=u[0].title)&&_(t,"title",c),b&1&&p!==(p=u[0].description+"")&&W(I,p),b&1){V=u[0].tags;let m;for(m=0;m<V.length;m+=1){const v=fe(u,V,m);k[m]?k[m].p(v,b):(k[m]=ue(v),k[m].c(),k[m].m(D,null))}for(;m<k.length;m+=1)k[m].d(1);k.length=V.length}u[1]?$&&($.d(1),$=null):$||($=he(),$.c(),$.m(x.parentNode,x))},i:M,o:M,d(u){u&&d(e),pe(k,u),u&&d(K),$&&$.d(u),u&&d(x)}}}function Le(i,e,r){let{post:l}=e,{isLast:t=!1}=e;return i.$$set=n=>{"post"in n&&r(0,l=n.post),"isLast"in n&&r(1,t=n.isLast)},[l,t]}class De extends J{constructor(e){super(),X(this,e,Le,Ie,Y,{post:0,isLast:1})}}function de(i,e,r){const l=i.slice();return l[7]=e[r],l[9]=r,l}function Ve(i){let e;function r(n,s){return n[0].length?Be:xe}let l=r(i),t=l(i);return{c(){e=y("div"),t.c(),this.h()},l(n){e=w(n,"DIV",{class:!0});var s=S(e);t.l(s),s.forEach(d),this.h()},h(){_(e,"class","text-center text-theme-dark-primary")},m(n,s){L(n,e,s),t.m(e,null)},p(n,s){l!==(l=r(n))&&(t.d(1),t=l(n),t&&(t.c(),t.m(e,null)))},i:M,o:M,d(n){n&&d(e),t.d()}}}function Pe(i){let e,r,l=i[1],t=[];for(let s=0;s<l.length;s+=1)t[s]=_e(de(i,l,s));const n=s=>C(t[s],1,1,()=>{t[s]=null});return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=H()},l(s){for(let a=0;a<t.length;a+=1)t[a].l(s);e=H()},m(s,a){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(s,a);L(s,e,a),r=!0},p(s,a){if(a&2){l=s[1];let o;for(o=0;o<l.length;o+=1){const c=de(s,l,o);t[o]?(t[o].p(c,a),P(t[o],1)):(t[o]=_e(c),t[o].c(),P(t[o],1),t[o].m(e.parentNode,e))}for(le(),o=l.length;o<t.length;o+=1)n(o);re()}},i(s){if(!r){for(let a=0;a<l.length;a+=1)P(t[a]);r=!0}},o(s){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)C(t[a]);r=!1},d(s){pe(t,s),s&&d(e)}}}function xe(i){let e;return{c(){e=R("Search the kmsec braindump")},l(r){e=A(r,"Search the kmsec braindump")},m(r,l){L(r,e,l)},d(r){r&&d(e)}}}function Be(i){let e;return{c(){e=R("No matching items found.")},l(r){e=A(r,"No matching items found.")},m(r,l){L(r,e,l)},d(r){r&&d(e)}}}function _e(i){let e,r;return e=new De({props:{post:i[7],isLast:i[9]===i[1].length-1}}),{c(){Z(e.$$.fragment)},l(l){ee(e.$$.fragment,l)},m(l,t){te(e,l,t),r=!0},p(l,t){const n={};t&2&&(n.post=l[7]),t&2&&(n.isLast=l[9]===l[1].length-1),e.$set(n)},i(l){r||(P(e.$$.fragment,l),r=!0)},o(l){C(e.$$.fragment,l),r=!1},d(l){se(e,l)}}}function Ne(i){let e,r,l,t,n,s,a,o,c,h,f,p,I,j,D,K,x,V,k,$;t=new we({props:{found:i[1].length>0}});const u=[Pe,Ve],b=[];function m(v,E){return v[1].length?0:1}return c=m(i),h=b[c]=u[c](i),{c(){e=y("div"),r=y("div"),l=y("label"),Z(t.$$.fragment),n=U(),s=y("input"),a=U(),o=y("div"),h.c(),f=U(),p=y("div"),I=y("small"),j=R("click anywhere outside, or press "),D=y("kbd"),K=R("Esc"),x=R(" to close"),this.h()},l(v){e=w(v,"DIV",{class:!0});var E=S(e);r=w(E,"DIV",{class:!0});var B=S(r);l=w(B,"LABEL",{class:!0,for:!0});var N=S(l);ee(t.$$.fragment,N),N.forEach(d),n=q(B),s=w(B,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),B.forEach(d),a=q(E),o=w(E,"DIV",{class:!0});var z=S(o);h.l(z),z.forEach(d),f=q(E),p=w(E,"DIV",{class:!0});var ne=S(p);I=w(ne,"SMALL",{});var T=S(I);j=A(T,"click anywhere outside, or press "),D=w(T,"KBD",{});var ie=S(D);K=A(ie,"Esc"),ie.forEach(d),x=A(T," to close"),T.forEach(d),ne.forEach(d),E.forEach(d),this.h()},h(){_(l,"class","text-theme-primary absolute top-2 left-2"),_(l,"for","search"),_(s,"class","w-full px-4 py-2 pl-10 text-xl font-semibold text-gray-600 border-0 shadow-inner rounded-md bg-gray-100"),_(s,"type","text"),_(s,"name","search"),_(s,"placeholder","intel"),_(r,"class","pb-4 relative"),_(o,"class","w-96 h-64 py-4 overflow-y-auto"),_(p,"class","w-full text-center text-white"),_(e,"class","w-full relative bg-theme-primary p-8 rounded-md shadow-lg")},m(v,E){L(v,e,E),g(e,r),g(r,l),te(t,l,null),g(r,n),g(r,s),i[5](s),ae(s,i[0]),g(e,a),g(e,o),b[c].m(o,null),g(e,f),g(e,p),g(p,I),g(I,j),g(I,D),g(D,K),g(I,x),V=!0,k||($=Q(s,"input",i[6]),k=!0)},p(v,[E]){const B={};E&2&&(B.found=v[1].length>0),t.$set(B),E&1&&s.value!==v[0]&&ae(s,v[0]);let N=c;c=m(v),c===N?b[c].p(v,E):(le(),C(b[N],1,1,()=>{b[N]=null}),re(),h=b[c],h?h.p(v,E):(h=b[c]=u[c](v),h.c()),P(h,1),h.m(o,null))},i(v){V||(P(t.$$.fragment,v),P(h),V=!0)},o(v){C(t.$$.fragment,v),C(h),V=!1},d(v){v&&d(e),se(t),i[5](null),b[c].d(),k=!1,$()}}}function Re(i,e,r){let l,t,n,s="",a=[];ge(async()=>{const h=(await Se(()=>import("./chunks/lunr.bd813239.js").then(p=>p.l),[])).default,f=await fetch("/search-index.json");r(3,t=await f.json()),r(4,n=h(function(){this.ref("slug"),this.field("title"),this.field("description"),this.field("tags"),this.field("body"),t.forEach(p=>{this.add(p)},this)})),l.focus()});function o(h){be[h?"unshift":"push"](()=>{l=h,r(2,l)})}function c(){s=this.value,r(0,s)}return i.$$.update=()=>{if(i.$$.dirty&27&&s&&s.length>=3){const h=n.search(s);r(1,a=[]),h.map(f=>{t.filter(p=>{f.ref===p.slug&&a.push(p)})})}},[s,a,l,t,n,o,c]}class Ae extends J{constructor(e){super(),X(this,e,Re,Ne,Y,{})}}function me(i){let e,r,l,t,n,s,a,o,c,h;return s=new Ae({}),{c(){e=y("div"),l=U(),t=y("div"),n=y("div"),Z(s.$$.fragment),this.h()},l(f){e=w(f,"DIV",{class:!0,tabindex:!0}),S(e).forEach(d),l=q(f),t=w(f,"DIV",{class:!0});var p=S(t);n=w(p,"DIV",{class:!0,tabindex:!0});var I=S(n);ee(s.$$.fragment,I),I.forEach(d),p.forEach(d),this.h()},h(){_(e,"class","absolute inset-0 h-screen w-screen opacity-50 bg-gradient-to-tr from-slate-600 to-slate-900 z-0"),_(e,"tabindex","-1"),_(n,"class","w-full z-10 pointer-events-auto"),_(n,"tabindex","-1"),_(t,"class","absolute inset-0 grid justify-center content-center pointer-events-none")},m(f,p){L(f,e,p),L(f,l,p),L(f,t,p),g(t,n),te(s,n,null),o=!0,c||(h=[Q(e,"keydown",i[4]),Q(e,"click",i[1]),Q(n,"keydown",i[5])],c=!0)},p:M,i(f){o||(oe(()=>{!o||(r||(r=O(e,G,{duration:100},!0)),r.run(1))}),P(s.$$.fragment,f),oe(()=>{!o||(a||(a=O(n,G,{duration:100},!0)),a.run(1))}),o=!0)},o(f){r||(r=O(e,G,{duration:100},!1)),r.run(0),C(s.$$.fragment,f),a||(a=O(n,G,{duration:100},!1)),a.run(0),o=!1},d(f){f&&d(e),f&&r&&r.end(),f&&d(l),f&&d(t),se(s),f&&a&&a.end(),c=!1,ye(h)}}}function Ce(i){let e,r,l=i[0]&&me(i);return{c(){l&&l.c(),e=H()},l(t){l&&l.l(t),e=H()},m(t,n){l&&l.m(t,n),L(t,e,n),r=!0},p(t,[n]){t[0]?l?(l.p(t,n),n&1&&P(l,1)):(l=me(t),l.c(),P(l,1),l.m(e.parentNode,e)):l&&(le(),C(l,1,1,()=>{l=null}),re())},i(t){r||(P(l),r=!0)},o(t){C(l),r=!1},d(t){l&&l.d(t),t&&d(e)}}}function Ke(i,e,r){let l;ke(i,F,c=>r(0,l=c));const t=()=>F.set(!1);function n(c){c.key==="Escape"&&F.set(!1)}function s(c){c.key==="Escape"&&F.set(!1)}return[l,t,n,s,c=>{n(c)},c=>{n(c)}]}class qe extends J{constructor(e){super(),X(this,e,Ke,Ce,Y,{handleKeydown1:3})}get handleKeydown1(){return this.$$.ctx[3]}}export{qe as default};
