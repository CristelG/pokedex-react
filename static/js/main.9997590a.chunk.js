(this["webpackJsonppokedex-react"]=this["webpackJsonppokedex-react"]||[]).push([[0],{33:function(e,a,t){e.exports=t.p+"static/media/spinner.83cba2ad.gif"},37:function(e,a,t){e.exports=t(67)},42:function(e,a,t){},44:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),n=t(32),l=t.n(n),s=(t(42),t(9)),m=t(2);t(43),t(44);var o=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},r.a.createElement(s.b,{to:"/",className:"navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"},"Pokedex")))},i=t(10),d=t.n(i),u=t(15),p=t(1),E=t(14),v=t.n(E),b=t(16),f=t(33),N=t.n(f),h=t(17);function g(){var e=Object(b.a)(["\n    text-decoration: none;\n    color: #000000;\n    &:focus,\n    &:hover,\n    &:visited,\n    &:link,\n    &:active {\n        text-decoration: none;\n    }\n"]);return g=function(){return e},e}function w(){var e=Object(b.a)(["\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n    &:hover {\n        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),\n            0 10px 10px rgba(0, 0, 0, 0.22);\n    }\n    -moz-user-select: none;\n    -website-user-select: none;\n    -user-select: none;\n    -o-user-select: none;\n"]);return w=function(){return e},e}function j(){var e=Object(b.a)(["\n    width: 5em;\n    heigh: 5em;\n    display: none;\n"]);return j=function(){return e},e}var k=h.a.img(j()),O=h.a.div(w()),x=Object(h.a)(s.b)(g());var y=function(e){var a=Object(c.useState)(""),t=Object(p.a)(a,2),n=t[0],l=t[1],s=Object(c.useState)(""),m=Object(p.a)(s,2),o=m[0],i=m[1],d=Object(c.useState)(""),u=Object(p.a)(d,2),E=u[0],v=u[1],b=Object(c.useState)(!0),f=Object(p.a)(b,2),h=f[0],g=f[1],w=Object(c.useState)(!1),j=Object(p.a)(w,2),y=j[0],S=j[1];return Object(c.useEffect)((function(){var a=e.name,t=e.url,c=t.split("/")[t.split("/").length-2],r="https://img.pokemondb.net/sprites/x-y/normal/".concat(a,".png");i(a),l(r),v(c)}),[e]),r.a.createElement("div",{className:"col-md-3 col-sm-6 mb-5"},r.a.createElement(x,{to:"pokemon/".concat(E)},r.a.createElement(O,{className:"card"},r.a.createElement("h5",{className:"card-header"},E),h?r.a.createElement("img",{src:N.a,style:{width:"5em",height:"5em"},className:"card-img-top rounded mx-auto mt-2",alt:"spinner"}):null,r.a.createElement(k,{className:"card-img-top rounded mx-auto mt-2",src:n,onLoad:function(){return g(!1)},onError:function(){return S(!0)},style:y?{display:"none"}:h?null:{display:"block"}}),y?r.a.createElement("h6",{className:"mx-auto"},r.a.createElement("span",{className:"badge badge-danger mt-2"},"Not found :(")):null,r.a.createElement("div",{className:"card-body mx-auto"},r.a.createElement("h6",{className:"card-title"},o.toLocaleLowerCase().split(/\W/).map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" "))))))};var S=function(){var e=Object(c.useState)("https://pokeapi.co/api/v2/pokemon?limit=721"),a=Object(c.useState)(null),t=Object(p.a)(a,2),n=t[0],l=t[1];return Object(c.useEffect)((function(){function a(){return(a=Object(u.a)(d.a.mark((function a(){var t;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.get(e);case 2:return t=a.sent,a.next=5,t.data.results;case 5:t=a.sent,l(t);case 7:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[e]),r.a.createElement(r.a.Fragment,null,n?r.a.createElement("div",null,r.a.createElement("div",{className:"row"},n.map((function(e){return r.a.createElement(y,{key:e.name,name:e.name,url:e.url})})))):r.a.createElement("h1",null,"Loading pokemons..."))};var C=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(S,null)))},A={bug:"B1C12E",dark:"4F3A2D",dragon:"755EDF",electric:"FCBC17",fairy:"F4B1F4",fighting:"823551D",fire:"E73B0C",flying:"A3B3F7",ghost:"6060B2",grass:"74C236",ground:"D3B357",ice:"A3E7FD",normal:"C8C4BC",poison:"934594",psychic:"ED4882",rock:"B9A156",steel:"B5B5C3",water:"3295F6"};var D=function(e){var a=Object(c.useState)(""),t=Object(p.a)(a,2),n=t[0],l=t[1],s=Object(c.useState)(""),m=Object(p.a)(s,2),o=m[0],i=m[1],E=Object(c.useState)(""),b=Object(p.a)(E,2),f=b[0],N=b[1],h=Object(c.useState)([]),g=Object(p.a)(h,2),w=g[0],j=g[1],k=Object(c.useState)(""),O=Object(p.a)(k,2),x=O[0],y=O[1],S=Object(c.useState)({hp:"",attack:"",defense:"",speed:"",specialAttack:"",specialDefense:""}),C=Object(p.a)(S,2),D=C[0],_=C[1],B=Object(c.useState)(""),F=Object(p.a)(B,2),L=F[0],P=F[1],U=Object(c.useState)(""),I=Object(p.a)(U,2),W=I[0],H=I[1],z=Object(c.useState)(""),G=Object(p.a)(z,2),J=G[0],M=G[1],R=Object(c.useState)(""),V=Object(p.a)(R,2),$=V[0],q=V[1],K=Object(c.useState)(""),Q=Object(p.a)(K,2),T=Q[0],X=Q[1],Y=Object(c.useState)(""),Z=Object(p.a)(Y,2),ee=Z[0],ae=Z[1],te=Object(c.useState)(""),ce=Object(p.a)(te,2),re=ce[0],ne=ce[1],le=Object(c.useState)(""),se=Object(p.a)(le,2),me=se[0],oe=se[1],ie=Object(c.useState)(""),de=Object(p.a)(ie,2),ue=de[0],pe=de[1];return Object(c.useEffect)((function(){function a(){return(a=Object(u.a)(d.a.mark((function a(){var t,c,r,n,s,m,o,u,E,b,f,h,g,w,k,O,x;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.match.params.pokemonIndex,c="https://pokeapi.co/api/v2/pokemon/".concat(t,"/"),r="https://pokeapi.co/api/v2/pokemon-species/".concat(t,"/"),a.next=5,v.a.get(c);case 5:return n=a.sent,l(n.data.name),s=n.data.sprites.front_default,N(s),"",m=Object(p.a)("",6),o=m[0],u=m[1],E=m[2],b=m[3],f=m[4],h=m[5],n.data.stats.map((function(e){switch(e.stat.name){case"hp":o=e.base_stat;break;case"attack":u=e.base_stat;break;case"defense":E=e.base_stat;break;case"speed":b=e.base_stat;break;case"special-attack":f=e.base_stat;break;case"special-defense":h=e.base_stat}return 0})),g=n.data.height/10,w=n.data.weight/10,k=n.data.types.map((function(e){return e.type.name})),O=n.data.abilities.map((function(e){return e.ability.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})),x=n.data.stats.filter((function(e){return e.effort>0})).map((function(e){return"".concat(e.effort," ").concat(e.stat.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" "))})).join(", "),a.next=18,v.a.get(r).then((function(e){var a="";e.data.flavor_text_entries.some((function(e){"en"!==e.language.name||(a=e.flavor_text)}));var c=e.data.gender_rate,r=12.5*c,n=12.5*(8-c),l=Math.round(100/255*e.data.capture_rate),s=e.data.egg_groups.map((function(e){return e.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})).join(", "),m=255*(e.data.hatch_counter+1);y(a),ae(r),X(n),ne(l),M(s),pe(m),i(t),j(k),_({hp:o,attack:u,defense:E,speed:b,specialAttack:f,specialDefense:h}),P(g),H(w),q(O),oe(x)}));case 18:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[e.match.params]),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement("h5",null,o)),r.a.createElement("div",{className:"col-7"},r.a.createElement("div",{className:"float-right"},w.map((function(e){return r.a.createElement("span",{key:e,className:"badge badge-pull mr-1",style:{backgroundColor:"#".concat(A[e]),color:"white"}},e.split().map((function(e){return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()})))})))))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("img",{src:f,alt:"pokemon-sprite",className:"card-img-top rounded mx-auto mt-2"})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h4",{className:"mx-auto"},n.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-4"},"HP"),r.a.createElement("div",{className:"col-12 col-md-8"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(D.hp,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,D.hp))))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-4"},"Attack"),r.a.createElement("div",{className:"col-12 col-md-8"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(D.attack,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,D.attack))))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-4"},"Defense"),r.a.createElement("div",{className:"col-12 col-md-8"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(D.defense,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,D.defense))))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-4"},"Speed"),r.a.createElement("div",{className:"col-12 col-md-8"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(D.speed,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,D.speed))))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-4"},"Special Attack"),r.a.createElement("div",{className:"col-12 col-md-8"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(D.specialAttack,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,D.specialAttack))))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-4"},"Special Defense"),r.a.createElement("div",{className:"col-12 col-md-8"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(D.specialDefense,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,D.specialDefense)))))),r.a.createElement("div",{className:"col-sm-12 mt-2"},r.a.createElement("h5",{className:"text-center"},"Description:"),r.a.createElement("p",{className:"p-2 text-center"},x))))),r.a.createElement("hr",null),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title text-center"},"Profile"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h6",{className:"float-right"},"Height:")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h6",{className:"float-left"},L," m"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h6",{className:"float-right"},"Weight:")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h6",{className:"float-left"},W," kg"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h6",{className:"float-right"},"Catch Rate:")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h6",{className:"float-left"},re,"%"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h6",{className:"float-right"},"Gender Ratio:")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(ee,"%"),backgroundColor:"#C3285B"},"aria-valuenow":"15","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,ee)),r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(T,"%"),backgroundColor:"#1976D2"},"aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,T)))))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h6",{className:"float-right"},"Egg Groups:")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h6",{className:"float-left"},J))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h6",{className:"float-right"},"Hatch Steps:")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h6",{className:"float-left"},ue))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h6",{className:"float-right"},"Abilities:")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h6",{className:"float-left"},$))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h6",{className:"float-right"},"Possible EV gain from slain:")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h6",{className:"float-left"},"+",me)))))),r.a.createElement("div",{class:"card-footer text-muted"},"Data From"," ",r.a.createElement("a",{href:"https://pokeapi.co/",target:"_blank",className:"card-link",rel:"noopener noreferrer"},"PokeAPI.co"))))};var _=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(o,null),r.a.createElement("div",{className:"container"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:C}),r.a.createElement(m.a,{exact:!0,path:"/pokemon/:pokemonIndex",component:D})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.9997590a.chunk.js.map