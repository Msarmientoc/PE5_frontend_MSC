function _toConsumableArray(l){return _arrayWithoutHoles(l)||_iterableToArray(l)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(l){if(Symbol.iterator in Object(l)||"[object Arguments]"===Object.prototype.toString.call(l))return Array.from(l)}function _arrayWithoutHoles(l){if(Array.isArray(l)){for(var n=0,u=new Array(l.length);n<l.length;n++)u[n]=l[n];return u}}function _defineProperties(l,n){for(var u=0;u<n.length;u++){var t=n[u];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{jPt2:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),r=function l(){_classCallCheck(this,l)},e=u("pMnS"),i=u("iInd"),b=u("SVse"),s=function(){function l(){_classCallCheck(this,l),this.offersStudy=[],this.offersOther=[]}return _createClass(l,[{key:"ngOnChanges",value:function(l){l.user&&l.offers&&this.selectOffers()}},{key:"selectOffers",value:function(){var l=this.user.studies,n=this.user.offers;this.offersStudy=this.offers.filter((function(n){return l.some((function(l){return l.uid===n.category.uid}))})).map((function(l){var u=!!n.find((function(n){return n.id===l.id}));return Object.assign({},l,{subscribe:u})})),this.offersOther=this.offers.filter((function(n){return l.every((function(l){return l.uid!==n.category.uid}))}))}}]),l}(),o=t.pb({encapsulation:2,styles:[],data:{}});function c(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(2,null,["",""])),(l()(),t.rb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(4,null,["",""])),(l()(),t.rb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(6,null,["",""])),(l()(),t.rb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(8,null,["",""])),(l()(),t.rb(9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(10,null,["",""])),(l()(),t.rb(11,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(12,null,["",""])),(l()(),t.rb(13,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(14,null,["",""])),(l()(),t.rb(15,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),t.rb(16,0,null,null,3,"a",[["style","cursor:pointer"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var r=!0;return"click"===n&&(r=!1!==t.Cb(l,17).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&r),r}),null,null)),t.qb(17,671744,null,0,i.p,[i.o,i.a,b.i],{routerLink:[0,"routerLink"]},null),t.Db(18,1),(l()(),t.Ib(-1,null,["Ver Detalle"]))],(function(l,n){var u=l(n,18,0,n.context.$implicit.id);l(n,17,0,u)}),(function(l,n){l(n,2,0,n.context.$implicit.job.name),l(n,4,0,n.context.$implicit.company.name),l(n,6,0,n.context.$implicit.category.name),l(n,8,0,n.context.$implicit.date),l(n,10,0,n.context.$implicit.province.name),l(n,12,0,n.context.$implicit.municipe.name),l(n,14,0,n.context.$implicit.subscribe?"S\xed":"No"),l(n,16,0,t.Cb(n,17).target,t.Cb(n,17).href)}))}function a(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(2,null,["",""])),(l()(),t.rb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(4,null,["",""])),(l()(),t.rb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(6,null,["",""])),(l()(),t.rb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(8,null,["",""])),(l()(),t.rb(9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(10,null,["",""])),(l()(),t.rb(11,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(12,null,["",""])),(l()(),t.rb(13,0,null,null,0,"td",[],null,null,null,null,null))],null,(function(l,n){l(n,2,0,n.context.$implicit.job.name),l(n,4,0,n.context.$implicit.company.name),l(n,6,0,n.context.$implicit.category.name),l(n,8,0,n.context.$implicit.date),l(n,10,0,n.context.$implicit.province.name),l(n,12,0,n.context.$implicit.municipe.name)}))}function f(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Cumple con la Titulaci\xf3n (Familia)"])),(l()(),t.rb(2,0,null,null,21,"table",[["class","table table-bordered table-striped"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,17,"thead",[["class","thead-light"]],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Puesto"])),(l()(),t.rb(7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Empresa"])),(l()(),t.rb(9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Familia"])),(l()(),t.rb(11,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Fecha"])),(l()(),t.rb(13,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Provincia"])),(l()(),t.rb(15,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Municipio"])),(l()(),t.rb(17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Inscrito"])),(l()(),t.rb(19,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Acciones"])),(l()(),t.rb(21,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,c)),t.qb(23,278528,null,0,b.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(24,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Otras Ofertas"])),(l()(),t.rb(26,0,null,null,17,"table",[["class","table table-bordered table-striped"]],null,null,null,null,null)),(l()(),t.rb(27,0,null,null,13,"thead",[["class","thead-light"]],null,null,null,null,null)),(l()(),t.rb(28,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),t.rb(29,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Puesto"])),(l()(),t.rb(31,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Empresa"])),(l()(),t.rb(33,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Familia"])),(l()(),t.rb(35,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Fecha"])),(l()(),t.rb(37,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Provincia"])),(l()(),t.rb(39,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Municipio"])),(l()(),t.rb(41,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,a)),t.qb(43,278528,null,0,b.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,23,0,u.offersStudy),l(n,43,0,u.offersOther)}),null)}var h=function(){function l(){_classCallCheck(this,l),this.offers=[]}return _createClass(l,[{key:"ngOnChanges",value:function(){this.offers=this.user.offers}}]),l}(),p=t.pb({encapsulation:2,styles:[],data:{}});function m(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,17,"tr",[],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(2,null,["",""])),(l()(),t.rb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(4,null,["",""])),(l()(),t.rb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(6,null,["",""])),(l()(),t.rb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(8,null,["",""])),(l()(),t.rb(9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(10,null,["",""])),(l()(),t.rb(11,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(12,null,["",""])),(l()(),t.rb(13,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),t.rb(14,0,null,null,3,"a",[["style","cursor:pointer"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var r=!0;return"click"===n&&(r=!1!==t.Cb(l,15).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&r),r}),null,null)),t.qb(15,671744,null,0,i.p,[i.o,i.a,b.i],{routerLink:[0,"routerLink"]},null),t.Db(16,2),(l()(),t.Ib(-1,null,["Ver Detalle"]))],(function(l,n){var u=l(n,16,0,"/admin/offers/",n.context.$implicit.id);l(n,15,0,u)}),(function(l,n){l(n,2,0,n.context.$implicit.job.name),l(n,4,0,n.context.$implicit.company.name),l(n,6,0,n.context.$implicit.category.name),l(n,8,0,n.context.$implicit.date),l(n,10,0,n.context.$implicit.province.name),l(n,12,0,n.context.$implicit.municipe.name),l(n,14,0,t.Cb(n,15).target,t.Cb(n,15).href)}))}function d(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Mis Ofertas"])),(l()(),t.rb(2,0,null,null,19,"table",[["class","table table-bordered table-striped"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,15,"thead",[["class","thead-light"]],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Puesto"])),(l()(),t.rb(7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Empresa"])),(l()(),t.rb(9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Familia"])),(l()(),t.rb(11,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Fecha"])),(l()(),t.rb(13,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Provincia"])),(l()(),t.rb(15,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Municipio"])),(l()(),t.rb(17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Acciones"])),(l()(),t.rb(19,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,m)),t.qb(21,278528,null,0,b.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,21,0,n.component.offers)}),null)}var I=u("dnXt");u("Deqt"),u("hAnb"),u("wlfC");var y=u("DQLy"),O=Object(y.u)("offers"),v=function(){function l(n,u){var t=this;_classCallCheck(this,l),this.route=n,this.store$=u,this.isOffersList=!0,this.route.data.subscribe((function(l){return t.isOffersList=!l.my_offers})),this.user$=this.store$.select(I.b),this.offers$=this.store$.select(O)}return _createClass(l,[{key:"ngOnInit",value:function(){}}]),l}(),C=t.pb({encapsulation:0,styles:[[""]],data:{}});function g(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,3,"app-offers-list",[],null,null,null,f,o)),t.qb(1,573440,null,0,s,[],{user:[0,"user"],offers:[1,"offers"]},null),t.Eb(131072,b.b,[t.h]),t.Eb(131072,b.b,[t.h])],(function(l,n){var u=n.component;l(n,1,0,t.Jb(n,1,0,t.Cb(n,2).transform(u.user$)),t.Jb(n,1,1,t.Cb(n,3).transform(u.offers$)))}),null)}function $(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,2,"app-offers-profile",[],null,null,null,d,p)),t.qb(1,573440,null,0,h,[],{user:[0,"user"]},null),t.Eb(131072,b.b,[t.h])],(function(l,n){var u=n.component;l(n,1,0,t.Jb(n,1,0,t.Cb(n,2).transform(u.user$)))}),null)}function k(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Offers\n"])),(l()(),t.hb(16777216,null,null,1,null,g)),t.qb(3,16384,null,0,b.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,$)),t.qb(5,16384,null,0,b.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,u.isOffersList),l(n,5,0,!u.isOffersList)}),null)}var _=t.nb("app-offers",v,(function(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"app-offers",[],null,null,null,k,C)),t.qb(1,114688,null,0,v,[i.a,y.m],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),x=function(){function l(){_classCallCheck(this,l),this.subscribeOffer=new t.m,this.unsubscribeOffer=new t.m}return _createClass(l,[{key:"subscribe",value:function(){var l=[].concat(_toConsumableArray(this.user.offers),[this.offer]),n=Object.assign({},this.user,{offers:l});this.subscribeOffer.emit(n)}},{key:"unsubscribe",value:function(){var l=this,n=this.user.offers.filter((function(n){return n.id!==l.offer.id})),u=Object.assign({},this.user,{offers:n});this.unsubscribeOffer.emit(u)}},{key:"isSubscribe",value:function(){var l=this;return!(!this.user||!this.user.offers.find((function(n){return l.offer.id===n.id})))}}]),l}(),w=t.pb({encapsulation:0,styles:[[""]],data:{}});function K(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.subscribe()&&t),t}),null,null)),(l()(),t.Ib(-1,null,[" Inscribirse\n"]))],null,null)}function j(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"button",[["class","btn btn-danger"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.unsubscribe()&&t),t}),null,null)),(l()(),t.Ib(-1,null,[" Eliminar oferta\n"]))],null,null)}function q(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Offers Detail\n"])),(l()(),t.rb(2,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),t.Ib(3,null,[""," "])),t.Eb(0,b.f,[]),(l()(),t.hb(16777216,null,null,1,null,K)),t.qb(6,16384,null,0,b.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,j)),t.qb(8,16384,null,0,b.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,6,0,!u.isSubscribe()),l(n,8,0,u.isSubscribe())}),(function(l,n){var u=n.component;l(n,3,0,t.Jb(n,3,0,t.Cb(n,4).transform(u.offer)))}))}var L=u("lJxs"),S=u("eIep"),F=u("dS7W"),A=function(){function l(n,u){var t=this;_classCallCheck(this,l),this.store$=n,this.route=u,this.user$=this.store$.select(I.b),this.offer$=this.route.params.pipe(Object(L.a)((function(l){var n=l.id;return Number.parseInt(n)})),Object(S.a)((function(l){return t.store$.select(function(l){return Object(y.w)(O,(function(n){return n.find((function(n){return n.id===l}))}))}(l))})))}return _createClass(l,[{key:"onSubscribeOffer",value:function(l){this.store$.dispatch(new F.l(l))}},{key:"onUnsubscribeOffer",value:function(l){this.store$.dispatch(new F.l(l))}}]),l}(),E=t.pb({encapsulation:2,styles:[],data:{}});function P(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,3,"app-offers-detail",[],null,[[null,"subscribeOffer"],[null,"unsubscribeOffer"]],(function(l,n,u){var t=!0,r=l.component;return"subscribeOffer"===n&&(t=!1!==r.onSubscribeOffer(u)&&t),"unsubscribeOffer"===n&&(t=!1!==r.onUnsubscribeOffer(u)&&t),t}),q,w)),t.qb(1,49152,null,0,x,[],{offer:[0,"offer"],user:[1,"user"]},{subscribeOffer:"subscribeOffer",unsubscribeOffer:"unsubscribeOffer"}),t.Eb(131072,b.b,[t.h]),t.Eb(131072,b.b,[t.h])],(function(l,n){var u=n.component;l(n,1,0,t.Jb(n,1,0,t.Cb(n,2).transform(u.offer$)),t.Jb(n,1,1,t.Cb(n,3).transform(u.user$)))}),null)}var J=t.nb("app-offers-detail-wrapper",A,(function(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"app-offers-detail-wrapper",[],null,null,null,P,E)),t.qb(1,49152,null,0,A,[y.m,i.a],null,null)],null,null)}),{},{},[]),B={my_offers:!0},D=function l(){_classCallCheck(this,l)};u.d(n,"OffersModuleNgFactory",(function(){return M}));var M=t.ob(r,[],(function(l){return t.Ab([t.Bb(512,t.j,t.ab,[[8,[e.a,_,J]],[3,t.j],t.x]),t.Bb(4608,b.n,b.m,[t.t,[2,b.w]]),t.Bb(1073742336,b.c,b.c,[]),t.Bb(1073742336,i.q,i.q,[[2,i.w],[2,i.o]]),t.Bb(1073742336,D,D,[]),t.Bb(1073742336,r,r,[]),t.Bb(1024,i.m,(function(){return[[{path:"",component:v},{path:"my-offers",component:v,data:B},{path:":id",component:A}]]}),[])])}))}}]);