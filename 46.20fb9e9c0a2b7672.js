"use strict";(self.webpackChunkPanelZakladu=self.webpackChunkPanelZakladu||[]).push([[46],{254:(St,m,l)=>{l.r(m),l.d(m,{routes:()=>Et});var y=l(5861),s=l(95),A=l(5833),d=l(6814),U=l(6890),b=l(3008),u=l(3501),h=l(1817);class T{constructor(r){this.firstname="",this.lastname="",this.email="",this.phoneNumber="",this.profilImageId=0,this.usunZdjecieProfilowe=!1,this.description="",this.profilImageId=r.profilImageId,this.firstname=r.firstname,this.lastname=r.lastname,this.email=r.email,this.phoneNumber=r.prefiksPhoneNumber+"-"+r.phoneNumber,this.adres={},this.adres.miasto=r.adres.miasto,this.adres.ulica=r.adres.ulica,this.adres.wojewodztwo=r.adres.wojewodztwo,this.adres.kodPocztowy=r.adres.kodPocztowy1+"-"+r.adres.kodPocztowy2,this.adres.nrLokalu=r.adres.nrLokalu,this.adres.nrDomu=r.adres.nrDomu,this.socialMedia=r.socialMedia,this.description=r.description,this.workDay=r.workDay}}var Z=l(8581),C=l(5597),P=l(590),t=l(9212),k=l(9584);let v=(()=>{class n{constructor(e){this.router=e,this.faArrowCircleLeft=P.OFe}back(){history.back()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(k.F0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-back-arrow"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[1,"strzalka",3,"icon","click"]],template:function(i,o){1&i&&(t.TgZ(0,"fa-icon",0),t.NdJ("click",function(){return o.back()}),t.qZA()),2&i&&t.Q6J("icon",o.faArrowCircleLeft)},dependencies:[C.uH,C.BN],styles:[".strzalka[_ngcontent-%COMP%]{position:absolute;top:0;right:10px;z-index:99900;opacity:1;font-size:32px;transition:.3s;color:#0000009e}.strzalka[_ngcontent-%COMP%]:hover{cursor:pointer;transform:perspective(15px) scale(1.1)}.strzalka[_ngcontent-%COMP%]   .strz[_ngcontent-%COMP%]{transition:.5s ease-out}"]})}return n})();var W=l(1610);const c=()=>({standalone:!0});function q(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"input",11),t.NdJ("keydown",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.iloscKlikniec=0)})("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.firstname=o)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.pracownikObj.firstname)("ngModelOptions",t.DdM(2,c))}}function J(n,r){if(1&n&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.pracownikObj.firstname)}}function N(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"input",13),t.NdJ("keydown",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.iloscKlikniec=0)})("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.lastname=o)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.pracownikObj.lastname)("ngModelOptions",t.DdM(2,c))}}function I(n,r){if(1&n&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.pracownikObj.lastname)}}function D(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"input",14),t.NdJ("keydown",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.iloscKlikniec=0)})("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.email=o)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.pracownikObj.email)("ngModelOptions",t.DdM(2,c))}}function K(n,r){if(1&n&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.pracownikObj.email)}}function Q(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"select",15),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.iloscKlikniec=0)})("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.prefiksPhoneNumber=o)}),t.TgZ(2,"option"),t._uU(3,"+48"),t.qZA(),t.TgZ(4,"option"),t._uU(5,"+380"),t.qZA()(),t.TgZ(6,"input",16),t.NdJ("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.phoneNumber=o)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.pracownikObj.prefiksPhoneNumber)("ngModelOptions",t.DdM(4,c)),t.xp6(5),t.Q6J("ngModel",e.pracownikObj.phoneNumber)("ngModelOptions",t.DdM(5,c))}}function F(n,r){if(1&n&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.AsE(" ",e.pracownikObj.prefiksPhoneNumber," ",e.pracownikObj.phoneNumber," ")}}function G(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"input",17),t.NdJ("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.socialMedia.facebook=o)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.pracownikObj.socialMedia.facebook)("ngModelOptions",t.DdM(2,c))}}function H(n,r){if(1&n&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.pracownikObj.socialMedia.facebook)}}function Y(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"input",17),t.NdJ("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.socialMedia.telegram=o)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.pracownikObj.socialMedia.telegram)("ngModelOptions",t.DdM(2,c))}}function L(n,r){if(1&n&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.pracownikObj.socialMedia.telegram)}}function B(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"input",17),t.NdJ("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.socialMedia.instagram=o)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.pracownikObj.socialMedia.instagram)("ngModelOptions",t.DdM(2,c))}}function E(n,r){if(1&n&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.pracownikObj.socialMedia.instagram)}}function S(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"input",17),t.NdJ("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.socialMedia.twitter=o)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.pracownikObj.socialMedia.twitter)("ngModelOptions",t.DdM(2,c))}}function R(n,r){if(1&n&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.pracownikObj.socialMedia.twitter)}}function X(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"input",17),t.NdJ("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.socialMedia.whatsapp=o)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.pracownikObj.socialMedia.whatsapp)("ngModelOptions",t.DdM(2,c))}}function V(n,r){if(1&n&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.pracownikObj.socialMedia.whatsapp)}}function $(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"select",18),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.iloscKlikniec=0)})("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.adres.wojewodztwo=o)}),t.TgZ(2,"option",19),t._uU(3,"Dolno\u015bl\u0105skie"),t.qZA(),t.TgZ(4,"option",20),t._uU(5,"Kujawsko-pomorskie"),t.qZA(),t.TgZ(6,"option",21),t._uU(7,"Lubelskie"),t.qZA(),t.TgZ(8,"option",22),t._uU(9,"Lubuskie"),t.qZA(),t.TgZ(10,"option",23),t._uU(11,"\u0141\xf3dzkie"),t.qZA(),t.TgZ(12,"option",24),t._uU(13,"Ma\u0142opolskie"),t.qZA(),t.TgZ(14,"option",25),t._uU(15,"Mazowieckie"),t.qZA(),t.TgZ(16,"option",26),t._uU(17,"Opolskie"),t.qZA(),t.TgZ(18,"option",27),t._uU(19,"Podkarpackie"),t.qZA(),t.TgZ(20,"option",28),t._uU(21,"Podlaskie"),t.qZA(),t.TgZ(22,"option",29),t._uU(23,"Pomorskie"),t.qZA(),t.TgZ(24,"option",30),t._uU(25,"\u015al\u0105skie"),t.qZA(),t.TgZ(26,"option",31),t._uU(27,"\u015awi\u0119tokrzyskie"),t.qZA(),t.TgZ(28,"option",32),t._uU(29,"Warmi\u0144sko-mazurskie"),t.qZA(),t.TgZ(30,"option",33),t._uU(31,"Wielkopolskie"),t.qZA(),t.TgZ(32,"option",34),t._uU(33,"Zachodniopomorskie"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.pracownikObj.adres.wojewodztwo)("ngModelOptions",t.DdM(2,c))}}function tt(n,r){if(1&n&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.pracownikObj.adres.wojewodztwo)}}function et(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"input",35),t.NdJ("keydown",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.iloscKlikniec=0)})("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.adres.miasto=o)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.pracownikObj.adres.miasto)("ngModelOptions",t.DdM(2,c))}}function nt(n,r){if(1&n&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.pracownikObj.adres.miasto)}}function ot(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"input",36),t.NdJ("keydown",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.iloscKlikniec=0)})("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.adres.ulica=o)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.pracownikObj.adres.ulica)("ngModelOptions",t.DdM(2,c))}}function it(n,r){if(1&n&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.pracownikObj.adres.ulica)}}function at(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"input",37),t.NdJ("keydown",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.iloscKlikniec=0)})("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.adres.nrDomu=o)}),t.qZA(),t.TgZ(2,"span",38),t._uU(3,"\xa0/\xa0"),t.qZA(),t.TgZ(4,"input",37),t.NdJ("keydown",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.iloscKlikniec=0)})("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.adres.nrLokalu=o)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.pracownikObj.adres.nrDomu)("ngModelOptions",t.DdM(4,c)),t.xp6(3),t.Q6J("ngModel",e.pracownikObj.adres.nrLokalu)("ngModelOptions",t.DdM(5,c))}}function rt(n,r){1&n&&(t.TgZ(0,"span",38),t._uU(1,"\xa0/\xa0"),t.qZA())}function lt(n,r){if(1&n&&(t.TgZ(0,"td",12),t._uU(1),t.YNc(2,rt,2,0,"span",39),t._uU(3),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.pracownikObj.adres.nrDomu," "),t.xp6(1),t.Q6J("ngIf",e.pracownikObj.adres.nrLokalu.toString().length>0),t.xp6(1),t.hij(" ",e.pracownikObj.adres.nrLokalu," ")}}function ct(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"input",40),t.NdJ("keydown",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.iloscKlikniec=0)})("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.adres.kodPocztowy1=o)}),t.qZA(),t.TgZ(2,"span",38),t._uU(3,"\xa0-\xa0"),t.qZA(),t.TgZ(4,"input",41),t.NdJ("keydown",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.iloscKlikniec=0)})("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.adres.kodPocztowy2=o)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.pracownikObj.adres.kodPocztowy1)("ngModelOptions",t.DdM(4,c)),t.xp6(3),t.Q6J("ngModel",e.pracownikObj.adres.kodPocztowy2)("ngModelOptions",t.DdM(5,c))}}function st(n,r){if(1&n&&(t.TgZ(0,"td",12),t._uU(1),t.TgZ(2,"span",38),t._uU(3,"\xa0-\xa0"),t.qZA(),t._uU(4),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.pracownikObj.adres.kodPocztowy1," "),t.xp6(3),t.hij(" ",e.pracownikObj.adres.kodPocztowy2," ")}}let pt=(()=>{class n{constructor(){this.iloscKlikniecChange=new t.vpe,this.pracownikObjChange=new t.vpe}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-worker-modify-table1"]],inputs:{tryb:"tryb",iloscKlikniec:"iloscKlikniec",pracownikObj:"pracownikObj"},outputs:{iloscKlikniecChange:"iloscKlikniecChange",pracownikObjChange:"pracownikObjChange"},standalone:!0,features:[t.jDz],decls:87,vars:28,consts:[["colspan","2",1,"naglowki1form"],["for","imie",1,"naglowki2form"],[4,"ngIf"],["class","wyswietlanieDanych",4,"ngIf"],["for","nazwisko",1,"naglowki2form"],["for","adresEmail",1,"naglowki2form"],["for","nrTelefonu",1,"naglowki2form"],["for","wojewodztwo",1,"naglowki2form"],["for","miasto",1,"naglowki2form"],["for","ulica",1,"naglowki2form"],[1,"naglowki2form"],["id","imie","type","text",1,"logInputZaklad",3,"ngModel","ngModelOptions","keydown","ngModelChange"],[1,"wyswietlanieDanych"],["id","nazwisko","type","text",1,"logInputZaklad",3,"ngModel","ngModelOptions","keydown","ngModelChange"],["id","adresEmail","type","text",1,"logInputZaklad",3,"ngModel","ngModelOptions","keydown","ngModelChange"],[1,"logInputZaklad",2,"width","80px","height","32px","background","#e3e2e2","position","relative","bottom","-1px",3,"ngModel","ngModelOptions","click","ngModelChange"],["id","nrTelefonu","maxlength","9","type","text",1,"logInputZaklad",2,"width","170px","margin","2px",3,"ngModel","ngModelOptions","ngModelChange"],["type","text",1,"logInputZaklad",3,"ngModel","ngModelOptions","ngModelChange"],["id","wojewodztwo",1,"logInputZaklad",3,"ngModel","ngModelOptions","click","ngModelChange"],["value","dolnoslaskie"],["value","kujawsko-pomorskie"],["value","lubelskie"],["value","lubuskie"],["value","lodzkie"],["value","malopolskie"],["value","mazowieckie"],["value","opolskie"],["value","podkarpackie"],["value","podlaskie"],["value","pomorskie"],["value","slaskie"],["value","swietokrzyskie"],["value","warminsko-mazurskie"],["value","wielkopolskie"],["value","zachodniopomorskie"],["id","miasto","type","text",1,"logInputZaklad",3,"ngModel","ngModelOptions","keydown","ngModelChange"],["id","ulica","type","text",1,"logInputZaklad",3,"ngModel","ngModelOptions","keydown","ngModelChange"],["type","text",1,"logInputZaklad",2,"width","100px",3,"ngModel","ngModelOptions","keydown","ngModelChange"],[2,"font-size","25px"],["style","font-size: 25px",4,"ngIf"],["maxlength","2","type","text",1,"logInputZaklad",2,"width","80px",3,"ngModel","ngModelOptions","keydown","ngModelChange"],["maxlength","3","type","text",1,"logInputZaklad",2,"width","100px",3,"ngModel","ngModelOptions","keydown","ngModelChange"]],template:function(i,o){1&i&&(t.TgZ(0,"table")(1,"tr")(2,"th",0),t._uU(3,"Dane pracownika"),t.qZA()(),t.TgZ(4,"tr")(5,"th")(6,"label",1),t._uU(7,"Imi\u0119:*"),t.qZA()(),t.YNc(8,q,2,3,"td",2)(9,J,2,1,"td",3),t.qZA(),t.TgZ(10,"tr")(11,"th")(12,"label",4),t._uU(13,"Nazwisko:*"),t.qZA()(),t.YNc(14,N,2,3,"td",2)(15,I,2,1,"td",3),t.qZA(),t.TgZ(16,"tr")(17,"th")(18,"label",5),t._uU(19,"Adres e-mail:*"),t.qZA()(),t.YNc(20,D,2,3,"td",2)(21,K,2,1,"td",3),t.qZA(),t.TgZ(22,"tr")(23,"th")(24,"label",6),t._uU(25,"Numer telefonu:"),t.qZA()(),t.YNc(26,Q,7,6,"td",2)(27,F,2,2,"td",3),t.qZA(),t.TgZ(28,"tr")(29,"th"),t._uU(30,"Facebook"),t.qZA(),t.YNc(31,G,2,3,"td",2)(32,H,2,1,"td",3),t.qZA(),t.TgZ(33,"tr")(34,"th"),t._uU(35,"Telegram"),t.qZA(),t.YNc(36,Y,2,3,"td",2)(37,L,2,1,"td",3),t.qZA(),t.TgZ(38,"tr")(39,"th"),t._uU(40,"Instagram"),t.qZA(),t.YNc(41,B,2,3,"td",2)(42,E,2,1,"td",3),t.qZA(),t.TgZ(43,"tr")(44,"th"),t._uU(45,"Twitter"),t.qZA(),t.YNc(46,S,2,3,"td",2)(47,R,2,1,"td",3),t.qZA(),t.TgZ(48,"tr")(49,"th"),t._uU(50,"Whatsapp"),t.qZA(),t.YNc(51,X,2,3,"td",2)(52,V,2,1,"td",3),t.qZA()(),t.TgZ(53,"table")(54,"tr")(55,"th",0),t._uU(56,"Adres zamieszkania"),t.qZA()(),t.TgZ(57,"tr")(58,"th")(59,"label",7),t._uU(60," Wojew\xf3dztwo: "),t.qZA()(),t.YNc(61,$,34,3,"td",2)(62,tt,2,1,"td",3),t.qZA(),t.TgZ(63,"tr")(64,"th")(65,"label",8),t._uU(66,"Miasto:"),t.qZA()(),t.YNc(67,et,2,3,"td",2)(68,nt,2,1,"td",3),t.qZA(),t.TgZ(69,"tr")(70,"th")(71,"label",9),t._uU(72,"Ulica:"),t.qZA()(),t.YNc(73,ot,2,3,"td",2)(74,it,2,1,"td",3),t.qZA(),t.TgZ(75,"tr")(76,"th")(77,"label",10),t._uU(78,"Numer domu/lokalu:"),t.qZA()(),t.YNc(79,at,5,6,"td",2)(80,lt,4,3,"td",3),t.qZA(),t.TgZ(81,"tr")(82,"th")(83,"label",10),t._uU(84,"Kod pocztowy:"),t.qZA()(),t.YNc(85,ct,5,6,"td",2)(86,st,5,2,"td",3),t.qZA()()),2&i&&(t.xp6(8),t.Q6J("ngIf","wyswietlenie"!=o.tryb),t.xp6(1),t.Q6J("ngIf","wyswietlenie"==o.tryb),t.xp6(5),t.Q6J("ngIf","wyswietlenie"!=o.tryb),t.xp6(1),t.Q6J("ngIf","wyswietlenie"==o.tryb),t.xp6(5),t.Q6J("ngIf","wyswietlenie"!=o.tryb),t.xp6(1),t.Q6J("ngIf","wyswietlenie"==o.tryb),t.xp6(5),t.Q6J("ngIf","wyswietlenie"!=o.tryb),t.xp6(1),t.Q6J("ngIf","wyswietlenie"==o.tryb),t.xp6(4),t.Q6J("ngIf","wyswietlenie"!=o.tryb),t.xp6(1),t.Q6J("ngIf","wyswietlenie"==o.tryb),t.xp6(4),t.Q6J("ngIf","wyswietlenie"!=o.tryb),t.xp6(1),t.Q6J("ngIf","wyswietlenie"==o.tryb),t.xp6(4),t.Q6J("ngIf","wyswietlenie"!=o.tryb),t.xp6(1),t.Q6J("ngIf","wyswietlenie"==o.tryb),t.xp6(4),t.Q6J("ngIf","wyswietlenie"!=o.tryb),t.xp6(1),t.Q6J("ngIf","wyswietlenie"==o.tryb),t.xp6(4),t.Q6J("ngIf","wyswietlenie"!=o.tryb),t.xp6(1),t.Q6J("ngIf","wyswietlenie"==o.tryb),t.xp6(9),t.Q6J("ngIf","wyswietlenie"!=o.tryb),t.xp6(1),t.Q6J("ngIf","wyswietlenie"==o.tryb),t.xp6(5),t.Q6J("ngIf","wyswietlenie"!=o.tryb),t.xp6(1),t.Q6J("ngIf","wyswietlenie"==o.tryb),t.xp6(5),t.Q6J("ngIf","wyswietlenie"!=o.tryb),t.xp6(1),t.Q6J("ngIf","wyswietlenie"==o.tryb),t.xp6(5),t.Q6J("ngIf","wyswietlenie"!=o.tryb),t.xp6(1),t.Q6J("ngIf","wyswietlenie"==o.tryb),t.xp6(5),t.Q6J("ngIf","wyswietlenie"!=o.tryb),t.xp6(1),t.Q6J("ngIf","wyswietlenie"==o.tryb))},dependencies:[s.u5,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.nD,s.On,d.O5],styles:["[_nghost-%COMP%]{display:flex;column-gap:1.5vw}"]})}return n})();var M=l(321),dt=l(1531),ut=l(6280),x=l(4522),z=l(9024),_t=l(6593),O=l(6850),kt=l(3e3),j=l(3854),wt=l(9867);function gt(n,r){1&n&&(t.TgZ(0,"h4",13),t._uU(1,"Dodawanie pracownika"),t.qZA())}function ft(n,r){1&n&&(t.TgZ(0,"h4",13),t._uU(1,"Modyfikacja danych"),t.qZA())}function mt(n,r){1&n&&(t.TgZ(0,"h4",13),t._uU(1,"Informacje o pracowniku"),t.qZA())}function yt(n,r){if(1&n&&(t.TgZ(0,"td"),t._UZ(1,"span",14),t.ALo(2,"safeHtml"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("innerHTML",t.lcZ(2,1,e.pracownikObj.description),t.oJD)}}function bt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"app-ngx-editor",15),t.NdJ("valueChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.description=o)}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("value",e.pracownikObj.description)("maxLength",5e3)}}function ht(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"app-select-image",16),t.NdJ("imageIdChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.pracownikObj.profilImageId=o)}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("imageId",e.pracownikObj.profilImageId)}}function Tt(n,r){1&n&&(t.TgZ(0,"span",20),t._uU(1,"Nie uzupe\u0142nione wszystkie pola! Czy na pewno chcesz zapisa\u0107 dane? "),t.qZA())}function Zt(n,r){1&n&&(t.TgZ(0,"span",20),t._uU(1,"Czy na pewno chcesz zmodyfikowa\u0107 dane? "),t.qZA())}function Ct(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.zapisz())}),t._uU(1," Zapisz "),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("disabled",e.blokowaniePrzycisku)}}function Mt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.zmodyfikuj())}),t._uU(1," Zmodyfikuj "),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("disabled",e.blokowaniePrzycisku)}}function xt(n,r){if(1&n&&(t.TgZ(0,"div",17),t.YNc(1,Tt,2,0,"span",18)(2,Zt,2,0,"span",18)(3,Ct,2,1,"button",19)(4,Mt,2,1,"button",19),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",!e.pracownikObj.czyWszystkoWpisane&&1==e.iloscKlikniec),t.xp6(1),t.Q6J("ngIf",1==e.iloscKlikniec&&"modyfikacja"==e.tryb),t.xp6(1),t.Q6J("ngIf","dodawanie"==e.tryb),t.xp6(1),t.Q6J("ngIf","modyfikacja"==e.tryb)}}let zt=(()=>{class n{constructor(e,i,o,a,p,f){this.listonosz=e,this.sanitizer=i,this.komunikaty=o,this.error_=a,this.Router=p,this.router_=f,this.tryb="",this.idUzytkownika=0,this.iloscKlikniec=0,this.pracownikObj=new b.j,this.pracownikDodany=!0,this.pracownikZmodyfikowany=!0,this.blokowaniePrzycisku=!1,this.formData=void 0,this.usunZdjecieProfiloweDTo=!1,this.safeImageUrl=null,this.environment=Z.N}ngOnInit(){this.Router.params.subscribe(e=>{this.idUzytkownika=e.id,this.tryb=e.mode,0!=this.idUzytkownika&&this.pobierzPracownika()})}pobierzPracownika(){this.listonosz.pobierz(u.b.pracownik+this.idUzytkownika).then(e=>{Object.assign(this.pracownikObj,e)}).catch(e=>{this.komunikaty.wyswietlenieBladNumer(h.c.niePobierajaSieDaneOPracowniku)})}zapisz(){var e=this;if(0!=this.pracownikObj.firstname.length&&0!=this.pracownikObj.lastname.length&&0!=this.pracownikObj.email.length){if(this.iloscKlikniec++,this.pracownikObj.czyWszystkoWpisaneFunkcja(),this.iloscKlikniec>=2){this.blokowaniePrzycisku=!0;const i=new T(this.pracownikObj);this.listonosz.wyslij(u.b.dodaniePracownikaDoTablicy,i).then(function(){var o=(0,y.Z)(function*(a){e.pracownikDodany=!0,e.komunikaty.dodaniePracownikaUdane(),yield e.ZdjecieProfilowe?.wyslijZdjecie(e.idUzytkownika),e.back()});return function(a){return o.apply(this,arguments)}}()).catch(o=>{this.pracownikDodany=!1,this.error_.analyze(o,x.p.addEmployeeFail)}).finally(()=>{this.blokowaniePrzycisku=!1})}}else this.komunikaty.komunikatInfo("Uzupe\u0142nij wymagane dane oznaczone *")}zmodyfikuj(){var e=this;if(this.iloscKlikniec++,this.iloscKlikniec>=2){const i=new T(this.pracownikObj);i.usunZdjecieProfilowe=this.usunZdjecieProfiloweDTo,this.blokowaniePrzycisku=!0,this.listonosz.aktualizuj(u.b.pracownik+this.idUzytkownika,i).then(function(){var o=(0,y.Z)(function*(a){e.pracownikZmodyfikowany=!0,e.komunikaty.modyfikowaniePracownikaUdane(),yield e.ZdjecieProfilowe?.wyslijZdjecie(e.idUzytkownika),Object.assign(e.pracownikObj,a),e.back()});return function(a){return o.apply(this,arguments)}}()).catch(o=>{this.pracownikZmodyfikowany=!1,this.error_.analyze(o,x.p.employeeModifyFail)}).finally(()=>{this.blokowaniePrzycisku=!1})}}back(){this.router_.navigate(["/panelPracownika/zarzadzaniePracownikami"])}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(z.l),t.Y36(_t.H7),t.Y36(O.W),t.Y36(kt.S),t.Y36(k.gz),t.Y36(k.F0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-worker-modify"]],viewQuery:function(i,o){if(1&i&&t.Gf(A.j,5),2&i){let a;t.iGM(a=t.CRH())&&(o.ZdjecieProfilowe=a.first)}},standalone:!0,features:[t.jDz],decls:29,vars:16,consts:[[1,"modal-header"],["class","modal-title",4,"ngIf"],[1,"leftRightContainer"],[1,"leftContainer"],[1,"tableDiv"],[3,"iloscKlikniec","pracownikObj","tryb","iloscKlikniecChange","pracownikObjChange"],[3,"WorkDay","disabled","WorkDayChange"],[4,"ngIf"],[3,"value","maxLength","valueChange",4,"ngIf"],[1,"rightContainer"],[3,"src"],[3,"imageId"],["class","modal-footer",4,"ngIf"],[1,"modal-title"],[3,"innerHTML"],[3,"value","maxLength","valueChange"],[3,"imageId","imageIdChange"],[1,"modal-footer"],["class","czerwoneKomunikatyZaklad","style","padding-right: 180px",4,"ngIf"],["class","zmodyfikujZapiszButton","type","submit",3,"disabled","click",4,"ngIf"],[1,"czerwoneKomunikatyZaklad",2,"padding-right","180px"],["type","submit",1,"zmodyfikujZapiszButton",3,"disabled","click"]],template:function(i,o){1&i&&(t._UZ(0,"app-back-arrow"),t.TgZ(1,"form")(2,"div",0),t.YNc(3,gt,2,0,"h4",1)(4,ft,2,0,"h4",1)(5,mt,2,0,"h4",1),t.qZA(),t.TgZ(6,"div",2)(7,"div",3)(8,"div",4)(9,"app-worker-modify-table1",5),t.NdJ("iloscKlikniecChange",function(p){return o.iloscKlikniec=p})("pracownikObjChange",function(p){return o.pracownikObj=p}),t.qZA()(),t.TgZ(10,"table")(11,"tr")(12,"th"),t._uU(13,"Dni pracy:"),t.qZA(),t.TgZ(14,"td")(15,"app-select-work-day",6),t.NdJ("WorkDayChange",function(p){return o.pracownikObj.workDay=p}),t.qZA()()(),t.TgZ(16,"tr")(17,"th"),t._uU(18,"Opis pracownika:"),t.qZA(),t.YNc(19,yt,3,3,"td",7),t.TgZ(20,"td"),t.YNc(21,bt,1,2,"app-ngx-editor",8),t.qZA()()()(),t.TgZ(22,"div",9)(23,"h5"),t._uU(24,"Zdj\u0119cie profilowe:"),t.qZA(),t._UZ(25,"img",10),t.ALo(26,"zdjecie"),t.YNc(27,ht,1,1,"app-select-image",11),t.qZA()(),t.YNc(28,xt,5,4,"div",12),t.qZA()),2&i&&(t.xp6(3),t.Q6J("ngIf","dodawanie"==o.tryb),t.xp6(1),t.Q6J("ngIf","modyfikacja"==o.tryb),t.xp6(1),t.Q6J("ngIf","wyswietlenie"==o.tryb),t.xp6(4),t.Q6J("iloscKlikniec",o.iloscKlikniec)("pracownikObj",o.pracownikObj)("tryb",o.tryb),t.xp6(6),t.Q6J("WorkDay",o.pracownikObj.workDay)("disabled","wyswietlenie"==o.tryb),t.xp6(4),t.Q6J("ngIf","wyswietlenie"==o.tryb),t.xp6(2),t.Q6J("ngIf","wyswietlenie"!=o.tryb),t.xp6(4),t.Q6J("src",t.xi3(26,13,o.environment.apiImage+o.pracownikObj.profilImageId,!0),t.LSH),t.xp6(2),t.um2(27,"wyswietlenie"!==o.tryb?27:-1),t.xp6(1),t.Q6J("ngIf","wyswietlenie"!=o.tryb))},dependencies:[s.u5,s._Y,s.JL,s.F,d.O5,U.S,v,W.t,pt,M.K,j.Z,wt.y,dt.$,ut.z],styles:["[_nghost-%COMP%]{position:relative;display:block}.leftRightContainer[_ngcontent-%COMP%]{display:flex;padding-left:1vw;padding-right:1vw}.leftRightContainer[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]{flex-grow:10}.leftRightContainer[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]     table tr th, .leftRightContainer[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]     table tr th label, .leftRightContainer[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .leftRightContainer[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding-right:10px}.leftRightContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]{flex-grow:1}.leftRightContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:500px;max-width:240px}.modal-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}@media (max-width: 1202px){.modal-body[_ngcontent-%COMP%]{flex-wrap:wrap}}.modal-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{max-width:500px;height:min-content;border-collapse:separate;border-spacing:4px}.buttonZapiszZmodyfikuj[_ngcontent-%COMP%]{width:70px;height:70px;font-size:13px}.naglowki1form[_ngcontent-%COMP%], .naglowki2form[_ngcontent-%COMP%]{font-size:16px}.wyswietlanieDanych[_ngcontent-%COMP%]{padding-left:20px;padding-right:30px}.pracownikZdjecie[_ngcontent-%COMP%]{max-height:250px;max-width:190px;height:min-content;width:max-content}.tableDiv[_ngcontent-%COMP%]{display:flex}.modal-footer[_ngcontent-%COMP%]{margin-top:20px}"]})}return n})();var Ot=l(105),jt=l(3866),_=l(8401);function At(n,r){1&n&&(t._uU(0,"U\u017cytkownik nie potwierdzi\u0142 konta"),t._UZ(1,"br"),t._uU(2," Nie b\u0119dzie wy\u015bwietlany na stronie reklamowej "))}function Ut(n,r){if(1&n&&(t.ynx(0),t.YNc(1,At,3,0,"ng-template",null,1,t.W1O),t.TgZ(3,"span",2),t._uU(4,"!"),t.qZA(),t.BQk()),2&n){const e=t.MAs(2);t.xp6(3),t.Q6J("ngbPopover",e)}}let Pt=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-workers-table-user-confirm"]],inputs:{worker:"worker"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[4,"ngIf"],["alertContent",""],["popoverTitle","Uwaga","triggers","mouseenter:mouseleave",1,"alert",3,"ngbPopover"]],template:function(i,o){1&i&&t.YNc(0,Ut,5,1,"ng-container",0),2&i&&t.Q6J("ngIf",!o.worker.potwierdzony)},dependencies:[d.ez,d.O5,_.o8],styles:[".alert[_ngcontent-%COMP%]{color:red;font-weight:700;cursor:help}"]})}return n})(),vt=(()=>{class n{constructor(e){this.activeModal=e,this.czyUsunac=!1}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(_.Kz))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-czy-naprawde-usunac"]],standalone:!0,features:[t.jDz],decls:15,vars:0,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"modal-footer"],[3,"click"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"UWAGA!"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return o.activeModal.close("Nie")}),t.qZA()(),t.TgZ(4,"div",3)(5,"span"),t._uU(6,"Czy na pewno chcesz usun\u0105\u0107 dane o pracowniku? "),t.qZA(),t._UZ(7,"br"),t.TgZ(8,"span"),t._uU(9,"Usuni\u0119cie danych, spowoduje utrat\u0119 historii wizyt, statystyk itd.... "),t.qZA()(),t.TgZ(10,"div",4)(11,"button",5),t.NdJ("click",function(){return o.activeModal.close("Nie")}),t._uU(12," Nie "),t.qZA(),t.TgZ(13,"button",5),t.NdJ("click",function(){return o.activeModal.close("Tak")}),t._uU(14," Tak "),t.qZA()())}})}return n})();var Wt=l(5412),qt=l(9160),Jt=l(7191);let w=(()=>{class n{constructor(e,i,o,a,p,f){this.http_=e,this.UniwersalnyKomunikat_=i,this.modalService=o,this.komunikaty=a,this.podreczneDane=p,this.router=f,this.ListaPracownikow=[],this.limitPracownikow=0,this.filter="dostepni"}pobierzListePracownikow(){this.http_.pobierz(u.b.pobierzPracownikow).then(e=>{this.ListaPracownikow=[],e.dane.forEach(i=>{const o=new b.j;Object.assign(o,i),this.ListaPracownikow.push(o)}),this.limitPracownikow=e.limitPracownikow}).catch(e=>{this.komunikaty.wyswietlenieBladNumer(h.c.NiePobieraSieListaPracownikowPanelPracownicy)})}filtrowaniePracownikow(){return this.ListaPracownikow.filter(e=>{switch(this.filter){case"zarchiwizuj":return 1==e.archived;case"dostepni":return 0==e.archived&&0==e.urlop;case"urlop":return 0==e.archived&&1==e.urlop;default:return!0}})}activeWorker(){return this.ListaPracownikow.filter(e=>0==e.archived).length}dodajPracownika(){this.activeWorker()!=this.limitPracownikow?this.router.navigate(["panelPracownika/zarzadzaniePracownikami/0/dodawanie"]):this.komunikaty.komunikatInfo(Wt.k.maksymalnaIloscPracownikow)}zarchiwizujUzytkownika(e){const i=this.UniwersalnyKomunikat_.open("Czy na pewno chcesz zarchiwizowa\u0107?","Operacja ta powoduje zwolnienie miejsca w ograniczonej ilo\u015bci pracownik\xf3w");i.addButton("Nie",{defaultNo:!0}),i.addButton("Tak",{defaultYes:!0}).subscribe(o=>{this.http_.aktualizuj(u.b.zwolnionyPrzywroconyPracownikMojZaklad+"/"+e,{archived:!0}).then(a=>{this.komunikaty.pracownikZarchiwizowany(),this.pobierzListePracownikow()}).catch(a=>{this.komunikaty.pracownikNieZarchiwizowany()})})}urlop(e){this.http_.aktualizuj(u.b.zwolnionyPrzywroconyPracownikMojZaklad+"/"+e,{urlop:!0,archived:!1}).then(i=>{this.komunikaty.pracownikDodanyDoUrlopu(),this.pobierzListePracownikow()}).catch(i=>{this.komunikaty.pracownikNieDodanyDoUrlopu()})}przywrocUzytkownika(e){this.http_.aktualizuj(u.b.zwolnionyPrzywroconyPracownikMojZaklad+"/"+e,{archived:!1,urlop:!1}).then(i=>{this.komunikaty.pracownikPrzywrocony(),this.pobierzListePracownikow()}).catch(i=>{this.komunikaty.pracownikNiePrzywrocony()})}przywrocUzytkownikaZUrlopu(e){this.http_.aktualizuj(u.b.zwolnionyPrzywroconyPracownikMojZaklad+"/"+e,{urlop:!1}).then(i=>{this.komunikaty.pracownikPrzywrocony(),this.pobierzListePracownikow()}).catch(i=>{this.komunikaty.pracownikNiePrzywrocony()})}zmodyfikujUzytkownika(e){this.router.navigate([`panelPracownika/zarzadzaniePracownikami/${e}/modyfikacja`])}wyswietlUzytkownika(e){this.router.navigate([`panelPracownika/zarzadzaniePracownikami/${e}/wyswietlenie`])}usunPracownika(e){const o=this.modalService.open(vt,{size:"lg"}).closed.subscribe(a=>{"Nie"!=a&&(this.http_.usun(u.b.pracownik+e+"/true").then(p=>{this.komunikaty.pracownikUsuniety()}).catch(p=>{this.komunikaty.pracownikNieUsuniety()}).finally(()=>{this.pobierzListePracownikow()}),o.unsubscribe())})}ngOnDestroy(){this.sub1?.unsubscribe(),this.sub2?.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||n)(t.LFG(z.l),t.LFG(qt.S),t.LFG(_.FF),t.LFG(O.W),t.LFG(Jt.v),t.LFG(k.F0))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Nt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",3),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.workersTable_.urlop(o.worker.id))}),t._uU(1," Wy\u015blij na urlop "),t.qZA()}}function It(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",3),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.workersTable_.zarchiwizujUzytkownika(o.worker.id))}),t._uU(1," Zarchiwizuj "),t.qZA()}}function Dt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",3),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.workersTable_.przywrocUzytkownika(o.worker.id))}),t._uU(1,"Przywr\xf3\u0107"),t.qZA()}}function Kt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",3),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.workersTable_.przywrocUzytkownikaZUrlopu(o.worker.id))}),t._uU(1,"Przywr\xf3\u0107 do pracy"),t.qZA()}}function Qt(n,r){if(1&n&&(t.ynx(0),t.YNc(1,Nt,2,0,"button",7)(2,It,2,0,"button",7)(3,Dt,2,0,"ng-template",null,8,t.W1O)(5,Kt,2,0,"ng-template",null,9,t.W1O),t.BQk()),2&n){const e=t.MAs(4),i=t.MAs(6),o=t.oxw();t.xp6(1),t.Q6J("ngIf",!o.worker.urlop)("ngIfElse",i),t.xp6(1),t.Q6J("ngIf",0==o.worker.archived)("ngIfElse",e)}}function Ft(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",3),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.workersTable_.urlop(o.worker.id))}),t._uU(1,"Wy\u015blij na urlop"),t.qZA(),t.TgZ(2,"button",3),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.workersTable_.przywrocUzytkownika(o.worker.id))}),t._uU(3,"Ustaw jak dost\u0119pny"),t.qZA()}}let Gt=(()=>{class n{constructor(e){this.workersTable_=e}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(w))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-worker-table-buttons"]],inputs:{worker:"worker"},standalone:!0,features:[t.jDz],decls:14,vars:2,consts:[["container","body","ngbDropdown","",1,""],["ngbDropdownToggle","","type","button",1,"btn","btn-outline-primary","btn-sm"],["ngbDropdownMenu",""],["ngbDropdownItem","",3,"click"],[4,"ngIf","ngIfElse"],["przyciskiDoArchiwizuj",""],[1,"dropdown-divider"],["ngbDropdownItem","",3,"click",4,"ngIf","ngIfElse"],["przywrocArchiwum",""],["przywrocUrlop",""]],template:function(i,o){if(1&i&&(t.TgZ(0,"div",0)(1,"button",1),t._uU(2,"Wybierz:"),t.qZA(),t.TgZ(3,"div",2)(4,"button",3),t.NdJ("click",function(){return o.workersTable_.wyswietlUzytkownika(o.worker.id)}),t._uU(5,"Wy\u015bwietl"),t.qZA(),t.TgZ(6,"button",3),t.NdJ("click",function(){return o.workersTable_.zmodyfikujUzytkownika(o.worker.id)}),t._uU(7,"Zmodyfikuj"),t.qZA(),t.YNc(8,Qt,7,4,"ng-container",4)(9,Ft,4,0,"ng-template",null,5,t.W1O),t._UZ(11,"div",6),t.TgZ(12,"button",3),t.NdJ("click",function(){return o.workersTable_.usunPracownika(o.worker.id)}),t._uU(13,"Usu\u0144"),t.qZA()()()),2&i){const a=t.MAs(10);t.xp6(8),t.Q6J("ngIf","zarchiwizuj"!=o.workersTable_.filter)("ngIfElse",a)}},dependencies:[d.ez,d.O5,_.TH,_.Vi,_.iD,_.jt],encapsulation:2})}return n})();function Ht(n,r){1&n&&(t.TgZ(0,"th"),t._uU(1,"Nr"),t.qZA(),t.TgZ(2,"th"),t._uU(3,"Imi\u0119"),t.qZA(),t.TgZ(4,"th"),t._uU(5,"Nazwisko"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Adres e-mail"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Numer telefonu"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Zarz\u0105dzanie"),t.qZA(),t.TgZ(12,"th",3),t._uU(13,"Zdj\u0119cie"),t.qZA())}function Yt(n,r){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t._UZ(2,"app-workers-table-user-confirm",4),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td",5),t._UZ(12,"app-worker-table-buttons",4),t.qZA(),t.TgZ(13,"td",6),t._UZ(14,"img",7),t.ALo(15,"zdjecie"),t.qZA()),2&n){const e=r.index,i=r.$implicit,o=t.oxw();t.xp6(1),t.hij(" ",e," "),t.xp6(1),t.Q6J("worker",i),t.xp6(2),t.Oqu(i.imie),t.xp6(2),t.Oqu(i.nazwisko),t.xp6(2),t.Oqu(i.adresEmail),t.xp6(2),t.AsE("",i.prefiksTelefonu,"",i.numerTelefonu,""),t.xp6(2),t.Q6J("worker",i),t.xp6(2),t.Q6J("src",t.xi3(15,9,o.environment.apiImage+i.zdjecieProfiloweId+"?jakosc=30",!1),t.LSH)}}let Lt=(()=>{class n{constructor(e,i){this.modalService=e,this.workersTable_=i,this.environment=Z.N}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(_.FF),t.Y36(w))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-workers-table"]],standalone:!0,features:[t.jDz],decls:3,vars:6,consts:[[3,"async","collectionSize","data","pageSize","search","title"],["TemplateId","thead"],["TemplateId","tbody"],[2,"width","80px"],[3,"worker"],[1,"tdWithNgbDropdown","smallButtonCenter"],[2,"text-align","center"],[2,"max-height","28px","max-width","70px",3,"src"]],template:function(i,o){1&i&&(t.TgZ(0,"app-table",0),t.YNc(1,Ht,14,0,"ng-template",1)(2,Yt,16,12,"ng-template",2),t.qZA()),2&i&&t.Q6J("async",!1)("collectionSize",o.workersTable_.filtrowaniePracownikow().length)("data",o.workersTable_.filtrowaniePracownikow())("pageSize",10)("search",!1)("title","Pracownicy zak\u0142adu:")},dependencies:[d.ez,M.K,j.Z,Ot.a,jt.y,Pt,Gt]})}return n})();const g=n=>({switchButtonAktywny:n});let Bt=(()=>{class n{constructor(e){this.workersTable=e}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(w))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-workers-table-filter"]],standalone:!0,features:[t.jDz],decls:8,vars:9,consts:[[1,"filtry"],[1,"switchButtonDiv"],[1,"switchButton",3,"ngClass","click"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return o.workersTable.filter="dostepni"}),t._uU(3," Dost\u0119pni "),t.qZA(),t.TgZ(4,"button",2),t.NdJ("click",function(){return o.workersTable.filter="urlop"}),t._uU(5," Urlop "),t.qZA(),t.TgZ(6,"button",2),t.NdJ("click",function(){return o.workersTable.filter="zarchiwizuj"}),t._uU(7," Archiwum "),t.qZA()()()),2&i&&(t.xp6(2),t.Q6J("ngClass",t.VKq(3,g,"dostepni"==o.workersTable.filter)),t.xp6(2),t.Q6J("ngClass",t.VKq(5,g,"urlop"==o.workersTable.filter)),t.xp6(2),t.Q6J("ngClass",t.VKq(7,g,"zarchiwizuj"==o.workersTable.filter)))},dependencies:[d.ez,d.mk],styles:[".filtry[_ngcontent-%COMP%]{text-align:center;width:100%;float:left;padding-top:10px;padding-bottom:10px}"]})}return n})();const Et=[{path:"",component:(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-pracownicy-pracownika"]],standalone:!0,features:[t.jDz],decls:5,vars:0,consts:[[1,"pracownicy"],[1,"naglowekZolty"],[1,"naglowek1Wzoltym"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),t._uU(3,"Panel zarz\u0105dzania pracownikami"),t.qZA()()(),t._UZ(4,"router-outlet"))},dependencies:[k.lC]})}return n})(),children:[{component:(()=>{class n{constructor(e){this.workersTable_=e}ngOnInit(){this.workersTable_.pobierzListePracownikow()}activeWorker(){return this.workersTable_.ListaPracownikow.filter(e=>0==e.archived).length}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(w))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-worker-table-panel"]],standalone:!0,features:[t.jDz],decls:13,vars:2,consts:[[1,"Divtabelka"],[1,"iloscPracownikow"],[1,"divNaPrzycisk"],[1,"DodajPracownikaButton",3,"click"]],template:function(i,o){1&i&&(t._UZ(0,"app-workers-table-filter"),t.TgZ(1,"div",0)(2,"span",1),t._uU(3,"Pracownicy "),t.TgZ(4,"b"),t._uU(5),t.qZA(),t._uU(6," na "),t.TgZ(7,"b"),t._uU(8),t.qZA()(),t._UZ(9,"app-workers-table"),t.qZA(),t.TgZ(10,"div",2)(11,"button",3),t.NdJ("click",function(){return o.workersTable_.dodajPracownika()}),t._uU(12,"Dodaj pracownika"),t.qZA()()),2&i&&(t.xp6(5),t.Oqu(o.activeWorker()),t.xp6(3),t.Oqu(o.workersTable_.limitPracownikow))},dependencies:[Lt,Bt],styles:[".Divtabelka[_ngcontent-%COMP%]{width:100%;height:min-content;min-height:100px;display:flex;justify-content:center;margin-top:10px;position:relative;flex-direction:column}.Divtabelka[_ngcontent-%COMP%]   .iloscPracownikow[_ngcontent-%COMP%]{padding-left:10px;font-size:19px;color:#0012ff}.Divtabelka[_ngcontent-%COMP%]   .tablica[_ngcontent-%COMP%]{margin-top:0}.divNaPrzycisk[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}.divNaPrzycisk[_ngcontent-%COMP%]   .DodajPracownikaButton[_ngcontent-%COMP%]{position:relative;text-align:center}"]})}return n})(),path:""},{path:":id/:mode",component:zt}]}]}}]);