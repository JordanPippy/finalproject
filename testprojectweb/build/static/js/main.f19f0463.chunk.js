(this.webpackJsonptestproject=this.webpackJsonptestproject||[]).push([[0],{13:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n(2),a=n.n(i),r=n(12),c=n.n(r),h=(n(13),n(7)),l=n(8),f=n(10),j=n(9),o=n(24),u=n(25),d=n(26);var b=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(e){var s;Object(h.a)(this,n);var i=(s=t.call(this,e)).props.files,a=s.props.files.length;return s.state={files:i,length:a},s}return Object(l.a)(n,[{key:"renderImage",value:function(e){return Object(s.jsx)("img",{src:e,width:"150px",height:"150px"})}},{key:"render",value:function(){var e,t=[];for(e=0;e<this.state.length;e+=6){if(!(e+5<this.state.length-this.state.length%6)){for(var n=[],i=e;i<this.state.length;i++)n.push(Object(s.jsx)(u.a,{children:this.renderImage(this.state.files[i].fileName)}));t.push(Object(s.jsx)(o.a,{children:n}));break}t.push(Object(s.jsxs)(o.a,{children:[Object(s.jsx)(u.a,{children:this.renderImage(this.state.files[e].fileName)}),Object(s.jsx)(u.a,{children:this.renderImage(this.state.files[e+1].fileName)}),Object(s.jsx)(u.a,{children:this.renderImage(this.state.files[e+2].fileName)}),Object(s.jsx)(u.a,{children:this.renderImage(this.state.files[e+3].fileName)}),Object(s.jsx)(u.a,{children:this.renderImage(this.state.files[e+4].fileName)}),Object(s.jsx)(u.a,{children:this.renderImage(this.state.files[e+5].fileName)})]}))}return Object(s.jsx)("div",{children:t})}}]),n}(a.a.Component),m=(a.a.Component,function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).state={files:[],index:0},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.warn("mount?"),fetch("http://192.168.0.12:3000/fileNames").then((function(e){return e.json()})).then((function(t){e.setState({files:t})}))}},{key:"render",value:function(){for(var e=0;e<this.state.files.length;e++)console.warn(this.state.files[e].fileName);return this.state.files.length>0?Object(s.jsx)("div",{children:Object(s.jsx)(d.a,{className:"themed-container",fluid:!0,children:Object(s.jsx)("div",{children:Object(s.jsx)(b,{files:this.state.files})})})}):null}}]),n}(a.a.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),i(e),a(e),r(e)}))};n(22);c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),O()}},[[23,1,2]]]);
//# sourceMappingURL=main.f19f0463.chunk.js.map