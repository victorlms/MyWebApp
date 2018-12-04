(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./AngularApp/app/app-routing.module.ts":
/*!**********************************************!*\
  !*** ./AngularApp/app/app-routing.module.ts ***!
  \**********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./AngularApp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./AngularApp/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./AngularApp/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _turma1_turma1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./turma1/turma1.component */ "./AngularApp/app/turma1/turma1.component.ts");
/* harmony import */ var _turma2_turma2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./turma2/turma2.component */ "./AngularApp/app/turma2/turma2.component.ts");
/* harmony import */ var _turma3_turma3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./turma3/turma3.component */ "./AngularApp/app/turma3/turma3.component.ts");
/* harmony import */ var _compet_compet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compet/compet.component */ "./AngularApp/app/compet/compet.component.ts");







var routes = [
    {
        path: '',
        component: _turma1_turma1_component__WEBPACK_IMPORTED_MODULE_3__["Turma1Component"]
    },
    {
        path: 'turma2',
        component: _turma2_turma2_component__WEBPACK_IMPORTED_MODULE_4__["Turma2Component"]
    },
    {
        path: 'turma3',
        component: _turma3_turma3_component__WEBPACK_IMPORTED_MODULE_5__["Turma3Component"]
    },
    {
        path: 'compet',
        component: _compet_compet_component__WEBPACK_IMPORTED_MODULE_6__["CompetComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./AngularApp/app/app.component.html":
/*!*******************************************!*\
  !*** ./AngularApp/app/app.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\r\n    <li>\r\n        <a routerLink=\"\">Turma 1</a>\r\n    </li>\r\n    <li>\r\n        <a routerLink=\"turma2\">Turma 2</a>\r\n    </li>\r\n    <li>\r\n        <a routerLink=\"turma3\">Turma 3</a>\r\n    </li>\r\n    <li>\r\n        <a routerLink=\"compet\">Competição</a>\r\n    </li>\r\n</ul>\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<ul>\r\n    <li>\r\n        Feito por Victor Lima e Mello dos Santos\r\n    </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./AngularApp/app/app.component.ts":
/*!*****************************************!*\
  !*** ./AngularApp/app/app.component.ts ***!
  \*****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./AngularApp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./AngularApp/node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Meu primeiro app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./AngularApp/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./AngularApp/app/app.module.ts":
/*!**************************************!*\
  !*** ./AngularApp/app/app.module.ts ***!
  \**************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./AngularApp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./AngularApp/node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./AngularApp/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./AngularApp/node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./AngularApp/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./AngularApp/node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./AngularApp/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./AngularApp/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _turma1_turma1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./turma1/turma1.component */ "./AngularApp/app/turma1/turma1.component.ts");
/* harmony import */ var _turma2_turma2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./turma2/turma2.component */ "./AngularApp/app/turma2/turma2.component.ts");
/* harmony import */ var _turma3_turma3_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./turma3/turma3.component */ "./AngularApp/app/turma3/turma3.component.ts");
/* harmony import */ var _compet_compet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./compet/compet.component */ "./AngularApp/app/compet/compet.component.ts");
/* harmony import */ var _dataService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dataService */ "./AngularApp/app/dataService.ts");













