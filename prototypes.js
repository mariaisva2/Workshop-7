function Student(nombre, apellido, edad, promedio, cursos) {
    Person.call(this, nombre, apellido, edad);
    this.promedio = promedio;
    this.cursos = cursos;
  }
  
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  
  Student.prototype.presentarExamen = function () {
    console.log("Estoy presentando un examen.");
  };