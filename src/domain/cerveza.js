//los archivos de dominion convienen
//que tenngan extensión .js

export default class Cerveza{
    constructor(titulo, descripcion, graduacion, nombreImagen, precio, cantidad){
        this.titulo = titulo,
        this.descripcion = descripcion,
        this.graduacion = graduacion,
        this.nombreImagen = nombreImagen,
        this.precio = precio
        this.cantidad = cantidad
    }

    match(property, other) {
        return this[property].toLowerCase().includes(other[property].toLowerCase())
    }

    matches(otraCerveza) {
        return (this.titulo.toLowerCase().includes(otraCerveza.titulo.toLowerCase())) && (this.graduacion === otraCerveza.graduacion)
    }
}