var router = [
    {
        path: '',
        component: _turma1_turma1_component__WEBPACK_IMPORTED_MODULE_8__["Turma1Component"]
    },
    {
        path: 'turma2',
        component: _turma2_turma2_component__WEBPACK_IMPORTED_MODULE_9__["Turma2Component"]
    },
    {
        path: 'turma3',
        component: _turma3_turma3_component__WEBPACK_IMPORTED_MODULE_10__["Turma3Component"]
    },
    {
        path: 'compet',
        component: _compet_compet_component__WEBPACK_IMPORTED_MODULE_11__["CompetComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _turma1_turma1_component__WEBPACK_IMPORTED_MODULE_8__["Turma1Component"],
                _turma2_turma2_component__WEBPACK_IMPORTED_MODULE_9__["Turma2Component"],
                _turma3_turma3_component__WEBPACK_IMPORTED_MODULE_10__["Turma3Component"],
                _compet_compet_component__WEBPACK_IMPORTED_MODULE_11__["CompetComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(router, { useHash: true, enableTracing: true }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            providers: [_dataService__WEBPACK_IMPORTED_MODULE_12__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./AngularApp/app/compet/compet.component.html":
/*!*****************************************************!*\
  !*** ./AngularApp/app/compet/compet.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\r\n    <thead>\r\n        <tr class=\"color-dark\">\r\n            <th *ngFor=\"let lab of labels\">{{lab}}</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody [@linhas]=\"labels.length\">\r\n        <tr class=\"color-light\" *ngFor=\"let alu of alunosf; index as i\">\r\n            \r\n            <td>{{alu.nome}}</td>\r\n            <td>{{alu.turma}}</td>\r\n\r\n            <td>{{provas1[i].nota.toFixed(2)}}</td>\r\n            <td>1</td>\r\n\r\n            <td>{{provas2[i].nota.toFixed(2)}}</td>\r\n            <td>1</td>\r\n\r\n            <td>{{provas3[i].nota.toFixed(2)}}</td>\r\n            <td>1</td>\r\n\r\n            <td>{{provasC[i].toFixed(2)}}</td>\r\n            <td>2</td>\r\n            <td>{{temp[i].toFixed(2)}}</td>\r\n            <td [style.background-color]=\"situacao[i] == 'Vencedor' ? '#A5F883' : '#f84646' \" [style.color]=\"'black'\">{{situacao[i]}}</td>\r\n\r\n        </tr>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "./AngularApp/app/compet/compet.component.scss":
/*!*****************************************************!*\
  !*** ./AngularApp/app/compet/compet.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse;\n  height: 10em;\n  width: 100%;\n  float: left;\n  margin: 0 0 2em; }\n  table thead th {\n    padding: 0.35em 0 .35em;\n    font-weight: 400;\n    text-align: center; }\n  table tbody tr {\n    border-bottom: 2px solid #ddd; }\n  table tbody td {\n    text-align: center;\n    height: 3em; }\n  .color-dark {\n  background: #2885C4; }\n  .color-light {\n  background: #57B3F1; }\n  input.text {\n  border: 0;\n  padding: 1em;\n  width: 80%;\n  margin-bottom: 2em; }\n  input.btn {\n  border: 0;\n  display: block;\n  padding: 1em 3em;\n  background: #A5F883;\n  color: #003A61;\n  margin-bottom: 1em;\n  cursor: pointer; }\n  .life-container {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FuZ3VsYXJBcHAvYXBwL2NvbXBldC9DOlxcIHByb2plY3RzXFxNeVdlYkFwcFxcTXlXZWJBcHBcXGJpblxcRGVidWdcXG5ldGNvcmVhcHAyLjEvLi5cXC4uXFwuLlxcQW5ndWxhckFwcFxcYXBwXFxjb21wZXRcXGNvbXBldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osWUFBVztFQUNYLFlBQVc7RUFDWCxnQkFBZSxFQW9CbEI7RUF6QkQ7SUFTWSx3QkFBdUI7SUFDdkIsaUJBQWdCO0lBQ2hCLG1CQUFrQixFQUNyQjtFQVpUO0lBaUJZLDhCQUE2QixFQUNoQztFQWxCVDtJQXFCWSxtQkFBa0I7SUFDbEIsWUFBVyxFQUNkO0VBSVQ7RUFDSSxvQkFBbUIsRUFDdEI7RUFFRDtFQUNJLG9CQUFtQixFQUN0QjtFQUVEO0VBQ0ksVUFBUztFQUNULGFBQVk7RUFDWixXQUFVO0VBQ1YsbUJBQWtCLEVBQ3JCO0VBRUQ7RUFDSSxVQUFTO0VBQ1QsZUFBYztFQUNkLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixnQkFBZSxFQUNsQjtFQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCIiwiZmlsZSI6Ii4uLy4uLy4uL0FuZ3VsYXJBcHAvYXBwL2NvbXBldC9jb21wZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgaGVpZ2h0OiAxMGVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMCAwIDJlbTtcclxuXHJcbiAgICB0aGVhZCB7XHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjM1ZW0gMCAuMzVlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0Ym9keSB7XHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb2xvci1kYXJrIHtcclxuICAgIGJhY2tncm91bmQ6ICMyODg1QzQ7XHJcbn1cclxuXHJcbi5jb2xvci1saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTdCM0YxO1xyXG59XHJcblxyXG5pbnB1dC50ZXh0IHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbmlucHV0LmJ0biB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDFlbSAzZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjQTVGODgzO1xyXG4gICAgY29sb3I6ICMwMDNBNjE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5saWZlLWNvbnRhaW5lciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./AngularApp/app/compet/compet.component.ts":
/*!***************************************************!*\
  !*** ./AngularApp/app/compet/compet.component.ts ***!
  \***************************************************/
/*! exports provided: CompetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetComponent", function() { return CompetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./AngularApp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./AngularApp/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./AngularApp/node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataService */ "./AngularApp/app/dataService.ts");




var CompetComponent = /** @class */ (function () {
    function CompetComponent(data) {
        this.data = data;
        this.alunosf = [];
        this.provas1 = [];
        this.provas2 = [];
        this.provas3 = [];
        this.provasC = [];
        this.medias = [];
        this.mediasf = [];
        this.indices = [];
        this.situacao = [];
        this.labels = [];
        this.temp = [];
    }
    CompetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.carregarAlunos()
            .subscribe(function (success) {
            if (success) {
                _this.alunos = _this.data.alunos;
            }
        });
        this.data.carregarProvas()
            .subscribe(function (success) {
            if (success) {
                _this.provas1 = _this.data.provas.filter(function (prova) { return prova.tipo == 1; });
                _this.provas2 = _this.data.provas.filter(function (prova) { return prova.tipo == 2; });
                _this.provas3 = _this.data.provas.filter(function (prova) { return prova.tipo == 3; });
                //INICIALIZA VALORES ALEATÓRIOS PARA A PROVA ESPECIAL
                for (var j = 0; j < 5; j++) {
                    _this.provasC[j] = Math.random() * 10;
                }
                //CALCULA AS MÉDIAS DOS ALUNOS
                for (var i = 0; i < _this.provas1.length; i++) {
                    _this.medias[i] = (_this.provas1[i].nota + _this.provas2[i].nota * 1.2 + _this.provas3[i].nota * 1.4) / 3.6;
                    _this.mediasf[i] = (_this.provas1[i].nota + _this.provas2[i].nota + _this.provas3[i].nota + _this.provasC[i] * 2) / 5;
                }
                //BUSCA OS ÍNDICES DAS 5 MAIORES MÉDIAS
                Loop1: for (var i = 0; i < _this.mediasf.length; i++) {
                    if (_this.indices.length < 5) {
                        _this.indices[i] = i;
                    }
                    else {
                        Loop2: for (var j = 0; j < 5; j++) {
                            if (_this.mediasf[i] > _this.mediasf[_this.indices[j]]) {
                                _this.indices[j] = i;
                                break Loop2;
                            }
                        }
                    }
                }
                for (var i = 0; i < _this.indices.length; i++) {
                    _this.temp[i] = _this.mediasf[_this.indices[i]];
                    _this.alunosf[i] = _this.alunos[_this.indices[i]];
                    _this.situacao[i] = "Bom trabalho";
                }
                _this.situacao[_this.temp.reduce(function (iMax, x, i, arr) { return x > arr[iMax] ? i : iMax; }, 0)] = "Vencedor";
                //this.situacao[this.temp.indexOf(Math.max(...this.temp))] = "Vencedor";
            }
        });
        this.labels = ["Aluno", "Turma", "Prova 1", "Peso 1", "Prova 2", "Peso 2", "Prova 3", "Peso 3",
            "Prova Especial", "Peso Competição", "Média Final", "Situação"];
    };
    CompetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compet',
            template: __webpack_require__(/*! ./compet.component.html */ "./AngularApp/app/compet/compet.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('linhas', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('300ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.6s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.5, transform: 'translateY(35px)', offset: .3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                            ]))
                        ]), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('300ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.6s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.5, transform: 'translateY(35px)', offset: .3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-75%)', offset: 1 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./compet.component.scss */ "./AngularApp/app/compet/compet.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], CompetComponent);
    return CompetComponent;
}());



/***/ }),

