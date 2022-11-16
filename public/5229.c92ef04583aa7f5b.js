"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5229],{5229:(L,S,i)=>{i.r(S),i.d(S,{ProgramasPageModule:()=>_});var Z=i(6895),A=i(4719),t=i(1558),v=i(2507),g=i(5861),P=i(9337),C=i(9786),T=i(6582),r=i(6353),z=i(8555),M=i(5970),O=i(8077),U=i(9498);function J(a,c){if(1&a&&(r.TgZ(0,"small"),r._uU(1),r.qZA()),2&a){const o=r.oxw().$implicit;r.xp6(1),r.Oqu(o.dias)}}function b(a,c){1&a&&(r.TgZ(0,"small"),r._uU(1,"una vez"),r.qZA())}function I(a,c){if(1&a){const o=r.EpF();r.TgZ(0,"ion-item-sliding",9)(1,"ion-item"),r._UZ(2,"ion-icon",10),r.TgZ(3,"ion-label")(4,"h1"),r._uU(5),r.qZA(),r.TgZ(6,"h6"),r._uU(7),r.qZA(),r.YNc(8,J,2,1,"small",11),r.YNc(9,b,2,0,"small",11),r.qZA(),r.TgZ(10,"ion-toggle",12),r.NdJ("ionChange",function(u){const p=r.CHM(o).$implicit,x=r.oxw();return r.KtG(x.actualizarPrograma(u,p.id))}),r.qZA()(),r.TgZ(11,"ion-item-options")(12,"ion-item-option",4),r.NdJ("click",function(){const d=r.CHM(o).$implicit,p=r.oxw();return r.KtG(p.editarPrograma(d))}),r._UZ(13,"ion-icon",13),r.qZA(),r.TgZ(14,"ion-item-option",14),r.NdJ("click",function(){const d=r.CHM(o).$implicit,p=r.oxw();return r.KtG(p.confirmarEliminar(d.id))}),r._UZ(15,"ion-icon",15),r.qZA()()()}if(2&a){const o=c.$implicit;r.xp6(5),r.Oqu(o.hora),r.xp6(2),r.Oqu(o.accion),r.xp6(1),r.Q6J("ngIf",o.dias.length>0),r.xp6(1),r.Q6J("ngIf",o.dias.length<1),r.xp6(1),r.Q6J("checked",o.activo)}}const N=[{path:"",component:(()=>{class a{constructor(o,m,u,d,p,x){var e=this;this.actRoute=o,this.loaderService=m,this.alertService=u,this.router=d,this.programaService=p,this.Navparams=x,this.programas=[],this.inicializar=(0,g.Z)(function*(){e.id=e.actRoute.snapshot.paramMap.get("id"),yield e.obtenerProgramas()}),this.agregarPrograma=()=>{this.Navparams.setData(this.id),this.router.navigateByUrl("/programa")},this.confirmarEliminar=function(){var l=(0,g.Z)(function*(s){const n=new P.b;var f;n.header="Alerta!",n.message="favor confirmar eliminaci\xf3n de programa",n.buttons=[{text:"Cancel",role:"cancel",handler:()=>{}},{text:"OK",role:"confirm",handler:(f=(0,g.Z)(function*(){yield e.eliminarPrograma(s)}),function(){return f.apply(this,arguments)})}],yield e.alertService.simpleAlert(n)});return function(s){return l.apply(this,arguments)}}(),this.eliminarPrograma=function(){var l=(0,g.Z)(function*(s){const n=new T.i;n.id=s;try{yield e.loaderService.simpleLoader("cargando"),yield e.programaService.programaEliminarPorId(n),yield e.loaderService.dismissLoader(),yield e.inicializar()}catch(f){console.log("eliminarPrograma error",f),e.loaderService.dismissLoader();const h=new P.b;h.header="Error al eliminar programa",h.message="Se ha producido un error, favor intentar m\xe1s tarde",h.buttons=["OK"],e.alertService.simpleAlert(h)}});return function(s){return l.apply(this,arguments)}}(),this.obtenerProgramas=(0,g.Z)(function*(){const l=new C.d;l.id=e.id;try{yield e.loaderService.simpleLoader("cargando"),e.programas=yield e.programaService.programasObtener(l),yield e.loaderService.dismissLoader()}catch(s){yield e.loaderService.dismissLoader(),console.log("programasObtener error",s);const n=new P.b;n.header="Error al obtener programas",n.message="Se ha producido un error, favor intentar m\xe1s tarde",n.buttons=["OK"],yield e.alertService.simpleAlert(n)}}),this.editarPrograma=function(){var l=(0,g.Z)(function*(s){e.Navparams.setData(s),e.router.navigateByUrl(`/programa-editar/${s.id}`)});return function(s){return l.apply(this,arguments)}}(),this.actualizarPrograma=function(){var l=(0,g.Z)(function*(s,n){const f=new T.i;f.id=n,f.activo=s.detail.checked;try{yield e.loaderService.simpleLoader("cargando"),yield e.programaService.programaActualizarPorId(f),yield e.loaderService.dismissLoader(),yield e.inicializar()}catch(h){yield e.loaderService.dismissLoader(),console.log("actualizarPrograma error",h);const y=new P.b;y.header="Error al actualizar dispositivo",y.message="Se ha producido un error, favor intentar m\xe1s tarde",y.buttons=["OK"],yield e.alertService.simpleAlert(y)}});return function(s,n){return l.apply(this,arguments)}}(),this.loadMore=l=>{setTimeout(()=>{l.target.complete(),this.inicializar(),1e3===this.programas.length&&(l.target.disabled=!0)},1e3)}}ionViewWillEnter(){this.inicializar()}}return a.\u0275fac=function(o){return new(o||a)(r.Y36(v.gz),r.Y36(z.D),r.Y36(M.c),r.Y36(v.F0),r.Y36(O.$),r.Y36(U.a))},a.\u0275cmp=r.Xpm({type:a,selectors:[["app-programas"]],decls:14,vars:1,consts:[[1,"ion-text-center"],["slot","start"],["defaultHref","dispositivos","text",""],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["name","add"],["reorder","true",4,"ngFor","ngForOf"],["position","bottom","threshold","30%",3,"ionInfinite"],["loadingSpinner","crescent","loadingText","Cargando m\xe1s datos..."],["reorder","true"],["name","time-outline","slot","start"],[4,"ngIf"],["slot","end","name","activoToggle",3,"checked","ionChange"],["slot","icon-only","name","create-outline"],["color","danger",3,"click"],["slot","icon-only","name","trash-outline"]],template:function(o,m){1&o&&(r.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title",0),r._uU(3,"Programas"),r.qZA(),r.TgZ(4,"ion-buttons",1),r._UZ(5,"ion-back-button",2),r.qZA()()(),r.TgZ(6,"ion-content")(7,"ion-fab",3)(8,"ion-fab-button",4),r.NdJ("click",function(){return m.agregarPrograma()}),r._UZ(9,"ion-icon",5),r.qZA()(),r.TgZ(10,"ion-list"),r.YNc(11,I,16,5,"ion-item-sliding",6),r.qZA(),r.TgZ(12,"ion-infinite-scroll",7),r.NdJ("ionInfinite",function(d){return m.loadMore(d)}),r._UZ(13,"ion-infinite-scroll-content",8),r.qZA()()),2&o&&(r.xp6(11),r.Q6J("ngForOf",m.programas))},dependencies:[Z.sg,Z.O5,t.oU,t.Sm,t.W2,t.IJ,t.W4,t.Gu,t.gu,t.ju,t.MB,t.Ie,t.u8,t.IK,t.td,t.Q$,t.q_,t.ho,t.sr,t.wd,t.w,t.cs],styles:[".my-label[_ngcontent-%COMP%]{font-size:x-small}"]}),a})()},{path:"programa",loadChildren:()=>i.e(284).then(i.bind(i,284)).then(a=>a.ProgramaPageModule)},{path:"programa-editar",loadChildren:()=>i.e(3319).then(i.bind(i,3319)).then(a=>a.ProgramaEditarPageModule)}];let E=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=r.oAB({type:a}),a.\u0275inj=r.cJS({imports:[v.Bz.forChild(N),v.Bz]}),a})(),_=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=r.oAB({type:a}),a.\u0275inj=r.cJS({imports:[Z.ez,A.u5,t.Pc,E]}),a})()}}]);