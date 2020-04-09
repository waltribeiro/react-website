(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(32),r=a.n(i),c=(a(79),a(8)),s=a(13),o=a(10),m=a(9),u=a(11),d=a(33),b=a(23),h=a(20),p=a.n(h),f=a(29),E=a.n(f),g=a(73),k=a.n(g),v=(a(80),a(21)),w=a.n(v),j=a(22),N=a.n(j);var y=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(p.a,{fluid:!0,className:"footerBottom"},l.a.createElement(w.a,{className:"border-top justify-content-between p-3"},l.a.createElement(N.a,{className:"p-0",md:3,sm:12},"Walt Ribeiro"),l.a.createElement(N.a,{className:"p-0 d-flex justify-content-end",md:3},"Copyright \xa9 2020 Walt Ribeiro"))))},x=a(62),S=a.n(x);var T=function(e){return l.a.createElement(S.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(w.a,{className:"justify-content-center py-5"},l.a.createElement(N.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},C=a(27),O=a(36);var R=function(e){var t=Object(O.b)({opacity:1,from:{opacity:0}});return l.a.createElement(O.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var A=function(e){return l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("a",{href:e.item.link2},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc})),e.item.selected&&l.a.createElement(R,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},I=a(63),W=a.n(I),L=a(64),M=a.n(L),P=a(65),D=a.n(P),F=a(66),B=a.n(F),_=a(67),G=a.n(_),J=a(68),H=a.n(J),Q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleCardClick=function(e,t){var n=Object(C.a)(a.state.items);n[e].selected=!n[e].selected,n.forEach(function(t){t.id!==e&&(t.selected=!1)}),a.setState({items:n})},a.makeItems=function(e){return e.map(function(e){return l.a.createElement(A,{item:e,click:function(t){return a.handleCardClick(e.id,t)},key:e.id})})},a.state={items:[{id:0,title:"Season All",subTitle:"Full stack app where users can discover and track new hiking trails",imgSrc:W.a,link:"https://github.com/waltribeiro/season-all-app",link2:"http://waltrib.com",selected:!1},{id:1,title:"Phlask",subTitle:"Civic Tech project that is mapping all the water fountains in Philadelphia",imgSrc:M.a,link:"https://github.com/waltribeiro",selected:!1},{id:2,title:"Music Theremin",subTitle:"32-bit ARM microcontroller using light to create sound",imgSrc:D.a,link:"https://github.com/waltribeiro",selected:!1},{id:3,title:"React.js Directory",subTitle:"A searchable user directory built with React.js, Redux, and Router",imgSrc:B.a,link:"https://github.com/waltribeiro",selected:!1},{id:4,title:"Playable Piano",subTitle:"A piano that can be played on a phone, desktop, or MIDI keyboardYouTube channel",imgSrc:G.a,link:"http://piano.waltrib.com",selected:!1},{id:5,title:"Weather App",subTitle:"A weather forecast using 2 nested ajax calls on Open Weather's API",imgSrc:H.a,link:"https://github.com/waltribeiro",selected:!1}]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,{fluid:!0},l.a.createElement(w.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),t}(l.a.Component);var V=function(e){return l.a.createElement("div",null,l.a.createElement(T,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(Q,null))};var Y=function(e){return l.a.createElement(p.a,{fluid:!0},l.a.createElement(w.a,{className:"justify-content-center"},l.a.createElement(N.a,{md:8},e.children)))};var $=function(e){return l.a.createElement("div",null,l.a.createElement(T,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(Y,null,l.a.createElement("p",null,"Hello - I'm Walt. I'm an experienced MERN developer (MySQL, Express.js, React.js, and Node.js). I also know Javascript, TDD, CLI, and Linux."),l.a.createElement("p",null,"Take a look at ",l.a.createElement("a",{href:"http://projects.waltrib.com",target:"_blank",rel:"noopener noreferrer"},"my projects")," or ",l.a.createElement("a",{href:"http://certs.waltrib.com",target:"_blank",rel:"noopener noreferrer"},"my certifications"),".")))},q=a(26),z=a(18),K=a.n(z),U=a(70),X=a.n(U),Z=a(69),ee=a.n(Z),te=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,l=t.name;a.setState(Object(q.a)({},l,n))},a.handleSubmit=function(e){e.preventDefault(),console.log(e.target),a.setState({disabled:!0}),ee.a.post("http://localhost:3030/api/email",a.state).then(function(e){e.data.success?a.setState({disabled:!1,emailSent:!0}):a.setState({disabled:!1,emailSent:!1})}).catch(function(e){console.log(e),a.setState({disabled:!1,emailSent:!1})})},a.state={name:"",email:"",message:"",disabled:!1,emailSent:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(T,{title:this.props.title,subTitle:this.props.subTitle,text:this.props.text}),l.a.createElement(Y,null,l.a.createElement(K.a,{onSubmit:this.handleSubmit},l.a.createElement(K.a.Group,null,l.a.createElement(K.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(K.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(K.a.Group,null,l.a.createElement(K.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(K.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(K.a.Group,null,l.a.createElement(K.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(K.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(X.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),t}(l.a.Component),ae=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={title:"Walt Ribeiro",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{subTitle:"Projects"},about:{title:"About Me"},contact:{title:"Let's Talk"}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement(p.a,{className:"p-0",fluid:!0},l.a.createElement(E.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(E.a.Brand,null,l.a.createElement("a",{className:"nav-link",href:"/"},"Walt Ribeiro")),l.a.createElement(E.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(E.a.Collapse,{id:"navbar-toggle"},l.a.createElement(k.a,{className:"ml-auto"},l.a.createElement("a",{className:"nav-link",target:"_blank",href:"http://resume.waltrib.com"},"Resume"),l.a.createElement(d.b,{className:"nav-link",to:"/about"},"About"),l.a.createElement(d.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(b.a,{path:"/",exact:!0,render:function(){return l.a.createElement(V,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(b.a,{path:"/about",render:function(){return l.a.createElement($,{title:e.state.about.title})}}),l.a.createElement(b.a,{path:"/contact",render:function(){return l.a.createElement(te,{title:e.state.contact.title})}}),l.a.createElement(y,null)))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(138);r.a.render(l.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,t,a){e.exports=a.p+"static/media/browser-4-season-all-app.27abf692.gif"},64:function(e,t,a){e.exports=a.p+"static/media/browser-4-phlask.8eb1f167.gif"},65:function(e,t,a){e.exports=a.p+"static/media/browser-4-arduino.0002c934.gif"},66:function(e,t,a){e.exports=a.p+"static/media/browser-4-react-user-search.1eb9e427.png"},67:function(e,t,a){e.exports=a.p+"static/media/browser-4-piano.033f14b2.gif"},68:function(e,t,a){e.exports=a.p+"static/media/browser-4-weather-api.a080573a.png"},74:function(e,t,a){e.exports=a(139)},79:function(e,t,a){},80:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.1af0b6b3.chunk.js.map