/***/ "./AngularApp/app/dataService.ts":
/*!***************************************!*\
  !*** ./AngularApp/app/dataService.ts ***!
  \***************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./AngularApp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./AngularApp/node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./AngularApp/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./AngularApp/node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");






var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.mediasf = [];
        this.medias = [];
        this.situacao = [];
    }
    DataService.prototype.carregarAlunos = function () {
        var _this = this;
        return this.http.get("api/aluno").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (dataA) {
            _this.alunos = dataA;
            return true;
        }));
    };
    DataService.prototype.carregarProvas = function () {
        var _this = this;
        return this.http.get("api/prova").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (dataP) {
            _this.provas = dataP;
            return true;
        }));
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./AngularApp/app/turma1/turma1.component.html":
/*!*****************************************************!*\
  !*** ./AngularApp/app/turma1/turma1.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\r\n    <thead>\r\n      <tr class=\"color-dark\"> \r\n        <th *ngFor=\"let lab of labels\">{{lab}}</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody [@linhas]=\"labels.length\" >\r\n        <tr class=\"color-light\" *ngFor=\"let alu of alunos; index as i\">\r\n\r\n            <td>{{alu.nome}}</td>\r\n            <td>{{alu.turma}}</td>\r\n\r\n            <td>{{provas1[i].nota.toFixed(2)}}</td>\r\n            <td>1</td>\r\n\r\n            <td>{{provas2[i].nota.toFixed(2)}}</td>\r\n            <td>1,2</td>\r\n\r\n            <td>{{provas3[i].nota.toFixed(2)}}</td>\r\n            <td>1,4</td>\r\n\r\n            <td>{{medias[i].toFixed(2)}}</td>\r\n            <td>{{provasf[i].nota}}</td>\r\n            <td>{{mediasf[i].toFixed(2)}}</td>\r\n            <td [style.background-color]=\"mediasf[i] > 5 == 1 ? '#A5F883' : '#f84646' \" [style.color]=\"'black'\">{{situacao[i]}}</td>\r\n\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./AngularApp/app/turma1/turma1.component.scss":
/*!*****************************************************!*\
  !*** ./AngularApp/app/turma1/turma1.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse;\n  height: 10em;\n  width: 100%;\n  float: left;\n  margin: 0 0 2em; }\n  table thead th {\n    padding: 0.35em 0 .35em;\n    font-weight: 400;\n    text-align: center; }\n  table tbody tr {\n    border-bottom: 2px solid #ddd; }\n  table tbody td {\n    text-align: center;\n    height: 3em; }\n  .color-dark {\n  background: #2885C4; }\n  .color-light {\n  background: #57B3F1; }\n  input.text {\n  border: 0;\n  padding: 1em;\n  width: 80%;\n  margin-bottom: 2em; }\n  input.btn {\n  border: 0;\n  display: block;\n  padding: 1em 3em;\n  background: #A5F883;\n  color: #003A61;\n  margin-bottom: 1em;\n  cursor: pointer; }\n  .life-container {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FuZ3VsYXJBcHAvYXBwL3R1cm1hMS9DOlxcIHByb2plY3RzXFxNeVdlYkFwcFxcTXlXZWJBcHBcXGJpblxcRGVidWdcXG5ldGNvcmVhcHAyLjEvLi5cXC4uXFwuLlxcQW5ndWxhckFwcFxcYXBwXFx0dXJtYTFcXHR1cm1hMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QjtFQUN6QixhQUFXO0VBQ1gsWUFBVTtFQUNWLFlBQVU7RUFDVixnQkFBYyxFQW1CakI7RUF4QkQ7SUFRRyx3QkFBdUI7SUFDZCxpQkFBZ0I7SUFDaEIsbUJBQWtCLEVBQ3JCO0VBWFQ7SUFpQkcsOEJBQTZCLEVBQ3ZCO0VBbEJUO0lBb0JZLG1CQUFrQjtJQUNsQixZQUFXLEVBQ2Q7RUFJVDtFQUNJLG9CQUFtQixFQUN0QjtFQUVEO0VBQ0ksb0JBQW1CLEVBQ3RCO0VBRUQ7RUFDSSxVQUFTO0VBQ1QsYUFBWTtFQUNaLFdBQVU7RUFDVixtQkFBa0IsRUFDckI7RUFFRDtFQUNJLFVBQVE7RUFDUixlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixlQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLGdCQUFjLEVBQ2pCO0VBRUQ7RUFDSSxrQkFBaUIsRUFDcEIiLCJmaWxlIjoiLi4vLi4vLi4vQW5ndWxhckFwcC9hcHAvdHVybWExL3R1cm1hMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGhlaWdodDoxMGVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBtYXJnaW46MCAwIDJlbTtcclxuICAgIHRoZWFke1xyXG4gICAgICAgIHRoIHtcclxuXHRcdFx0cGFkZGluZzogMC4zNWVtIDAgLjM1ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICB0Ym9keXtcclxuXHRcdHRyIHtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRke1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogM2VtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbG9yLWRhcmt7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjg4NUM0O1xyXG59XHJcblxyXG4uY29sb3ItbGlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTdCM0YxO1xyXG59XHJcblxyXG5pbnB1dC50ZXh0IHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbmlucHV0LmJ0bntcclxuICAgIGJvcmRlcjowO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxZW0gM2VtO1xyXG4gICAgYmFja2dyb3VuZDogI0E1Rjg4MztcclxuICAgIGNvbG9yOiMwMDNBNjE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuLmxpZmUtY29udGFpbmVye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./AngularApp/app/turma1/turma1.component.ts":
/*!***************************************************!*\
  !*** ./AngularApp/app/turma1/turma1.component.ts ***!
  \***************************************************/
