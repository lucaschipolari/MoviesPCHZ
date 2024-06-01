export class Usuario{
    constructor(email, password, isAdmin){
        this.id=window.self.crypto.randomUUID();
        this.email = email;
        this.password =  password;
        this.isAdmin = isAdmin;
    }
}