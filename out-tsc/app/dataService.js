import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.mediasf = [];
        this.medias = [];
        this.situacao = [];
    }
    DataService.prototype.carregarAlunos = function () {
        var _this = this;
        return this.http.get("api/aluno").pipe(map(function (dataA) {
            _this.alunos = dataA;
            return true;
        }));
    };
    DataService.prototype.carregarProvas = function () {
        var _this = this;
        return this.http.get("api/prova").pipe(map(function (dataP) {
            _this.provas = dataP;
            return true;
        }));
    };
    DataService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=dataService.js.map