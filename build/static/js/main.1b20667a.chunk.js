(this["webpackJsonptodo_app-react"]=this["webpackJsonptodo_app-react"]||[]).push([[0],{52:function(e,t,a){e.exports=a(76)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(13),c=a.n(r),l=(a(57),a(26)),i=(a(58),a(103)),d=a(99),s=a(104),u=a(100),m=a(101),p=a(102),f=a(106),b=(a(59),a(33)),E=a.n(b),h=E.a.initializeApp({apiKey:"AIzaSyChMR0C5dHbioGq6GuvcWz887_d8oGB69M",authDomain:"todo-list-react-9f2b9.firebaseapp.com",databaseURL:"https://todo-list-react-9f2b9.firebaseio.com",projectId:"todo-list-react-9f2b9",storageBucket:"todo-list-react-9f2b9.appspot.com",messagingSenderId:"1025603995150",appId:"1:1025603995150:web:cb456a490d1d3af9b01e5f",measurementId:"G-0Z2Q0ZX2XT"}).firestore(),v=a(46),g=a.n(v),y=a(96),w=Object(y.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var j=function(e){var t=w(),a=Object(o.useState)(!1),r=Object(l.a)(a,2),c=r[0],b=r[1],E=Object(o.useState)(),v=Object(l.a)(E,2),y=v[0],j=v[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{open:c,onClose:function(e){return b(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},n.a.createElement("div",{className:t.paper},n.a.createElement("h4",null,"\ud83d\udcdd Update your todo"),n.a.createElement("p",null," ",e.todo.todo),n.a.createElement("div",{className:"update__todo"},n.a.createElement("form",null,n.a.createElement(d.a,null,n.a.createElement(s.a,{placeholder:"Type in new value here...",value:y,onChange:function(e){return j(e.target.value)}}))),n.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(){h.collection("todos").doc(e.todo.id).set({todo:y},{merge:!0}),b(!1)}},"Confirm")))),n.a.createElement(m.a,{className:"todo__list"},n.a.createElement(p.a,null,n.a.createElement(f.a,{primary:e.todo.todo,secondary:"\u23f0 Deadline: ASAP"})),n.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(e){return b(!0)}},"Update Todo"),n.a.createElement(g.a,{onClick:function(t){return h.collection("todos").doc(e.todo.id).delete()}})))},k=a(105);var C=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(o.useState)(""),i=Object(l.a)(c,2),m=i[0],p=i[1];return Object(o.useEffect)((function(){h.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,todo:e.data().todo}})))}))}),[]),n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Big Boss' Todos!\ud83d\udd25 \ud83d\ude80"),n.a.createElement("form",null,n.a.createElement(d.a,null,n.a.createElement(k.a,null,"\u2705 Write a Todo"),n.a.createElement(s.a,{value:m,onChange:function(e){return p(e.target.value)}}))),n.a.createElement(u.a,{disabled:!m,type:"submit",onClick:function(e){e.preventDefault(),h.collection("todos").add({todo:m,timestamp:E.a.firestore.FieldValue.serverTimestamp()}),p("")},variant:"contained",color:"primary"},"Add Todo"),n.a.createElement("ul",null,a.map((function(e){return n.a.createElement(j,{todo:e})}))),n.a.createElement("h1",null,n.a.createElement("small",null,"\xa9")," Dat Big Boss-life\ud83d\udd74\ufe0f"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.1b20667a.chunk.js.map