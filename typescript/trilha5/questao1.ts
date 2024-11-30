//funciona no typescript playground mas no vs code não consigo transformar em java por algum erro, mas o codigo funciona
abstract class TaskManager {
   
    
    abstract addTask(Task: string): void;
    abstract listTask(): string[];
}

class Project extends TaskManager {
    private tarefas: string[];

    constructor(tarefas: string[] = []) {
        super();
        this.tarefas = tarefas;
    }

    addTask(Task: string): void {
       
        if (this.tarefas.includes(Task)) {
            console.log(`Tarefa "${Task}" já foi adicionada.`);
        } else {
            this.tarefas.push(Task);  
        }
    }

    listTask(): string[] {
        return this.tarefas; 
    }
}


const projeto1 = new Project(["Planejar arquitetura"]);
projeto1.addTask("Desenvolver módulo de login");
projeto1.addTask("Planejar arquitetura"); 
projeto1.addTask("Testar código");

console.log(projeto1.listTask());