(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6724"],{"731c":function(e,t,l){"use strict";l.r(t);var c=l("7a23"),j=l("db86"),a=l("85eb"),b=l("ae20"),i=l("7801"),s=l("567f"),O=l("8174");const u={class:"test-case"},r={class:"screen-divide"},n=Object(c["g"])("h1",null,"Diff Two Arrays",-1),d=Object(c["g"])("p",null," Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. ",-1),o=Object(c["g"])("p",null,[Object(c["g"])("b",null,"Note:"),Object(c["i"])(" You can return the array with its elements in any order. ")],-1),g=Object(c["g"])("hr",null,null,-1),f={class:"tests"},h={class:"test"},p=Object(c["i"])("diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])"),w=Object(c["i"])(" should return an array. "),y={class:"test"},_=Object(c["i"])('["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]'),L=Object(c["i"])(" should return "),m=Object(c["i"])('["pink wool"]'),k=Object(c["i"])(". "),v={class:"test"},A=Object(c["i"])('["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]'),x=Object(c["i"])(" should return an array with one item. "),J={class:"test"},R=Object(c["i"])('["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]'),W=Object(c["i"])(" should return "),z=Object(c["i"])('["diorite", "pink wool"]'),C=Object(c["i"])(". "),D={class:"test"},I=Object(c["i"])('["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]'),N=Object(c["i"])(" should return an array with two items. "),S={class:"test"},T=Object(c["i"])('["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]'),Y=Object(c["i"])(" should return "),q=Object(c["i"])("[]"),B=Object(c["i"])(". "),E={class:"test"},F=Object(c["i"])('["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]'),G=Object(c["i"])(" should return an empty array. "),H={class:"test"},K=Object(c["i"])("[1, 2, 3, 5], [1, 2, 3, 4, 5]"),M=Object(c["i"])(" should return "),P=Object(c["i"])("[4]"),Q=Object(c["i"])(". "),U={class:"test"},V=Object(c["i"])("[1, 2, 3, 5], [1, 2, 3, 4, 5]"),X=Object(c["i"])(" should return an array with one item. "),Z={class:"test"},$=Object(c["i"])('[1, "calf", 3, "piglet"], [1, "calf", 3, 4]'),ee=Object(c["i"])(" should return "),te=Object(c["i"])('["piglet", 4]'),le=Object(c["i"])(". "),ce={class:"test"},je=Object(c["i"])('[1, "calf", 3, "piglet"], [1, "calf", 3, 4]'),ae=Object(c["i"])(" should return an array with two items. "),be={class:"test"},ie=Object(c["i"])('[], ["snuffleupagus", "cookie monster", "elmo"]'),se=Object(c["i"])(" should return "),Oe=Object(c["i"])('["snuffleupagus", "cookie monster", "elmo"]'),ue=Object(c["i"])(". "),re={class:"test"},ne=Object(c["i"])('[], ["snuffleupagus", "cookie monster", "elmo"]'),de=Object(c["i"])(" should return an array with three items. "),oe={class:"test"},ge=Object(c["i"])('[1, "calf", 3, "piglet"], [7, "filly"]'),fe=Object(c["i"])(" should return "),he=Object(c["i"])('[1, "calf", 3, "piglet", 7, "filly"]'),pe=Object(c["i"])(". "),we={class:"test"},ye=Object(c["i"])('[1, "calf", 3, "piglet"], [7, "filly"]'),_e=Object(c["i"])(" should return an array with six items. ");var Le={setup(e){const t=Object(c["A"])();function l(e){let l=window.innerWidth-e-30;t.value.style.width=l+"px"}return(e,Le)=>(Object(c["v"])(),Object(c["f"])("div",u,[Object(c["j"])(j["a"]),Object(c["g"])("div",r,[Object(c["g"])("div",{class:"left-screen",ref_key:"leftScreenRef",ref:t},[Object(c["j"])(a["a"],null,{default:Object(c["L"])(()=>[n,d,o,g,Object(c["j"])(s["a"]),Object(c["g"])("ul",f,[Object(c["g"])("li",h,[Object(c["j"])(O["a"]),Object(c["g"])("p",null,[Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[p]),_:1}),w])]),Object(c["g"])("li",y,[Object(c["j"])(O["a"]),Object(c["g"])("p",null,[Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[_]),_:1}),L,Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[m]),_:1}),k])]),Object(c["g"])("li",v,[Object(c["j"])(O["a"]),Object(c["g"])("p",null,[Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[A]),_:1}),x])]),Object(c["g"])("li",J,[Object(c["j"])(O["a"]),Object(c["g"])("p",null,[Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[R]),_:1}),W,Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[z]),_:1}),C])]),Object(c["g"])("li",D,[Object(c["j"])(O["a"]),Object(c["g"])("p",null,[Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[I]),_:1}),N])]),Object(c["g"])("li",S,[Object(c["j"])(O["a"]),Object(c["g"])("p",null,[Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[T]),_:1}),Y,Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[q]),_:1}),B])]),Object(c["g"])("li",E,[Object(c["j"])(O["a"]),Object(c["g"])("p",null,[Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[F]),_:1}),G])]),Object(c["g"])("li",H,[Object(c["j"])(O["a"]),Object(c["g"])("p",null,[Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[K]),_:1}),M,Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[P]),_:1}),Q])]),Object(c["g"])("li",U,[Object(c["j"])(O["a"]),Object(c["g"])("p",null,[Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[V]),_:1}),X])]),Object(c["g"])("li",Z,[Object(c["j"])(O["a"]),Object(c["g"])("p",null,[Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[$]),_:1}),ee,Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[te]),_:1}),le])]),Object(c["g"])("li",ce,[Object(c["j"])(O["a"]),Object(c["g"])("p",null,[Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[je]),_:1}),ae])]),Object(c["g"])("li",be,[Object(c["j"])(O["a"]),Object(c["g"])("p",null,[Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[ie]),_:1}),se,Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[Oe]),_:1}),ue])]),Object(c["g"])("li",re,[Object(c["j"])(O["a"]),Object(c["g"])("p",null,[Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[ne]),_:1}),de])]),Object(c["g"])("li",oe,[Object(c["j"])(O["a"]),Object(c["g"])("p",null,[Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[ge]),_:1}),fe,Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[he]),_:1}),pe])]),Object(c["g"])("li",we,[Object(c["j"])(O["a"]),Object(c["g"])("p",null,[Object(c["j"])(b["a"],null,{default:Object(c["L"])(()=>[ye]),_:1}),_e])])])]),_:1})],512),Object(c["j"])(i["a"],{onResizeWidth:l})])]))}};const me=Le;t["default"]=me}}]);
//# sourceMappingURL=chunk-2d0d6724.0d5820f5.js.map