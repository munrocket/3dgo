(function(e){function t(t){for(var a,i,o=t[0],l=t[1],c=t[2],u=0,p=[];u<o.length;u++)i=o[u],s[i]&&p.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},r=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b380b":"06aca8a2"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=s[e]=[t,a]});t.push(n[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e),r=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}s[e]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"207d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section container",attrs:{id:"app"}},[n("div",{staticClass:"columns row-reverse"},[n("div",{staticClass:"column is-half"},[n("canvas-renderer")],1),n("div",{staticClass:"column"},[n("div",{staticClass:"tabs is-toggle is-toggle-rounded"},[n("ul",e._l(e.menu,function(t){return n("router-link",{key:t.url,attrs:{to:t.url,tag:"li"}},[n("a",[n("span",{staticClass:"icon is-small"},[n("font-awesome-icon",{attrs:{icon:t.icon}})],1),n("span",[e._v(e._s(t.name))])])])}),1)]),n("router-view")],1)])])},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"canvas"}})},o=[],l=n("5a89"),c=n("6397"),u=n.n(c),d={name:"CanvasRenderer",data(){return{camera:null,scene:null,renderer:null,controls:null,mesh:null}},mounted(){this.init(),this.animate()},methods:{init:function(){let e=document.getElementById("canvas");this.camera=new l["PerspectiveCamera"](70,e.clientWidth/e.clientHeight,.01,10),this.camera.position.set(0,-2,2),this.scene=new l["Scene"];const t=new l["TorusGeometry"](1,.3,16,100),n=new l["MeshBasicMaterial"]({color:3465905});this.mesh=new l["Mesh"](t,n),this.scene.add(this.mesh),this.renderer=new l["WebGLRenderer"]({antialias:!0,alpha:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement),this.controls=new u.a(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=1,this.controls.enableZoom=!0},animate:function(){requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera)}}},p=d,m=(n("7c17"),n("2877")),h=Object(m["a"])(p,i,o,!1,null,"5b04723b",null);h.options.__file="CanvasRenderer.vue";var f=h.exports,v={name:"App",components:{CanvasRenderer:f},data(){return{menu:[{url:"/players",name:"Players",icon:"users"},{url:"/games",name:"Games",icon:"gamepad"},{url:"/chat",name:"Chat",icon:"comment-dots"},{url:"/about",name:"About",icon:"info-circle"}]}}},_=v,y=(n("5c0b"),Object(m["a"])(_,s,r,!1,null,null,null));y.options.__file="App.vue";var b=y.exports,w=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("list-wrapper",[n("PlayersList",{attrs:{players:e.players}})],1)},C=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"title"},[e._v("\n    Players\n  ")]),n("table",{staticClass:"table is-hoverable is-narrow is-fullwidth"},[e._m(0),n("tbody",e._l(e.players,function(t){return n("tr",{key:t.id},[n("td",[e._v("\n          "+e._s(t.id)+"\n        ")]),n("td",{staticClass:"has-text-centered"},[e._v("\n          "+e._s(t.win)+"/"+e._s(t.win+t.loss)+"\n        ")]),n("td",{staticClass:"has-text-centered"},[0==t.status?n("font-awesome-icon"):1==t.status?n("font-awesome-icon",{attrs:{icon:"eye"}}):n("font-awesome-icon",{attrs:{icon:"gamepad"}})],1)])}),0)])])},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("name")]),n("th",{staticClass:"has-text-centered"},[e._v("\n          win rate\n        ")]),n("th",{staticClass:"has-text-centered"},[e._v("\n          status\n        ")])])])}],O={name:"PlayersList",props:{players:{type:Array,required:!0}}},k=O,P=Object(m["a"])(k,x,j,!1,null,null,null);P.options.__file="PlayersList.vue";var E=P.exports,L=n("7fa4"),T={name:"Players",components:{PlayersList:E,ListWrapper:L["a"]},data(){return{players:[{id:"wassup_player",win:19,loss:1,status:0},{id:"who_are_here",win:1,loss:9,status:0},{id:"i_am_just_watching",win:0,loss:0,status:1},{id:"i_am_busy",win:0,loss:0,status:10},{id:"wassup_player",win:19,loss:1,status:0},{id:"who_are_here",win:1,loss:9,status:0},{id:"i_am_just_watching",win:0,loss:0,status:1},{id:"i_am_busy",win:0,loss:0,status:10},{id:"wassup_player",win:19,loss:1,status:0},{id:"who_are_here",win:1,loss:9,status:0},{id:"i_am_just_watching",win:0,loss:0,status:1},{id:"i_am_busy",win:0,loss:0,status:10},{id:"wassup_player",win:19,loss:1,status:0}]}}},I=T,A=Object(m["a"])(I,g,C,!1,null,null,null);A.options.__file="Players.vue";var G=A.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("list-wrapper",[n("GamesList",{attrs:{games:e.games}})],1)},M=[],W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"title"},[e._v("\n    Games\n  ")]),n("table",{staticClass:"table is-hoverable is-narrow is-fullwidth"},[e._m(0),n("tbody",e._l(e.games,function(t){return n("tr",{key:t.gameId,ref:"game_".concat(t.gameId),refInFor:!0},[n("td",[e._v(e._s(t.id1)+" vs "+e._s(t.id2))]),n("td",{staticClass:"has-text-centered"},[e._v("\n          "+e._s(t.move)+"\n        ")]),n("td",{staticClass:"has-text-centered"},[e._v("\n          "+e._s(t.modelType)+"\n        ")])])}),0)])])},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("players")]),n("th",{staticClass:"has-text-centered"},[e._v("\n          move\n        ")]),n("th",{staticClass:"has-text-centered"},[e._v("\n          model type\n        ")])])])}],q={name:"GamesList",props:{games:{type:Array,required:!0}}},F=q,K=Object(m["a"])(F,W,S,!1,null,null,null);K.options.__file="GamesList.vue";var R=K.exports,B={name:"Games",components:{GamesList:R,ListWrapper:L["a"]},data(){return{games:[{gameId:"1",id1:"player1",id2:"anon",move:54,modelType:"torus"},{gameId:"2",id1:"Kid125",id2:"CyberIO",move:124,modelType:"klein bottle"},{gameId:"3",id1:"player1",id2:"anon",move:54,modelType:"torus"},{gameId:"4",id1:"Kid125",id2:"CyberIO",move:124,modelType:"klein bottle"},{gameId:"5",id1:"player1",id2:"anon",move:54,modelType:"torus"},{gameId:"6",id1:"Kid125",id2:"CyberIO",move:124,modelType:"klein bottle"},{gameId:"7",id1:"player1",id2:"anon",move:54,modelType:"torus"}]}}},H=B,J=Object(m["a"])(H,$,M,!1,null,null,null);J.options.__file="Games.vue";var z=J.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("list-wrapper",[n("div",{staticClass:"about"},[n("h1",{staticClass:"title"},[e._v("\n      About\n    ")]),n("p",[e._v("\n      This is an abstract strategy 3d board game for two players,\n      in which the aim is to surround more territory than the opponent.\n    ")]),n("br"),n("p",[e._v("Frontend by Munrocket")]),n("p",[e._v("Backend by Gleb-Kulchitskiy")])])])},Z=[],N={name:"About",components:{ListWrapper:L["a"]}},Q=N,U=Object(m["a"])(Q,D,Z,!1,null,null,null);U.options.__file="About.vue";var V=U.exports;a["a"].use(w["a"]);var X=new w["a"]({linkActiveClass:"is-active",linkExactActiveClass:"is-exact-active",routes:[{path:"/",redirect:"/players"},{path:"/players",name:"Players",component:G},{path:"/games",name:"Games",component:z},{path:"/chat",name:"Chat",component:function(){return n.e("chunk-2d0b380b").then(n.bind(null,"293a"))}},{path:"/about",name:"About",component:V}]}),Y=n("bc3a"),ee=n.n(Y),te=n("ad3d"),ne=n("ecee"),ae=n("c074");n("a347");a["a"].config.productionTip=!1,console.log(),a["a"].prototype.axios=ee.a,ne["c"].add(ae["e"],ae["c"],ae["a"],ae["d"],ae["b"]),a["a"].component("font-awesome-icon",te["a"]),new a["a"]({router:X,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),s=n.n(a);s.a},"5e27":function(e,t,n){},"7c17":function(e,t,n){"use strict";var a=n("207d"),s=n.n(a);s.a},"7fa4":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box"},[n("article",{staticClass:"media"},[e._t("default")],2)])},s=[],r={name:"ListWrapper"},i=r,o=n("2877"),l=Object(o["a"])(i,a,s,!1,null,null,null);l.options.__file="ListWrapper.vue";t["a"]=l.exports},a347:function(e,t,n){}});
//# sourceMappingURL=app.793ed00d.js.map