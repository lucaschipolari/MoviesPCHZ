export class Categoria{
    constructor(nombreCategoria, descripcion){
        this.nombreCategoria = nombreCategoria;
        this.descripcion = descripcion;
        this.id = window.self.crypto.randomUUID();
    }
}