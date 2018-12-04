import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Turma1Component } from './turma1/turma1.component';
import { Turma2Component } from './turma2/turma2.component';
import { Turma3Component } from './turma3/turma3.component';
import { CompetComponent } from './compet/compet.component';
var routes = [
    {
        path: '',
        component: Turma1Component
    },
    {
        path: 'turma2',
        component: Turma2Component
    },
    {
        path: 'turma3',
        component: Turma3Component
    },
    {
        path: 'compet',
        component: CompetComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map