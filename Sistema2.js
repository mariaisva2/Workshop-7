function Cliente(nombre, email,clave,direccion,teléfono){
    this.nombre=nombre;
    this.email=email;
    this.clave=clave;
    this.direccion=direccion;
    this.teléfono=teléfono;
}

function RealizarPedido(restaurante,detallesPedido){
const Pedido = new Pedido(this.restaurante,detallesPedido,);
this.HistorialPedido.push(Pedido);
restaurante.RegistrarPedido(Pedido);
alert(`Pedido realizado por ${this.nombre}`);
return Pedido;
}

function VerHistorialPedidos(){
    console.log(`Historial de pedidos de ${this.nombre}`);
    this.HistorialPedido.array.forEach(Pedido => {
        alert(`Pedido.detallesPedido.join(',')}-Estado:${Pedido.estadoPedido}`);
    });
}
// autenticacion(email,clave){
//     return (this.email === email && this.clave === clave);
// }
function RestauranteDigital(nombre, menu){
 this.nombre = nombre;
 this.menu = menu;
 this.pedidos = pedidos;
}    

function agregarPlato(nombrePlato, nuevoPrecio){
    const plato = this.menu.find(plato => plato.nombre === nombrePlato);
    if(plato){
        plato.precio = nuevoPrecio;
        alert(`Plato${nombrePlato} actualizado con nuevo precio: ${nuevoPrecio}`);     
    }else{
        alert(`El plato ${nombrePlato}no se encontro el menú`);
    }
}

 function RegistrarPedido(){
    this.pedidos.push(Pedido);
}
// function Person(nombre, apellido, edad, profesión, hobbies) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.profesión = profesión;
//     this.hobbies = hobbies;
//   }
  
//   Person.prototype.saludar = function () {
//     return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
//   };
//   function Student(nombre, apellido, edad, promedio, cursos) {
//     Person.call(this, nombre, apellido, edad);
//     this.promedio = promedio;
//     this.cursos = cursos;
//   }
  
//   Student.prototype = Object.create(Person.prototype);
//   Student.prototype.constructor = Student;
  
//   Student.prototype.presentarExamen = function () {
//     alert("Estoy presentando un examen.");
//   };
//   Student.prototype.saludar = function () {
//     return `${Person.prototype.saludar.call(this)} Y soy un estudiante.`;
//   };