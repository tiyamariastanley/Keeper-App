(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{47:function(e,t,n){e.exports=n(77)},77:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(7),o=n.n(c),r=n(22),i=n(40),u=n.n(i);var s=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(u.a,null),"Keeper"))};const m=(new Date).getFullYear();var p=function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",m))},d=n(42),E=n.n(d),f=n(14),h=n.n(f);var g=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(t){e.delete(e.id),h.a.delete("http://localhost:5000/".concat(e._id)),t.preventDefault()},name:"deleteListId"},l.a.createElement(E.a,null)))},v=n(30),b=n(94),k=n(95),j=n(43),O=n.n(j);var w=function(e){const t=Object(a.useState)({title:"",content:""}),n=Object(r.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)({rows:1,hide:!0}),u=Object(r.a)(i,2),s=u[0],m=u[1];function p(e){const t=e.target,n=t.name,a=t.value;o(e=>Object(v.a)(Object(v.a)({},e),{},{[n]:a})),console.log(c)}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note",onSubmit:e=>{e.preventDefault()}},l.a.createElement("input",{type:s.hide?"hidden":"none",onChange:p,name:"title",value:c.title,placeholder:"Title",style:{fontWeight:"bold"}}),l.a.createElement("textarea",{onClick:function(){m({title:!1,rows:3})},onChange:p,name:"content",value:c.content,placeholder:"Take a note...",rows:s.rows}),l.a.createElement(k.a,{in:!s.hide},l.a.createElement(b.a,{onClick:function(t){e.onclick(c),c.title&&c.content&&(h.a.post("http://localhost:5000",c),o({title:"",content:""}),t.preventDefault())}},l.a.createElement(O.a,null)))))};var C=function(){const e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];function o(e){console.log(e),c(t=>t.filter((function(t,n){return n!==e})))}return Object(a.useEffect)(()=>{console.log("inside useEffect"),h.a.get("http://localhost:5000").then(e=>{c(e.data)}).catch(e=>{console.log(e)})},[]),l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement(w,{onclick:function(e){console.log(e),c(t=>(console.log(t),[...t,e]))}}),n.map((e,t)=>l.a.createElement(g,{key:t,_id:e._id,id:t,title:e.title,content:e.content,delete:o})),l.a.createElement(p,null))};o.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.ce1c3445.chunk.js.map