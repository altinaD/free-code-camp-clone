(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-274f01cd"],{"13f2":function(e,t,c){"use strict";c.r(t);var l=c("7a23"),a=c("d512"),s=c("db86"),j=c("85eb"),b=c("ae20"),n=c("7801"),O=c("567f"),i=c("8174");const u={class:"test-case"},d={class:"screen-divide"},r=Object(l["g"])("h1",null,"Complete a Promise with resolve and reject",-1),o=Object(l["i"])(" A promise has three states: "),f=Object(l["i"])("pending"),g=Object(l["i"])(", "),p=Object(l["i"])("fulfilled"),h=Object(l["i"])(", and "),v=Object(l["i"])("rejected"),m=Object(l["i"])(". The promise you created in the last challenge is forever stuck in the "),_=Object(l["i"])("pending"),w=Object(l["i"])(" state because you did not add a way to complete the promise. The "),L=Object(l["i"])("resolve"),k=Object(l["i"])(" and "),y=Object(l["i"])("reject"),x=Object(l["i"])(" parameters given to the promise argument are used to do this. "),P=Object(l["i"])("resolve"),T=Object(l["i"])(" is used when you want your promise to succeed, and "),I=Object(l["i"])("reject"),S=Object(l["i"])(" is used when you want it to fail. These are methods that take an argument, as seen below. "),W=Object(l["g"])("span",{class:"blue"},"const ",-1),A=Object(l["g"])("span",{class:"black"},"myPromise = ",-1),C=Object(l["g"])("span",{class:"blue"},"new ",-1),F=Object(l["g"])("span",{class:"red"},"Promise",-1),J=Object(l["g"])("span",{class:"black"},"((resolve, reject) => {",-1),R=Object(l["g"])("div",{class:"next"},null,-1),z=Object(l["g"])("span",{class:"tab blue"},"if",-1),D=Object(l["g"])("span",{class:"black"},"(condition here) {",-1),M=Object(l["g"])("div",{class:"next"},null,-1),$=Object(l["g"])("span",{class:"tab"},null,-1),q=Object(l["g"])("span",{class:"tab"},null,-1),B=Object(l["g"])("span",{class:"red"},"resolve",-1),E=Object(l["g"])("span",{class:"black"},"(",-1),G=Object(l["g"])("span",{class:"green"},'"Promise was fulfilled"',-1),H=Object(l["g"])("span",{class:"black"},");",-1),K=Object(l["g"])("div",{class:"next"},null,-1),N=Object(l["g"])("span",{class:"tab black"},"} ",-1),Q=Object(l["g"])("span",{class:"blue"},"else ",-1),U=Object(l["g"])("span",{class:"black"},"{",-1),V=Object(l["g"])("div",{class:"next"},null,-1),X=Object(l["g"])("span",{class:"tab"},null,-1),Y=Object(l["g"])("span",{class:"tab"},null,-1),Z=Object(l["g"])("span",{class:"red"},"reject",-1),ee=Object(l["g"])("span",{class:"black"},"(",-1),te=Object(l["g"])("span",{class:"green"},'"Promise was rejected"',-1),ce=Object(l["g"])("span",{class:"black"},");",-1),le=Object(l["g"])("div",{class:"next"},null,-1),ae=Object(l["g"])("span",{class:"tab black"},"}",-1),se=Object(l["g"])("div",{class:"next"},null,-1),je=Object(l["g"])("span",{class:"black"},"});",-1),be=Object(l["g"])("p",null," The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere. ",-1),ne=Object(l["g"])("hr",null,null,-1),Oe=Object(l["i"])(" Make the promise handle success and failure. If "),ie=Object(l["i"])("responseFromServer"),ue=Object(l["i"])(" is "),de=Object(l["i"])("true"),re=Object(l["i"])(", call the "),oe=Object(l["i"])("resolve"),fe=Object(l["i"])(" method to successfully complete the promise. Pass "),ge=Object(l["i"])("resolve"),pe=Object(l["i"])(" a string with the value "),he=Object(l["i"])("We got the data"),ve=Object(l["i"])(". If "),me=Object(l["i"])("responseFromServer"),_e=Object(l["i"])(" is "),we=Object(l["i"])("false"),Le=Object(l["i"])(", use the "),ke=Object(l["i"])("reject"),ye=Object(l["i"])(" method instead and pass it the string: "),xe=Object(l["i"])("Data not received"),Pe=Object(l["i"])(". "),Te=Object(l["g"])("hr",null,null,-1),Ie={class:"tests"},Se={class:"test"},We=Object(l["i"])("resolve"),Ae=Object(l["i"])(" should be called with the expected string when the "),Ce=Object(l["i"])("if"),Fe=Object(l["i"])(" condition is "),Je=Object(l["i"])("true"),Re=Object(l["i"])(". "),ze={class:"test"},De=Object(l["i"])("reject"),Me=Object(l["i"])(" should be called with the expected string when the "),$e=Object(l["i"])("if"),qe=Object(l["i"])(" condition is "),Be=Object(l["i"])("false"),Ee=Object(l["i"])(". ");var Ge={setup(e){const t=Object(l["A"])();function c(e){let c=window.innerWidth-e-30;t.value.style.width=c+"px"}return(e,Ge)=>(Object(l["v"])(),Object(l["f"])("div",u,[Object(l["j"])(s["a"]),Object(l["g"])("div",d,[Object(l["g"])("div",{class:"left-screen",ref_key:"leftScreenRef",ref:t},[Object(l["j"])(j["a"],null,{default:Object(l["L"])(()=>[r,Object(l["g"])("p",null,[o,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[f]),_:1}),g,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[p]),_:1}),h,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[v]),_:1}),m,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[_]),_:1}),w,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[L]),_:1}),k,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[y]),_:1}),x,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[P]),_:1}),T,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[I]),_:1}),S]),Object(l["j"])(a["a"],null,{default:Object(l["L"])(()=>[W,A,C,F,J,R,z,D,M,$,q,B,E,G,H,K,N,Q,U,V,X,Y,Z,ee,te,ce,le,ae,se,je]),_:1}),be,ne,Object(l["g"])("p",null,[Oe,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[ie]),_:1}),ue,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[de]),_:1}),re,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[oe]),_:1}),fe,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[ge]),_:1}),pe,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[he]),_:1}),ve,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[me]),_:1}),_e,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[we]),_:1}),Le,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[ke]),_:1}),ye,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[xe]),_:1}),Pe]),Te,Object(l["j"])(O["a"]),Object(l["g"])("ul",Ie,[Object(l["g"])("li",Se,[Object(l["j"])(i["a"]),Object(l["g"])("p",null,[Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[We]),_:1}),Ae,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[Ce]),_:1}),Fe,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[Je]),_:1}),Re])]),Object(l["g"])("li",ze,[Object(l["j"])(i["a"]),Object(l["g"])("p",null,[Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[De]),_:1}),Me,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[$e]),_:1}),qe,Object(l["j"])(b["a"],null,{default:Object(l["L"])(()=>[Be]),_:1}),Ee])])])]),_:1})],512),Object(l["j"])(n["a"],{onResizeWidth:c})])]))}};const He=Ge;t["default"]=He},"4f87":function(e,t,c){},d512:function(e,t,c){"use strict";var l=c("7a23");const a={class:"comment"};function s(e,t){return Object(l["v"])(),Object(l["f"])("div",a,[Object(l["g"])("span",null,[Object(l["C"])(e.$slots,"default",{},void 0,!0)])])}c("dbcc");var j=c("6b0d"),b=c.n(j);const n={},O=b()(n,[["render",s],["__scopeId","data-v-358fd9c6"]]);t["a"]=O},dbcc:function(e,t,c){"use strict";c("4f87")}}]);
//# sourceMappingURL=chunk-274f01cd.c7d14061.js.map