function Usuario(nombre, email, puntosAcumulados, clave) {
    this.nombre = nombre;
    this.email = email;
    this.puntosAcumulados = puntosAcumulados;
    this.clave = clave;
}
Usuario.prototype.acumularPuntos = function() {
    console.log("Puntos acumulados por el usuario:", this.puntosAcumulados);
};

Usuario.prototype.canjearPuntos = function() {
    console.log("Canjeando puntos");
};


function Producto(nombre, puntosNecesarios) {
    this.nombre = nombre;
    this.puntosNecesarios = puntosNecesarios;
}
Producto.prototype.obtenerInfo = function() {
};

function ProductoFisico(nombre, puntosNecesarios, cantidadDisponible, precio, stock) {
    Producto.call(this, nombre, puntosNecesarios);
    this.cantidadDisponible = cantidadDisponible;
    this.precio = precio;
    this.stock = stock;
}

ProductoFisico.prototype = Object.create(Producto.prototype);

ProductoFisico.prototype.actualizarStock = function() {
  
};


function ProductoDigital(nombre, puntosNecesarios, URL, cantidadDisponible, stock) {
    Producto.call(this, nombre, puntosNecesarios);
    this.URL = URL;
    this.cantidadDisponible = cantidadDisponible;
    this.stock = stock;
}

ProductoDigital.prototype = Object.create(Producto.prototype);

ProductoDigital.prototype.descargar = function() {

};

ProductoDigital.prototype.obtenerProductoEmail = function() {

};


function Actividad(tipo, puntosOtorgados) {
    this.tipo = tipo;
    this.puntosOtorgados = puntosOtorgados;
}

Actividad.prototype.completarActividad = function() {

};

function CategoriaProducto(nombre, descripción) {
    this.nombre = nombre;
    this.descripción = descripción;
}

CategoriaProducto.prototype.listarProductos = function() {
};

function OrdenCanje(usuario, producto, fecha) {
    this.usuario = usuario;
    this.producto = producto;
    this.fecha = fecha;
}

OrdenCanje.prototype.confirmarOrden = function() {

};

OrdenCanje.prototype.cancelarOrden = function() {
 
};

function Administrador(nombre, email, clave) {
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
}

Administrador.prototype.agregarProducto = function() {
};

Administrador.prototype.modificarProducto = function() {
};
Administrador.prototype.eliminarUsuario = function() {
  
};
