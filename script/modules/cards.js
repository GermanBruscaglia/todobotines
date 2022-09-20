export default class Card {
    constructor(imagen ,marca, modelo, precio, id){
        this.imagen = imagen,
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio
        this.id = id
    }

    getImagen(){
        return this.imagen
    }
    getMarca(){
        return this.marca
    }
    getModelo(){
        return this.modelo
    }
    getPrecio(){
        return this.precio
    }
    getId(){
        return this.id
    }
}