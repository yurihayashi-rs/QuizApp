(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),c=n(5),s=n.n(c),r=n(2),a=(n(4),Object(o.createContext)()),u=n(0),j=function(){var t=Object(o.useContext)(a),e=(t.gameState,t.setGameState);return Object(u.jsx)("div",{className:"Menu",children:Object(u.jsx)("button",{onClick:function(){e("Quiz")},children:"Start Quiz"})})},p=[{prompt:"What is 1+3?",optionA:"24",optionB:"4",optionC:"3",optionD:"2",answer:"optionB"},{prompt:"What is my name?",optionA:"Ken",optionB:"Riku",optionC:"Nana",optionD:"Yuri",answer:"optionD"},{prompt:"Which of this is not a programming language?",optionA:"Python",optionB:"JavaScript",optionC:"MC-03",optionD:"Java",answer:"optionC"},{prompt:"Which of this is not a javascript framework?",optionA:"React",optionB:"Angular",optionC:"Vue",optionD:"Java",answer:"optionD"}],b=function(){var t=Object(o.useContext)(a),e=t.score,n=t.setScore,i=(t.gameState,t.setGameState),c=Object(o.useState)(0),s=Object(r.a)(c,2),j=s[0],b=s[1],h=Object(o.useState)(" "),l=Object(r.a)(h,2),O=l[0],d=l[1],m=function(t){d(t)};return Object(u.jsx)("div",{className:"Quiz",children:Object(u.jsxs)("div",{className:"options",children:[Object(u.jsx)("h1",{children:p[j].prompt}),Object(u.jsxs)("button",{onClick:function(){return m("optionA")},children:[p[j].optionA," "]}),Object(u.jsxs)("button",{onClick:function(){return m("optionB")},children:[p[j].optionB," "]}),Object(u.jsxs)("button",{onClick:function(){return m("optionC")},children:[p[j].optionC," "]}),Object(u.jsxs)("button",{onClick:function(){return m("optionD")},children:[p[j].optionD," "]}),j==p.length-1?Object(u.jsx)("button",{onClick:function(){p[j].answer==O&&n(e+1),i("EndScreens")},children:"Finish Quiz"}):Object(u.jsx)("button",{onClick:function(){p[j].answer==O&&n(e+1),alert(e),b(j+1)},children:"NEXT QUESTION"})]})})},h=function(){var t=Object(o.useContext)(a),e=t.score,n=t.setScore,i=t.setGameState;return Object(u.jsxs)("div",{className:"EndScreens",children:["",Object(u.jsx)("h1",{children:"Quiz Finished"}),Object(u.jsxs)("h3",{children:[" ",e," / ",p.length," "]}),Object(u.jsx)("button",{onClick:function(){n(0),i("menu")},children:"Restart Quiz"})]})};var l=function(){var t=Object(o.useState)("menu"),e=Object(r.a)(t,2),n=e[0],i=e[1],c=Object(o.useState)(0),s=Object(r.a)(c,2),p=s[0],l=s[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Quiz App"}),Object(u.jsxs)(a.Provider,{value:{gameState:n,setGameState:i,score:p,setScore:l},children:["menu"===n&&Object(u.jsx)(j,{}),"Quiz"===n&&Object(u.jsx)(b,{}),"EndScreens"===n&&Object(u.jsx)(h,{})]})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),o(t),i(t),c(t),s(t)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),O()},4:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.0603a8b4.chunk.js.map