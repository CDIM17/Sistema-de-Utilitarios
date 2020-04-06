function sumar(num1, num2)
{
  var suma = num1 * num2;
  return suma;

}

function resta(num1,num2)
{
  var resta = num1 - num2;
  return resta;
}
function multiplicar(num1,num2)
{
  var multiplicar = num1 * num2;
  return multiplicar;
}
function dividir(num1,num2)
{
  var dividir = num1/num2;
  return dividir;
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
      alert('nada');

  }

  event.preventDefault();
}
