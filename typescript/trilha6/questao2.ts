//baixa coesao
class UserManagement {
    private usuarios: string[] = []

    addUsuarios(usuarios: string){
        this.usuarios.push(usuarios)
    }

    enviarEmails(email: string){
        console.log(`email: ${email}, enviado para usuario`)
    }
}
//alta coesao
class UserManagement {
    private usuarios: string[] = []

    addUsuarios(usuarios: string){
        this.usuarios.push(usuarios)
    }

    
}
class EmailNotification extends UserManagement{
enviarEmails(email: string){
    console.log(`email: ${email}, enviado para usuario`)
}
}
const usuario = new UserManagement
usuario.addUsuarios("lucas")
usuario.enviarEmails("conta criada com sucesso")