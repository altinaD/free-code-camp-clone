(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4a3a"],{"06fd":function(e,t,c){"use strict";c.r(t);var j=c("7a23"),l=c("db86"),a=c("85eb"),b=c("ae20"),O=c("7801"),s=c("567f"),i=c("8174");const u={class:"test-case"},n={class:"screen-divide"},r=Object(j["g"])("h1",null,"Ignore Case While Matching",-1),o=Object(j["g"])("p",null," Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences. ",-1),g=Object(j["i"])(" Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are "),d=Object(j["i"])("A"),h=Object(j["i"])(", "),f=Object(j["i"])("B"),p=Object(j["i"])(", and "),m=Object(j["i"])("C"),C=Object(j["i"])(". Examples of lowercase are "),_=Object(j["i"])("a"),L=Object(j["i"])(", "),x=Object(j["i"])("b"),w=Object(j["i"])(", and "),Y=Object(j["i"])("c"),v=Object(j["i"])(". "),F=Object(j["i"])(" You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the "),y=Object(j["i"])("i"),E=Object(j["i"])(" flag. You can use it by appending it to the regex. An example of using this flag is "),k=Object(j["i"])("/ignorecase/i"),A=Object(j["i"])(". This regex can match the strings "),W=Object(j["i"])("ignorecase"),R=Object(j["i"])(", "),B=Object(j["i"])("igNoreCase"),I=Object(j["i"])(", and "),J=Object(j["i"])("IgnoreCase"),T=Object(j["i"])(". "),z=Object(j["g"])("hr",null,null,-1),D=Object(j["i"])(" Write a regex "),M=Object(j["i"])("fccRegex"),N=Object(j["i"])(" to match "),S=Object(j["i"])("freeCodeCamp"),U=Object(j["i"])(", no matter its case. Your regex should not match any abbreviations or variations with spaces. "),q=Object(j["g"])("hr",null,null,-1),G={class:"tests"},H={class:"test"},K=Object(j["i"])(" Your regex should match the string "),P=Object(j["i"])("freeCodeCamp"),Q={class:"test"},V=Object(j["i"])(" Your regex should match the string "),X=Object(j["i"])("FreeCodeCamp"),Z={class:"test"},$=Object(j["i"])(" Your regex should match the string "),ee=Object(j["i"])("FreeCodecamp"),te={class:"test"},ce=Object(j["i"])(" Your regex should match the string "),je=Object(j["i"])("FreecodeCamp"),le={class:"test"},ae=Object(j["i"])(" Your regex should not match the string "),be=Object(j["i"])("Free Code Camp"),Oe={class:"test"},se=Object(j["i"])(" Your regex should match the string "),ie=Object(j["i"])("FreeCOdeCamp"),ue={class:"test"},ne=Object(j["i"])("Your regex should not match the string "),re=Object(j["i"])("FCC"),oe={class:"test"},ge=Object(j["i"])(" Your regex should match the string "),de=Object(j["i"])("FrEeCoDeCamp"),he={class:"test"},fe=Object(j["i"])(" Your regex should match the string "),pe=Object(j["i"])("FrEeCodECamp"),me={class:"test"},Ce=Object(j["i"])(" Your regex should match the string "),_e=Object(j["i"])("FrEeCodeCAmp");var Le={setup(e){const t=Object(j["A"])();function c(e){let c=window.innerWidth-e-30;t.value.style.width=c+"px"}return(e,Le)=>(Object(j["v"])(),Object(j["f"])("div",u,[Object(j["j"])(l["a"]),Object(j["g"])("div",n,[Object(j["g"])("div",{class:"left-screen",ref_key:"leftScreenRef",ref:t},[Object(j["j"])(a["a"],null,{default:Object(j["L"])(()=>[r,o,Object(j["g"])("p",null,[g,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[d]),_:1}),h,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[f]),_:1}),p,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[m]),_:1}),C,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[_]),_:1}),L,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[x]),_:1}),w,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[Y]),_:1}),v]),Object(j["g"])("p",null,[F,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[y]),_:1}),E,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[k]),_:1}),A,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[W]),_:1}),R,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[B]),_:1}),I,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[J]),_:1}),T]),z,Object(j["g"])("p",null,[D,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[M]),_:1}),N,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[S]),_:1}),U]),q,Object(j["j"])(s["a"]),Object(j["g"])("ul",G,[Object(j["g"])("li",H,[Object(j["j"])(i["a"]),Object(j["g"])("p",null,[K,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[P]),_:1})])]),Object(j["g"])("li",Q,[Object(j["j"])(i["a"]),Object(j["g"])("p",null,[V,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[X]),_:1})])]),Object(j["g"])("li",Z,[Object(j["j"])(i["a"]),Object(j["g"])("p",null,[$,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[ee]),_:1})])]),Object(j["g"])("li",te,[Object(j["j"])(i["a"]),Object(j["g"])("p",null,[ce,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[je]),_:1})])]),Object(j["g"])("li",le,[Object(j["j"])(i["a"]),Object(j["g"])("p",null,[ae,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[be]),_:1})])]),Object(j["g"])("li",Oe,[Object(j["j"])(i["a"]),Object(j["g"])("p",null,[se,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[ie]),_:1})])]),Object(j["g"])("li",ue,[Object(j["j"])(i["a"]),Object(j["g"])("p",null,[ne,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[re]),_:1})])]),Object(j["g"])("li",oe,[Object(j["j"])(i["a"]),Object(j["g"])("p",null,[ge,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[de]),_:1})])]),Object(j["g"])("li",he,[Object(j["j"])(i["a"]),Object(j["g"])("p",null,[fe,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[pe]),_:1})])]),Object(j["g"])("li",me,[Object(j["j"])(i["a"]),Object(j["g"])("p",null,[Ce,Object(j["j"])(b["a"],null,{default:Object(j["L"])(()=>[_e]),_:1})])])])]),_:1})],512),Object(j["j"])(O["a"],{onResizeWidth:c})])]))}};const xe=Le;t["default"]=xe}}]);
//# sourceMappingURL=chunk-2d0a4a3a.c381356e.js.map