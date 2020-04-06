

function sumar(num1, num2)
{
  if (isNaN(num1) || isNaN(num2)){

    alert("Debes completar todos los campos para calcular");

  }
  else {
    var suma = num1 * num2;
    resultado.innerHTML = 0;
    return suma;

  }
  return 0;
}


function resta(num1,num2)
{
  if (isNaN(num1) || isNaN(num2)){

    alert("Debes completar todos los campos para calcular");

  }
  else{
    var resta = num1 - num2;
    return resta;
  }
  return 0;

}
function multiplicar(num1,num2)
{
if (isNaN(num1) || isNaN(num2)){

  alert("Debes completar todos los campos para calcular");

}
else{
  var multiplicar = num1 * num2;
  return multiplicar;

}
return 0;

}

function dividir(num1,num2)
{
  if (isNaN(num1) || isNaN(num2)){

    alert("Debes completar todos los campos para calcular");

  }
  else{
    var dividir = num1/num2;
    return dividir;
  }
  return 0;
}

function calculadora()
{

  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);

  var operacion = document.getElementById('operacion');
  var opcion = operacion.options[operacion.selectedIndex].text;
  var resultado = document.getElementById('resultado');

  switch (opcion) {
    case "Suma":
     resultado.innerHTML = sumar(num1, num2);
    break;
    case "Resta":
     resultado.innerHTML = resta(num1,num2);
    break;
    case "Multiplicar":
     resultado.innerHTML = multiplicar(num1,num2);
    break;
    case "Dividir":
     resultado.innerHTML = dividir(num1,num2);
    break;
    default:
      alert('Debes Completar los Campos');

  }

  event.preventDefault();
}
