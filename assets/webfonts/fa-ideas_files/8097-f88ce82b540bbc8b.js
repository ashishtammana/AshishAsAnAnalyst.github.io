(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8097],{93865:function(e,t,r){"use strict";r.d(t,{Z:function(){return W}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t;this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}(),a=Math.abs,i=String.fromCharCode,s=Object.assign;function o(e,t,r){return e.replace(t,r)}function c(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function l(e,t,r){return e.slice(t,r)}function f(e){return e.length}function d(e,t){return t.push(e),e}var p=1,v=1,m=0,h=0,g=0,y="";function b(e,t,r,n,a,i,s){return{value:e,root:t,parent:r,type:n,props:a,children:i,line:p,column:v,length:s,return:""}}function x(e,t){return s(b("",null,null,"",null,null,0),e,{length:-e.length},t)}function I(){return g=h<m?u(y,h++):0,v++,10===g&&(v=1,p++),g}function k(){return u(y,h)}function w(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function R(e){return p=v=1,m=f(y=e),h=0,[]}function S(e){var t,r;return(t=h-1,r=function e(t){for(;I();)switch(g){case t:return h;case 34:case 39:34!==t&&39!==t&&e(g);break;case 40:41===t&&e(t);break;case 92:I()}return h}(91===e?e+2:40===e?e+1:e),l(y,t,r)).trim()}var C="-ms-",T="-moz-",A="-webkit-",P="comm",$="rule",E="decl",M="@keyframes";function O(e,t){for(var r="",n=e.length,a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function N(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case E:return e.return=e.return||e.value;case P:return"";case M:return e.return=e.value+"{"+O(e.children,n)+"}";case $:e.value=e.props.join(",")}return f(r=O(e.children,n))?e.return=e.value+"{"+r+"}":""}function D(e,t,r,n,i,s,c,u,f,d,p){for(var v=i-1,m=0===i?s:[""],h=m.length,g=0,y=0,x=0;g<n;++g)for(var I=0,k=l(e,v+1,v=a(y=c[g])),w=e;I<h;++I)(w=(y>0?m[I]+" "+k:o(k,/&\f/g,m[I])).trim())&&(f[x++]=w);return b(e,t,r,0===i?$:u,f,d,p)}function F(e,t,r,n){return b(e,t,r,E,l(e,0,n),l(e,n+1,-1),n)}var _=function(e,t,r){for(var n=0,a=0;n=a,a=k(),38===n&&12===a&&(t[r]=1),!w(a);)I();return l(y,e,h)},L=function(e,t){var r=-1,n=44;do switch(w(n)){case 0:38===n&&12===k()&&(t[r]=1),e[r]+=_(h-1,t,r);break;case 2:e[r]+=S(n);break;case 4:if(44===n){e[++r]=58===k()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=i(n)}while(n=I());return e},z=function(e,t){var r;return r=L(R(e),t),y="",r},j=new WeakMap,G=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||j.get(r))&&!n){j.set(e,!0);for(var a=[],i=z(t,a),s=r.props,o=0,c=0;o<i.length;o++)for(var u=0;u<s.length;u++,c++)e.props[c]=a[o]?i[o].replace(/&\f/g,s[u]):s[u]+" "+i[o]}}},Q=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},U=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case E:e.return=function e(t,r){switch(45^u(t,0)?(((r<<2^u(t,0))<<2^u(t,1))<<2^u(t,2))<<2^u(t,3):0){case 5103:return A+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return A+t+T+t+C+t+t;case 6828:case 4268:return A+t+C+t+t;case 6165:return A+t+C+"flex-"+t+t;case 5187:return A+t+o(t,/(\w+).+(:[^]+)/,A+"box-$1$2"+C+"flex-$1$2")+t;case 5443:return A+t+C+"flex-item-"+o(t,/flex-|-self/,"")+t;case 4675:return A+t+C+"flex-line-pack"+o(t,/align-content|flex-|-self/,"")+t;case 5548:return A+t+C+o(t,"shrink","negative")+t;case 5292:return A+t+C+o(t,"basis","preferred-size")+t;case 6060:return A+"box-"+o(t,"-grow","")+A+t+C+o(t,"grow","positive")+t;case 4554:return A+o(t,/([^-])(transform)/g,"$1"+A+"$2")+t;case 6187:return o(o(o(t,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),t,"")+t;case 5495:case 3959:return o(t,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return o(o(t,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+C+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+t+t;case 4095:case 3583:case 4068:case 2532:return o(t,/(.+)-inline(.+)/,A+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(f(t)-1-r>6)switch(u(t,r+1)){case 109:if(45!==u(t,r+4))break;case 102:return o(t,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+T+(108==u(t,r+3)?"$3":"$2-$3"))+t;case 115:return~c(t,"stretch")?e(o(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==u(t,r+1))break;case 6444:switch(u(t,f(t)-3-(~c(t,"!important")&&10))){case 107:return o(t,":",":"+A)+t;case 101:return o(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+A+(45===u(t,14)?"inline-":"")+"box$3$1"+A+"$2$3$1"+C+"$2box$3")+t}break;case 5936:switch(u(t,r+11)){case 114:return A+t+C+o(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return A+t+C+o(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return A+t+C+o(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return A+t+C+t+t}return t}(e.value,e.length);break;case M:return O([x(e,{value:o(e.value,"@","@"+A)})],n);case $:if(e.length)return e.props.map(function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return O([x(e,{props:[o(t,/:(read-\w+)/,":"+T+"$1")]})],n);case"::placeholder":return O([x(e,{props:[o(t,/:(plac\w+)/,":"+A+"input-$1")]}),x(e,{props:[o(t,/:(plac\w+)/,":"+T+"$1")]}),x(e,{props:[o(t,/:(plac\w+)/,C+"input-$1")]})],n)}return""}).join("")}}],W=function(e){var t,r,a,s,m,x=e.key;if("css"===x){var C=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(C,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var T=e.stylisPlugins||U,A={},$=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+x+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)A[t[r]]=!0;$.push(e)});var E=(r=(t=[G,Q].concat(T,[N,(a=function(e){m.insert(e)},function(e){!e.root&&(e=e.return)&&a(e)})])).length,function(e,n,a,i){for(var s="",o=0;o<r;o++)s+=t[o](e,n,a,i)||"";return s}),M=function(e){var t,r;return O((r=function e(t,r,n,a,s,m,x,R,C){for(var T,A=0,$=0,E=x,M=0,O=0,N=0,_=1,L=1,z=1,j=0,G="",Q=s,U=m,W=a,V=G;L;)switch(N=j,j=I()){case 40:if(108!=N&&58==u(V,E-1)){-1!=c(V+=o(S(j),"&","&\f"),"&\f")&&(z=-1);break}case 34:case 39:case 91:V+=S(j);break;case 9:case 10:case 13:case 32:V+=function(e){for(;g=k();)if(g<33)I();else break;return w(e)>2||w(g)>3?"":" "}(N);break;case 92:V+=function(e,t){for(var r;--t&&I()&&!(g<48)&&!(g>102)&&(!(g>57)||!(g<65))&&(!(g>70)||!(g<97)););return r=h+(t<6&&32==k()&&32==I()),l(y,e,r)}(h-1,7);continue;case 47:switch(k()){case 42:case 47:d(b(T=function(e,t){for(;I();)if(e+g===57)break;else if(e+g===84&&47===k())break;return"/*"+l(y,t,h-1)+"*"+i(47===e?e:I())}(I(),h),r,n,P,i(g),l(T,2,-2),0),C);break;default:V+="/"}break;case 123*_:R[A++]=f(V)*z;case 125*_:case 59:case 0:switch(j){case 0:case 125:L=0;case 59+$:-1==z&&(V=o(V,/\f/g,"")),O>0&&f(V)-E&&d(O>32?F(V+";",a,n,E-1):F(o(V," ","")+";",a,n,E-2),C);break;case 59:V+=";";default:if(d(W=D(V,r,n,A,$,s,R,G,Q=[],U=[],E),m),123===j){if(0===$)e(V,r,W,W,Q,m,E,R,U);else switch(99===M&&110===u(V,3)?100:M){case 100:case 108:case 109:case 115:e(t,W,W,a&&d(D(t,W,W,0,0,s,R,G,s,Q=[],E),U),s,U,E,R,a?Q:U);break;default:e(V,W,W,W,[""],U,0,R,U)}}}A=$=O=0,_=z=1,G=V="",E=x;break;case 58:E=1+f(V),O=N;default:if(_<1){if(123==j)--_;else if(125==j&&0==_++&&125==(g=h>0?u(y,--h):0,v--,10===g&&(v=1,p--),g))continue}switch(V+=i(j),j*_){case 38:z=$>0?1:(V+="\f",-1);break;case 44:R[A++]=(f(V)-1)*z,z=1;break;case 64:45===k()&&(V+=S(I())),M=k(),$=E=f(G=V+=function(e){for(;!w(k());)I();return l(y,e,h)}(h)),j++;break;case 45:45===N&&2==f(V)&&(_=0)}}return m}("",null,null,null,[""],t=R(t=e),0,[0],t),y="",r),E)},_={key:x,sheet:new n({key:x,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:A,registered:{},insert:function(e,t,r,n){m=r,M(e?e+"{"+t.styles+"}":t.styles),n&&(_.inserted[t.name]=!0)}};return _.sheet.hydrate($),_}},61404:function(e,t,r){"use strict";r.d(t,{O:function(){return v}});var n,a,i={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},s=/[A-Z]|^ms/g,o=/_EMO_([^_]+?)_([^]*?)_EMO_/g,c=function(e){return 45===e.charCodeAt(1)},u=function(e){return null!=e&&"boolean"!=typeof e},l=(n=Object.create(null),function(e){return void 0===n[e]&&(n[e]=c(e)?e:e.replace(s,"-$&").toLowerCase()),n[e]}),f=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(o,function(e,t,r){return a={name:t,styles:r,next:a},t})}return 1===i[e]||c(e)||"number"!=typeof t||0===t?t:t+"px"};function d(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return a={name:r.name,styles:r.styles,next:a},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)a={name:n.name,styles:n.styles,next:a},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=d(e,t,r[a])+";";else for(var i in r){var s=r[i];if("object"!=typeof s)null!=t&&void 0!==t[s]?n+=i+"{"+t[s]+"}":u(s)&&(n+=l(i)+":"+f(i,s)+";");else if(Array.isArray(s)&&"string"==typeof s[0]&&(null==t||void 0===t[s[0]]))for(var o=0;o<s.length;o++)u(s[o])&&(n+=l(i)+":"+f(i,s[o])+";");else{var c=d(e,t,s);switch(i){case"animation":case"animationName":n+=l(i)+":"+c+";";break;default:n+=i+"{"+c+"}"}}}return n}(e,t,r);case"function":if(void 0!==e){var i=a,s=r(e);return a=i,d(e,t,s)}}if(null==t)return r;var o=t[r];return void 0!==o?o:r}var p=/label:\s*([^\s;\n{]+)\s*(;|$)/g,v=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n,i=!0,s="";a=void 0;var o=e[0];null==o||void 0===o.raw?(i=!1,s+=d(r,t,o)):s+=o[0];for(var c=1;c<e.length;c++)s+=d(r,t,e[c]),i&&(s+=o[c]);p.lastIndex=0;for(var u="";null!==(n=p.exec(s));)u+="-"+n[1];return{name:function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*1540483477+((t>>>16)*59797<<16)^(65535&r)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r^=255&e.charCodeAt(n),r=(65535&r)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(s)+u,styles:s,next:a}}},66347:function(e,t,r){"use strict";function n(e,t,r){var n="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "}),n}r.d(t,{My:function(){return i},fp:function(){return n},hC:function(){return a}});var a=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},i=function(e,t,r){a(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var i=t;do e.insert(t===i?"."+n:"",i,e.sheet,!0),i=i.next;while(void 0!==i)}}},51516:function(e,t,r){"use strict";function n(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}r.d(t,{Z:function(){return n}})},95182:function(e,t,r){var n=r(70331),a=r(67948);e.exports=function(e,t,r){return void 0===r&&(r=t,t=void 0),void 0!==r&&(r=(r=a(r))==r?r:0),void 0!==t&&(t=(t=a(t))==t?t:0),n(a(e),t,r)}},7813:function(e,t,r){"use strict";r.d(t,{v:function(){return L}});var n,a,i,s=r(70079),o=r(78983),c=r(4911),u=r(32552),l=r(61296),f=r(98044),d=r(14699),p=r(58194),v=r(86499),m=r(10186),h=r(28595),g=r(29787),y=r(53315),b=r(52327),x=r(37068),I=r(19992),k=r(46789),w=r(17575),R=((n=R||{})[n.Open=0]="Open",n[n.Closed=1]="Closed",n),S=((a=S||{})[a.Pointer=0]="Pointer",a[a.Other=1]="Other",a),C=((i=C||{})[i.OpenMenu=0]="OpenMenu",i[i.CloseMenu=1]="CloseMenu",i[i.GoToItem=2]="GoToItem",i[i.Search=3]="Search",i[i.ClearSearch=4]="ClearSearch",i[i.RegisterItem=5]="RegisterItem",i[i.UnregisterItem=6]="UnregisterItem",i);function T(e,t=e=>e){let r=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,n=(0,g.z2)(t(e.items.slice()),e=>e.dataRef.current.domRef.current),a=r?n.indexOf(r):null;return -1===a&&(a=null),{items:n,activeItemIndex:a}}let A={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,t)=>{var r;let n=T(e),a=(0,m.d)(t,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeItemIndex:a,activationTrigger:null!=(r=t.trigger)?r:1}},3:(e,t)=>{let r=""!==e.searchQuery?0:1,n=e.searchQuery+t.value.toLowerCase(),a=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+r).concat(e.items.slice(0,e.activeItemIndex+r)):e.items).find(e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled}),i=a?e.items.indexOf(a):-1;return -1===i||i===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:i,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let r=T(e,e=>[...e,{id:t.id,dataRef:t.dataRef}]);return{...e,...r}},6:(e,t)=>{let r=T(e,e=>{let r=e.findIndex(e=>e.id===t.id);return -1!==r&&e.splice(r,1),e});return{...e,...r,activationTrigger:1}}},P=(0,s.createContext)(null);function $(e){let t=(0,s.useContext)(P);if(null===t){let t=Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,$),t}return t}function E(e,t){return(0,o.E)(t.type,A,e,t)}P.displayName="MenuContext";let M=s.Fragment,O=(0,c.yV)(function(e,t){let r=(0,s.useReducer)(E,{menuState:1,buttonRef:(0,s.createRef)(),itemsRef:(0,s.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:n,itemsRef:a,buttonRef:i},u]=r,l=(0,d.T)(t);(0,y.O)([i,a],(e,t)=>{var r;u({type:1}),(0,g.sP)(t,g.tJ.Loose)||(e.preventDefault(),null==(r=i.current)||r.focus())},0===n);let f=(0,s.useMemo)(()=>({open:0===n}),[n]);return s.createElement(P.Provider,{value:r},s.createElement(x.up,{value:(0,o.E)(n,{0:x.ZM.Open,1:x.ZM.Closed})},(0,c.sY)({ourProps:{ref:l},theirProps:e,slot:f,defaultTag:M,name:"Menu"})))}),N=(0,c.yV)(function(e,t){var r;let[n,a]=$("Menu.Button"),i=(0,d.T)(n.buttonRef,t),o=`headlessui-menu-button-${(0,p.M)()}`,u=(0,l.G)(),f=(0,w.z)(e=>{switch(e.key){case v.R.Space:case v.R.Enter:case v.R.ArrowDown:e.preventDefault(),e.stopPropagation(),a({type:0}),u.nextFrame(()=>a({type:2,focus:m.T.First}));break;case v.R.ArrowUp:e.preventDefault(),e.stopPropagation(),a({type:0}),u.nextFrame(()=>a({type:2,focus:m.T.Last}))}}),g=(0,w.z)(e=>{e.key===v.R.Space&&e.preventDefault()}),y=(0,w.z)(t=>{if((0,h.P)(t.currentTarget))return t.preventDefault();e.disabled||(0===n.menuState?(a({type:1}),u.nextFrame(()=>{var e;return null==(e=n.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(t.preventDefault(),a({type:0})))}),b=(0,s.useMemo)(()=>({open:0===n.menuState}),[n]),x={ref:i,id:o,type:(0,I.f)(e,n.buttonRef),"aria-haspopup":!0,"aria-controls":null==(r=n.itemsRef.current)?void 0:r.id,"aria-expanded":e.disabled?void 0:0===n.menuState,onKeyDown:f,onKeyUp:g,onClick:y};return(0,c.sY)({ourProps:x,theirProps:e,slot:b,defaultTag:"button",name:"Menu.Button"})}),D=c.AN.RenderStrategy|c.AN.Static,F=(0,c.yV)(function(e,t){var r,n;let[a,i]=$("Menu.Items"),o=(0,d.T)(a.itemsRef,t),h=(0,k.i)(a.itemsRef),y=`headlessui-menu-items-${(0,p.M)()}`,I=(0,l.G)(),R=(0,x.oJ)(),S=null!==R?R===x.ZM.Open:0===a.menuState;(0,s.useEffect)(()=>{let e=a.itemsRef.current;e&&0===a.menuState&&e!==(null==h?void 0:h.activeElement)&&e.focus({preventScroll:!0})},[a.menuState,a.itemsRef,h]),function({container:e,accept:t,walk:r,enabled:n=!0}){let a=(0,s.useRef)(t),i=(0,s.useRef)(r);(0,s.useEffect)(()=>{a.current=t,i.current=r},[t,r]),(0,f.e)(()=>{if(!e||!n)return;let t=(0,b.r)(e);if(!t)return;let r=a.current,s=i.current,o=Object.assign(e=>r(e),{acceptNode:r}),c=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,o,!1);for(;c.nextNode();)s(c.currentNode)},[e,n,a,i])}({container:a.itemsRef.current,enabled:0===a.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let C=(0,w.z)(e=>{var t,r;switch(I.dispose(),e.key){case v.R.Space:if(""!==a.searchQuery)return e.preventDefault(),e.stopPropagation(),i({type:3,value:e.key});case v.R.Enter:if(e.preventDefault(),e.stopPropagation(),i({type:1}),null!==a.activeItemIndex){let{dataRef:e}=a.items[a.activeItemIndex];null==(r=null==(t=e.current)?void 0:t.domRef.current)||r.click()}(0,g.wI)(a.buttonRef.current);break;case v.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),i({type:2,focus:m.T.Next});case v.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),i({type:2,focus:m.T.Previous});case v.R.Home:case v.R.PageUp:return e.preventDefault(),e.stopPropagation(),i({type:2,focus:m.T.First});case v.R.End:case v.R.PageDown:return e.preventDefault(),e.stopPropagation(),i({type:2,focus:m.T.Last});case v.R.Escape:e.preventDefault(),e.stopPropagation(),i({type:1}),(0,u.k)().nextFrame(()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})});break;case v.R.Tab:e.preventDefault(),e.stopPropagation(),i({type:1}),(0,u.k)().nextFrame(()=>{(0,g.EO)(a.buttonRef.current,e.shiftKey?g.TO.Previous:g.TO.Next)});break;default:1===e.key.length&&(i({type:3,value:e.key}),I.setTimeout(()=>i({type:4}),350))}}),T=(0,w.z)(e=>{e.key===v.R.Space&&e.preventDefault()}),A=(0,s.useMemo)(()=>({open:0===a.menuState}),[a]),P={"aria-activedescendant":null===a.activeItemIndex||null==(r=a.items[a.activeItemIndex])?void 0:r.id,"aria-labelledby":null==(n=a.buttonRef.current)?void 0:n.id,id:y,onKeyDown:C,onKeyUp:T,role:"menu",tabIndex:0,ref:o};return(0,c.sY)({ourProps:P,theirProps:e,slot:A,defaultTag:"div",features:D,visible:S,name:"Menu.Items"})}),_=s.Fragment,L=Object.assign(O,{Button:N,Items:F,Item:(0,c.yV)(function(e,t){let{disabled:r=!1,...n}=e,[a,i]=$("Menu.Item"),o=`headlessui-menu-item-${(0,p.M)()}`,l=null!==a.activeItemIndex&&a.items[a.activeItemIndex].id===o,v=(0,s.useRef)(null),h=(0,d.T)(t,v);(0,f.e)(()=>{if(0!==a.menuState||!l||0===a.activationTrigger)return;let e=(0,u.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=v.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[v,l,a.menuState,a.activationTrigger,a.activeItemIndex]);let y=(0,s.useRef)({disabled:r,domRef:v});(0,f.e)(()=>{y.current.disabled=r},[y,r]),(0,f.e)(()=>{var e,t;y.current.textValue=null==(t=null==(e=v.current)?void 0:e.textContent)?void 0:t.toLowerCase()},[y,v]),(0,f.e)(()=>(i({type:5,id:o,dataRef:y}),()=>i({type:6,id:o})),[y,o]);let b=(0,w.z)(e=>{if(r)return e.preventDefault();i({type:1}),(0,g.wI)(a.buttonRef.current)}),x=(0,w.z)(()=>{if(r)return i({type:2,focus:m.T.Nothing});i({type:2,focus:m.T.Specific,id:o})}),I=(0,w.z)(()=>{r||l||i({type:2,focus:m.T.Specific,id:o,trigger:0})}),k=(0,w.z)(()=>{r||!l||i({type:2,focus:m.T.Nothing})}),R=(0,s.useMemo)(()=>({active:l,disabled:r}),[l,r]);return(0,c.sY)({ourProps:{id:o,ref:h,role:"menuitem",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,disabled:void 0,onClick:b,onFocus:x,onPointerMove:I,onMouseMove:I,onPointerLeave:k,onMouseLeave:k},theirProps:n,slot:R,defaultTag:_,name:"Menu.Item"})})})},19992:function(e,t,r){"use strict";r.d(t,{f:function(){return s}});var n=r(70079),a=r(98044);function i(e){var t;if(e.type)return e.type;let r=null!=(t=e.as)?t:"button";if("string"==typeof r&&"button"===r.toLowerCase())return"button"}function s(e,t){let[r,s]=(0,n.useState)(()=>i(e));return(0,a.e)(()=>{s(i(e))},[e.type,e.as]),(0,a.e)(()=>{r||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&s("button")},[r,t]),r}},10186:function(e,t,r){"use strict";r.d(t,{T:function(){return a},d:function(){return i}});var n,a=((n=a||{})[n.First=0]="First",n[n.Previous=1]="Previous",n[n.Next=2]="Next",n[n.Last=3]="Last",n[n.Specific=4]="Specific",n[n.Nothing=5]="Nothing",n);function i(e,t){let r=t.resolveItems();if(r.length<=0)return null;let n=t.resolveActiveIndex(),a=null!=n?n:-1,i=(()=>{switch(e.focus){case 0:return r.findIndex(e=>!t.resolveDisabled(e));case 1:{let e=r.slice().reverse().findIndex((e,r,n)=>(-1===a||!(n.length-r-1>=a))&&!t.resolveDisabled(e));return -1===e?e:r.length-1-e}case 2:return r.findIndex((e,r)=>!(r<=a)&&!t.resolveDisabled(e));case 3:{let e=r.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return -1===e?e:r.length-1-e}case 4:return r.findIndex(r=>t.resolveId(r)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return -1===i?n:i}}}]);