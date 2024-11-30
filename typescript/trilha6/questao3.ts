    //baixa coesao
    class EmailSender {
        private contatos: string[] = []
        addContatos(contatos: string) {
            this.contatos.push(contatos)
        }

        enviarEmail(email: string){
            console.log(`enviado: ${email} para ${this.contatos}`)
        }

        validarInformaçoes(){
          console.log("informações validadas")
        
    }
    }
//alta coesao
    class EmailSender {
        private contatos: string[] = []
        private validator: ContactValidator;

  constructor(validator: ContactValidator) {
    this.validator = validator;
  }
        addContatos(contatos: string) {
            this.contatos.push(contatos)
        }

        enviarEmail(email: string){
            console.log(`enviado: ${email} para ${this.contatos}`)
        }
    }
    class ContactValidator{
        validarInformaçoes(){
          console.log("informações validadas")
        
    }
}

    const emailsender = new EmailSender
    emailsender.addContatos("lucas")
    emailsender.enviarEmail("conta criada com sucesso")
    emailsender.validarInformaçoes();