/*! exports provided: Turma1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Turma1Component", function() { return Turma1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./AngularApp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./AngularApp/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./AngularApp/node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataService */ "./AngularApp/app/dataService.ts");




var Turma1Component = /** @class */ (function () {
    function Turma1Component(data) {
        this.data = data;
        this.labels = [];
        this.medias = [];
        this.provasf = [];
        this.mediasf = [];
        this.situacao = [];
        this.indices = [];
        this.check = [];
    }
    Turma1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.data.carregarAlunos()
            .subscribe(function (success) {
            if (success) {
                _this.alunos = _this.data.alunos.filter(function (aluno) { return aluno.turma == 1; });
            }
        });
        this.data.carregarProvas()
            .subscribe(function (success) {
            _this.provas1 = _this.data.provas.filter(function (prova) { return prova.tipo == 1; });
            _this.provas1.splice(19, 40);
            _this.provas2 = _this.data.provas.filter(function (prova) { return prova.tipo == 2; });
            _this.provas2.splice(19, 40);
            _this.provas3 = _this.data.provas.filter(function (prova) { return prova.tipo == 3; });
            _this.provas3.splice(19, 40);
            _this.provasf = _this.data.provas.filter(function (prova) { return prova.tipo == 4; });
            _this.provasf.splice(19, 40);
            for (var i = 0; i < 20; i++) {
                _this.medias[i] = (_this.provas1[i].nota + _this.provas2[i].nota * 1.2 + _this.provas3[i].nota * 1.4) / 3.6;
                if (_this.medias[i] < 4) {
                    _this.provasf[i].nota = 0;
                    _this.mediasf[i] = _this.medias[i];
                    _this.situacao[i] = "Reprovado";
                }
                else if (_this.medias[i] > 6) {
                    _this.provasf[i].nota = 0;
                    _this.mediasf[i] = _this.medias[i];
                    _this.situacao[i] = "Aprovado";
                }
                else {
                    _this.mediasf[i] = ((_this.medias[i] + _this.provasf[i].nota) / 2);
                    _this.provasf[i].nota = _this.provasf[i].nota.toFixed(2);
                    if (_this.mediasf[i] > 5) {
                        _this.situacao[i] = "Aprovado";
                    }
                    else {
                        _this.situacao[i] = "Reprovado";
                    }
                }
            }
        });
        this.labels = ["Aluno", "Turma", "Prova 1", "Peso 1", "Prova 2", "Peso 2", "Prova 3", "Peso 3", "Media", "Prova Final", "Media Final", "Situacao"];
    };
    Turma1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-turma1',
            template: __webpack_require__(/*! ./turma1.component.html */ "./AngularApp/app/turma1/turma1.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('linhas', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('300ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.6s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.5, transform: 'translateY(35px)', offset: .3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                            ]))
                        ]), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('300ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.6s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.5, transform: 'translateY(35px)', offset: .3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-75%)', offset: 1 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./turma1.component.scss */ "./AngularApp/app/turma1/turma1.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], Turma1Component);
    return Turma1Component;
}());



