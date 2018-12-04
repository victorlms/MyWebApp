import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Turma1Component } from './turma1/turma1.component';
import { Turma2Component } from './turma2/turma2.component';
import { Turma3Component } from './turma3/turma3.component';
import { CompetComponent } from './compet/compet.component';
import { DataService } from './dataService';
var router = [
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                Turma1Component,
                Turma2Component,
                Turma3Component,
                CompetComponent
            ],
            imports: [
                AppRoutingModule,
                BrowserAnimationsModule,
                BrowserModule,
                RouterModule.forRoot(router, { useHash: true, enableTracing: true }),
                HttpClientModule,
            ],
            providers: [DataService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map