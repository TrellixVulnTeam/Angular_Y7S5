(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{CXQP:function(t,e,i){"use strict";i.r(e),i.d(e,"ShoppingListModule",function(){return g});var n=i("3Pt+"),o=i("tyNb"),r=i("PCNd"),s=i("cS/a"),c=i("fXoL"),b=i("9rNa"),u=i("ofXK"),p=["f"];function d(t,e){if(1&t){var i=c.Mb();c.Lb(0,"button",13),c.Sb("click",function(){return c.ec(i),c.Ub().onDelete()}),c.ic(1," Delete "),c.Kb()}}var a=function(){function t(t){this.shoppingListService=t,this.editMode=!1}return t.prototype.ngOnInit=function(){var t=this;this.subscription=this.shoppingListService.startEditing.subscribe(function(e){t.editMode=!0,t.editedItemIndex=e,t.editItem=t.shoppingListService.getIngredient(e),t.slForm.setValue({name:t.editItem.name,amount:t.editItem.amount})})},t.prototype.onSubmit=function(t){var e=t.value,i=new b.a(e.name,e.amount);this.editMode?(this.shoppingListService.updateIngredient(this.editedItemIndex,i),this.editMode=!1):this.shoppingListService.addIngredient(i),this.resetForm()},t.prototype.resetForm=function(){this.slForm.reset(),this.editMode=!1},t.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},t.prototype.onDelete=function(){this.editMode=!1,this.resetForm(),this.shoppingListService.deleteIngredient(this.editedItemIndex)},t.\u0275fac=function(e){return new(e||t)(c.Ib(s.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-shopping-edit"]],viewQuery:function(t,e){var i;1&t&&c.mc(p,1),2&t&&c.ac(i=c.Tb())&&(e.slForm=i.first)},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","pattern","^[1-9]+[0-9]*$","required","",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,e){if(1&t){var i=c.Mb();c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"form",2,3),c.Sb("ngSubmit",function(){c.ec(i);var t=c.bc(3);return e.onSubmit(t)}),c.Lb(4,"div",0),c.Lb(5,"div",4),c.Lb(6,"label",5),c.ic(7,"Name"),c.Kb(),c.Jb(8,"input",6),c.Kb(),c.Lb(9,"div",7),c.Lb(10,"label",8),c.ic(11,"Amount"),c.Kb(),c.Jb(12,"input",9),c.Kb(),c.Kb(),c.Lb(13,"div",0),c.Lb(14,"div",1),c.Lb(15,"button",10),c.ic(16),c.Kb(),c.hc(17,d,2,0,"button",11),c.Lb(18,"button",12),c.Sb("click",function(){return e.resetForm()}),c.ic(19," Clear "),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb()}if(2&t){var n=c.bc(3);c.yb(15),c.Vb("disabled",!n.valid),c.yb(1),c.kc(" ",e.editMode?"Update":"Add"," "),c.yb(1),c.Vb("ngIf",e.editMode)}},directives:[n.u,n.m,n.n,n.a,n.l,n.o,n.s,n.p,n.q,u.i],styles:[""]}),t}();function m(t,e){if(1&t){var i=c.Mb();c.Lb(0,"a",4),c.Sb("click",function(){c.ec(i);var t=e.index;return c.Ub().onEditItem(t)}),c.ic(1),c.Kb()}if(2&t){var n=e.$implicit;c.yb(1),c.lc(" ",n.name," (",n.amount,") ")}}var f=function(){function t(t){this.shoppingListService=t}return t.prototype.ngOnInit=function(){var t=this;this.ingredients=this.shoppingListService.getIngredients(),this.igChangeSub=this.shoppingListService.ingredientsChanged.subscribe(function(e){t.ingredients=e}),this.shoppingListService.ingredientsSelected.subscribe()},t.prototype.ngOnDestroy=function(){this.igChangeSub.unsubscribe()},t.prototype.onEditItem=function(t){this.shoppingListService.startEditing.next(t)},t.\u0275fac=function(e){return new(e||t)(c.Ib(s.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(c.Lb(0,"div",0),c.Lb(1,"div",1),c.Jb(2,"app-shopping-edit"),c.Jb(3,"hr"),c.Lb(4,"ul",2),c.hc(5,m,2,2,"a",3),c.Kb(),c.Kb(),c.Kb()),2&t&&(c.yb(5),c.Vb("ngForOf",e.ingredients))},directives:[a,u.h],styles:[""]}),t}(),g=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({imports:[[o.f.forChild([{path:"",component:f}]),n.j,r.a]]}),t}()}}]);