/***/ }),

/***/ "./AngularApp/app/turma2/turma2.component.html":
/*!*****************************************************!*\
  !*** ./AngularApp/app/turma2/turma2.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\r\n    <thead>\r\n        <tr class=\"color-dark\">\r\n            <th *ngFor=\"let lab of labels\">{{lab}}</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody [@linhas]=\"labels.length\">\r\n        <tr class=\"color-light\" *ngFor=\"let alu of alunos; index as i\">\r\n\r\n            <td>{{alu.nome}}</td>\r\n            <td>{{alu.turma}}</td>\r\n\r\n            <td>{{provas1[i].nota.toFixed(2)}}</td>\r\n            <td>1</td>\r\n\r\n            <td>{{provas2[i].nota.toFixed(2)}}</td>\r\n            <td>1,2</td>\r\n\r\n            <td>{{provas3[i].nota.toFixed(2)}}</td>\r\n            <td>1,4</td>\r\n\r\n            <td>{{medias[i].toFixed(2)}}</td>\r\n            <td>{{provasf[i].nota}}</td>\r\n            <td>{{mediasf[i].toFixed(2)}}</td>\r\n            <td [style.background-color]=\"mediasf[i] > 5 == 1 ? '#A5F883' : '#f84646' \" [style.color]=\"'black'\">{{situacao[i]}}</td>\r\n\r\n        </tr>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "./AngularApp/app/turma2/turma2.component.scss":
/*!*****************************************************!*\
  !*** ./AngularApp/app/turma2/turma2.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse;\n  height: 10em;\n  width: 100%;\n  float: left;\n  margin: 0 0 2em; }\n  table thead th {\n    padding: 0.35em 0 .35em;\n    font-weight: 400;\n    text-align: center; }\n  table tbody tr {\n    border-bottom: 2px solid #ddd; }\n  table tbody td {\n    text-align: center;\n    height: 3em; }\n  .color-dark {\n  background: #2885C4; }\n  .color-light {\n  background: #57B3F1; }\n  input.text {\n  border: 0;\n  padding: 1em;\n  width: 80%;\n  margin-bottom: 2em; }\n  input.btn {\n  border: 0;\n  display: block;\n  padding: 1em 3em;\n  background: #A5F883;\n  color: #003A61;\n  margin-bottom: 1em;\n  cursor: pointer; }\n  .life-container {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FuZ3VsYXJBcHAvYXBwL3R1cm1hMi9DOlxcIHByb2plY3RzXFxNeVdlYkFwcFxcTXlXZWJBcHBcXGJpblxcRGVidWdcXG5ldGNvcmVhcHAyLjEvLi5cXC4uXFwuLlxcQW5ndWxhckFwcFxcYXBwXFx0dXJtYTJcXHR1cm1hMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osWUFBVztFQUNYLFlBQVc7RUFDWCxnQkFBZSxFQW9CbEI7RUF6QkQ7SUFTWSx3QkFBdUI7SUFDdkIsaUJBQWdCO0lBQ2hCLG1CQUFrQixFQUNyQjtFQVpUO0lBaUJZLDhCQUE2QixFQUNoQztFQWxCVDtJQXFCWSxtQkFBa0I7SUFDbEIsWUFBVyxFQUNkO0VBSVQ7RUFDSSxvQkFBbUIsRUFDdEI7RUFFRDtFQUNJLG9CQUFtQixFQUN0QjtFQUVEO0VBQ0ksVUFBUztFQUNULGFBQVk7RUFDWixXQUFVO0VBQ1YsbUJBQWtCLEVBQ3JCO0VBRUQ7RUFDSSxVQUFTO0VBQ1QsZUFBYztFQUNkLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixnQkFBZSxFQUNsQjtFQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCIiwiZmlsZSI6Ii4uLy4uLy4uL0FuZ3VsYXJBcHAvYXBwL3R1cm1hMi90dXJtYTIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgaGVpZ2h0OiAxMGVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMCAwIDJlbTtcclxuXHJcbiAgICB0aGVhZCB7XHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjM1ZW0gMCAuMzVlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0Ym9keSB7XHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb2xvci1kYXJrIHtcclxuICAgIGJhY2tncm91bmQ6ICMyODg1QzQ7XHJcbn1cclxuXHJcbi5jb2xvci1saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTdCM0YxO1xyXG59XHJcblxyXG5pbnB1dC50ZXh0IHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbmlucHV0LmJ0biB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDFlbSAzZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjQTVGODgzO1xyXG4gICAgY29sb3I6ICMwMDNBNjE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5saWZlLWNvbnRhaW5lciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./AngularApp/app/turma2/turma2.component.ts":
/*!***************************************************!*\
  !*** ./AngularApp/app/turma2/turma2.component.ts ***!
  \***************************************************/
