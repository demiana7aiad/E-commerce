"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[939],{939:(x,m,i)=>{i.r(m),i.d(m,{ForgetpasswordComponent:()=>v});var p=i(6814),c=i(1120),s=i(95),t=i(4769),l=i(9862);let u=(()=>{class o{constructor(e){this._HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com/api/v1/auth/"}forgetPassword(e){return this._HttpClient.post(this.baseUrl+"forgotPasswords",e)}resetCode(e){return this._HttpClient.post(this.baseUrl+"verifyResetCode",e)}resetPassword(e){return this._HttpClient.post(this.baseUrl+"resetPassword",e)}static#t=this.\u0275fac=function(r){return new(r||o)(t.LFG(l.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function g(o,a){if(1&o&&(t.TgZ(0,"p",11),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.userMsg)}}function d(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",3)(1,"h2",4),t._uU(2,"please enter your email"),t.qZA(),t.TgZ(3,"form",5),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.forgetPassword())}),t.TgZ(4,"div",6),t._UZ(5,"input",7),t.TgZ(6,"label",8),t._uU(7,"Email "),t.qZA()(),t.TgZ(8,"button",9),t._uU(9,"verify"),t.qZA(),t.YNc(10,g,2,1,"p",10),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(3),t.Q6J("formGroup",e.forgetForm),t.xp6(7),t.Q6J("ngIf",e.userMsg)}}function f(o,a){if(1&o&&(t.TgZ(0,"p",11),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.userMsg)}}function h(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",3)(1,"h2",12),t._uU(2,"please enter your verification code"),t.qZA(),t.TgZ(3,"form",5),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.resetCode())}),t.TgZ(4,"div",6),t._UZ(5,"input",13),t.TgZ(6,"label",8),t._uU(7,"code "),t.qZA()(),t.TgZ(8,"button",9),t._uU(9,"verify"),t.qZA(),t.YNc(10,f,2,1,"p",10),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(3),t.Q6J("formGroup",e.resetCodeForm),t.xp6(7),t.Q6J("ngIf",e.userMsg)}}function w(o,a){if(1&o&&(t.TgZ(0,"p",11),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.userMsg)}}function _(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",3)(1,"h2",12),t._uU(2,"reset your account password"),t.qZA(),t.TgZ(3,"form",5),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.resetPassword())}),t.TgZ(4,"div",6),t._UZ(5,"input",14),t.TgZ(6,"label",8),t._uU(7,"email "),t.qZA()(),t.TgZ(8,"div",6),t._UZ(9,"input",15),t.TgZ(10,"label",8),t._uU(11,"password "),t.qZA()(),t.TgZ(12,"button",16),t._uU(13,"reset password"),t.qZA(),t.YNc(14,w,2,1,"p",10),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(3),t.Q6J("formGroup",e.resetPasswordForm),t.xp6(11),t.Q6J("ngIf",e.userMsg)}}let v=(()=>{class o{constructor(e,r){this._ForgetpassService=e,this._Router=r,this.step1=!0,this.step2=!1,this.step3=!1,this.email="",this.userMsg="",this.forgetForm=new s.cw({email:new s.NI("")}),this.resetCodeForm=new s.cw({resetCode:new s.NI("")}),this.resetPasswordForm=new s.cw({email:new s.NI(""),newPassword:new s.NI("")})}forgetPassword(){let e=this.forgetForm.value;this.email=e.email,this._ForgetpassService.forgetPassword(e).subscribe({next:r=>{this.userMsg=r.message,this.step1=!1,this.step2=!0},error:r=>{this.userMsg=r.error.message}})}resetCode(){this._ForgetpassService.resetCode(this.resetCodeForm.value).subscribe({next:r=>{this.userMsg=r.status,this.step2=!1,this.step3=!0},error:r=>{this.userMsg=r.error.message}})}resetPassword(){let e=this.resetPasswordForm.value;e.email=this.email,this._ForgetpassService.resetPassword(e).subscribe({next:r=>{r.token&&(localStorage.setItem("etoken",r.token),this._Router.navigate(["/home"]))},error:r=>{this.userMsg=r.error.message}})}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(u),t.Y36(c.F0))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-forgetpassword"]],standalone:!0,features:[t.jDz],decls:3,vars:3,consts:[["class","container m-5 p-5",4,"ngIf"],["class","container  m-5 p-5",4,"ngIf"],["class","container  m-5 p-5 ",4,"ngIf"],[1,"container","m-5","p-5"],[1,"fw-bold","font-family","text"],[1,"ng-untouched","ng-pristine","ng-invalid",3,"formGroup","ngSubmit"],[1,"form-floating","mb-3","text"],["formControlName","email","type","email","id","floatingInput","placeholder","name@example.com","formcontrolname","email",1,"form-control","ng-untouched","ng-pristine","ng-invalid"],["for","floatingInput"],["type","submit",1,"btn","btn-lg","me-auto","btn-outline-info"],["class","alert alert-danger w-75 mx-auto p-1 mb-0 mt-2 text-center",4,"ngIf"],[1,"alert","alert-danger","w-75","mx-auto","p-1","mb-0","mt-2","text-center"],[1,"fw-bold","text"],["formControlName"," resetCode","type","number","id","floatingInput","placeholder","your code","formcontrolname","code",1,"form-control","ng-untouched","ng-pristine","ng-invalid"],["formControlName","email","type","email","id","floatingInput","placeholder","your email","formcontrolname","email",1,"form-control","ng-untouched","ng-pristine","ng-invalid"],["formControlName","newPassword","type","password","id","floatingInput","placeholder","your newPassword","formcontrolname","newPassword",1,"form-control","ng-untouched","ng-pristine","ng-invalid"],["routerLink","/home","routerLinkActive","active-link","type","submit",1,"btn","btn-lg","me-auto","btn-outline-info","my-3"]],template:function(r,n){1&r&&(t.YNc(0,d,11,2,"div",0),t.YNc(1,h,11,2,"div",1),t.YNc(2,_,15,2,"div",2)),2&r&&(t.Q6J("ngIf",n.step1),t.xp6(1),t.Q6J("ngIf",n.step2),t.xp6(1),t.Q6J("ngIf",n.step3))},dependencies:[p.ez,p.O5,c.rH,c.Od,s.UX,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.sg,s.u],styles:[".container[_ngcontent-%COMP%]{background-color:#00838f}.text[_ngcontent-%COMP%]{color:#26c6da}.btn[_ngcontent-%COMP%]{background-color:#26c6da;color:#000}"]})}return o})()}}]);