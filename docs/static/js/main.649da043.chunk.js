(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c(0),i=c.n(r),n=c(16),s=c.n(n),l=(c(23),c(10)),j=c(2),h=(c(24),function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results}))}),o=c(7),d=function(e){return Object(a.jsx)(o.b,{title:"Details character",to:"/character-detail/".concat(e.id),children:Object(a.jsxs)("section",{className:"article",children:[Object(a.jsx)("img",{className:"characterCard_photo",src:e.img,alt:"Main character"}),Object(a.jsx)("h3",{className:"character_title link",children:e.name}),Object(a.jsx)("h4",{className:"character_title",children:e.species})]})})},m=c.p+"static/media/newGifError.5310d615.gif",u=function(e){var t=e.character.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(d,{img:e.image,name:e.name,species:e.species,id:e.id})},e.id)}));return e.character.length>0?Object(a.jsxs)("ul",{children:[t," ",e.handleFilter]}):Object(a.jsxs)("div",{className:"gif",children:[Object(a.jsx)("p",{children:"Error we can't find the character! "}),"  ",Object(a.jsx)("img",{className:"gif_error",alt:"gif rick and morty",src:m})]})},b=function(e){return Object(a.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault()},children:[Object(a.jsx)("label",{className:"character_title label",htmlFor:"name",children:"Name "}),Object(a.jsx)("input",{className:"character_input",value:e.textInput,type:"text",id:"name",onChange:function(t){e.handleFilter(t.target.value)}})]})},O=function(e){return console.log(e.origin.name),Object(a.jsx)("form",{children:Object(a.jsxs)("div",{className:"characterDetail_container",children:[Object(a.jsx)("div",{className:" characterDetail_containerImg",children:Object(a.jsx)("img",{className:"characterDetail_imgDetail",src:e.image,alt:"Main character"})}),Object(a.jsxs)("div",{className:"characterDetail_containerInfo",children:[Object(a.jsxs)("h3",{className:"characterDetail detailName",children:["Name: ",e.name]}),Object(a.jsxs)("h3",{className:"characterDetail detailSpieces",children:["Species: ",e.species]}),Object(a.jsxs)("h3",{className:"characterDetail detailOrigin",children:["Origin: ",e.origin.name]}),Object(a.jsxs)("h3",{className:"characterDetail detailEpisode",children:["Episode: ",e.episode.length]}),Object(a.jsxs)("h3",{className:"characterDetail detailSatuts",children:["Status: ",e.status]})]}),Object(a.jsx)("div",{className:"characterDetail_button",children:Object(a.jsx)(o.b,{className:"characterLink",title:"character",to:"/",children:Object(a.jsx)("button",{className:"characterDetail_ home",title:"volver",children:"Home"})})})]})})},x=(c.p,function(){return Object(a.jsx)("div",{className:"loading loading--fixed"})}),f=c.p+"static/media/gitTitle.ab7ee660.gif",p=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1],n=Object(r.useState)(""),s=Object(l.a)(n,2),o=s[0],d=s[1],m=Object(r.useState)("true"),p=Object(l.a)(m,2),g=p[0],N=p[1];Object(r.useEffect)((function(){N(!0),h().then((function(e){i(e),N(!1)}))}),[]);var v=c.filter((function(e){return e.name.toUpperCase().includes(o.toUpperCase())}));return Object(a.jsxs)("div",{className:"App",children:[!0===g?Object(a.jsx)(x,{}):null,Object(a.jsxs)(j.c,{children:[Object(a.jsxs)(j.a,{exact:!0,path:"/",children:[Object(a.jsx)("div",{className:"home__container--img",children:Object(a.jsx)("img",{className:"img_home",alt:"Ricky and Morty",src:f})}),Object(a.jsx)(b,{handleFilter:function(e){d(e)},textInput:o}),Object(a.jsx)(u,{character:v})]}),Object(a.jsx)(j.a,{path:"/character-detail/:characterId",render:function(e){var t=parseInt(e.match.params.characterId),r=c.find((function(e){return t===e.id}));if(void 0!==r)return console.log("soy FoundCharacter",r),Object(a.jsx)(O,{image:r.image,name:r.name,species:r.species,origin:r.origin,episode:r.episode,status:r.status})}})]})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),a(e),r(e),i(e),n(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(p,{})})}),document.getElementById("root")),g()}},[[30,1,2]]]);
//# sourceMappingURL=main.649da043.chunk.js.map