/*! exports provided: Turma2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Turma2Component", function() { return Turma2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./AngularApp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./AngularApp/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./AngularApp/node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataService */ "./AngularApp/app/dataService.ts");




var Turma2Component = /** @class */ (function () {
    function Turma2Component(data) {
        this.data = data;
        this.labels = [];
        this.medias = [];
        this.provasf = [];
        this.mediasf = [];
        this.situacao = [];
        this.indices = [];
        this.check = [];
    }
    Turma2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.data.carregarAlunos()
            .subscribe(function (success) {
            if (success) {
                _this.alunos = _this.data.alunos.filter(function (aluno) { return aluno.turma == 2; });
            }
        });
        this.data.carregarProvas()
            .subscribe(function (success) {
            _this.provas1 = _this.data.provas.filter(function (prova) { return prova.tipo == 1; });
            _this.provas1.splice(0, 20);
            _this.provas1.splice(19, 20);
            _this.provas2 = _this.data.provas.filter(function (prova) { return prova.tipo == 2; });
            _this.provas2.splice(0, 20);
            _this.provas2.splice(19, 20);
            _this.provas3 = _this.data.provas.filter(function (prova) { return prova.tipo == 3; });
            _this.provas3.splice(0, 20);
            _this.provas3.splice(19, 20);
            _this.provasf = _this.data.provas.filter(function (prova) { return prova.tipo == 4; });
            _this.provasf.splice(0, 20);
            _this.provasf.splice(19, 20);
            for (var i = 0; i < 20; i++) {
                _this.medias[i] = (_this.provas1[i].nota + _this.provas2[i].nota * 1.2 + _this.provas3[i].nota * 1.4) / 3.6;
                if (_this.medias[i] < 4) {
                    _this.provasf[i].nota = 0;
                    _this.mediasf[i] = _this.medias[i];
                    _this.situacao[i] = "Reprovado";
                }
                else if (_this.medias[i] > 6) {
                    _this.provasf[i].nota = 0;
                    _this.mediasf[i] = _this.medias[i];
                    _this.situacao[i] = "Aprovado";
                }
                else {
                    _this.mediasf[i] = ((_this.medias[i] + _this.provasf[i].nota) / 2);
                    _this.provasf[i].nota = _this.provasf[i].nota.toFixed(2);
                    if (_this.mediasf[i] > 5) {
                        _this.situacao[i] = "Aprovado";
                    }
                    else {
                        _this.situacao[i] = "Reprovado";
                    }
                }
            }
        });
        this.labels = ["Aluno", "Turma", "Prova 1", "Peso 1", "Prova 2", "Peso 2", "Prova 3", "Peso 3", "Media", "Prova Final", "Media Final", "Situacao"];
    };
    Turma2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-turma2',
            template: __webpack_require__(/*! ./turma2.component.html */ "./AngularApp/app/turma2/turma2.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('linhas', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('300ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.6s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.5, transform: 'translateY(35px)', offset: .3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                            ]))
                        ]), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('300ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.6s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.5, transform: 'translateY(35px)', offset: .3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-75%)', offset: 1 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./turma2.component.scss */ "./AngularApp/app/turma2/turma2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], Turma2Component);
    return Turma2Component;
}());



