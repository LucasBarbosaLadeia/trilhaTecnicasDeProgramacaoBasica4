var Agenda = /** @class */ (function () {
    function Agenda(compromissos) {
        this.compromissos = compromissos;
    }
    Agenda.prototype.criarCompromisso = function (compromisso) {
        this.compromissos.push(compromisso);
    };
    Agenda.prototype.listarCompromisso = function () {
        console.log("compromissos: ".concat(this.compromissos));
    };
    return Agenda;
}());
var agenda1 = new Agenda(["medico", "cabelereiro"]);
agenda1.criarCompromisso("dentista");
agenda1.listarCompromisso();
