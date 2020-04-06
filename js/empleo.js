function tabla()
{

    var cedula = document.getElementById("cedula").value;
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById('email').value;

    if(cedula == '' || nombre == '' || edad == '' || email == '')
    {
      alert("Campos Cedula, Nombre, Edad y email son obligatorios");

    }
    else if(edad > 122 || edad < 1)
    {
      alert("Ingresar una edad Valida")
    }
    else {

    var tabla = document.getElementById("myTable").rows[1].cells;
    tabla[0].innerHTML = cedula;
    tabla[1].innerHTML = nombre;
    tabla[2].innerHTML = edad;
    tabla[3].innerHTML = direccion;
    tabla[4].innerHTML = telefono;
    tabla[5].innerHTML = email;

      if (edad >= 60 && edad <= 110) {

        tabla[6].innerHTML = "Abuelo";

      }
      else if (edad >= 40 && edad < 60){

        tabla[6].innerHTML = "Padre";

      }
      else if (edad >= 20){

        tabla[6].innerHTML= "Hijo";

      }
      else if (edad < 20 && edad > 0){

        tabla[6].innerHTML = "Nieto";

      }
      else{

        alert("Ingresar edad Valida");
        tabla[2].innerHTML = "Nula";


      }
    }

    event.preventDefault()

}
function limpiarFormulario() {
    document.getElementById("myForm").reset();
  }
