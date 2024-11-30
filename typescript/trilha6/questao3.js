var EmailSender = /** @class */ (function () {
    function EmailSender() {
        this.contatos = [];
    }
    EmailSender.prototype.addContatos = function (contatos) {
        this.contatos.push(contatos);
    };
    EmailSender.prototype.enviarEmail = function (email) {
        console.log("enviado: ".concat(email, " para ").concat(this.contatos));
    };
    EmailSender.prototype.validarInformaçoes = function () {
        console.log("informações validadas");
    };
    return EmailSender;
}());
var emailsender = new EmailSender;
emailsender.addContatos("lucas");
emailsender.enviarEmail("conta criada com sucesso");
emailsender.validarInformaçoes();
