(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{54:function(e,t,n){e.exports=n(85)},85:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(7),c=n.n(o),r=n(13),i=n(43),u=n.n(i);var s=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(u.a,null),"Keeper"))};const m=(new Date).getFullYear();var d=function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",m))},E=n(48),p=n.n(E),f=n(49),h=n.n(f),g=n(19),b=n(102),v=n(103),j=n(47),O=n.n(j),k=n(104),w=n(45),C=n.n(w),S=n(14),y=n.n(S);var D=function(e){const t=Object(a.useState)({title:"",content:""}),n=Object(r.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)({rows:1,hide:!0}),u=Object(r.a)(i,2),s=u[0],m=u[1];function d(e){const t=e.target,n=t.name,a=t.value;c(e=>Object(g.a)(Object(g.a)({},e),{},{[n]:a})),console.log(o)}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note",onSubmit:e=>{e.preventDefault()}},l.a.createElement("input",{type:s.hide?"hidden":"none",onChange:d,name:"title",value:o.title,placeholder:"Title",style:{fontWeight:"bold"}}),l.a.createElement("textarea",{onClick:function(){m({title:!1,rows:3})},onChange:d,name:"content",value:o.content,placeholder:"Take a note...",rows:s.rows}),l.a.createElement(k.a,{in:!s.hide},l.a.createElement(v.a,{onClick:function(t){e.onclick(o),o.title&&o.content&&(y.a.post("http://localhost:5000",o),c({title:"",content:""}),t.preventDefault())}},l.a.createElement(C.a,null)))))};var N=function(e){const t=Object(a.useState)({title:e.notetitle,content:e.notecontent}),n=Object(r.a)(t,2),o=n[0],c=n[1];function i(e){const t=e.target,n=t.name,a=t.value;c(e=>Object(g.a)(Object(g.a)({},e),{},{[n]:a})),console.log(o)}return console.log(o+","+e.notecontent),l.a.createElement(b.a,Object.assign({},e,{dialogClassName:"modal-30w",centered:!0}),l.a.createElement(b.a.Header,{closeButton:!0},l.a.createElement("form",{className:"create-note",onSubmit:e=>{e.preventDefault()}},l.a.createElement("input",{className:"modalTextArea",onChange:i,name:"title",value:o.title,style:{fontWeight:"bold"}}),l.a.createElement("textarea",{className:"modalTextArea",onChange:i,name:"content",value:o.content}),l.a.createElement(v.a,{onClick:function(t){o.title&&o.content&&(y.a.put("http://localhost:5000/".concat(e._id),o),window.location.reload(),c({title:e.notetitle,content:e.notecontent}),t.preventDefault())}},l.a.createElement(O.a,null)))))};var _=function(e){const t=l.a.useState(!1),n=Object(r.a)(t,2),a=n[0],o=n[1];return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(t){e.delete(e.id),y.a.delete("http://localhost:5000/".concat(e._id)),t.preventDefault()},name:"deleteListId"},l.a.createElement(p.a,null)),l.a.createElement("button",{name:"editListId",onClick:()=>{console.log(a),o(!0)}},l.a.createElement(h.a,null)),l.a.createElement(N,{notetitle:e.title,notecontent:e.content,show:a,_id:e._id,onHide:()=>o(!1)}))};var x=function(){const e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1];function c(e){console.log(e),o(t=>t.filter((function(t,n){return n!==e})))}return Object(a.useEffect)(()=>{console.log("inside useEffect"),y.a.get("http://localhost:5000").then(e=>{o(e.data)}).catch(e=>{console.log(e)})},[]),l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement(D,{onclick:function(e){console.log(e),o(t=>(console.log(t),[...t,e]))}}),n.map((e,t)=>l.a.createElement(_,{key:t,_id:e._id,id:t,title:e.title,content:e.content,delete:c})),l.a.createElement(d,null))};c.a.render(l.a.createElement(x,null),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.427462c8.chunk.js.map