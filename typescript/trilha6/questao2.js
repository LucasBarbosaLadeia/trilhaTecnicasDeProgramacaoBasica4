var UserManagement = /** @class */ (function () {
    function UserManagement() {
        this.usuarios = [];
    }
    UserManagement.prototype.addUsuarios = function (usuarios) {
        this.usuarios.push(usuarios);
    };
    UserManagement.prototype.enviarEmails = function (email) {
        console.log("email: ".concat(email, ", enviado para ").concat(this.usuarios));
    };
    return UserManagement;
}());
var usuario = new UserManagement;
usuario.addUsuarios("lucas");
usuario.enviarEmails("conta criada com sucesso");
