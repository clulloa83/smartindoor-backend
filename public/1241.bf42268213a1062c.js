"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1241],{1241:(x,u,a)=>{a.r(u),a.d(u,{TemperaturaPageModule:()=>Z});var h=a(6895),d=a(4719),s=a(1558),l=a(2507),v=a(5861),T=a(9337),f=a(9786),e=a(6353),y=a(23),P=a(8555),S=a(5970),c=a(9141);const b=[{path:"",component:(()=>{class r{constructor(o,i,m,A){var t=this;this.actRoute=o,this.registroService=i,this.loaderService=m,this.alertService=A,this.registros=[],this.gaugeType="arch",this.gaugethresholds={0:{color:"green"},30:{color:"orange"},70:{color:"orangeRed"},100:{color:"red"}},this.obtenerRegistros=(0,v.Z)(function*(){yield t.loaderService.simpleLoader("cargando");const p=new f.d;p.id=t.id;try{t.registros=yield t.registroService.registrosObtener(p),t.gaugeValue=Number(t.registros[0].valor),t.gaugeLabel=t.registros[0].etiqueta,t.gaugeAppendText=t.registros[0].unidad,t.gaugemax=Number(t.registros[0].maximo),yield t.loaderService.dismissLoader()}catch(M){console.log("obtenerRegistros error",M),yield t.loaderService.dismissLoader();const g=new T.b;g.header="Error al obtener registros",g.message="Se ha producido un error, favor intentar m\xe1s tarde",g.buttons=["OK"],yield t.alertService.simpleAlert(g)}}),this.id=this.actRoute.snapshot.paramMap.get("id"),this.obtenerRegistros()}ngOnInit(){}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(l.gz),e.Y36(y.r),e.Y36(P.D),e.Y36(S.c))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-temperatura"]],decls:10,vars:6,consts:[[1,"ion-text-center"],["slot","start"],["defaultHref","dispositivos","text",""],["expand","block",3,"click"],[3,"type","value","label","append","max","thresholds"]],template:function(o,i){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title",0),e._uU(3,"Temperaturas"),e.qZA(),e.TgZ(4,"ion-buttons",1),e._UZ(5,"ion-back-button",2),e.qZA()()(),e.TgZ(6,"ion-content")(7,"ion-button",3),e.NdJ("click",function(){return i.obtenerRegistros()}),e._uU(8,"obtenerRegistros"),e.qZA(),e._UZ(9,"ngx-gauge",4),e.qZA()),2&o&&(e.xp6(9),e.Q6J("type",i.gaugeType)("value",i.gaugeValue)("label",i.gaugeLabel)("append",i.gaugeAppendText)("max",i.gaugemax)("thresholds",i.gaugethresholds))},dependencies:[s.oU,s.YG,s.Sm,s.W2,s.Gu,s.sr,s.wd,s.cs,c.EO]}),r})()}];let R=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[l.Bz.forChild(b),l.Bz]}),r})(),Z=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[h.ez,d.u5,s.Pc,R,d.UX,c.ez]}),r})()}}]);