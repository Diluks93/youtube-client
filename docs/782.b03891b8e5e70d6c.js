"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[782],{5782:(Q,d,r)=>{r.r(d),r.d(d,{AuthModule:()=>q});var m=r(9808),g=r(994),s=r(3075),p=r(590),t=r(5e3),c=r(7501),u=r(9224),i=r(7322),f=r(7531),h=r(7423),v=r(5245);function Z(e,a){1&e&&(t.TgZ(0,"span"),t._uU(1,"This field is mandatory."),t.qZA())}function T(e,a){1&e&&(t.TgZ(0,"span"),t._uU(1,"This field is invalid."),t.qZA())}function w(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t.YNc(1,Z,2,0,"span",7),t.YNc(2,T,2,0,"span",7),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",null==o.f.email.errors?null:o.f.email.errors.required),t.xp6(1),t.Q6J("ngIf",null==o.f.email.errors?null:o.f.email.errors.email)}}function P(e,a){1&e&&(t.TgZ(0,"mat-hint"),t._uU(1,"Your email is valid"),t.qZA())}function A(e,a){1&e&&(t.TgZ(0,"span"),t._uU(1,"Your password isn't strong enough."),t.qZA())}function L(e,a){1&e&&(t.TgZ(0,"span"),t._uU(1,"Your password at least 8 characters. "),t.qZA())}function _(e,a){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const o=t.oxw(2);let n;t.xp6(1),t.hij(" ",null==(n=o.loginForm.get("password"))?null:n.getError("invalidPassword")," ")}}function C(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t.YNc(1,A,2,0,"span",7),t.YNc(2,L,2,0,"span",7),t.YNc(3,_,2,1,"span",7),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",null==o.f.password.errors?null:o.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",null==o.f.password.errors?null:o.f.password.errors.minlength),t.xp6(1),t.Q6J("ngIf",null==o.f.password.errors?null:o.f.password.errors.invalidPassword)}}function x(e,a){1&e&&(t.TgZ(0,"mat-hint"),t._uU(1,"Your password is valid"),t.qZA())}function I(e,a){if(1&e&&(t.TgZ(0,"button",12),t._uU(1,"Login"),t.qZA()),2&e){const o=t.oxw();t.Q6J("disabled",o.loading)}}const Y=function(e){return{color:e}},b=[{path:"",component:(()=>{class e{constructor(o,n,l){this.authService=o,this.router=n,this.formBuilder=l,this.hide=!0,this.loading=!1,this.submitted=!1,this.isLogin=!!localStorage.getItem("user"),this.isProcess=!1,this.message=this.getMessage()}getMessage(){return localStorage.getItem("user")?"You are logged in!":"You are not logged in!"}ngOnInit(){localStorage.setItem("login-example-users",JSON.stringify([{id:"0",email:"test@test",password:"t123Test!",firstName:"Guest",lastName:"Test",token:"fake-jwt-token"}])),this.loginForm=this.formBuilder.group({email:[null,[s.kI.required,s.kI.email,s.kI.minLength(3)]],password:[null,[s.kI.required,s.kI.minLength(8),this.passwordValidator]]})}passwordValidator(o){const n=o.value,l=/[A-Z]/.test(n),N=/[a-z]/.test(n),S=/[0-9]/.test(n),U=/[@$!%*?&]/.test(n);switch(!0){case!l:return{invalidPassword:"Your password have to include uppercase letters."};case!N:return{invalidPassword:"Your password have to include lowercase letters."};case!S:return{invalidPassword:"Your password have to mixture of letters and numbers."};case!U:return{invalidPassword:"Your password have to inclusion of at least one special character."};default:return null}}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,!this.loginForm.invalid&&(this.loading=!0,this.authService.login(this.f.email.value,this.f.password.value).pipe((0,p.P)()).subscribe({next:()=>{this.message="Trying to log in ...",this.isProcess=!0,setTimeout(()=>{this.message=this.getMessage(),this.router.navigate(["/home-page"])},1e3)},error:o=>{console.error(o),this.loading=!1}}))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(c.e),t.Y36(g.F0),t.Y36(s.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login-page"]],decls:25,vars:14,consts:[[1,"flex","column","container",3,"formGroup","ngSubmit"],[1,"login-info",3,"ngStyle"],[1,"auth"],[1,"content"],["appearance","standard"],["matInput","","formControlName","email","type","email","placeholder","Please enter a login email","autocomplete","off","required",""],["input",""],[4,"ngIf"],["matInput","","type","password","formControlName","password","required","",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],[1,"btn"],["mat-raised-button","","color","warn","type","submit",3,"disabled",4,"ngIf"],["mat-raised-button","","color","warn","type","submit",3,"disabled"]],template:function(o,n){1&o&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(1,"p",1),t._uU(2),t.qZA(),t.TgZ(3,"mat-card",2),t.TgZ(4,"mat-card-title"),t._uU(5,"Login"),t.qZA(),t.TgZ(6,"mat-card-content",3),t.TgZ(7,"mat-form-field",4),t.TgZ(8,"mat-label"),t._uU(9,"Login"),t.qZA(),t._UZ(10,"input",5,6),t.YNc(12,w,3,2,"mat-error",7),t.YNc(13,P,2,0,"mat-hint",7),t.qZA(),t.TgZ(14,"mat-form-field",4),t.TgZ(15,"mat-label"),t._uU(16,"Please enter a password"),t.qZA(),t._UZ(17,"input",8),t.TgZ(18,"button",9),t.NdJ("click",function(){return n.hide=!n.hide}),t.TgZ(19,"mat-icon"),t._uU(20),t.qZA(),t.qZA(),t.YNc(21,C,4,3,"mat-error",7),t.YNc(22,x,2,0,"mat-hint",7),t.qZA(),t.qZA(),t.TgZ(23,"mat-card-actions",10),t.YNc(24,I,2,1,"button",11),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.Q6J("formGroup",n.loginForm),t.xp6(1),t.Q6J("ngStyle",t.VKq(12,Y,n.isLogin?"var(--primary)":n.isProcess?"var(--accent)":"var(--warn)")),t.xp6(1),t.Oqu(n.message),t.xp6(10),t.Q6J("ngIf",n.f.email.touched&&n.f.email.invalid),t.xp6(1),t.Q6J("ngIf",n.f.email.valid),t.xp6(4),t.Q6J("type",n.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",n.hide),t.xp6(2),t.Oqu(n.hide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",n.f.password.touched&&n.f.password.invalid),t.xp6(1),t.Q6J("ngIf",n.f.password.valid),t.xp6(2),t.Q6J("ngIf",!n.isLogin))},directives:[s._Y,s.JL,s.sg,m.PC,u.a8,u.n5,u.dn,i.KE,i.hX,f.Nt,s.Fj,s.JJ,s.u,s.Q7,m.O5,h.lW,i.R9,v.Hw,u.hq,i.TO,i.bx],styles:[".login-info[_ngcontent-%COMP%]{font-size:1.2em;color:var(--primary)}.container[_ngcontent-%COMP%]{margin:0 auto;max-width:1200px}.auth[_ngcontent-%COMP%]{background-color:var(--accent)}"]}),e})(),data:{animation:"fade"}}];let y=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.Bz.forChild(b)],g.Bz]}),e})();var J=r(1750);let q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.ez,y,J.m]]}),e})()}}]);