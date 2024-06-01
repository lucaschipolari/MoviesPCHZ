export class Categoria{
    constructor(nombreDeCategoria, descripcion){
        this.nombreDeCategoria = nombreDeCategoria;
        this.descripcion = descripcion;
        this.code = window.self.crypto.randomUUID();
    }
}