import{c as et,g as nt,d as rt}from"./databaseLocal-BRjNRnEM.js";import{E as st}from"./Emitter-BG7KJySb.js";import{_ as at,u as it,i as ut,r as ot,c as z,a as b,F as ct,j as ft,o as B,n as dt,t as I}from"./index-UR5WLtkw.js";var Q={exports:{}};(function(J,V){(function(k,D){J.exports=D()})(et,function(){var k=1e3,D=6e4,A=36e5,C="millisecond",M="second",$="minute",_="hour",h="day",H="week",v="month",Z="quarter",g="year",x="date",P="Invalid Date",R=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,K=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,X={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},N=function(s,n,t){var r=String(s);return!r||r.length>=n?s:""+Array(n+1-r.length).join(t)+s},tt={s:N,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+N(r,2,"0")+":"+N(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,v),a=t-e<0,i=n.clone().add(r+(a?-1:1),v);return+(-(r+(t-e)/(a?e-i:i-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:v,y:g,w:H,d:h,D:x,h:_,m:$,s:M,ms:C,Q:Z}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},L="en",S={};S[L]=X;var q="$isDayjsObject",U=function(s){return s instanceof E||!(!s||!s[q])},W=function s(n,t,r){var e;if(!n)return L;if(typeof n=="string"){var a=n.toLowerCase();S[a]&&(e=a),t&&(S[a]=t,e=a);var i=n.split("-");if(!e&&i.length>1)return s(i[0])}else{var o=n.name;S[o]=n,e=o}return!r&&e&&(L=e),e||!r&&L},f=function(s,n){if(U(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new E(t)},u=tt;u.l=W,u.i=U,u.w=function(s,n){return f(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var E=function(){function s(t){this.$L=W(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[q]=!0}var n=s.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,a=r.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var i=e.match(R);if(i){var o=i[2]-1||0,c=(i[7]||"0").substring(0,3);return a?new Date(Date.UTC(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,c)):new Date(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,c)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==P},n.isSame=function(t,r){var e=f(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return f(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<f(t)},n.$g=function(t,r,e){return u.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,a=!!u.u(r)||r,i=u.p(t),o=function(O,m){var y=u.w(e.$u?Date.UTC(e.$y,m,O):new Date(e.$y,m,O),e);return a?y:y.endOf(h)},c=function(O,m){return u.w(e.toDate()[O].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(m)),e)},d=this.$W,l=this.$M,p=this.$D,Y="set"+(this.$u?"UTC":"");switch(i){case g:return a?o(1,0):o(31,11);case v:return a?o(1,l):o(0,l+1);case H:var w=this.$locale().weekStart||0,T=(d<w?d+7:d)-w;return o(a?p-T:p+(6-T),l);case h:case x:return c(Y+"Hours",0);case _:return c(Y+"Minutes",1);case $:return c(Y+"Seconds",2);case M:return c(Y+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,a=u.p(t),i="set"+(this.$u?"UTC":""),o=(e={},e[h]=i+"Date",e[x]=i+"Date",e[v]=i+"Month",e[g]=i+"FullYear",e[_]=i+"Hours",e[$]=i+"Minutes",e[M]=i+"Seconds",e[C]=i+"Milliseconds",e)[a],c=a===h?this.$D+(r-this.$W):r;if(a===v||a===g){var d=this.clone().set(x,1);d.$d[o](c),d.init(),this.$d=d.set(x,Math.min(this.$D,d.daysInMonth())).$d}else o&&this.$d[o](c);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,r){var e,a=this;t=Number(t);var i=u.p(r),o=function(l){var p=f(a);return u.w(p.date(p.date()+Math.round(l*t)),a)};if(i===v)return this.set(v,this.$M+t);if(i===g)return this.set(g,this.$y+t);if(i===h)return o(1);if(i===H)return o(7);var c=(e={},e[$]=D,e[_]=A,e[M]=k,e)[i]||1,d=this.$d.getTime()+t*c;return u.w(d,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||P;var a=t||"YYYY-MM-DDTHH:mm:ssZ",i=u.z(this),o=this.$H,c=this.$m,d=this.$M,l=e.weekdays,p=e.months,Y=e.meridiem,w=function(m,y,j,F){return m&&(m[y]||m(r,a))||j[y].slice(0,F)},T=function(m){return u.s(o%12||12,m,"0")},O=Y||function(m,y,j){var F=m<12?"AM":"PM";return j?F.toLowerCase():F};return a.replace(K,function(m,y){return y||function(j){switch(j){case"YY":return String(r.$y).slice(-2);case"YYYY":return u.s(r.$y,4,"0");case"M":return d+1;case"MM":return u.s(d+1,2,"0");case"MMM":return w(e.monthsShort,d,p,3);case"MMMM":return w(p,d);case"D":return r.$D;case"DD":return u.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return w(e.weekdaysMin,r.$W,l,2);case"ddd":return w(e.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return u.s(o,2,"0");case"h":return T(1);case"hh":return T(2);case"a":return O(o,c,!0);case"A":return O(o,c,!1);case"m":return String(c);case"mm":return u.s(c,2,"0");case"s":return String(r.$s);case"ss":return u.s(r.$s,2,"0");case"SSS":return u.s(r.$ms,3,"0");case"Z":return i}return null}(m)||i.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var a,i=this,o=u.p(r),c=f(t),d=(c.utcOffset()-this.utcOffset())*D,l=this-c,p=function(){return u.m(i,c)};switch(o){case g:a=p()/12;break;case v:a=p();break;case Z:a=p()/3;break;case H:a=(l-d)/6048e5;break;case h:a=(l-d)/864e5;break;case _:a=l/A;break;case $:a=l/D;break;case M:a=l/k;break;default:a=l}return e?a:u.a(a)},n.daysInMonth=function(){return this.endOf(v).$D},n.$locale=function(){return S[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),a=W(t,r,!0);return a&&(e.$L=a),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),G=E.prototype;return f.prototype=G,[["$ms",C],["$s",M],["$m",$],["$H",_],["$W",h],["$M",v],["$y",g],["$D",x]].forEach(function(s){G[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),f.extend=function(s,n){return s.$i||(s(n,E,f),s.$i=!0),f},f.locale=W,f.isDayjs=U,f.unix=function(s){return f(1e3*s)},f.en=S[L],f.Ls=S,f.p={},f})})(Q);var ht=Q.exports;const lt=nt(ht),$t={class:"page int"},mt={class:"list-cars"},pt=["onClick"],vt={class:"left"},Mt={class:"placa"},_t={class:"modelo"},gt={class:"right"},yt={class:"date"},Dt={__name:"ListCars",setup(J){const{push:V}=it();ut(async()=>{st.emit("list-car"),k.value=await A()});const k=ot([]),D=$=>lt($).format("DD/MM/YYYY HH:mm:ss"),A=async()=>await rt.vehicle.toArray(),C=$=>$==="consumidor"?"segmentacao consumidor":"segmentacao revenda",M=$=>{$&&V(`/cars/edit/${$}`)};return($,_)=>(B(),z("main",$t,[b("ul",mt,[(B(!0),z(ct,null,ft(k.value,h=>(B(),z("li",{class:"item",key:h.id,onClick:H=>M(h.id)},[b("div",vt,[b("span",{class:dt(C(h.segmentacao))},I(h.segmentacao),3),b("span",Mt,I(h.placa),1),b("span",_t,I(h.modelo),1)]),b("div",gt,[b("span",yt,I(D(h.date)),1)])],8,pt))),128))])]))}},bt=at(Dt,[["__scopeId","data-v-799a6ae4"]]);export{bt as default};
