import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../dataService';
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
    Turma1Component = tslib_1.__decorate([
        Component({
            selector: 'app-turma1',
            templateUrl: './turma1.component.html',
            styleUrls: ['./turma1.component.scss'],
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
    ], Turma1Component);
    return Turma1Component;
}());
export { Turma1Component };
//# sourceMappingURL=turma1.component.js.map