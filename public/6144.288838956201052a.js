"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6144],{6144:(A,u,e)=>{e.r(u),e.d(u,{NotificacionPageModule:()=>y});var f=e(6895),g=e(4719),t=e(1558),d=e(2507),p=e(5861),i=e(6353),b=e(650),m=e(1818);function h(o,c){if(1&o){const n=i.EpF();i.TgZ(0,"ion-button",9),i.NdJ("click",function(){i.CHM(n);const r=i.oxw();return i.KtG(r.suscribir())}),i._uU(1,"Suscribir notificaciones"),i.qZA()}}function N(o,c){if(1&o){const n=i.EpF();i.TgZ(0,"ion-button",10),i.NdJ("click",function(){i.CHM(n);const r=i.oxw();return i.KtG(r.dessuscribir())}),i._uU(1,"DesSuscribir notificaciones"),i.qZA()}}function P(o,c){1&o&&(i.TgZ(0,"ion-label",11),i._uU(1,"Las notificaciones fueron concedidas por el usuario."),i.qZA())}function Z(o,c){1&o&&(i.TgZ(0,"ion-label",12),i._uU(1,"Las notificaciones no est\xe1n disponibles en el navegador o habilitadas en la aplicaci\xf3n"),i.qZA())}const T=[{path:"",component:(()=>{class o{constructor(n,a,r){var s=this;this.swPush=n,this.notificacionService=a,this.toastController=r,this.isEnabled=this.swPush.isEnabled,this.isGranted="granted"===Notification.permission,this.suscribir=(0,p.Z)(function*(){if(!s.swPush.isEnabled)return s.isEnabled=!1,void console.log("La notificaci\xf3n no est\xe1 habilitada");s.isEnabled=!0,yield s.notificacionService.suscribirNotificaciones().then(()=>(s.isGranted=!0,s.displayToast("Acci\xf3n","Notificaciones activadas!"))).catch(l=>{s.isGranted=!1,console.log("error",l)})}),this.dessuscribir=()=>{this.notificacionService.dessuscribirNotificaciones()},this.displayToast=(l,x)=>{this.toastController.create({header:l,message:x,position:"top",cssClass:"toast-custom-class",buttons:[{side:"end",icon:"person",handler:()=>{console.log("")}},{side:"end",text:"Close",role:"cancel",handler:()=>{console.log("")}}]}).then(G=>{G.present()})}}}return o.\u0275fac=function(n){return new(n||o)(i.Y36(b.Mk),i.Y36(m.U),i.Y36(t.yF))},o.\u0275cmp=i.Xpm({type:o,selectors:[["app-notificacion"]],decls:14,vars:6,consts:[[3,"translucent"],[1,"ion-text-center"],["slot","start"],["menu","primerMenu","autoHide","false"],[3,"fullscreen"],["color","primary",3,"click",4,"ngIf"],["color","danger",3,"click",4,"ngIf"],["class","ion-text-wrap","color","primary",4,"ngIf"],["class","ion-text-wrap","color","danger",4,"ngIf"],["color","primary",3,"click"],["color","danger",3,"click"],["color","primary",1,"ion-text-wrap"],["color","danger",1,"ion-text-wrap"]],template:function(n,a){1&n&&(i.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),i._uU(3,"Notificaciones"),i.qZA(),i.TgZ(4,"ion-buttons",2),i._UZ(5,"ion-menu-button",3),i.qZA()()(),i.TgZ(6,"ion-content",4)(7,"ion-item"),i.YNc(8,h,2,0,"ion-button",5),i.YNc(9,N,2,0,"ion-button",6),i.qZA(),i.TgZ(10,"ion-item"),i.YNc(11,P,2,0,"ion-label",7),i._UZ(12,"br"),i.YNc(13,Z,2,0,"ion-label",8),i.qZA()()),2&n&&(i.Q6J("translucent",!0),i.xp6(6),i.Q6J("fullscreen",!0),i.xp6(2),i.Q6J("ngIf",a.isEnabled&&!a.isGranted),i.xp6(1),i.Q6J("ngIf",a.isEnabled&&a.isGranted),i.xp6(2),i.Q6J("ngIf",a.isGranted),i.xp6(2),i.Q6J("ngIf",!a.isEnabled))},dependencies:[f.O5,t.YG,t.Sm,t.W2,t.Gu,t.Ie,t.Q$,t.fG,t.sr,t.wd]}),o})()}];let v=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[d.Bz.forChild(T),d.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[f.ez,g.u5,t.Pc,v]}),o})()}}]);