var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TaskManager = /** @class */ (function () {
    function TaskManager() {
    }
    return TaskManager;
}());
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project(tarefas) {
        if (tarefas === void 0) { tarefas = []; }
        var _this = _super.call(this) || this;
        _this.tarefas = tarefas;
        return _this;
    }
    Project.prototype.addTask = function (Task) {
        // Verifica se a tarefa já existe no array de tarefas
        if (this.tarefas.includes(Task)) {
            console.log("Tarefa \"".concat(Task, "\" j\u00E1 foi adicionada."));
        }
        else {
            this.tarefas.push(Task); // Se não for duplicada, adiciona ao array
        }
    };
    Project.prototype.listTask = function () {
        return this.tarefas; // Retorna a lista de tarefas
    };
    return Project;
}(TaskManager));
// Exemplo de uso:
var projeto1 = new Project(["Planejar arquitetura"]);
projeto1.addTask("Desenvolver módulo de login");
projeto1.addTask("Planejar arquitetura"); // Tentando adicionar uma tarefa duplicada
projeto1.addTask("Testar código");
console.log(projeto1.listTask());
