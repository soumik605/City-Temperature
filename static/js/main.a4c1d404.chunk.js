(this["webpackJsonpcity-temperature"]=this["webpackJsonpcity-temperature"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(5),i=c.n(s),r=(c(11),c.p,c(12),c(3)),j=c.n(r),o=c(6),u=c(4),l=(c(14),c(0)),d=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("Kolkata"),i=Object(u.a)(s,2),r=i[0],d=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(j.a.mark((function e(){var t,c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?q=".concat(r,"&units=metric&appid=017291c1a57fa8a7cd4d8ec19170da4d"),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,a(n.main),console.log("fetch api called");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsxs)("div",{className:"inputData",children:[" ",Object(l.jsx)("input",{type:"search",className:"inputField",value:r,onChange:function(e){d(e.target.value)}})]}),c?Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("h2",{className:"location",children:[Object(l.jsx)("i",{className:"fas fa-street-view"}),r]}),Object(l.jsxs)("h1",{className:"temp",children:[c.temp," \xb0C"]}),Object(l.jsxs)("h3",{className:"tempmin_max",children:[" ","Min : ",c.temp_min," \xb0C | Max : ",c.temp_max," \xb0C"]})]}),Object(l.jsx)("div",{className:"wave -one"}),Object(l.jsx)("div",{className:"wave -two"}),Object(l.jsx)("div",{className:"wave -three"})]}):Object(l.jsx)("p",{className:"errorMsg",children:"No City Found"})]})})};var p=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(d,{})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.a4c1d404.chunk.js.map