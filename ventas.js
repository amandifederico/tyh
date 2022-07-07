class Ventas{
    cliente = null;

    estado = null;

    fecha_venta = null;

    fecha_pago = null;

    fecha_entrega = null;

    productos = [];


    constructor (fecha_venta) {
        this.cliente = null;
        this.fecha_venta = fecha_venta;
        this.fecha_pago = null;
        this.fecha_entrega = null;
        this.productos = [];

        //Object.freeze();
        this.estado=algo;//VENDIDO
    }

    /*GETTER & SETTERS */
    get cliente() {
        return this._cliente;
    }
    set cliente(value) {
        this._cliente = value;
    }
    get estado() {
        return this._estado;
    }
    set estado(value) {
        this._estado = value;
    }
    get fecha_venta() {
        return this._fecha_venta;
    }
    set fecha_venta(value) {
        this._fecha_venta = value;
    }
    get fecha_pago() {
        return this._fecha_pago;
    }
    set fecha_pago(value) {
        this._fecha_pago = value;
    }
    get fecha_entrega() {
        return this._fecha_entrega;
    }
    set fecha_entrega(value) {
        this._fecha_entrega = value;
    }
    get productos() {
        return this._productos;
    }
    set productos(value) {
        this._productos = value;
    }

}
modeule.exports = Ventas;