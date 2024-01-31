"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[93],{7093:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r,o,i,d,a,l,c,x,s,p,u,f,h,g,b,m,Z=t(4420),j=t(2791),w=t(2564),v=t(1413),k=t(1134),y=t(168),P=t(7924),C=P.ZP.form(r||(r=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  padding: 15px;\n  border: 1px solid black;\n  border-radius: 5px;\n  width: 400px;\n  background-color: #d3e29d;\n  /* box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.16); */\n"]))),_=P.ZP.label(o||(o=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 20px;\n  font-weight: 400;\n  width: 100%;\n"]))),z=P.ZP.input(i||(i=(0,y.Z)(["\n  padding: 5px;\n  font-size: 16px;\n"]))),L=P.ZP.button(d||(d=(0,y.Z)(["\n  padding: 8px 16px;\n  color: white;\n  background-color: #8ab446;\n  border-radius: 5px;\n  border: 1px solid green;\n  font-weight: 500;\n\n  &:hover {\n    background-color: #778d45;\n  }\n"]))),A=t(7840),I=t(3064),N=t(184),E=function(){var n=(0,k.cI)(),e=n.register,t=n.handleSubmit,r=n.reset,o=(0,Z.v9)(A.Af),i=(0,Z.I0)();return(0,N.jsxs)(C,{onSubmit:t((function(n){(function(n,e){var t=e.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}));return t&&alert("".concat(n," is already in contacts.")),t})(n.name,o)||(i((0,I.uK)(n)),r())})),children:[(0,N.jsxs)(_,{children:["Name",(0,N.jsx)(z,(0,v.Z)((0,v.Z)({},e("name")),{},{type:"text",required:!0,placeholder:"Enter contact name",minLength:3}))]}),(0,N.jsxs)(_,{children:["Number",(0,N.jsx)(z,(0,v.Z)((0,v.Z)({},e("number")),{},{type:"tel",required:!0,minLength:9,maxLength:13,placeholder:"Enter phone number"}))]}),(0,N.jsx)(L,{children:"Add contact"})]})},S=P.ZP.ul(a||(a=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  width: 400px;\n"]))),q=P.ZP.li(l||(l=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  border: 1px solid black;\n  border-radius: 5px;\n  width: 100%;\n  background-color: #f2f2ef;\n"]))),F=P.ZP.div(c||(c=(0,y.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),K=P.ZP.button(x||(x=(0,y.Z)(["\n  padding: 1px 2px;\n  border: 1px solid black;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  background-color: #f34c3f;\n  color: white;\n"]))),R=P.ZP.p(s||(s=(0,y.Z)(["\n  color: red;\n"]))),D=t(1273),G=function(){var n=(0,Z.v9)(A.Af),e=(0,Z.v9)(D.mj),t=(0,Z.I0)(),r=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,N.jsx)(S,{children:0!==r.length?r.map((function(n){return(0,N.jsxs)(q,{children:[(0,N.jsxs)(F,{children:[(0,N.jsx)("span",{children:"\ud83d\udc64"}),(0,N.jsxs)("span",{children:[n.name,": ",n.number]})]}),(0,N.jsx)(K,{type:"button",onClick:function(){return t((0,I.GK)(n.id))},children:"Delete"})]},n.id)})):(0,N.jsx)(R,{children:"Could not find contacts with this name!"})})},M=P.ZP.div(p||(p=(0,y.Z)(["\n  margin: 0 40px 40px 40px;\n"]))),U=P.ZP.h1(u||(u=(0,y.Z)(["\n  margin: 40px 0 20px 0;\n"]))),B=P.ZP.h2(f||(f=(0,y.Z)(["\n  margin: 20px 0;\n"]))),H=P.ZP.div(h||(h=(0,y.Z)(["\n  display: flex;\n  align-content: flex-end;\n  gap: 20px;\n  width: 400px;\n  margin-bottom: 20px;\n"]))),J=P.ZP.label(g||(g=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 18px;\n  font-weight: 500;\n"]))),O=P.ZP.input(b||(b=(0,y.Z)(["\n  padding: 5px;\n  font-size: 16px;\n"]))),Q=P.ZP.button(m||(m=(0,y.Z)(["\n  align-self: flex-end;\n  border-radius: 5px;\n  border: 1px solid black;\n  background-color: silver;\n  padding: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  color: white;\n  background-color: #806491;\n"]))),T=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(D.mj);return(0,N.jsxs)(H,{children:[(0,N.jsxs)(J,{children:["Find contacts by name",(0,N.jsx)(O,{type:"text",value:e,onChange:function(e){return n((0,D.M6)(e.target.value))}})]}),(0,N.jsx)(Q,{type:"button",onClick:function(){return n((0,D.sx)())},children:"Reset"})]})},V=t(6143),W=function(){var n=(0,Z.v9)(A.Af),e=(0,Z.v9)(A.xU),t=(0,Z.v9)(A.zh),r=(0,Z.I0)();return(0,j.useEffect)((function(){r((0,I.yF)())}),[r]),e?(0,N.jsx)(V.a,{}):(t&&w.Am.error("Something went wrong! Reload page or try again later."),(0,N.jsxs)(M,{children:[(0,N.jsx)(U,{className:"text-center font-bold text-4xl",children:"Phonebook"}),(0,N.jsx)(E,{}),(0,N.jsxs)(B,{children:["Contacts (",n.length,")"]}),(0,N.jsx)(T,{}),n.length?(0,N.jsx)(G,{}):(0,N.jsx)("p",{children:"No contacts"})]}))},X=function(){return(0,N.jsx)("div",{children:(0,N.jsx)(W,{})})}}}]);
//# sourceMappingURL=93.71130273.chunk.js.map