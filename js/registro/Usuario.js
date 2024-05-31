export class Usuario{
    constructor(email, password){
        this.id=window.self.crypto.randomUUID();
        this.email = email;
        this.password =  password;
    }
}