/***/ }),

/***/ "./AngularApp/app/turma3/turma3.component.html":
/*!*****************************************************!*\
  !*** ./AngularApp/app/turma3/turma3.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\r\n    <thead>\r\n        <tr class=\"color-dark\">\r\n            <th *ngFor=\"let lab of labels\">{{lab}}</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody [@linhas]=\"labels.length\">\r\n        <tr class=\"color-light\" *ngFor=\"let alu of alunos; index as i\">\r\n\r\n            <td>{{alu.nome}}</td>\r\n            <td>{{alu.turma}}</td>\r\n\r\n            <td>{{provas1[i].nota.toFixed(2)}}</td>\r\n            <td>1</td>\r\n\r\n            <td>{{provas2[i].nota.toFixed(2)}}</td>\r\n            <td>1,2</td>\r\n\r\n            <td>{{provas3[i].nota.toFixed(2)}}</td>\r\n            <td>1,4</td>\r\n\r\n            <td>{{medias[i].toFixed(2)}}</td>\r\n            <td>{{provasf[i].nota}}</td>\r\n            <td>{{mediasf[i].toFixed(2)}}</td>\r\n            <td [style.background-color]=\"mediasf[i] > 5 == 1 ? '#A5F883' : '#f84646' \" [style.color]=\"'black'\">{{situacao[i]}}</td>\r\n\r\n        </tr>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "./AngularApp/app/turma3/turma3.component.scss":
/*!*****************************************************!*\
  !*** ./AngularApp/app/turma3/turma3.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse;\n  height: 10em;\n  width: 100%;\n  float: left;\n  margin: 0 0 2em; }\n  table thead th {\n    padding: 0.35em 0 .35em;\n    font-weight: 400;\n    text-align: center; }\n  table tbody tr {\n    border-bottom: 2px solid #ddd; }\n  table tbody td {\n    text-align: center;\n    height: 3em; }\n  .color-dark {\n  background: #2885C4; }\n  .color-light {\n  background: #57B3F1; }\n  input.text {\n  border: 0;\n  padding: 1em;\n  width: 80%;\n  margin-bottom: 2em; }\n  input.btn {\n  border: 0;\n  display: block;\n  padding: 1em 3em;\n  background: #A5F883;\n  color: #003A61;\n  margin-bottom: 1em;\n  cursor: pointer; }\n  .life-container {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FuZ3VsYXJBcHAvYXBwL3R1cm1hMy9DOlxcIHByb2plY3RzXFxNeVdlYkFwcFxcTXlXZWJBcHBcXGJpblxcRGVidWdcXG5ldGNvcmVhcHAyLjEvLi5cXC4uXFwuLlxcQW5ndWxhckFwcFxcYXBwXFx0dXJtYTNcXHR1cm1hMy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osWUFBVztFQUNYLFlBQVc7RUFDWCxnQkFBZSxFQW9CbEI7RUF6QkQ7SUFTWSx3QkFBdUI7SUFDdkIsaUJBQWdCO0lBQ2hCLG1CQUFrQixFQUNyQjtFQVpUO0lBaUJZLDhCQUE2QixFQUNoQztFQWxCVDtJQXFCWSxtQkFBa0I7SUFDbEIsWUFBVyxFQUNkO0VBSVQ7RUFDSSxvQkFBbUIsRUFDdEI7RUFFRDtFQUNJLG9CQUFtQixFQUN0QjtFQUVEO0VBQ0ksVUFBUztFQUNULGFBQVk7RUFDWixXQUFVO0VBQ1YsbUJBQWtCLEVBQ3JCO0VBRUQ7RUFDSSxVQUFTO0VBQ1QsZUFBYztFQUNkLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixnQkFBZSxFQUNsQjtFQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCIiwiZmlsZSI6Ii4uLy4uLy4uL0FuZ3VsYXJBcHAvYXBwL3R1cm1hMy90dXJtYTMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgaGVpZ2h0OiAxMGVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMCAwIDJlbTtcclxuXHJcbiAgICB0aGVhZCB7XHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjM1ZW0gMCAuMzVlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0Ym9keSB7XHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb2xvci1kYXJrIHtcclxuICAgIGJhY2tncm91bmQ6ICMyODg1QzQ7XHJcbn1cclxuXHJcbi5jb2xvci1saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTdCM0YxO1xyXG59XHJcblxyXG5pbnB1dC50ZXh0IHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbmlucHV0LmJ0biB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDFlbSAzZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjQTVGODgzO1xyXG4gICAgY29sb3I6ICMwMDNBNjE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5saWZlLWNvbnRhaW5lciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./AngularApp/app/turma3/turma3.component.ts":
/*!***************************************************!*\
  !*** ./AngularApp/app/turma3/turma3.component.ts ***!
  \***************************************************/
