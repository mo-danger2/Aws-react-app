(this["webpackJsonppokmon-app"]=this["webpackJsonppokmon-app"]||[]).push([[0],{25:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(20),r=n.n(i),o=(n(25),n(3)),s=n(4),l=n(6),u=n(5),h=n(11),j=n(9),b=n.n(j),g=(n(44),n(0)),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).changeHandler=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.submitHandler=function(e){e.preventDefault(),console.log(a.state),b.a.post("https://nqj8icqzf7.execute-api.ca-central-1.amazonaws.com/cors/",a.state).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},a.handleChange=function(e){console.log(e.target.checkValidity()),a.setState(Object(h.a)({},e.target.name,e.target.value))},a.state={id:"",Age:"",city:"",Email:"",Employer:"",name:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.id,n=e.Age,a=e.city,c=e.Email,i=e.Employer,r=e.name;return Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{type:"number",name:"id",value:t,onChange:this.changeHandler}),Object(g.jsx)("input",{type:"number",name:"age",value:n,onChange:this.changeHandler}),Object(g.jsx)("input",{type:"text",name:"city",value:a,onChange:this.changeHandler}),Object(g.jsx)("input",{type:"text",name:"Email",value:c,onChange:this.changeHandler}),Object(g.jsx)("input",{type:"text",name:"Employer",value:i,onChange:this.changeHandler}),Object(g.jsx)("input",{type:"text",name:"name",value:r,onChange:this.changeHandler})]}),Object(g.jsx)("button",{type:"submit",children:"Submit"})]})})}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={events:[],errorMsg:""},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://nqj8icqzf7.execute-api.ca-central-1.amazonaws.com/test/").then((function(t){console.log(t),e.setState({events:t.data})})).catch((function(t){console.log(t),e.setState({errorMsg:"Error retrieving data"})}))}},{key:"render",value:function(){var e=this.state,t=e.events,n=e.errorMsg;return console.log(t),Object(g.jsxs)("div",{children:["List of Items",t.length?t.map((function(e){return Object(g.jsxs)("div",{children:[e.Age,e.City," ",e.Email," ",e.Employer," ",e.Name]},e.id)})):null,n?Object(g.jsx)("div",{children:n}):null]})}}]),n}(a.Component),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(m,{}),Object(g.jsx)(p,{})]})}}]),n}(a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(d,{})}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.9f4775bc.chunk.js.map