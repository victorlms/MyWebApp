import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../dataService';
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
    CompetComponent = tslib_1.__decorate([
        Component({
            selector: 'app-compet',
            templateUrl: './compet.component.html',
            styleUrls: ['./compet.component.scss'],
            animations: [
                trigger('linhas', [
                    transition('* => *', [
                        query(':enter', style({ opacity: 0 }), { optional: true }),
                        query(':enter', stagger('300ms', [
                            animate('.6s ease-in', keyframes([
                                style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                style({ opacity: 0.5, transform: 'translateY(35px)', offset: .3 }),
                                style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                            ]))
                        ]), { optional: true }),
                        query(':leave', stagger('300ms', [
                            animate('.6s ease-in', keyframes([
                                style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                                style({ opacity: 0.5, transform: 'translateY(35px)', offset: .3 }),
                                style({ opacity: 0, transform: 'translateY(-75%)', offset: 1 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], CompetComponent);
    return CompetComponent;
}());
export { CompetComponent };
//# sourceMappingURL=compet.component.js.map