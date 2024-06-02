export class FormularioContacto{
    constructor(nombre,email,asunto,mensaje){
        this.id=window.self.crypto.randomUUID();
        this.asunto = asunto;
        this.nombre = nombre;
        this.email = email;
        this.mensaje = mensaje;
    }
}