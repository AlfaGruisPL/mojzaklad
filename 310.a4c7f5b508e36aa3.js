"use strict";(self.webpackChunkPanelZakladu=self.webpackChunkPanelZakladu||[]).push([[310],{9537:(Z,p,a)=>{a.d(p,{w:()=>e});var r=a(9212),s=a(7695);let e=(()=>{class l{constructor(d){this.registerPage_=d}static#e=this.\u0275fac=function(g){return new(g||l)(r.Y36(s.m))};static#t=this.\u0275cmp=r.Xpm({type:l,selectors:[["app-register-page-save-button"]],standalone:!0,features:[r.jDz],decls:2,vars:0,consts:[[1,"saveContainer"],["type","button","value","Zapisz",1,"domyslnyButtonZapisz",3,"click"]],template:function(g,h){1&g&&(r.TgZ(0,"div",0)(1,"input",1),r.NdJ("click",function(){return h.registerPage_.saveData()}),r.qZA()())},styles:[".saveContainer[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:right;padding-right:20px}"]})}return l})()},6310:(Z,p,a)=>{a.r(p),a.d(p,{RegisterPageRouterModule:()=>Y,routes:()=>x});var r=a(9584),s=a(6814),e=a(9212);const l=["app-first-template-menu",""],M=()=>["/panelPracownika/registerPage/firstTemplate"];let d=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["","app-first-template-menu",""]],standalone:!0,features:[e.jDz],attrs:l,decls:2,vars:2,consts:[[3,"routerLink"]],template:function(n,o){1&n&&(e.TgZ(0,"a",0),e._uU(1," Podstawowe\n"),e.qZA()),2&n&&e.Q6J("routerLink",e.DdM(1,M))},dependencies:[s.ez,r.rH]})}return t})();const g=["app-second-template-menu",""],h=()=>["/panelPracownika/registerPage/secondTemplate"],k=()=>["/panelPracownika/registerPage/secondTemplate/footer"];let w=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["","app-second-template-menu",""]],standalone:!0,features:[e.jDz],attrs:g,decls:8,vars:4,consts:[[3,"routerLink"]],template:function(n,o){1&n&&(e.TgZ(0,"a",0),e._uU(1," Podstawowe\n"),e.qZA(),e.TgZ(2,"a"),e._uU(3,"pracownicy"),e.qZA(),e.TgZ(4,"a"),e._uU(5,"Zak\u0142ad"),e.qZA(),e.TgZ(6,"a",0),e._uU(7," Stopka\n"),e.qZA()),2&n&&(e.Q6J("routerLink",e.DdM(2,h)),e.xp6(6),e.Q6J("routerLink",e.DdM(3,k)))},dependencies:[s.ez,r.rH]})}return t})();var f=a(7695);function T(t,_){1&t&&e._UZ(0,"div",4)}function O(t,_){1&t&&e._UZ(0,"div",5)}const b=()=>["/panelPracownika/registerPage"];let U=(()=>{class t{constructor(i){this.registerPage_=i}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(f.m))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-register-page-menu"]],standalone:!0,features:[e.jDz],decls:5,vars:4,consts:[[1,"registerPageMenu"],[1,"registerPageMenuFirstLink",3,"routerLink"],["app-first-template-menu","",4,"ngIf"],["app-second-template-menu","",4,"ngIf"],["app-first-template-menu",""],["app-second-template-menu",""]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"a",1),e._uU(2," Ustawienia og\xf3lne "),e.qZA(),e.YNc(3,T,1,0,"div",2)(4,O,1,0,"div",3),e.qZA()),2&n&&(e.xp6(1),e.Q6J("routerLink",e.DdM(3,b)),e.xp6(2),e.Q6J("ngIf","template1"==o.registerPage_.selectedTemplate),e.xp6(1),e.Q6J("ngIf","template2"==o.registerPage_.selectedTemplate))},dependencies:[s.ez,s.O5,r.rH,d,w],styles:[".registerPageMenu{width:100%;display:flex}.registerPageMenu div{flex-grow:10;display:flex}.registerPageMenu a{display:flex;justify-content:center;align-items:center;flex-grow:10;height:50px;background:#e9f3ff;box-shadow:0 0 5px 5px inset #00000026;padding-left:20px;padding-right:20px;border:1px solid #444444;font-size:16px;color:#333;text-decoration:none}.registerPageMenu a:hover{background:#b6d7ff;cursor:pointer}.registerPageMenu a.registerPageMenuFirstLink{flex-grow:2}\n"],encapsulation:2})}return t})(),R=(()=>{class t{constructor(i){this.registerPage_=i}ngOnInit(){this.registerPage_.fetchData()}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(f.m))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-register-page"]],standalone:!0,features:[e.jDz],decls:6,vars:0,consts:[[1,"naglowekZolty"],[1,"naglowek1Wzoltym"],[1,"panelZakladu"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"span",1),e._uU(2,"Ustawiania strony reprezentacyjnej"),e.qZA()(),e.TgZ(3,"div",2),e._UZ(4,"app-register-page-menu")(5,"router-outlet"),e.qZA())},dependencies:[s.ez,r.lC,U],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.panelZakladu[_ngcontent-%COMP%]{display:flex;flex-grow:999;flex-direction:column}.formContainer[_ngcontent-%COMP%]{flex-grow:1;padding:10px;min-height:50vh;display:flex;flex-direction:column;justify-content:space-between}"]})}return t})();var z=a(8581),c=a(95),y=a(6890),j=a(836),C=a(8180),A=a(6593),v=a(7191);function D(t,_){if(1&t&&e._UZ(0,"iframe",2),2&t){const i=e.oxw();e.Q6J("src",i.bezpiecznyLink,e.uOi)}}let S=(()=>{class t{constructor(i,n){this.sanitizer=i,this.danePodreczne_=n,this.randomIframeNumber=123,this.linkDoPodlgadu="",this.bezpiecznyLink="",this.env=z.N}ngOnInit(){""!=this.danePodreczne_.danePodreczneObiekt.identyfikatorZakladu&&this.pobierz(),this.danePodreczne_.danePodreczneObserveble.pipe((0,j.T)(1),(0,C.q)(1)).subscribe(i=>{this.pobierz()})}pobierz(){this.linkDoPodlgadu=0==this.env.production?"https://"+this.danePodreczne_.danePodreczneObiekt.identyfikatorZakladu+".fenek.tech/?dummyVar="+this.randomIframeNumber:"https://"+this.danePodreczne_.danePodreczneObiekt.identyfikatorZakladu+".mojzaklad.pl/?dummyVar="+this.randomIframeNumber,this.bezpiecznyLink=this.sanitizer.bypassSecurityTrustResourceUrl(this.linkDoPodlgadu)}OdswiezPodglad(){this.randomIframeNumber=Math.round(1e6*Math.random()),this.bezpiecznyLink=this.sanitizer.bypassSecurityTrustResourceUrl(this.linkDoPodlgadu)}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(A.H7),e.Y36(v.v))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-register-page-iframe"]],standalone:!0,features:[e.jDz],decls:4,vars:1,consts:[[1,"iframe-container"],["frameborder","0",3,"src",4,"ngIf"],["frameborder","0",3,"src"]],template:function(n,o){1&n&&(e.TgZ(0,"h3"),e._uU(1,"Podgl\u0105d strony reklamowej:"),e.qZA(),e.TgZ(2,"div",0),e.YNc(3,D,1,1,"iframe",1),e.qZA()),2&n&&(e.xp6(3),e.Q6J("ngIf",o.linkDoPodlgadu.length>6))},dependencies:[s.O5],styles:['@charset "UTF-8";.iframe-container[_ngcontent-%COMP%]{position:relative;margin:auto;width:350px;background:rgba(245,245,245,.69);height:800px;max-height:80vh;overflow:hidden}.iframe-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:2820px;height:7000px;zoom:.35;-moz-transform:scale(.35);-moz-transform-origin:0 0;-o-transform:scale(.35);-o-transform-origin:0 0;-webkit-transform:scale(.35);-webkit-transform-origin:0 0;scale:.35;pointer-events:none}.iframe-container[_ngcontent-%COMP%]   .click-blocker[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:auto;background-color:transparent;opacity:0;z-index:1}']})}return t})();var I=a(8915),L=a(9537),J=a(9160);const N=["style",""],F=()=>({standalone:!0}),x=[{path:"",component:R,children:[{path:"",component:(()=>{class t{constructor(i,n,o){this.registerPage_=i,this.danePodreczne_=n,this.universalPrompt=o,this.odswiez=new e.vpe,this.environment=z.N,this.undefined=void 0}changeTemplate(i){const n=i.value,o=this.registerPage_.selectedTemplate;this.registerPage_.selectedTemplate="",setTimeout(()=>{this.registerPage_.selectedTemplate=o},10);const u=this.universalPrompt.open("Czy na pewno chcesz zmieni\u0107 szablon?","Zmiana szablonu powoduje utrat\u0119 ustawie\u0144 szablonu i jego danych.");u.addButton("Nie",{defaultNo:!0}),u.addButton("Tak",{defaultYes:!0}).pipe((0,C.q)(1)).subscribe(m=>{this.registerPage_.selectedTemplate=n})}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(f.m),e.Y36(v.v),e.Y36(J.S))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["red","style",""]],outputs:{odswiez:"odswiez"},standalone:!0,features:[e.jDz],attrs:N,decls:38,vars:7,consts:[[1,"leftRightContainer"],[1,"left","formContainer"],[1,"tabelka"],[3,"value","change"],["value","template1"],["value","template2"],[2,"font-weight","bold",3,"href"],["checkedLabel","W\u0142\u0105czona","uncheckedLabel","Wy\u0142\u0105czona",1,"przelacznikPublicznePrywatne",3,"ngModel","ngModelOptions","ngModelChange"],[1,"right"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"table")(4,"tr")(5,"th"),e._uU(6,"Szablon"),e.qZA(),e.TgZ(7,"td")(8,"select",3),e.NdJ("change",function(m){return o.changeTemplate(m.target)}),e.TgZ(9,"option",4),e._uU(10,"Szablon 1"),e.qZA(),e.TgZ(11,"option",5),e._uU(12,"Szablon 2"),e.qZA()(),e._uU(13),e.qZA()(),e.TgZ(14,"tr")(15,"th"),e._uU(16,"Adres strony reklamowej"),e.qZA(),e.TgZ(17,"td")(18,"a",6),e._uU(19),e.qZA()()(),e.TgZ(20,"tr")(21,"th"),e._uU(22,"Status strony reprezentacyjnej"),e.qZA(),e.TgZ(23,"td")(24,"ui-switch",7),e.NdJ("ngModelChange",function(m){return o.registerPage_.data.stronaReklamowaPrzelacznik=m}),e.qZA()()(),e.TgZ(25,"tr")(26,"th"),e._uU(27,"S\u0142owa kluczowe"),e.qZA(),e.TgZ(28,"td"),e._UZ(29,"input"),e.qZA()(),e.TgZ(30,"tr")(31,"th"),e._uU(32,"Opis dla google"),e.qZA(),e.TgZ(33,"td"),e._UZ(34,"textarea"),e.qZA()()()(),e._UZ(35,"app-register-page-save-button"),e.qZA(),e.TgZ(36,"div",8),e._UZ(37,"app-register-page-iframe"),e.qZA()()),2&n&&(e.xp6(8),e.Q6J("value",o.registerPage_.selectedTemplate),e.xp6(5),e.hij(" ",o.registerPage_.selectedTemplate," "),e.xp6(5),e.Q6J("href","http://"+o.danePodreczne_.danePodreczneObiekt.identyfikatorZakladu+".mojzaklad.pl",e.LSH),e.xp6(1),e.hij("www.",o.danePodreczne_.danePodreczneObiekt.identyfikatorZakladu,".mojzaklad.pl"),e.xp6(5),e.Q6J("ngModel",o.registerPage_.data.stronaReklamowaPrzelacznik)("ngModelOptions",e.DdM(6,F)))},dependencies:[c.u5,c.YN,c.Kr,c.JJ,c.On,c.UX,s.ez,y.S,y.o,S,I.FP,L.w],styles:["[_nghost-%COMP%]{display:block;height:100%}.bannerImg[_ngcontent-%COMP%]{height:30px;padding-left:20px}.tabelka[_ngcontent-%COMP%]{padding:10px}.tabelka[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.tabelka[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{width:240px}.tabelka[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:max-content}.toRight[_ngcontent-%COMP%]{text-align:right;width:100%;padding:15px 25px 0 0}.leftRightContainer[_ngcontent-%COMP%]{display:flex;width:100%;height:100%}.leftRightContainer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:calc(100% - 350px);flex-shrink:1}@media (max-width: 1000px){.leftRightContainer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:100%}}.leftRightContainer[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{z-index:10;background:rgba(229,229,229,.56);width:350px;flex-shrink:10;text-align:center;height:100%}@media (max-width: 1000px){.leftRightContainer[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:none}}  .NgxEditor{height:200px;overflow-y:scroll}  .NgxEditor__Content{min-height:200px}","[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.panelZakladu[_ngcontent-%COMP%]{display:flex;flex-grow:999;flex-direction:column}.formContainer[_ngcontent-%COMP%]{flex-grow:1;padding:10px;min-height:50vh;display:flex;flex-direction:column;justify-content:space-between}"]})}return t})()},{path:"firstTemplate",loadChildren:()=>a.e(472).then(a.bind(a,9472)).then(t=>t.routes)},{path:"secondTemplate",loadChildren:()=>a.e(355).then(a.bind(a,7355)).then(t=>t.routes)},{path:"**",redirectTo:"",pathMatch:"full"}]}];let Y=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[r.Bz.forChild(x),r.Bz]})}return t})()}}]);