/*! exports provided: Turma3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Turma3Component", function() { return Turma3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./AngularApp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./AngularApp/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./AngularApp/node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataService */ "./AngularApp/app/dataService.ts");




var Turma3Component = /** @class */ (function () {
    function Turma3Component(data) {
        this.data = data;
        this.labels = [];
        this.medias = [];
        this.provasf = [];
        this.mediasf = [];
        this.situacao = [];
        this.indices = [];
        this.check = [];
    }
    Turma3Component.prototype.ngOnInit = function () {
        var _this = this;
        this.data.carregarAlunos()
            .subscribe(function (success) {
            if (success) {
                _this.alunos = _this.data.alunos.filter(function (aluno) { return aluno.turma == 3; });
            }
        });
        this.data.carregarProvas()
            .subscribe(function (success) {
            _this.provas1 = _this.data.provas.filter(function (prova) { return prova.tipo == 1; });
            _this.provas1.splice(0, 40);
            _this.provas2 = _this.data.provas.filter(function (prova) { return prova.tipo == 2; });
            _this.provas2.splice(0, 40);
            _this.provas3 = _this.data.provas.filter(function (prova) { return prova.tipo == 3; });
            _this.provas3.splice(0, 40);
            _this.provasf = _this.data.provas.filter(function (prova) { return prova.tipo == 4; });
            _this.provasf.splice(0, 40);
            for (var i = 0; i < 20; i++) {
                _this.medias[i] = (_this.provas1[i].nota + _this.provas2[i].nota * 1.2 + _this.provas3[i].nota * 1.4) / 3.6;
                if (_this.medias[i] < 4) {
                    _this.provasf[i].nota = 0;
                    _this.mediasf[i] = _this.medias[i];
                    _this.situacao[i] = "Reprovado";
                }
                else if (_this.medias[i] > 6) {
                    _this.provasf[i].nota = 0;
                    _this.mediasf[i] = _this.medias[i];
                    _this.situacao[i] = "Aprovado";
                }
                else {
                    _this.mediasf[i] = ((_this.medias[i] + _this.provasf[i].nota) / 2);
                    _this.provasf[i].nota = _this.provasf[i].nota.toFixed(2);
                    if (_this.mediasf[i] > 5) {
                        _this.situacao[i] = "Aprovado";
                    }
                    else {
                        _this.situacao[i] = "Reprovado";
                    }
                }
            }
        });
        this.labels = ["Aluno", "Turma", "Prova 1", "Peso 1", "Prova 2", "Peso 2", "Prova 3", "Peso 3", "Media", "Prova Final", "Media Final", "Situacao"];
    };
    Turma3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-turma3',
            template: __webpack_require__(/*! ./turma3.component.html */ "./AngularApp/app/turma3/turma3.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('linhas', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('300ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.6s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.5, transform: 'translateY(35px)', offset: .3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                            ]))
                        ]), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('300ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.6s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.5, transform: 'translateY(35px)', offset: .3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-75%)', offset: 1 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./turma3.component.scss */ "./AngularApp/app/turma3/turma3.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], Turma3Component);
    return Turma3Component;
}());



/***/ }),

/***/ "./AngularApp/environments/environment.ts":
/*!************************************************!*\
  !*** ./AngularApp/environments/environment.ts ***!
  \************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./AngularApp/main.ts":
/*!****************************!*\
  !*** ./AngularApp/main.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./AngularApp/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./AngularApp/node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./AngularApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./AngularApp/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./AngularApp/node_modules/@angular/core/fesm5 lazy recursive":
/*!***************************************************************************!*\
  !*** ./AngularApp/node_modules/@angular/core/fesm5 lazy namespace object ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./AngularApp/node_modules/@angular/core/fesm5 lazy recursive";

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./AngularApp/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ projects\MyWebApp\MyWebApp\AngularApp\main.ts */"./AngularApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map