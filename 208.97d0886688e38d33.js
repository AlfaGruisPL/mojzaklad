(self.webpackChunkPanelZakladu=self.webpackChunkPanelZakladu||[]).push([[208],{7208:(W,_,p)=>{"use strict";p.r(_),p.d(_,{routes:()=>A});var f=p(6814),P=p(3501),t=p(5879);let o=(()=>{var i;class a{transform(n){return null==n?0:Math.round(100*n)/100}}return(i=a).\u0275fac=function(n){return new(n||i)},i.\u0275pipe=t.Yjl({name:"kwota",type:i,pure:!0,standalone:!0}),a})();var d=p(9024);let m=(()=>{var i;class a{constructor(n){this.listonosz=n,this.dane={}}ngOnInit(){console.log(this.tableComponent?.dane),this.listonosz.pobierz(P.b.podsumowanieInformacje).then(n=>{Object.assign(this.dane,n)}).catch(n=>{})}sumaWMiesiacu(){return this.tableComponent?.dane.reduce((n,e)=>n+e.wizytyOstatniMiesiac.suma,0)}sumaWMiesiacuPoprzednim(){return this.tableComponent?.dane.reduce((n,e)=>n+e.wizytyPoprzedniMiesiac.suma,0)}sumaWMiesiacuKwota(){return this.tableComponent?.dane.reduce((n,e)=>n+e.wizytyOstatniMiesiac.kwota,0)}sumaWMiesiacuPoprzednimKwota(){return this.tableComponent?.dane.reduce((n,e)=>n+e.wizytyPoprzedniMiesiac.kwota,0)}}return(i=a).\u0275fac=function(n){return new(n||i)(t.Y36(d.l))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-podsumowanie-informacje"]],inputs:{tableComponent:"tableComponent"},standalone:!0,features:[t.jDz],decls:81,vars:30,consts:[[1,"panel"],[1,"mainPanel"],[1,"dane"],[1,"kwota"],[1,"dane2"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Podsumowanie zak\u0142adu"),t.qZA(),t.TgZ(4,"div",2)(5,"table")(6,"tr")(7,"th"),t._uU(8,"Wizyty dzi\u015b"),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA()(),t.TgZ(11,"tr")(12,"th"),t._uU(13,"Doch\xf3d dzi\u015b"),t.qZA(),t.TgZ(14,"td")(15,"span",3),t._uU(16),t.ALo(17,"kwota"),t.qZA()()(),t.TgZ(18,"tr")(19,"th"),t._uU(20,"Wizyty w tym tygodniu"),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA()(),t.TgZ(23,"tr")(24,"th"),t._uU(25,"Doch\xf3d w tym tygodniu"),t.qZA(),t.TgZ(26,"td")(27,"span",3),t._uU(28),t.ALo(29,"kwota"),t.qZA()()()(),t.TgZ(30,"table")(31,"tr")(32,"th"),t._uU(33,"Wizyty wczoraj"),t.qZA(),t.TgZ(34,"td"),t._uU(35),t.qZA()(),t.TgZ(36,"tr")(37,"th"),t._uU(38,"Doch\xf3d wczoraj"),t.qZA(),t.TgZ(39,"td")(40,"span",3),t._uU(41),t.ALo(42,"kwota"),t.qZA()()(),t.TgZ(43,"tr")(44,"th"),t._uU(45,"Wizyty w tygodniu poprzednim"),t.qZA(),t.TgZ(46,"td"),t._uU(47),t.qZA()(),t.TgZ(48,"tr")(49,"th"),t._uU(50,"Doch\xf3d w tygodniu poprzednim"),t.qZA(),t.TgZ(51,"td")(52,"span",3),t._uU(53),t.ALo(54,"kwota"),t.qZA()()()()(),t.TgZ(55,"div",4)(56,"table")(57,"tr")(58,"th"),t._uU(59,"Wizyty w tym miesi\u0105cu"),t.qZA(),t.TgZ(60,"td"),t._uU(61),t.TgZ(62,"span",3),t._uU(63),t.ALo(64,"kwota"),t.qZA()()(),t.TgZ(65,"tr")(66,"th"),t._uU(67,"Wizyty w poprzednim miesi\u0105cu"),t.qZA(),t.TgZ(68,"td"),t._uU(69),t.TgZ(70,"span",3),t._uU(71),t.ALo(72,"kwota"),t.qZA()()(),t.TgZ(73,"tr")(74,"th"),t._uU(75,"Suma wizyt"),t.qZA(),t.TgZ(76,"td"),t._uU(77),t.TgZ(78,"span",3),t._uU(79),t.ALo(80,"kwota"),t.qZA()()()()()()()),2&n&&(t.xp6(10),t.AsE("",null==e.dane.wizytyDzis?null:e.dane.wizytyDzis.odbyte," na ",null==e.dane.wizytyDzis?null:e.dane.wizytyDzis.suma,""),t.xp6(6),t.hij("",t.lcZ(17,16,e.dane.dochodDzis),"z\u0142"),t.xp6(6),t.AsE("",null==e.dane.wizytyWTygodniu?null:e.dane.wizytyWTygodniu.odbyte," na ",null==e.dane.wizytyWTygodniu?null:e.dane.wizytyWTygodniu.suma,""),t.xp6(6),t.hij("",t.lcZ(29,18,e.dane.dochodWTygodniu),"z\u0142"),t.xp6(7),t.Oqu(e.dane.wizytyWczoraj),t.xp6(6),t.hij("",t.lcZ(42,20,e.dane.dochodWczoraj),"z\u0142"),t.xp6(6),t.hij(" ",e.dane.wizytyWTygodniuPoprzednim," "),t.xp6(6),t.hij("",t.lcZ(54,22,e.dane.dochodWTygodniuPoprzednim),"z\u0142"),t.xp6(8),t.hij(" ",e.sumaWMiesiacu()," "),t.xp6(2),t.hij("(",t.lcZ(64,24,e.sumaWMiesiacuKwota()),"z\u0142)"),t.xp6(6),t.hij(" ",e.sumaWMiesiacuPoprzednim()," "),t.xp6(2),t.hij("(",t.lcZ(72,26,e.sumaWMiesiacuPoprzednimKwota()),"z\u0142)"),t.xp6(6),t.hij(" ",e.dane.sumaWizyt," "),t.xp6(2),t.hij("(",t.lcZ(80,28,e.dane.sumaWizytKwota),"z\u0142)"))},dependencies:[f.ez,o],styles:[".panel[_ngcontent-%COMP%]{width:100%;min-height:100px;display:block}.panel[_ngcontent-%COMP%]   .mainPanel[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;padding:10px;gap:5px}.panel[_ngcontent-%COMP%]   .mainPanel[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{width:90%;margin:0;padding:0 0 10px}.panel[_ngcontent-%COMP%]   .mainPanel[_ngcontent-%COMP%]   .dane[_ngcontent-%COMP%]{display:flex;gap:10px;padding-bottom:5px;border-bottom:1px solid #d2d2d2}@media (max-width: 700px){.panel[_ngcontent-%COMP%]   .mainPanel[_ngcontent-%COMP%]   .dane[_ngcontent-%COMP%]{width:100%;flex-direction:column}.panel[_ngcontent-%COMP%]   .mainPanel[_ngcontent-%COMP%]   .dane[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]:first-of-type{border-bottom:1px solid #d2d2d2}}@media (max-width: 700px){.panel[_ngcontent-%COMP%]   .mainPanel[_ngcontent-%COMP%]   .dane2[_ngcontent-%COMP%]{flex-direction:column}}.panel[_ngcontent-%COMP%]   .mainPanel[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-right:10px}.panel[_ngcontent-%COMP%]   .mainPanel[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){min-width:130px}@media (max-width: 700px){.panel[_ngcontent-%COMP%]   .mainPanel[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){min-width:30px}}.panel[_ngcontent-%COMP%]   .mainPanel[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#140085}.panel[_ngcontent-%COMP%]   .mainPanel[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .kwota[_ngcontent-%COMP%]{color:#09003b}"]}),a})();var h=p(9739),g=p(3766),y=p.n(g);let z=(()=>{var i;class a{constructor(n){this.listonosz=n,this.labels=[],this.datasets=[],this.data={labels:this.labels,datasets:this.datasets},this.config={type:"line",data:this.data,options:{scale:2,responsive:!0,interaction:{intersect:!1,mode:"index"},scales:{x:{}},plugins:{tooltip:{callbacks:{},caretSize:8,footerFont:{size:15},bodyFont:{size:15},titleFont:{size:15}},legend:{display:!0},title:{display:!0,text:"Wizyty pracownik\xf3w",font:{size:20,family:"math"},color:"#0400b4"}}}},this.resize=!1}ngOnInit(){this.listonosz.pobierz(P.b.podsumowanieDaneDoWykresu).then(n=>{let e=0;n.forEach(l=>{const c=[];l.dane.forEach(Z=>{c.push(Z.ile),0===e&&this.labels.push(Z.data)}),this.labels[0]="Dzi\u015b",this.labels[1]="Wczoraj",e++,this.generateRandomColor(l.pracownik.id),this.datasets.push({label:l.pracownik.imie+"  "+l.pracownik.nazwisko,data:c,pointStyle:"circle",pointRadius:2,pointHoverRadius:4,tension:.2,trendlineLinear:{lineStyle:"dotted",width:2}})}),this.config.options.plugins.title.text+=` (${this.labels.length} dni)`,this.chart&&this.chart.destroy(),document.body.clientWidth<800&&(document.getElementById("chartPodsumowania").style.height="50vh",document.getElementById("chartPodsumowania").style.width="100vw"),h.ZP.register(y()),this.chart=new h.ZP("chartPodsumowania",this.config),this.chart.update(),document.body.clientWidth>800&&(this.chart.canvas.parentNode.style.width="628px",this.chart.canvas.parentNode.style.height="340px")})}generateRandomColor(n=(new Date).getTime()){const e=`id${this.generateHash(n.toString())}`;return`#${(Math.abs(this.generateHash(e))%16777215).toString(16).padStart(6,"0")}`}generateHash(n){let e=0;for(let l=0;l<n.length;l++)e=(e<<5)-e+n.charCodeAt(l);return e}}return(i=a).\u0275fac=function(n){return new(n||i)(t.Y36(d.l))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-podsumowanie-wykres"]],standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[1,"panel"],["id","chartPodsumowania"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"canvas",1),t._uU(2),t.qZA()()),2&n&&(t.xp6(2),t.hij(" ",e.chart,""))},dependencies:[f.ez],styles:[".panel[_ngcontent-%COMP%]{width:50%;min-height:100px}@media (max-width: 700px){.panel[_ngcontent-%COMP%]{width:100%;min-height:140px}}.resise[_ngcontent-%COMP%]{height:500px;width:80vw}"]}),a})();var w=p(5597),x=p(105),M=p(3866),r=p(7191);function O(i,a){1&i&&(t.TgZ(0,"th"),t._uU(1,"Lp"),t.qZA(),t.TgZ(2,"th"),t._uU(3,"Pracownik"),t.qZA(),t.TgZ(4,"th"),t._uU(5,"Wizyty dzi\u015b"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Wizyty wczoraj"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Tydzie\u0144"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Poprzedni tydzie\u0144"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Miesi\u0105c"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Poprzedni miesi\u0105c"),t.qZA())}function U(i,a){if(1&i&&(t.TgZ(0,"td"),t._uU(1),t.qZA(),t.TgZ(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.ALo(6,"kwota"),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"kwota"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"kwota"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"kwota"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.ALo(18,"kwota"),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.ALo(21,"kwota"),t.qZA()),2&i){const s=a.index,n=a.$implicit;t.xp6(1),t.Oqu(s),t.xp6(2),t.Oqu(n.pracownik.imie+" "+n.pracownik.nazwisko),t.xp6(2),t.lnq("",n.wizytyDzis.odbyte," na ",n.wizytyDzis.suma," (",t.lcZ(6,15,n.wizytyDzis.kwota),"z\u0142)"),t.xp6(3),t.AsE("",n.wizytyWczoraj.suma," (",t.lcZ(9,17,n.wizytyWczoraj.kwota),"z\u0142)"),t.xp6(3),t.AsE("",n.wizytyOStatniTydzien.suma," (",t.lcZ(12,19,n.wizytyOStatniTydzien.kwota),"z\u0142)"),t.xp6(3),t.AsE("",n.wizytyPoprzedniTydzien.suma," (",t.lcZ(15,21,n.wizytyPoprzedniTydzien.kwota),"z\u0142)"),t.xp6(3),t.AsE("",n.wizytyOstatniMiesiac.suma," (",t.lcZ(18,23,n.wizytyOstatniMiesiac.kwota),"z\u0142)"),t.xp6(3),t.AsE("",n.wizytyPoprzedniMiesiac.suma," (",t.lcZ(21,25,n.wizytyPoprzedniMiesiac.kwota),"z\u0142)")}}let k=(()=>{var i;class a{constructor(n,e){this.listonosz=n,this.danePodreczne_=e,this.dane=[]}ngOnInit(){let e=3;e=4,this.listonosz.pobierz(P.b.podsumowanieTabela).then(l=>{l.forEach(c=>this.dane.push(c))}).catch(l=>{})}}return(i=a).\u0275fac=function(n){return new(n||i)(t.Y36(d.l),t.Y36(r.v))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-podsumowanie-tabela"]],standalone:!0,features:[t.jDz],decls:3,vars:4,consts:[[3,"async","data","paggiantion","title"],["TemplateId","thead"],["TemplateId","tbody"]],template:function(n,e){1&n&&(t.TgZ(0,"app-table",0),t.YNc(1,O,16,0,"ng-template",1),t.YNc(2,U,22,27,"ng-template",2),t.qZA()),2&n&&t.Q6J("async",!1)("data",e.dane)("paggiantion",!1)("title","Podsumowanie pracy pracownik\xf3w:")},dependencies:[f.ez,w.uH,o,x.a,M.y]}),a})();const A=[{path:"",component:(()=>{var i;class a{}return(i=a).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-podsumowanie"]],standalone:!0,features:[t.jDz],decls:10,vars:1,consts:[[1,"naglowekZolty"],[1,"naglowek1Wzoltym"],[1,"naglowek1Wzoltym2"],[1,"panel1"],[3,"tableComponent"],[1,"panel2"],["tableComponent",""]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2,"Podsumowanie"),t.qZA(),t._UZ(3,"span",2),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"app-podsumowanie-informacje",4)(6,"app-podsumowanie-wykres"),t.qZA(),t.TgZ(7,"div",5),t._UZ(8,"app-podsumowanie-tabela",null,6),t.qZA()),2&n){const l=t.MAs(9);t.xp6(5),t.Q6J("tableComponent",l)}},dependencies:[f.ez,m,z,k],styles:["img[_ngcontent-%COMP%]{width:100%}.panel1[_ngcontent-%COMP%]{width:100%;display:flex}@media (max-width: 700px){.panel1[_ngcontent-%COMP%]{flex-direction:column}}app-podsumowanie-informacje[_ngcontent-%COMP%]{width:50%}@media (max-width: 700px){app-podsumowanie-informacje[_ngcontent-%COMP%]{width:100%}}app-podsumowanie-wykres[_ngcontent-%COMP%]{width:50%}@media (max-width: 700px){app-podsumowanie-wykres[_ngcontent-%COMP%]{width:100%}}.panel2[_ngcontent-%COMP%]{width:100%}"]}),a})()}]},3766:(W,_)=>{var p={id:"chartjs-plugin-trendline",afterDatasetsDraw:function(t){var o,d;for(var m in t.scales)if("x"==m[0]?d=t.scales[m]:o=t.scales[m],d&&o)break;var h=t.ctx;t.data.datasets.forEach(function(g,y){var z=g.alwaysShowTrendline||t.isDatasetVisible(y);if(g.trendlineLinear&&z&&g.data.length>1){var w=t.getDatasetMeta(y);!function f(t,o,d,m,h){var g=d.borderColor||"rgba(169,169,169, .6)",y=d.trendlineLinear.colorMin||g,z=d.trendlineLinear.colorMax||g,w=d.trendlineLinear.width||d.borderWidth,x=d.trendlineLinear.lineStyle||"solid",M=d.trendlineLinear.fillColor;w=void 0!==w?w:3;var r=new P,O=d.data.findIndex(u=>null!=u),k=t.data[O].x,j=t.data[d.data.length-1].x,A="object"==typeof d.data[O];d.data.forEach(function(u,b){if(null!=u)if(["time","timeseries"].includes(m.options.type)){var q=null!=u.x?u.x:u.t;void 0!==q?r.add(new Date(q).getTime(),u.y):r.add(b,u)}else A?isNaN(u.x)||isNaN(u.y)?isNaN(u.x)?isNaN(u.y)||r.add(b,u.y):r.add(b,u.x):r.add(u.x,u.y):r.add(b,u)});var s,n,i=m.getPixelForValue(r.minx),a=h.getPixelForValue(r.f(r.minx));if(d.trendlineLinear.projection&&r.scale()<0){var e=r.fo();e<r.minx&&(e=r.maxx),s=m.getPixelForValue(e),n=h.getPixelForValue(r.f(e))}else s=m.getPixelForValue(r.maxx),n=h.getPixelForValue(r.f(r.maxx));A||(i=k,s=j);var l=t.controller.chart.chartArea.bottom,c=t.controller.chart.width;if(a>l){var C=a-l,T=a-n;a=l,i+=c*(C/T)}else n>l&&(C=n-l,T=n-a,n=l,s=c-(s-(c-c*(C/T))));o.lineWidth=w,"dotted"===x&&o.setLineDash([2,3]),o.beginPath(),o.moveTo(i,a),o.lineTo(s,n);var v=o.createLinearGradient(i,a,s,n);n<a?(v.addColorStop(0,z),v.addColorStop(1,y)):(v.addColorStop(0,y),v.addColorStop(1,z)),o.strokeStyle=v,o.stroke(),o.closePath(),M&&(o.fillStyle=M,o.beginPath(),o.moveTo(i,a),o.lineTo(s,n),o.lineTo(s,l),o.lineTo(i,l),o.closePath(),o.fill())}(w,h,g,d,t.scales[w.yAxisID])}}),h.setLineDash([])}};function P(){this.count=0,this.sumX=0,this.sumX2=0,this.sumXY=0,this.sumY=0,this.minx=1e100,this.maxx=-1e100,this.maxy=-1e100}P.prototype={add:function(t,o){t=parseFloat(t),o=parseFloat(o),this.count++,this.sumX+=t,this.sumX2+=t*t,this.sumXY+=t*o,this.sumY+=o,t<this.minx&&(this.minx=t),t>this.maxx&&(this.maxx=t),o>this.maxy&&(this.maxy=o)},f:function(t){t=parseFloat(t);var o=this.count*this.sumX2-this.sumX*this.sumX;return(this.sumX2*this.sumY-this.sumX*this.sumXY)/o+t*((this.count*this.sumXY-this.sumX*this.sumY)/o)},fo:function(){var t=this.count*this.sumX2-this.sumX*this.sumX;return-(this.sumX2*this.sumY-this.sumX*this.sumXY)/t/((this.count*this.sumXY-this.sumX*this.sumY)/t)},scale:function(){return(this.count*this.sumXY-this.sumX*this.sumY)/(this.count*this.sumX2-this.sumX*this.sumX)}},typeof window<"u"&&window.Chart&&(window.Chart.hasOwnProperty("register")?window.Chart.register(p):window.Chart.plugins.register(p));try{W.exports=p}catch{}}}]);