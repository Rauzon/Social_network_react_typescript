(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,a,t){e.exports={dialogs:"dialogs_dialogs__1LacB",wrapper:"dialogs_wrapper__GqQdl",wrapper__header:"dialogs_wrapper__header__2SJHX",wrapper__header_left:"dialogs_wrapper__header_left__2Dara",wrapper__header_right:"dialogs_wrapper__header_right__383cx",dialogs__people:"dialogs_dialogs__people__1uaFk",dialogs__messages:"dialogs_dialogs__messages__1tidq",dialogs__messages_newMesssage:"dialogs_dialogs__messages_newMesssage__b5FW8",dialogs__messages_newMesssage_textarea:"dialogs_dialogs__messages_newMesssage_textarea__1fPCD",dialogs__messages_newMesssage_button:"dialogs_dialogs__messages_newMesssage_button__1mrcq"}},,,,,,,,function(e,a,t){e.exports={nav__friendsBlock_item:"friendsBlock_nav__friendsBlock_item__22hEe",nav__friendsBlock_item_img:"friendsBlock_nav__friendsBlock_item_img__fQY5A",nav__friendsBlock_item_name:"friendsBlock_nav__friendsBlock_item_name__1TGRU",nav__friendsBlock_item_onlineStatus:"friendsBlock_nav__friendsBlock_item_onlineStatus__QYJgV"}},,,,function(e,a,t){e.exports={header:"header_header__28bqR",header__wrapper_img:"header_header__wrapper_img__3B4XV"}},function(e,a,t){e.exports={nav:"nav_nav__32Dtx",nav__friendsBlock_title:"nav_nav__friendsBlock_title__OPYtZ"}},function(e,a,t){e.exports={content:"myPost_content__1RSxM",content__img:"myPost_content__img__ab0v1",content__text:"myPost_content__text__2GZxT"}},function(e,a,t){e.exports={content:"newPost_content__2nJOh",content__textArea:"newPost_content__textArea__2sjje",content__button:"newPost_content__button__3yZ3B"}},function(e,a,t){e.exports={newMessage:"messages_newMessage__H-XRi",newMessage__img:"messages_newMessage__img__2RyBM",newMessage__content:"messages_newMessage__content__g6ttP"}},,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.d243bdd9.png"},function(e,a,t){e.exports={nav__wrap_menu:"sideBar_nav__wrap_menu__39L7R"}},function(e,a,t){e.exports={content:"profile_content__1q3D6"}},function(e,a,t){e.exports={posts:"myPosts_posts__2csMZ"}},,function(e,a,t){e.exports={dialogs__people_name:"names_dialogs__people_name__RNTJh"}},function(e,a,t){e.exports={content:"users_content__RQzR6"}},function(e,a,t){e.exports={content:"news_content__kswPX"}},function(e,a,t){e.exports={content:"settings_content__3LtiA"}},function(e,a,t){e.exports=t(48)},,function(e,a,t){},,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a),t.d(a,"renderAppTree",(function(){return ue}));var n=t(0),s=t.n(n);t(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r,i=t(12),o=t.n(i),c=t(5),_=t(1),l=(t(42),t(15)),m=t.n(l),d=t(27),g=t.n(d),u=function(e){return s.a.createElement("div",{className:m.a.header},s.a.createElement("div",{className:m.a.header__wrapper},s.a.createElement("div",{className:m.a.header__wrapper_img},s.a.createElement("img",{src:g.a,alt:"logo"}))))},p=t(16),E=t.n(p),f=t(28),v=t.n(f),w=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:v.a.nav__wrap_menu},s.a.createElement(c.b,{to:e.path},s.a.createElement("li",null,e.title))))},h=t(11),P=t.n(h),M=function(e){return s.a.createElement(s.a.Fragment,null,e.friends.map((function(e){return s.a.createElement("div",{key:e.id,className:P.a.nav__friendsBlock_item},s.a.createElement("div",{className:P.a.nav__friendsBlock_item_img},s.a.createElement("img",{src:"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",alt:""})),s.a.createElement("div",{className:P.a.nav__friendsBlock_item_name},s.a.createElement(c.b,{to:e.pathToDialog},e.name)),e.isOnline&&s.a.createElement("div",{className:P.a.nav__friendsBlock_item_onlineStatus}))})))},S=function(e){return s.a.createElement("div",{className:E.a.nav},e.navPage.navTitles.map((function(e){return s.a.createElement(w,{key:e.id,title:e.title,path:e.path})})),s.a.createElement("div",{className:E.a.nav__friendsBlock},s.a.createElement("div",{className:E.a.nav__friendsBlock_title},s.a.createElement("h4",null,"Friends:")),s.a.createElement(M,{friends:e.navPage.friends})))},D=t(29),A=t.n(D),N=t(30),b=t.n(N),k=t(17),T=t.n(k),x=function(e){return s.a.createElement("div",{className:T.a.content},s.a.createElement("div",{className:T.a.content__img},s.a.createElement("img",{src:"https://tr.rbxcdn.com/47055e576c5566fb6b384a8fccf98c64/420/420/Decal/Png",alt:""})),s.a.createElement("div",{className:T.a.content__text},s.a.createElement("span",null,e.message)))};!function(e){e.ADD_MESSAGE="ADD_MESSAGE",e.ADD_POST="ADD_POST",e.UPDATE_MESSAGE="UPDATE_MESSAGE",e.UPDATE_POST="UPDATE_POST"}(r||(r={}));var y,O=t(18),B=t.n(O),G=t(7),U=Object(G.b)((function(e){return{newPost:e.profilePage.newPost}}),(function(e){return{addPost:function(){e({type:r.ADD_POST})},updatePost:function(a){var t;e((t=a,{type:r.UPDATE_POST,newPostValue:t}))}}}))((function(e){var a=s.a.createRef();return s.a.createElement("div",{className:B.a.content},s.a.createElement("div",{className:B.a.content__textArea},s.a.createElement("textarea",{placeholder:"Enter text...",ref:a,value:e.newPost,onChange:function(){if(a.current){var t=a.current.value;e.updatePost(t)}}})),s.a.createElement("div",{className:B.a.content__button},s.a.createElement("button",{onClick:function(){e.addPost()}},"Send")))})),j=function(e){return s.a.createElement("div",{className:b.a.posts},s.a.createElement("div",{className:"content__posts"},"Create a new post:",s.a.createElement(U,null),e.posts.map((function(e){return s.a.createElement(x,{message:e.message,key:e.id})}))))},R=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"content__avatar"},"avatar_icon"),s.a.createElement("div",{className:"content__description"},"description"))},V=function(e){return s.a.createElement("div",{className:A.a.content},s.a.createElement(R,null),s.a.createElement(j,{posts:e.profilePage.posts,newPost:e.profilePage.newPost}))},F=t(3),C=t.n(F),H=t(19),J=t.n(H),q=function(e){return s.a.createElement("div",{className:J.a.newMessage},s.a.createElement("div",{className:J.a.newMessage__img},s.a.createElement("img",{src:"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"})),s.a.createElement("div",{className:J.a.newMessage__content},s.a.createElement("span",null,e.message)))},Q=t(32),X=t.n(Q),Y=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:X.a.dialogs__people_name},s.a.createElement(c.b,{to:e.path},s.a.createElement("span",null,e.name))))},Z=Object(G.b)((function(e){return{newMessageValue:e.dialogsPage.newMessage}}),(function(e){return{updateMessageValue:function(a){var t;e((t=a,{type:r.UPDATE_MESSAGE,newMessageValue:t}))},addNewMessage:function(){e({type:r.ADD_MESSAGE})}}}))((function(e){var a=s.a.createRef();return s.a.createElement("div",{className:C.a.dialogs__messages_newMesssage},s.a.createElement("div",{className:C.a.dialogs__messages_newMesssage_textarea},s.a.createElement("textarea",{placeholder:"Enter new message...",ref:a,onChange:function(){if(a.current){var t=a.current.value;e.updateMessageValue(t)}},value:e.newMessageValue})),s.a.createElement("div",{className:C.a.dialogs__messages_newMesssage_button},s.a.createElement("button",{onClick:function(){e.addNewMessage()}},"Send")))})),L=function(e){return s.a.createElement("div",{className:C.a.dialogs},s.a.createElement("div",{className:C.a.wrapper__header},s.a.createElement("div",{className:C.a.wrapper__header_left},"Messages"),s.a.createElement("div",{className:C.a.wrapper__header_right},"Some name")),s.a.createElement("div",{className:C.a.wrapper},s.a.createElement("div",{className:C.a.dialogs__people},e.dialogPage.names.map((function(e){return s.a.createElement(Y,{key:e.id,name:e.name,path:e.path})}))),s.a.createElement("div",{className:C.a.dialogs__messages},e.dialogPage.messages.map((function(e){return s.a.createElement(q,{key:e.id,message:e.message})})),s.a.createElement(Z,null))))},W=t(33),I=t.n(W),z=function(){return s.a.createElement("div",{className:I.a.content},"Users")},$=t(34),K=t.n($),ee=function(){return s.a.createElement("div",{className:K.a.content},"News")},ae=t(35),te=t.n(ae),ne=function(){return s.a.createElement("div",{className:te.a.content},"Settings")},se=function(e){return s.a.createElement("div",{className:"app__wrapper"},s.a.createElement(u,null),s.a.createElement(S,{navPage:e.state.navPage}),s.a.createElement("div",{className:"app__wrapper_content"},s.a.createElement(_.a,{path:"/profile",render:function(){return s.a.createElement(V,{profilePage:e.state.profilePage})}}),s.a.createElement(_.a,{path:"/dialogs",render:function(){return s.a.createElement(L,{dialogPage:e.state.dialogsPage,dispatch:e.dispatch})}}),s.a.createElement(_.a,{path:"/users",render:function(){return s.a.createElement(z,null)}}),s.a.createElement(_.a,{path:"/news",render:function(){return s.a.createElement(ee,null)}}),s.a.createElement(_.a,{path:"/settings",render:function(){return s.a.createElement(ne,null)}})))},re=t(10),ie=t(14),oe=t(8);!function(e){e.ADD_POST="ADD_POST",e.UPDATE_POST="UPDATE_POST"}(y||(y={}));var ce,_e={posts:[{id:1,message:"Hey girls"},{id:2,message:"Hey guys"}],newPost:""};!function(e){e.UPDATE_MESSAGE="UPDATE_MESSAGE",e.ADD_MESSAGE="ADD_MESSAGE"}(ce||(ce={}));var le={names:[{id:1,name:"Marat",path:"/dialogs/1"},{id:2,name:"Anton",path:"/dialogs/2"},{id:3,name:"Arkasha",path:"/dialogs/3"},{id:4,name:"Tolik",path:"/dialogs/4"}],messages:[{id:1,message:"Hey man!"},{id:2,message:"How is it going?"},{id:3,message:"You forgot about my birthday(("},{id:4,message:"I want to break up with you, sorry"}],newMessage:""},me={navTitles:[{id:1,title:"Profile",path:"/profile"},{id:2,title:"Dialogs",path:"/dialogs"},{id:3,title:"Users",path:"/users"},{id:4,title:"News",path:"/news"},{id:5,title:"Settings",path:"/settings"}],friends:[{id:1,name:"Marat",pathToDialog:"/dialogs/1",isOnline:!0},{id:2,name:"Anton",pathToDialog:"/dialogs/2",isOnline:!1},{id:3,name:"Arkasha",pathToDialog:"/dialogs/3",isOnline:!0},{id:4,name:"Tolik",pathToDialog:"/dialogs/4",isOnline:!1}]},de=Object(re.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case y.ADD_POST:var t=e.newPost,n={id:5,message:t};return(e=Object(oe.a)({},e,{posts:[].concat(Object(ie.a)(e.posts),[n])})).newPost="",e;case y.UPDATE_POST:return(e=Object(oe.a)({},e)).newPost=a.newPostValue,e;default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case ce.ADD_MESSAGE:var t=e.newMessage,n={id:5,message:t};return(e=Object(oe.a)({},e,{messages:[].concat(Object(ie.a)(e.messages),[n])})).newMessage="",e;case ce.UPDATE_MESSAGE:return(e=Object(oe.a)({},e)).newMessage=a.newMessageValue,e;default:return e}},navPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me;arguments.length>1&&arguments[1];return e}}),ge=Object(re.c)(de),ue=function(e){o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(c.a,null,s.a.createElement(G.a,{store:ge},s.a.createElement(se,{state:e,dispatch:ge.dispatch.bind(ge)})))),document.getElementById("root"))};ue(ge.getState()),ge.subscribe((function(){return ue(ge.getState())})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[36,1,2]]]);
//# sourceMappingURL=main.2fd78d5e.chunk.js.map