"use strict";(self.webpackChunkfitness_tracker=self.webpackChunkfitness_tracker||[]).push([[952],{5952:(ot,C,o)=>{o.r(C),o.d(C,{TrainingModule:()=>at});var S=o(8554),Z=o(1303),u=o(5686),t=o(5879),g=o(4707),l=o(6814),y=o(4104),m=o(7700),T=o(2296);let N=(()=>{class n{constructor(e){this.passedData=e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.WI))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-stop-training"]],decls:10,vars:3,consts:[["mat-dialog-title",""],["mat-button","",3,"mat-dialog-close"]],template:function(e,a){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Are you sure?"),t.qZA(),t.TgZ(2,"mat-dialog-content")(3,"p"),t._uU(4),t.qZA()(),t.TgZ(5,"mat-dialog-actions")(6,"button",1),t._uU(7,"Yes"),t.qZA(),t.TgZ(8,"button",1),t._uU(9,"No"),t.qZA()()),2&e&&(t.xp6(4),t.hij("You already got ",a.passedData.progress,"%"),t.xp6(2),t.Q6J("mat-dialog-close",!0),t.xp6(2),t.Q6J("mat-dialog-close",!1))},dependencies:[T.lW,m.ZT,m.uh,m.xY,m.H8],encapsulation:2}),n})();var O=o(8180),h=o(7108),Y=o(5940),c=o(3814);let w=(()=>{class n{constructor(e,a,r){this.dialog=e,this.trainingService=a,this.store=r,this.trainingExit=new t.vpe,this.progress=0}ngOnInit(){this.startOrResumeTimer()}startOrResumeTimer(){this.store.select(u.l3).pipe((0,O.q)(1)).subscribe(e=>{const a=e?.duration;a&&(this.timer=window.setInterval(()=>{this.progress=this.progress+1,this.progress>=100&&(this.trainingService.completeExercises(),clearInterval(this.timer))},a/100*1e3))})}onStop(){clearInterval(this.timer),this.dialog.open(N,{data:{progress:this.progress}}).afterClosed().subscribe(a=>{a?this.trainingService.cancelExercise(this.progress):this.startOrResumeTimer()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.uw),t.Y36(h.O),t.Y36(g.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-current-traning"]],outputs:{trainingExit:"trainingExit"},decls:8,vars:2,consts:[["fxLayout","column","fxLayoutAlign","center center",1,"current-training"],["mode","determinate",3,"value"],["mat-raised-button","","color","accent",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"section",0),t._UZ(1,"mat-spinner",1),t.TgZ(2,"h1"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5,"Don't try, just do it!"),t.qZA(),t.TgZ(6,"button",2),t.NdJ("click",function(){return a.onStop()}),t._uU(7,"Stop"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("value",a.progress),t.xp6(2),t.hij("",a.progress,"%"))},dependencies:[T.lW,Y.Ou,c.xw,c.Wh],styles:[".current-training[_ngcontent-%COMP%]{padding:30px}"]}),n})();var U=o(1892),p=o(6223),v=o(9157),d=o(5195),b=o(8525),J=o(3680);function P(n,i){if(1&n&&(t.TgZ(0,"mat-option",9),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function Q(n,i){if(1&n&&(t.TgZ(0,"mat-form-field")(1,"mat-select",7),t.YNc(2,P,2,2,"mat-option",8),t.ALo(3,"async"),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,1,e.exercises$))}}function E(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2),f=t.MAs(2);return t.KtG(r.onStartTraining(f))}),t.qZA()}if(2&n){t.oxw(2);const e=t.MAs(2);t.Q6J("disabled",e.invalid)}}function M(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.fetchExercises())}),t._uU(1," Fetch again "),t.qZA()}if(2&n){t.oxw(2);const e=t.MAs(2);t.Q6J("disabled",e.invalid)}}function L(n,i){if(1&n&&(t.TgZ(0,"mat-card-actions",4),t.YNc(1,E,1,1,"button",10),t.ALo(2,"async"),t.YNc(3,M,2,1,"button",10),t.ALo(4,"async"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,e.exercises$)),t.xp6(2),t.Q6J("ngIf",!t.lcZ(4,4,e.exercises$))}}let I=(()=>{class n{constructor(e,a){this.trainingService=e,this.store=a}ngOnInit(){this.isLoading$=this.store.select(U.Vc),this.setListExersices()}setListExersices(){this.exercises$=this.store.select(u.C6),this.fetchExercises()}fetchExercises(){this.trainingService.fetchAvailableExercises()}onStartTraining(e){this.trainingService.startExercise(e.value.exercise)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.O),t.Y36(g.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-new-training"]],decls:12,vars:6,consts:[["fxLayout","fxLayout","fxLayoutAlign","center",1,"new-training"],[3,"ngSubmit"],["f","ngForm"],["fxFlex","400px","fxFlex.xs","100%"],["fxLayoutAlign","center"],[4,"ngIf"],["fxLayoutAlign","center",4,"ngIf"],["placeholder","Type of workout","ngModel","ngModel","name","exercise","required","required"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["type","submit","mat-button","mat-button",3,"disabled","click",4,"ngIf"],["type","submit","mat-button","mat-button",3,"disabled","click"]],template:function(e,a){if(1&e){const r=t.EpF();t.TgZ(0,"section",0)(1,"form",1,2),t.NdJ("ngSubmit",function(){t.CHM(r);const x=t.MAs(2);return t.KtG(a.onStartTraining(x))}),t.TgZ(3,"mat-card",3)(4,"mat-card-title",4),t._uU(5,"Let's training"),t.qZA(),t.TgZ(6,"mat-card-content",4),t._uU(7,"Select type of training"),t.qZA(),t.YNc(8,Q,4,3,"mat-form-field",5),t.ALo(9,"async"),t.YNc(10,L,5,6,"mat-card-actions",6),t.ALo(11,"async"),t.qZA()()()}2&e&&(t.xp6(8),t.Q6J("ngIf",!a.isLoading$&&t.lcZ(9,2,a.exercises$)),t.xp6(2),t.Q6J("ngIf",!t.lcZ(11,4,a.isLoading$)))},dependencies:[l.sg,l.O5,p._Y,p.JJ,p.JL,p.Q7,p.On,p.F,T.lW,v.KE,d.a8,d.hq,d.dn,d.n5,b.gD,J.ey,c.xw,c.Wh,c.yH,l.Ov],styles:[".new-training[_ngcontent-%COMP%]{padding:30px}"]}),n})();var s=o(5313),_=o(3566),A=o(3365),D=o(2032);function F(n,i){1&n&&(t.TgZ(0,"mat-header-cell",16),t._uU(1,"Date"),t.qZA())}function $(n,i){if(1&n&&(t.TgZ(0,"mat-cell"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,e.date.toDate()))}}function H(n,i){1&n&&(t.TgZ(0,"mat-header-cell",16),t._uU(1,"Name"),t.qZA())}function R(n,i){if(1&n&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Oqu(e.name)}}function q(n,i){1&n&&(t.TgZ(0,"mat-header-cell",16),t._uU(1,"Calories"),t.qZA())}function G(n,i){if(1&n&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Oqu(e.calories)}}function B(n,i){1&n&&(t.TgZ(0,"mat-header-cell",16),t._uU(1,"Duration"),t.qZA())}function W(n,i){if(1&n&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Oqu(e.duration)}}function j(n,i){1&n&&(t.TgZ(0,"mat-header-cell",16),t._uU(1,"State"),t.qZA())}function z(n,i){if(1&n&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Oqu(e.state)}}function X(n,i){1&n&&t._UZ(0,"mat-header-row")}function K(n,i){1&n&&t._UZ(0,"mat-row")}const k=function(){return[5,10,25,50]};let V=(()=>{class n{constructor(e,a){this.trainingService=e,this.store=a,this.displayedCOlumns=["name","date","duration","state"],this.dataSource=new s.by}ngOnInit(){this.setupGrid()}ngAfterViewInit(){this.setupSorting(),this.setupPagination()}setupGrid(){this.store.select(u.JP).subscribe(e=>{this.dataSource.data=e}),this.trainingService.fetchCompletedOrCancelledExercises()}filterItems(e){e&&(this.dataSource.filter=e.trim().toLowerCase())}setupSorting(){this.dataSource.sort=this.sort}setupPagination(){this.dataSource.paginator=this.paginator}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.O),t.Y36(g.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-past-trainings"]],viewQuery:function(e,a){if(1&e&&(t.Gf(_.YE,5),t.Gf(A.NW,5)),2&e){let r;t.iGM(r=t.CRH())&&(a.sort=r.first),t.iGM(r=t.CRH())&&(a.paginator=r.first)}},decls:24,vars:6,consts:[["fxLayoutAlign","center center"],["fxFlex","40%"],["matInput","","type","text","placeholder","Search","name","search-field","id","search-field",3,"keyup"],["filteredItem",""],["matSort","",3,"dataSource"],["matColumnDef","date"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","calories"],["matColumnDef","duration"],["matColumnDef","state"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["aria-label","Select Page",3,"pageSize","pageSizeOptions"],["paginator",""],["mat-sort-header",""]],template:function(e,a){if(1&e){const r=t.EpF();t.TgZ(0,"section",0)(1,"mat-form-field",1)(2,"input",2,3),t.NdJ("keyup",function(){t.CHM(r);const x=t.MAs(3);return t.KtG(a.filterItems(x.value))}),t.qZA()()(),t.TgZ(4,"mat-table",4),t.ynx(5,5),t.YNc(6,F,2,0,"mat-header-cell",6),t.YNc(7,$,3,3,"mat-cell",7),t.BQk(),t.ynx(8,8),t.YNc(9,H,2,0,"mat-header-cell",6),t.YNc(10,R,2,1,"mat-cell",7),t.BQk(),t.ynx(11,9),t.YNc(12,q,2,0,"mat-header-cell",6),t.YNc(13,G,2,1,"mat-cell",7),t.BQk(),t.ynx(14,10),t.YNc(15,B,2,0,"mat-header-cell",6),t.YNc(16,W,2,1,"mat-cell",7),t.BQk(),t.ynx(17,11),t.YNc(18,j,2,0,"mat-header-cell",6),t.YNc(19,z,2,1,"mat-cell",7),t.BQk(),t.YNc(20,X,1,0,"mat-header-row",12),t.YNc(21,K,1,0,"mat-row",13),t.qZA(),t._UZ(22,"mat-paginator",14,15)}2&e&&(t.xp6(4),t.Q6J("dataSource",a.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",a.displayedCOlumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedCOlumns),t.xp6(1),t.Q6J("pageSize",1)("pageSizeOptions",t.DdM(5,k)))},dependencies:[D.Nt,v.KE,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,_.YE,_.nU,A.NW,c.Wh,c.yH,l.uU]}),n})();function tt(n,i){1&n&&(t.TgZ(0,"mat-tab-group")(1,"mat-tab",1),t._UZ(2,"app-new-training"),t.qZA(),t.TgZ(3,"mat-tab",2),t._UZ(4,"app-past-trainings"),t.qZA()())}function nt(n,i){1&n&&t._UZ(0,"app-current-traning")}const et=[{path:"",component:(()=>{class n{constructor(e){this.store=e}ngOnInit(){this.setupExerciseSubscription()}setupExerciseSubscription(){this.onGoingTraining$=this.store.select(u.aH)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-trainnig"]],decls:4,vars:6,consts:[[4,"ngIf"],["label","New Exercise"],["label","Past Exercise"]],template:function(e,a){1&e&&(t.YNc(0,tt,5,0,"mat-tab-group",0),t.ALo(1,"async"),t.YNc(2,nt,1,0,"app-current-traning",0),t.ALo(3,"async")),2&e&&(t.Q6J("ngIf",!t.lcZ(1,2,a.onGoingTraining$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(3,4,a.onGoingTraining$)))},dependencies:[l.O5,y.uX,y.SP,w,I,V,l.Ov]}),n})()}];let it=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[Z.Bz.forChild(et),Z.Bz]}),n})(),at=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[S.m,it,g.Aw.forFeature("training",u.ue)]}),n})()}}]);