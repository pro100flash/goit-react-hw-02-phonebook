(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(9),r=n.n(c),o=n(12),i=n(3),s=n(4),u=n(7),l=n(6),b=n(10),h=n(5),j=n(0),m=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.state.name&&t.state.number&&(t.props.onSubmitData(Object(b.a)({},t.state)),t.reset())},t}return Object(s.a)(n,[{key:"reset",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("h2",{children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",value:e,onChange:this.handleChange}),Object(j.jsx)("h2",{children:"Number"}),Object(j.jsx)("input",{type:"text",name:"number",value:n,onChange:this.handleChange}),Object(j.jsx)("p",{}),Object(j.jsx)("button",{type:"submit",children:" Add new contact "})]})}}]),n}(a.Component),d=function(t){var e=t.contact,n=t.onDeleteContact;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("span",{children:[e.name," : ",e.number]}),Object(j.jsx)("button",{onClick:function(){return n(e.id)},children:" Delete "})]})},O=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)("li",{children:Object(j.jsx)(d,{contact:t,onDeleteContact:n})},t.id)}))})},f=function(t){var e=t.value,n=t.onChangeFilter;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:"Find contacts by name"}),Object(j.jsx)("input",{name:"filter",onChange:n,value:e})]})},p=n(11),v=n.n(p),x=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.changeFilter=function(e){var n=e.target.value;t.setState({filter:n})},t.onDeleteContact=function(e){t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==e}))})},t.onSubmitData=function(e){var n=t.state.contacts,a={id:v.a.generate(),name:e.name,number:e.number};n.find((function(t){return t.name===a.name}))?alert("".concat(a.name," is already in contacts!")):t.setState({contacts:[].concat(Object(o.a)(n),[a])})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,n);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(m,{onSubmitData:this.onSubmitData}),0!==e.length&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Contacts"}),e.length>1&&Object(j.jsx)(f,{value:n,onChangeFilter:this.changeFilter}),Object(j.jsx)(O,{contacts:a,onDeleteContact:this.onDeleteContact})]})]})}}]),n}(a.Component);n(26);r.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.b0fd2601.chunk.js.map