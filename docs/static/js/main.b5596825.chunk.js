(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),r=c.n(n),i=c(16),s=c.n(i),l=(c(23),c(14)),o=c(2),j=(c(24),function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results}))}),h=c(7),d=function(e){return Object(a.jsxs)("section",{className:"article",children:[Object(a.jsx)("img",{className:"characterCard_photo",src:e.img,alt:"Main character"}),Object(a.jsx)(h.b,{title:"Details character",to:"/character-detail/".concat(e.id),children:Object(a.jsx)("h3",{className:"character_title link",children:e.name})}),Object(a.jsx)("h4",{className:"character_title",children:e.species})]})},u=function(e){var t=e.character.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(d,{img:e.image,name:e.name,species:e.species,id:e.id})},e.id)}));return e.character.length>0?Object(a.jsxs)("ul",{children:[t," ",e.handleFilter]}):Object(a.jsxs)("p",{children:["No hay ning\xfan personaje que coincida con la palabra ",e.setTextInput]})},m=function(e){return Object(a.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault()},children:[Object(a.jsx)("label",{className:"character_title label",htmlFor:"name",children:"Buscar por nombre"}),Object(a.jsx)("input",{value:e.textInput,type:"text",id:"name",onChange:function(t){e.handleFilter(t.target.value)}})]})},b=function(e){return console.log(e.origin.name),Object(a.jsxs)("form",{children:[Object(a.jsx)(h.b,{title:"character",to:"/",children:Object(a.jsx)("button",{className:"detailVolver",title:"volver",children:"Volver"})}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"divDetails",children:Object(a.jsx)("img",{className:"imgDetail",src:e.image,alt:"Main character"})}),Object(a.jsxs)("div",{className:"divInfo",children:[Object(a.jsxs)("h3",{className:"character_title detailCard",children:["Name: ",e.name]}),Object(a.jsxs)("h3",{className:"character_title detailCard",children:["Species: ",e.species]}),Object(a.jsxs)("h3",{className:"character_title detailCard",children:["Origin: ",e.origin.name]}),Object(a.jsxs)("h3",{className:"character_title detailCard",children:["Episode: ",e.episode.length]}),Object(a.jsxs)("h3",{className:"character_title detailCard",children:["Status: ",e.status]})]})]})]})},p=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),h=s[0],d=s[1];Object(n.useEffect)((function(){j().then((function(e){r(e)}))}),[]);var p=c.filter((function(e){return e.name.toUpperCase().includes(h.toUpperCase())}));return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(o.c,{children:[Object(a.jsxs)(o.a,{exact:!0,path:"/",children:[Object(a.jsx)(m,{handleFilter:function(e){d(e)},textInput:h}),Object(a.jsx)(u,{character:p})]}),Object(a.jsx)(o.a,{path:"/character-detail/:characterId",render:function(e){var t=parseInt(e.match.params.characterId),n=c.find((function(e){return t===e.id}));if(void 0!==n)return console.log("soy FoundCharacter",n),Object(a.jsx)(b,{image:n.image,name:n.name,species:n.species,origin:n.origin,episode:n.episode,status:n.status})}})]})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(h.a,{children:Object(a.jsx)(p,{})})}),document.getElementById("root")),O()}},[[30,1,2]]]);
//# sourceMappingURL=main.b5596825.chunk.js.map