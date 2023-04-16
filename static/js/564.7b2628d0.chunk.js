"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[564],{7564:function(n,e,r){r.r(e),r.d(e,{default:function(){return V}});var o,t,i,a,d,c,s,l,x=r(168),p=r(3081),u=p.Z.li(o||(o=(0,x.Z)(["\n    display: flex;\n    gap: 10px;\n"]))),b=p.Z.button(t||(t=(0,x.Z)(["\n     width: 100px;\n     padding: 0px;\n\n    background-color: #FFFFFF;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: .25rem;\n    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;\n    cursor: pointer;\n    :hover {\n    border-color: rgba(0, 0, 0, 0.15);\n    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n    color: rgba(0, 0, 0, 0.65);}\n"]))),h=r(184),m=function(n){var e=n.contact,r=e.name,o=e.number,t=e.id,i=n.onClick;return(0,h.jsxs)(u,{children:[(0,h.jsx)("span",{children:r.length<15?r:"".concat(r.slice(0,12),"...")}),(0,h.jsx)("span",{children:o}),(0,h.jsx)(b,{type:"button",onClick:function(){return i(t)},children:"Delete"})]})},f=p.Z.ul(i||(i=(0,x.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n"]))),g=r(9434),j=r(208),v=function(n){var e=n.contacts,r=(0,g.I0)();return(0,h.jsx)("div",{children:(0,h.jsx)(f,{children:e.map((function(n){return(0,h.jsx)(m,{contact:n,onClick:function(){r((0,j.GK)(n.id))}},n.id)}))})})},w=p.Z.label(a||(a=(0,x.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 200px;\n    gap: 10px;\n    margin-bottom: 10px;\n"]))),Z=r(6895),F=function(n){n.onFilter;var e=n.filter,r=(0,g.I0)();return(0,h.jsxs)(w,{children:[" Find contacts by name",(0,h.jsx)("input",{type:"text",name:"filter",onChange:function(n){r((0,Z.W1)(n.target.value))},value:e})]})},k=r(1413),y=r(5705),C=r(6727),_=(0,p.Z)(y.l0)(d||(d=(0,x.Z)(["\n    display: flex;\n    flex-direction: column;\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 4px;\n    margin-bottom: 15px;\n    width: 300px;\n"]))),I=p.Z.label(c||(c=(0,x.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    width: 200px;\n"]))),N=p.Z.button(s||(s=(0,x.Z)(["\n    width: 100px;\n    margin-top: 15px;\n    padding: 5px;\n\n  background-color: #FFFFFF;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: .25rem;\n  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;\n  box-sizing: border-box;\n  cursor: pointer;\n    :hover {\n    border-color: rgba(0, 0, 0, 0.15);\n    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n    color: rgba(0, 0, 0, 0.65);}\n \n\n\n\n"]))),P=r(3661),q=r(5218),K=(0,C.Ry)().shape({name:(0,C.Z_)().required(),phone:(0,C.Z_)().required()}),L=function(){var n=(0,g.v9)(P.jY),e=(0,g.I0)();return(0,h.jsx)(y.J9,{validationSchema:K,initialValues:{name:"",phone:""},onSubmit:function(r,o){var t=o.resetForm,i=n.filter((function(n){return n.name===r.name}));if(i.length>0)return q.ZP.error("".concat(r.name," updated")),e((0,j.Tk)(i[0])),void t();e((0,j.uK)((0,k.Z)({},r))),t()},children:(0,h.jsxs)(_,{children:[(0,h.jsx)(q.x7,{}),(0,h.jsxs)(I,{children:["Name",(0,h.jsx)(y.gN,{name:"name"})]}),(0,h.jsxs)(I,{children:["Number",(0,h.jsx)(y.gN,{type:"phone",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})]}),(0,h.jsx)(N,{type:"submit",children:"Add contact"})]})})},R=p.Z.section(l||(l=(0,x.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nmargin-top: 100px;\n    width: 400px;\n    max-width: 800px;\n    margin-inline: auto;\n    background-color: #bff5f5;\n    padding: 20px;\n    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n    border-radius: 8px;\n    overflow-x: auto;\n"]))),S=r(2791),V=function(){var n=(0,g.I0)(),e=(0,g.v9)(P.jY),r=(0,g.v9)(Z.UP),o=(0,g.v9)(P.Vc),t=(0,g.v9)(P.by);(0,S.useEffect)((function(){n((0,j.yF)())}),[n]);var i=r.toLowerCase(),a=e.filter((function(n){return n.name.toLowerCase().includes(i)}));return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(R,{children:[(0,h.jsx)("h1",{children:"Phonebook"}),(0,h.jsx)(L,{}),(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)(F,{filter:r}),o&&!t&&(0,h.jsx)("b",{children:"Request in progress..."}),(0,h.jsx)(v,{contacts:a})]})})}}}]);
//# sourceMappingURL=564.7b2628d0.chunk.js.map