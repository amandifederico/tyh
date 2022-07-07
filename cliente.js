class Cliente{
    nombre = null;
    
    apellido = null;
    
    documento = null;
   
    cuit = null;

    _omicilio = null;
    
    get cuit() {
        return this.cuit;
    }
    set cuit(value) {
        this.cuit = value;
    }
    

    /*GETTER & SETTERS */
    get domicilio() {
        return this.domicilio;
    }
    set domicilio(value) {
        this.domicilio = value;
    }
    get nombre() {
        return this.nombre;
    }
    set nombre(value) {
        this.nombre = value;
    }
    get apellido() {
        return this.apellido;
    }
    set apellido(value) {
        this.apellido = value;
    }
    get documento() {
        return this.documento;
    }
    set documento(value) {
        this.documento = value;
    }
    
    
}
module.exports = Cliente;