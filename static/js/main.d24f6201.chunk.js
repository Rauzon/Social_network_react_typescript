(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{119:function(e,t,a){e.exports={app__wrapper:"app_app__wrapper__3zjyW",app__wrapper_content:"app_app__wrapper_content__30D5Q",circleProgress:"app_circleProgress__2rhjH"}},120:function(e,t,a){e.exports={nav:"nav_nav__32Dtx",wrap__title:"nav_wrap__title__1fJvA"}},121:function(e,t,a){e.exports={newMessage:"messages_newMessage__H-XRi",newMessage__img:"messages_newMessage__img__2RyBM",newMessage__content:"messages_newMessage__content__g6ttP"}},122:function(e,t,a){e.exports={dialogs__people_name:"names_dialogs__people_name__RNTJh",dialogs__people_name_img:"names_dialogs__people_name_img__LSXv8",dialogs__people_name_content:"names_dialogs__people_name_content__37Vw_"}},123:function(e,t,a){e.exports={content:"myPost_content__1RSxM",content__img:"myPost_content__img__ab0v1",content__text:"myPost_content__text__2GZxT"}},124:function(e,t,a){e.exports={content:"newPost_content__2nJOh",content__textArea:"newPost_content__textArea__2sjje",content__button:"newPost_content__button__3yZ3B"}},125:function(e,t,a){e.exports={login__content:"login_login__content__1Gnuf",login__content_inner:"login_login__content_inner__LIZKO",login__content_inner_textHelper:"login_login__content_inner_textHelper__aDKMn"}},154:function(e,t,a){e.exports={content:"news_content__kswPX"}},155:function(e,t,a){e.exports={content:"settings_content__3LtiA"}},157:function(e,t,a){e.exports={content:"profile_content__1q3D6"}},158:function(e,t,a){e.exports={content__posts:"myPosts_content__posts__2Gi5V"}},159:function(e,t,a){e.exports=a.p+"static/media/logo.d243bdd9.png"},173:function(e,t,a){e.exports=a(202)},175:function(e,t,a){},202:function(e,t,a){"use strict";a.r(t),a.d(t,"renderAppTree",(function(){return ea}));var n=a(0),r=a.n(n);a(175),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o,s=a(9),c=a.n(s),i=a(21),l=a(13),_=a(119),u=a.n(_),m=a(120),p=a.n(m),d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:e.path},r.a.createElement("li",null,e.title)))},g=a(41),f=a.n(g),E=a(249),h=a(251),b=a(238),O=a(204),v=a(239),S=a(4),P=a(237),w=a(100),j=a.n(w),T=Object(S.a)({root:{"& .MuiAccordionDetails-root":{padding:"0px"}}})(E.a),N=Object(P.a)((function(e){return Object(h.a)({root:{width:"100%","& .MuiAccordionDetails":{padding:"0px"}},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},contentBlock:{width:"100%"},contentBlockWrapper:{width:"100%"},contentBlockWrapperRoot:{width:"100%"}})})),I=function(e){var t=N();return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{className:"".concat(f.a.MuiPaperRoot," ").concat(f.a.contentBlockWrapperRoot)},r.a.createElement(b.a,{expandIcon:r.a.createElement(j.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(O.a,{className:t.heading},"Friends")),r.a.createElement(v.a,{className:t.contentBlockWrapper},r.a.createElement(O.a,{component:"span",className:t.contentBlock},e.friends.map((function(e){return r.a.createElement("div",{key:e.id,className:f.a.nav__friendsBlock_item},r.a.createElement("div",{className:f.a.nav__friendsBlock_item_img},r.a.createElement("img",{src:"https://i.ibb.co/F8yML1z/image.png",alt:""})),r.a.createElement("div",{className:f.a.nav__friendsBlock_item_name},r.a.createElement(i.b,{to:e.pathToDialog},e.name)),e.isOnline&&r.a.createElement("div",{className:f.a.nav__friendsBlock_item_onlineStatus}))}))))))},A=a(11),y=function(e){var t=Object(A.d)((function(e){return e.auth.isAuth}));return r.a.createElement("div",{className:p.a.nav},r.a.createElement("div",{className:p.a.wrap__title},e.navPage.navTitles.map((function(e){return r.a.createElement(d,{key:e.id,title:e.title,path:e.path})}))),r.a.createElement("div",{className:p.a.nav__friendsBlock},t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{friends:e.navPage.friends}))))},F=a(56),R=a.n(F),k=a(121),M=a.n(k),x=function(e){return r.a.createElement("div",{className:M.a.newMessage},r.a.createElement("div",{className:M.a.newMessage__img},r.a.createElement("img",{src:"https://i.ibb.co/F8yML1z/image.png",alt:"avatarPhoto"})),r.a.createElement("div",{className:M.a.newMessage__content},r.a.createElement("span",null,e.message)))},U=a(122),L=a.n(U),C=function(e){return r.a.createElement("div",{className:L.a.dialogs__people_name},r.a.createElement("div",{className:L.a.dialogs__people_name_img},r.a.createElement("img",{src:"https://i.ibb.co/F8yML1z/image.png",alt:""})),r.a.createElement("div",{className:L.a.dialogs__people_name_content},r.a.createElement(i.b,{to:e.path},r.a.createElement("span",null,e.name))))};!function(e){e.ADD_MESSAGE="ADD_MESSAGE",e.ADD_POST="ADD_POST",e.UPDATE_POST="UPDATE_POST",e.FOLLOW_TO_USER="FOLLOW_TO_USER",e.UNFOLLOW_TO_USER="UNFOLLOW_TO_USER",e.SET_USERS="SET_USERS",e.SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT",e.SET_CURRENT_PAGE="SET_CURRENT_PAGE",e.SET_IS_FETCHING="SET_IS_FETCHING",e.SET_USER_PROFILE="SET_USER_PROFILE",e.SET_AUTH_DATA="SET_AUTH_DATA",e.SET_FOLLOWING_IN_PROGRESS="SET_FOLLOWING_IN_PROGRESS",e.SET_STATUS_PROFILE="SET_STATUS_PROFILE",e.SET_AUTH_ERROR="SET_AUTH_ERROR",e.SET_CAPTCHA_VALUE="SET_CAPTCHA_VALUE",e.INITIALIZED_APP="INITIALIZED_APP"}(o||(o={}));var D=function(e){return{type:o.SET_USERS,users:e}},B=function(e){return{type:o.SET_IS_FETCHING,isFetching:e}},H=function(e){return{type:o.SET_AUTH_DATA,authData:e}},G=function(e,t){return{type:o.SET_FOLLOWING_IN_PROGRESS,isFollowingProgress:e,userId:t}},W=function(e){return{type:o.SET_STATUS_PROFILE,statusProfile:e}},z=function(e){return{type:o.SET_AUTH_ERROR,error:e}},J=a(252),V=a(240),Z=a(241),Y=a(245),q=a(242),X=a(80),K=a(40),Q=K.a({DialogMessageTextarea:K.b().max(300,"message should consists 300 char or less")}),$=function(e){var t=Object(X.a)({initialValues:{DialogMessageTextarea:""},validationSchema:Q,onSubmit:function(t,a){var n=a.resetForm;e.addMessage(t.DialogMessageTextarea),n({values:void 0})}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,null,r.a.createElement(V.a,null,r.a.createElement("form",{onSubmit:t.handleSubmit},r.a.createElement(Z.a,{container:!0,direction:"column",spacing:2},r.a.createElement(Z.a,{item:!0},r.a.createElement("div",{className:R.a.dialogs__messages_newMesssage_textarea},r.a.createElement(Y.a,Object.assign({placeholder:"enter your message...",name:"DialogMessageTextarea",label:"message field",multiline:!0,rows:2,rowsMax:4},t.getFieldProps("DialogMessageTextarea")))),t.errors.DialogMessageTextarea&&t.touched.DialogMessageTextarea?r.a.createElement("div",{style:{color:"red"}},t.errors.DialogMessageTextarea):null),r.a.createElement(Z.a,{item:!0},r.a.createElement("div",{className:R.a.dialogs__messages_newMesssage_button},r.a.createElement(q.a,{color:"primary",type:"submit"},"Send"))))))))},ee=Object(A.b)(null,{addMessage:function(e){return{type:o.ADD_MESSAGE,message:e}}})((function(e){return r.a.createElement("div",{className:R.a.dialogs__messages_newMesssage},r.a.createElement($,{addMessage:e.addMessage}))})),te=a(164),ae=function(e){return{isAuth:e.auth.isAuth}};function ne(e){return Object(A.b)(ae)((function(t){var a=t.isAuth,n=Object(te.a)(t,["isAuth"]);return a?r.a.createElement(e,n):r.a.createElement(l.a,{to:"/login"})}))}var re=a(38),oe=a(20),se=Object(oe.a)((function(e){return e.dialogsPage}),(function(e){return e})),ce=Object(re.d)(ne,Object(A.b)((function(e){return{dialogPage:se(e)}})))((function(e){return r.a.createElement("div",{className:R.a.dialogs},r.a.createElement("div",{className:R.a.dialogs__people},e.dialogPage.names.map((function(e){return r.a.createElement(C,{key:e.id,name:e.name,path:e.path})}))),r.a.createElement("div",{className:R.a.dialogs__messages},e.dialogPage.messages.map((function(e){return r.a.createElement(x,{key:e.id,message:e.message})})),r.a.createElement(ee,null)))})),ie=a(154),le=a.n(ie),_e=function(){return r.a.createElement("div",{className:le.a.content},"The page of news is being developed")},ue=a(155),me=a.n(ue),pe=function(){return r.a.createElement("div",{className:me.a.content},"The page of settings is being developed")},de=a(88),ge=a(23),fe=a.n(ge),Ee=function(e){return r.a.createElement("div",{className:fe.a.content__item},r.a.createElement("div",{className:fe.a.content__item_img},r.a.createElement(i.b,{to:"/profile/"+e.id},r.a.createElement("img",{src:e.photos.small?e.photos.small:"https://i.ibb.co/F8yML1z/image.png",alt:""}))),r.a.createElement("div",{className:fe.a.content__item_info},r.a.createElement("div",{className:fe.a.content__item_info_name},r.a.createElement("span",null,e.name)),r.a.createElement("div",{className:fe.a.content__item_info_status},r.a.createElement("span",null,e.status))),r.a.createElement("div",{className:fe.a.content__item_button},e.followed?r.a.createElement("button",{onClick:function(){e.unfollow(e.id)},className:fe.a.content__item_button_unfollow,disabled:e.isFollowingInProgress.some((function(t){return t==e.id}))},r.a.createElement("img",{src:"https://img.icons8.com/material-sharp/24/000000/unsubscribe.png",alt:""})):r.a.createElement("button",{onClick:function(){e.follow(e.id)},className:fe.a.content__item_button_follow,disabled:e.isFollowingInProgress.some((function(t){return t==e.id}))},r.a.createElement("img",{src:"https://img.icons8.com/fluent-systems-filled/24/000000/subscription.png",alt:""}))))},he=a(243),be=a(246),Oe=a(163),ve=ne((function(e){var t=Object(n.useState)(!1),a=Object(de.a)(t,2),o=a[0],s=a[1];function c(){!o&&window.pageYOffset>300?s(!0):s(!1)}Object(n.useEffect)((function(){0===e.users.length&&e.getUsers(e.currentPage,e.pageSize)})),Object(n.useEffect)((function(){return e.isFetching&&window.addEventListener("scroll",c,!0),function(){return window.removeEventListener("scroll",c)}}),[window.pageYOffset,e.currentPage]);for(var i=Math.ceil(e.totalUsersCount/e.pageSize),l=[],_=1;i>=_;_++)l.push(_);return r.a.createElement("div",{className:fe.a.content__wrapper},e.isFetching&&r.a.createElement(he.a,{className:fe.a.circleProgress}),r.a.createElement("div",{className:fe.a.content__wrapper_pagination},r.a.createElement(be.a,{count:i,siblingCount:1,color:"primary",onChange:function(t,a){return n=a,void e.pagination(n,e.pageSize);var n}})),r.a.createElement("div",{className:fe.a.scrollTop_wrapper},r.a.createElement(Oe.a,{className:fe.a.scrollTop,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{height:40,display:o?"flex":"none"}})),e.users.map((function(t){return r.a.createElement(Ee,{key:t.id,id:t.id,status:t.status,photos:t.photos,followed:t.followed,unfollow:function(t){e.unfollow(t)},follow:function(t){e.follow(t)},name:t.name,isFollowingInProgress:e.isFollowingInProgress})})))})),Se=a(156),Pe=a.n(Se).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"959808d3-8efe-42bd-88eb-3693675e6c98"}}),we=function(e,t){return Pe.get("users?page=".concat(e,"&count=").concat(t))},je=function(e){return Pe.delete("follow/".concat(e))},Te=function(e){return Pe.post("follow/".concat(e))},Ne=function(){return Pe.get("auth/me")},Ie=function(e,t,a,n){return Pe.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n})},Ae=function(){return Pe.delete("auth/login")},ye=function(){return Pe.get("/security/get-captcha-url")},Fe=function(e){return Pe.get("profile/".concat(e))},Re=function(e){return Pe.get("profile/status/".concat(e))},ke=function(e){return Pe.put("profile/status",{status:e})},Me=Object(oe.a)((function(e){return e.usersPage.users}),(function(e){return e})),xe=Object(oe.a)((function(e){return e.usersPage.totalUsersCount}),(function(e){return e})),Ue=Object(oe.a)((function(e){return e.usersPage.pageSize}),(function(e){return e})),Le=Object(oe.a)((function(e){return e.usersPage.currentPage}),(function(e){return e})),Ce=Object(oe.a)((function(e){return e.usersPage.isFetching}),(function(e){return e})),De=Object(oe.a)((function(e){return e.usersPage.isFollowingInProgress}),(function(e){return e})),Be=Object(A.b)((function(e){return{users:Me(e),totalUsersCount:xe(e),pageSize:Ue(e),currentPage:Le(e),isFetching:Ce(e),isFollowingInProgress:De(e)}}),{follow:function(e){return function(t){t(G(!0,e)),Te(e).then((function(a){0===a.data.resultCode&&(t(function(e){return{type:o.FOLLOW_TO_USER,userId:e}}(e)),t(G(!1,e)))}))}},unfollow:function(e){return function(t){t(G(!0,e)),je(e).then((function(a){0===a.data.resultCode&&(t(function(e){return{type:o.UNFOLLOW_TO_USER,userId:e}}(e)),t(G(!1,e)))}))}},getUsers:function(e,t){return function(a){a(B(!0)),we(e,t).then((function(e){var t;a(B(!1)),a(D(e.data.items)),a((t=e.data.totalCount,{type:o.SET_TOTAL_USERS_COUNT,totalUsersCount:t}))}))}},pagination:function(e,t){return function(a){var n;a((n=e,{type:o.SET_CURRENT_PAGE,currentPage:n})),a(B(!0)),we(e,t).then((function(e){a(D(e.data.items)),a(B(!1))}))}}})(ve),He=a(110),Ge=a(111),We=a(112),ze=a(115),Je=a(157),Ve=a.n(Je),Ze=a(158),Ye=a.n(Ze),qe=a(123),Xe=a.n(qe),Ke=function(e){return r.a.createElement("div",{className:Xe.a.content},r.a.createElement("div",{className:Xe.a.content__img},r.a.createElement("img",{src:e.photo?e.photo:"https://i.ibb.co/F8yML1z/image.png",alt:""})),r.a.createElement("div",{className:Xe.a.content__text},r.a.createElement("span",null,e.message)))},Qe=a(124),$e=a.n(Qe),et=K.a({textareaPost:K.b().max(300,"post should consists 300 char or less")}),tt=function(e){var t=Object(X.a)({initialValues:{textareaPost:""},validationSchema:et,onSubmit:function(t,a){var n=a.resetForm;t.textareaPost&&e.addPost(t.textareaPost),n({values:void 0})}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,null,r.a.createElement(V.a,null,r.a.createElement("form",{onSubmit:t.handleSubmit},r.a.createElement(Z.a,{container:!0,direction:"column",spacing:3},r.a.createElement(Z.a,{item:!0},r.a.createElement("div",{className:$e.a.content__textArea},r.a.createElement(Y.a,Object.assign({placeholder:"enter some text...",name:"textareaPost",variant:"outlined",multiline:!0,rows:2,rowsMax:4},t.getFieldProps("textareaPost")))),t.errors.textareaPost&&t.touched.textareaPost?r.a.createElement("div",{style:{color:"red"}},t.errors.textareaPost):null),r.a.createElement(Z.a,{item:!0},r.a.createElement("div",{className:$e.a.content__button},r.a.createElement(q.a,{type:"submit",variant:"contained"},"PUBLISH"))))))))},at=Object(A.b)(null,{addPost:function(e){return{type:o.ADD_POST,value:e}}})((function(e){return r.a.createElement("div",{className:$e.a.content},r.a.createElement(tt,{addPost:e.addPost}))})),nt=function(e){return r.a.createElement("div",{className:Ye.a.content__posts},r.a.createElement("h4",null,r.a.createElement("span",null,"Create a new post:")),r.a.createElement(at,null),e.posts.map((function(t){return r.a.createElement(Ke,{message:t.message,key:t.id,photo:e.photo})})))},rt=a(25),ot=a.n(rt),st=function(e){var t=e.userId;t||(t="7788");var a=Object(n.useState)(!1),o=Object(de.a)(a,2),s=o[0],c=o[1],i=Object(n.useState)(e.status),l=Object(de.a)(i,2),_=l[0],u=l[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("b",null,"Status: ")),s&&"7788"==t?r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:_,onChange:function(e){u(e.currentTarget.value)},onBlur:function(){e.updateStatus(_),c(!1)},autoFocus:!0})):r.a.createElement("div",{className:ot.a.content__mainInfo_contactStatus_spanContent},r.a.createElement("span",{onDoubleClick:function(){return c(!0)}},e.status)))},ct=r.a.memo((function(e){var t,a,n,o,s,c,i,l,_;e.userProfile&&e.userProfile.contacts&&(_=Object.keys(e.userProfile.contacts).map((function(t){return r.a.createElement("div",{className:ot.a.content__socialLinks,key:t},r.a.createElement("span",null,t,": ",e.userProfile.contacts[t]))})));var u=Object(S.a)({root:{"& .MuiAccordionDetails-root":{padding:"0px"}}})(E.a),m=Object(P.a)((function(e){return Object(h.a)({root:{width:"100%","& .MuiAccordionDetails":{padding:"0px"}},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},contentBlock:{width:"100%"},contentBlockWrapper:{width:"100%"},contentBlockWrapperRoot:{width:"100%"}})}))();return r.a.createElement("div",{className:ot.a.content__profileInfo},r.a.createElement("div",{className:ot.a.content__mainInfo},r.a.createElement("div",{className:ot.a.content__mainInfo_avatar},r.a.createElement("img",{src:(null===(t=e.userProfile)||void 0===t||null===(a=t.photos)||void 0===a?void 0:a.large)?null===(n=e.userProfile)||void 0===n||null===(o=n.photos)||void 0===o?void 0:o.large:"https://i.imgur.com/d8HZHxF.jpg",alt:""})),r.a.createElement("div",{className:ot.a.content__mainInfo_contactStatus},r.a.createElement("div",{className:ot.a.content__description_fullName},r.a.createElement("b",null,"FullName"),": ",null===(s=e.userProfile)||void 0===s?void 0:s.fullName),r.a.createElement(st,{status:e.status,updateStatus:e.updateStatus,userId:e.userId}))),r.a.createElement("div",{className:ot.a.content__description},r.a.createElement("div",{className:ot.a.content__description_aboutMe},r.a.createElement("b",null,"AboutMe"),": ",null===(c=e.userProfile)||void 0===c?void 0:c.aboutMe),r.a.createElement("div",{className:ot.a.content__description_searchJob},r.a.createElement("b",null,"Search a job:")," ",(null===(i=e.userProfile)||void 0===i?void 0:i.lookingForAJob)?"Yes":"No"),r.a.createElement("div",{className:ot.a.content__description_desriptionOfJob},r.a.createElement("b",null,"Description of job:")," ",(null===(l=e.userProfile)||void 0===l?void 0:l.lookingForAJobDescription)?e.userProfile.lookingForAJobDescription:"No description"),r.a.createElement("div",{className:ot.a.content__description_contacts},r.a.createElement(u,{className:"".concat(f.a.MuiPaperRoot," ").concat(f.a.contentBlockWrapperRoot)},r.a.createElement(b.a,{expandIcon:r.a.createElement(j.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(O.a,{className:m.heading},r.a.createElement("b",null,"Contacts:"))),r.a.createElement(v.a,{className:m.contentBlockWrapper},r.a.createElement(O.a,{className:m.contentBlock,component:"span"},_))))))})),it=function(e){var t;return r.a.createElement("div",{className:Ve.a.content},e.profilePage.isFetching?r.a.createElement(he.a,{style:{display:"block",position:"absolute",top:"0",left:"0",bottom:"0",right:"0",margin:"auto"}}):r.a.createElement(r.a.Fragment,null,r.a.createElement(ct,{userProfile:e.profilePage.userProfile,status:e.profilePage.profileStatus,updateStatus:e.updateStatus,userId:e.userId}),r.a.createElement(nt,{posts:e.profilePage.posts,photo:null===(t=e.profilePage.userProfile.photos)||void 0===t?void 0:t.large})))},lt=Object(oe.a)((function(e){return e.profilePage}),(function(e){return e})),_t=Object(oe.a)((function(e){return e.auth.id}),(function(e){return e})),ut=function(e){Object(ze.a)(a,e);var t=Object(We.a)(a);function a(){return Object(He.a)(this,a),t.apply(this,arguments)}return Object(Ge.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(null!==this.props.authUserId?e=this.props.authUserId.toString():this.props.history.push("/login")),this.props.setUserProfile(e),this.props.setStatusProfile(e)}},{key:"render",value:function(){return r.a.createElement(it,{profilePage:this.props.profilePage,updateStatus:this.props.updateStatus,userId:this.props.match.params.userId})}}]),a}(r.a.PureComponent),mt=Object(re.d)(ne,l.f,Object(A.b)((function(e){return{profilePage:lt(e),authUserId:_t(e)}}),{setUserProfile:function(e){return function(t){t(B(!0)),Fe(e).then((function(e){var a;t((a=e.data,{type:o.SET_USER_PROFILE,userProfile:a})),t(B(!1))}))}},setStatusProfile:function(e){return function(t){t(B(!0)),Re(e).then((function(e){t(W(e.data))}))}},updateStatus:function(e){return function(t){ke(e).then((function(){t(W(e))}))}}}))(ut),pt=a(65),dt=a.n(pt),gt=a(159),ft=a.n(gt),Et=a(160),ht=a.n(Et),bt=function(e){return r.a.createElement("div",{className:dt.a.header},r.a.createElement("div",{className:dt.a.header__wrapper},r.a.createElement("div",{className:dt.a.header__wrapper_img},r.a.createElement("img",{src:ft.a,alt:"logo"})),r.a.createElement("div",{className:dt.a.header__authBlock},e.isAuth?r.a.createElement("div",{className:dt.a.header__authBlock_login},r.a.createElement("span",null,e.login),r.a.createElement("div",{className:dt.a.header__logOutBtn},r.a.createElement(q.a,{variant:"contained",onClick:function(){e.logOutProfile()}},r.a.createElement(ht.a,null),"LOG OUT"))):r.a.createElement(i.b,{to:"/login"},"Sign In"))))},Ot=function(){return function(e){ye().then((function(t){var a;e((a=t.data.url,{type:o.SET_CAPTCHA_VALUE,captcha:a}))}))}},vt=function(){return function(e){return Ne().then((function(t){0===t.data.resultCode&&e(H(t.data.data))}))}},St=Object(oe.a)((function(e){return e.auth.isAuth}),(function(e){return e})),Pt=Object(oe.a)((function(e){return e.auth.error}),(function(e){return e})),wt=Object(oe.a)((function(e){return e.auth.captcha}),(function(e){return e})),jt=Object(oe.a)((function(e){return e.auth.login}),(function(e){return e})),Tt=function(e){Object(ze.a)(a,e);var t=Object(We.a)(a);function a(){return Object(He.a)(this,a),t.apply(this,arguments)}return Object(Ge.a)(a,[{key:"render",value:function(){return r.a.createElement(bt,{isAuth:this.props.isAuth,login:this.props.login,logOutProfile:this.props.logOutProfile})}}]),a}(r.a.Component),Nt=Object(A.b)((function(e){return{isAuth:St(e),login:jt(e)}}),{logOutProfile:function(){return function(e){Ae().then((function(t){0===t.data.resultCode&&e(H({email:null,login:null,id:null}))}))}}})(Tt),It=a(57),At=a.n(It),yt=a(244),Ft=a(247),Rt=a(161),kt=a.n(Rt),Mt=K.a({email:K.b().email("Enter a valid email").required("Email is required"),password:K.b().min(8,"Minimum 8 characters length").max(20,"Max 20 characters length").required("Password is required")}),xt=function(e){var t=e.error,a=e.login,o=e.captcha,s=Object(X.a)({initialValues:{email:"",password:"",rememberMe:!1,captcha:""},validationSchema:Mt,onSubmit:function(e,t){var n=t.resetForm;a(e.email,e.password,e.rememberMe,e.captcha),n({values:void 0})}}),c=Object(n.useCallback)((function(){e.getCaptcha()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,null,r.a.createElement(V.a,null,r.a.createElement("form",{onSubmit:s.handleSubmit},r.a.createElement(Z.a,{container:!0,direction:"column",spacing:2},r.a.createElement(Z.a,{item:!0},r.a.createElement("div",null,r.a.createElement(Y.a,Object.assign({name:"email",label:"email",variant:"outlined"},s.getFieldProps("email"),{InputProps:{classes:{root:At.a.fieldErr}}}))),s.errors.email&&s.touched.email?r.a.createElement("div",{className:At.a.styleError},s.errors.email):null),r.a.createElement(Z.a,{item:!0},r.a.createElement("div",null,r.a.createElement(Y.a,Object.assign({name:"password",label:"password",type:"password",variant:"outlined"},s.getFieldProps("password")))),!s.errors.password&&t?r.a.createElement("div",{className:At.a.styleError},t):null,s.errors.password&&s.touched.password?r.a.createElement("div",{className:At.a.styleError},s.errors.password):null),r.a.createElement(Z.a,{item:!0},r.a.createElement("div",null,r.a.createElement(yt.a,{label:"Remember me",control:r.a.createElement(Ft.a,Object.assign({name:"rememberMe"},s.getFieldProps("rememberMe")))}))),o&&r.a.createElement(Z.a,{item:!0},r.a.createElement("div",{className:At.a.captcha__content},r.a.createElement("img",{src:o,alt:""}),r.a.createElement("div",{className:At.a.captcha__content_img},r.a.createElement(kt.a,{style:{fontSize:30},onClick:c}))),r.a.createElement(Y.a,Object.assign({name:"captcha",label:"captcha"},s.getFieldProps("captcha")))),r.a.createElement(Z.a,{item:!0},r.a.createElement("div",null,r.a.createElement(q.a,{type:"submit",variant:"contained"},"LOG IN"))))))))},Ut=a(125),Lt=a.n(Ut),Ct=function(e){return r.a.createElement("div",{className:Lt.a.login__content},r.a.createElement("div",{className:Lt.a.login__content_inner_textHelper},r.a.createElement("h4",null,"You can enter and test features using those data:"),r.a.createElement("span",null,"login:"),r.a.createElement("b",null," vladby86@gmail.com"),r.a.createElement("br",null),r.a.createElement("span",null,"password:"),r.a.createElement("b",null," HardPassword_2020")),e.isAuth?r.a.createElement(l.a,{to:"/profile"}):r.a.createElement("div",{className:Lt.a.login__content_inner},r.a.createElement("h1",null,"Login"),r.a.createElement(xt,{login:e.login,error:e.error,captcha:e.captcha,getCaptcha:function(){e.getCaptcha()}})))},Dt=Object(A.b)((function(e){return{isAuth:St(e),error:Pt(e),captcha:wt(e)}}),{postLoginData:function(e,t,a,n){return function(r){r(z(null)),Ie(e,t,a,n).then((function(e){0===e.data.resultCode?r(vt()):10===e.data.resultCode?r(Ot()):e.data.messages.length&&r(z(e.data.messages[0]))}))}},getCaptcha:Ot})((function(e){return r.a.createElement(Ct,{login:function(t,a,n,r){e.postLoginData(t,a,n,r)},isAuth:e.isAuth,error:e.error,captcha:e.captcha,getCaptcha:e.getCaptcha})})),Bt=function(){return function(e){e(vt()).then((function(){})).finally((function(){e({type:o.INITIALIZED_APP})}))}},Ht=function(e){var t=Object(A.d)((function(e){return e.app.isInitialized})),a=Object(A.c)();return Object(n.useEffect)((function(){a(Bt())}),[]),t?r.a.createElement("div",{className:u.a.app__wrapper},r.a.createElement(Nt,null),r.a.createElement(y,{navPage:e.state.navPage}),r.a.createElement("div",{className:u.a.app__wrapper_content},r.a.createElement(l.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(mt,null)}}),r.a.createElement(l.b,{path:"/dialogs",render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(l.b,{path:"/users",render:function(){return r.a.createElement(Be,null)}}),r.a.createElement(l.b,{path:"/news",render:function(){return r.a.createElement(_e,null)}}),r.a.createElement(l.b,{path:"/settings",render:function(){return r.a.createElement(pe,null)}}),r.a.createElement(l.b,{path:"/login",render:function(){return r.a.createElement(Dt,null)}}))):r.a.createElement(he.a,{className:u.a.circleProgress})},Gt=a(55),Wt=a(6),zt=a(248),Jt={posts:[{id:Object(zt.a)(),message:"Hey girls"},{id:Object(zt.a)(),message:"Hey guys"}],userProfile:{},isFetching:!1,profileStatus:""},Vt={names:[{id:Object(zt.a)(),name:"Marat",path:"/dialogs/1"},{id:Object(zt.a)(),name:"Anton",path:"/dialogs/2"},{id:Object(zt.a)(),name:"Arkasha",path:"/dialogs/3"},{id:Object(zt.a)(),name:"Tolik",path:"/dialogs/4"}],messages:[{id:Object(zt.a)(),message:"Hey man!"},{id:Object(zt.a)(),message:"How is it going?"},{id:Object(zt.a)(),message:"You forgot about my birthday(("},{id:Object(zt.a)(),message:"I want to break up with you, sorry"}]},Zt={navTitles:[{id:Object(zt.a)(),title:"Profile",path:"/profile"},{id:Object(zt.a)(),title:"Dialogs",path:"/dialogs"},{id:Object(zt.a)(),title:"Users",path:"/users"},{id:Object(zt.a)(),title:"News",path:"/news"},{id:Object(zt.a)(),title:"Settings",path:"/settings"}],friends:[{id:Object(zt.a)(),name:"Marat",pathToDialog:"/dialogs/1",isOnline:!0},{id:Object(zt.a)(),name:"Anton",pathToDialog:"/dialogs/2",isOnline:!1},{id:Object(zt.a)(),name:"Arkasha",pathToDialog:"/dialogs/3",isOnline:!0},{id:Object(zt.a)(),name:"Tolik",pathToDialog:"/dialogs/4",isOnline:!1}]},Yt={users:[],totalUsersCount:0,pageSize:100,currentPage:1,isFetching:!0,isFollowingInProgress:[]},qt={id:null,email:null,login:null,captcha:"",isAuth:!1,error:null},Xt=a(162),Kt={isInitialized:!1},Qt=Object(re.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.ADD_POST:var a=t.value,n={id:Object(zt.a)(),message:a};return e=Object(Wt.a)(Object(Wt.a)({},e),{},{posts:[].concat(Object(Gt.a)(e.posts),[n])});case o.SET_USER_PROFILE:return Object(Wt.a)(Object(Wt.a)({},e),{},{userProfile:t.userProfile});case o.SET_IS_FETCHING:return Object(Wt.a)(Object(Wt.a)({},e),{},{isFetching:t.isFetching});case o.SET_STATUS_PROFILE:return Object(Wt.a)(Object(Wt.a)({},e),{},{profileStatus:t.statusProfile});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.ADD_MESSAGE:var a=t.message,n={id:Object(zt.a)(),message:a};return e=Object(Wt.a)(Object(Wt.a)({},e),{},{messages:[].concat(Object(Gt.a)(e.messages),[n])});default:return e}},navPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt;arguments.length>1&&arguments[1];return Object(Wt.a)({},e)},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.FOLLOW_TO_USER:return Object(Wt.a)(Object(Wt.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(Wt.a)(Object(Wt.a)({},e),{},{followed:!0}):e}))});case o.UNFOLLOW_TO_USER:return Object(Wt.a)(Object(Wt.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(Wt.a)(Object(Wt.a)({},e),{},{followed:!1}):e}))});case o.SET_USERS:return Object(Wt.a)(Object(Wt.a)({},e),{},{users:Object(Gt.a)(t.users)});case o.SET_TOTAL_USERS_COUNT:return Object(Wt.a)(Object(Wt.a)({},e),{},{totalUsersCount:t.totalUsersCount});case o.SET_CURRENT_PAGE:return Object(Wt.a)(Object(Wt.a)({},e),{},{currentPage:t.currentPage});case o.SET_IS_FETCHING:return Object(Wt.a)(Object(Wt.a)({},e),{},{isFetching:t.isFetching});case o.SET_FOLLOWING_IN_PROGRESS:return Object(Wt.a)(Object(Wt.a)({},e),{},{isFollowingInProgress:t.isFollowingProgress?[].concat(Object(Gt.a)(e.isFollowingInProgress),[t.userId]):Object(Gt.a)(e.isFollowingInProgress.filter((function(e){return e!==t.userId})))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.SET_AUTH_DATA:var a=Object(Wt.a)(Object(Wt.a)({},e),t.authData),n=!!a.login;return Object(Wt.a)(Object(Wt.a)({},a),{},{isAuth:n});case o.SET_AUTH_ERROR:return Object(Wt.a)(Object(Wt.a)({},e),{},{error:t.error?t.error:null});case o.SET_CAPTCHA_VALUE:return Object(Wt.a)(Object(Wt.a)({},e),{},{captcha:t.captcha});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Kt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.INITIALIZED_APP:return Object(Wt.a)(Object(Wt.a)({},e),{},{isInitialized:!0});default:return e}}}),$t=Object(re.e)(Qt,Object(re.a)(Xt.a));window.store=$t;var ea=function(e){c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(A.a,{store:$t},r.a.createElement(Ht,{state:e,dispatch:$t.dispatch.bind($t)})))),document.getElementById("root"))};ea($t.getState()),$t.subscribe((function(){return ea($t.getState())})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},23:function(e,t,a){e.exports={content__wrapper:"users_content__wrapper__I5n30",content__wrapper_pagination:"users_content__wrapper_pagination__1MNj0",content__item:"users_content__item__2Yyhu",content__item_img:"users_content__item_img__1D76Z",content__item_button_unfollow:"users_content__item_button_unfollow__2pV61",content__item_button_follow:"users_content__item_button_follow__AmX_9",content__item_info:"users_content__item_info__1Xs8f",content__item_info_name:"users_content__item_info_name__2HvF9",content__item_info_status:"users_content__item_info_status__3AGlj",page:"users_page__3334I",active_page:"users_active_page__aZlPL",circleProgress:"users_circleProgress__3z0Io",scrollTop_wrapper:"users_scrollTop_wrapper__uMiAi",scrollTop:"users_scrollTop__pkMse",fadeIn:"users_fadeIn__2Gngt"}},25:function(e,t,a){e.exports={content__profileInfo:"profileInfo_content__profileInfo__P8qcm",content__mainInfo:"profileInfo_content__mainInfo__10Oib",content__mainInfo_avatar:"profileInfo_content__mainInfo_avatar__1toRH",content__mainInfo_contactStatus:"profileInfo_content__mainInfo_contactStatus__s_GZD",content__mainInfo_contactStatus_spanContent:"profileInfo_content__mainInfo_contactStatus_spanContent__3l0nE",content__description:"profileInfo_content__description__2dMvU",content__description_aboutMe:"profileInfo_content__description_aboutMe__21nxh",content__description_contacts:"profileInfo_content__description_contacts__1kNa-",content__description_fullName:"profileInfo_content__description_fullName__3yYXC",content__description_searchJob:"profileInfo_content__description_searchJob__1LMz1",content__description_desriptionOfJob:"profileInfo_content__description_desriptionOfJob__2lpvY",content__socialLinks:"profileInfo_content__socialLinks__BbwaC"}},41:function(e,t,a){e.exports={nav__friendsBlock_item:"friendsBlock_nav__friendsBlock_item__22hEe",nav__friendsBlock_item_img:"friendsBlock_nav__friendsBlock_item_img__fQY5A",nav__friendsBlock_item_name:"friendsBlock_nav__friendsBlock_item_name__1TGRU",nav__friendsBlock_item_onlineStatus:"friendsBlock_nav__friendsBlock_item_onlineStatus__QYJgV"}},56:function(e,t,a){e.exports={dialogs:"dialogs_dialogs__1LacB",wrapper__header:"dialogs_wrapper__header__2SJHX",dialogs__people:"dialogs_dialogs__people__1uaFk",dialogs__messages:"dialogs_dialogs__messages__1tidq",dialogs__messages_newMesssage:"dialogs_dialogs__messages_newMesssage__b5FW8",dialogs__messages_newMesssage_textarea:"dialogs_dialogs__messages_newMesssage_textarea__1fPCD",dialogs__messages_newMesssage_button:"dialogs_dialogs__messages_newMesssage_button__1mrcq"}},57:function(e,t,a){e.exports={captcha__content:"loginForm_captcha__content__3Pg_c",captcha__content_img:"loginForm_captcha__content_img__2D3af",styleError:"loginForm_styleError__rOP6O"}},65:function(e,t,a){e.exports={header:"header_header__28bqR",header__wrapper:"header_header__wrapper__1rCLi",header__wrapper_img:"header_header__wrapper_img__3B4XV",header__authBlock:"header_header__authBlock__3SaVn",header__authBlock_login:"header_header__authBlock_login__3iRv5",header__logOutBtn:"header_header__logOutBtn__1lZF5"}}},[[173,1,2]]]);
//# sourceMappingURL=main.d24f6201.chunk.js.map