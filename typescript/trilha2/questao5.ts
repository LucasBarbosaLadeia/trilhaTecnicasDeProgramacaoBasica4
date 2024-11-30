class Agenda {
    private compromissos: string[]

    constructor(compromissos: string[]){
        this.compromissos = compromissos

    }

    criarCompromisso(compromisso:string) {
        
        this.compromissos.push(compromisso);
    }

    listarCompromisso(){
        console.log(`compromissos: ${this.compromissos}`)
    }
}
const agenda1 = new Agenda(["medico", "cabelereiro"])
agenda1.criarCompromisso("dentista")
agenda1.listarCompromisso();