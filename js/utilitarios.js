
function conversor_monedas()
{

  var valor        = document.getElementById('valor_moneda').value;
  var moneda_valor = document.getElementById('moneda_valor');
  var moneda_conv  = document.getElementById('moneda_conv');

  var valor_moneda = parseInt(document.getElementById('valor_moneda').value);
  var a = moneda_valor.value;
  var b = moneda_conv.value;

  var moneda_valor_op = moneda_valor.options[moneda_valor.selectedIndex].text;
  var moneda_conv_op  = moneda_conv.options[moneda_conv.selectedIndex].text;

  var result_moneda = document.getElementById('result_moneda');

  if (valor  == '' || a == '' || b == ''){

    alert("Debes completar todos los campos para hacer la conversión de monedas");

  }
  else if(moneda_valor_op == 'Peso' && moneda_conv_op == 'Dolar'){
    var result = valor_moneda / 54.20;

    result_moneda.value = result;

  }
  else if(moneda_valor_op == 'Dolar' && moneda_conv_op == 'Peso'){
    var result = valor_moneda * 54.20;

    result_moneda.value = result;

  }
  else if(moneda_valor_op == 'Peso' && moneda_conv_op == 'Euro'){
    var result = valor_moneda / 58.56;

    result_moneda.value = result;

  }
  else if(moneda_valor_op == 'Euro' && moneda_conv_op == 'Peso'){
    var result = valor_moneda * 58.56;

    result_moneda.value = result;

  }
  else if(moneda_valor_op == 'Euro' && moneda_conv_op == 'Dolar'){
    alert("Lo Sentimos, la conversion solamente es en base a la moneda dominicana");

  }
  else if(moneda_valor_op == 'Dolar' && moneda_conv_op == 'Euro'){
    alert("Lo Sentimos, la conversion solamente es en base a la moneda dominican");

  }
  else if(moneda_valor_op == moneda_conv_op){
    alert("No Puedes realizar la conversion con el mismo tipo de moneda");

  }

  event.preventDefault();
}

function limpiarForm_moneda()
{

  var formMoneda = document.getElementById('formMoneda').reset();

}
function conversor_temperatura()
{
/*Para convertir de ºC a ºF use la fórmula:   ºF = ºC x 1.8 + 32.
Para convertir de ºF a ºC use la fórmula:   ºC = (ºF-32) ÷ 1.8.
Para convertir de K a ºC use la fórmula:   ºC = K – 273.15
Para convertir de ºC a K use la fórmula: K = ºC + 273.15.
Para convertir de ºF a K use la fórmula: K = 5/9 (ºF – 32) + 273.15.
Para convertir de K a ºF use la fórmula:   ºF = 1.8(K – 273.15) + 32.
var moneda_valor_op = moneda_valor.options[moneda_valor.selectedIndex].text;
var moneda_conv_op  = moneda_conv.options[moneda_conv.selectedIndex].text;
*/

var valor_escala = document.getElementById('valor_escala');
var escala_valor = document.getElementById('escala_valor');
var escala_conv  = document.getElementById('escala_conv');

var v1 = valor_escala.value;
var v2 = escala_valor.value;
var v3 = escala_conv.value;

var temp = parseInt(valor_escala.value);

var escala_valor_op = escala_valor.options[escala_valor.selectedIndex].text;
var escala_conv_op = escala_conv.options[escala_conv.selectedIndex].text;

var result_escala = document.getElementById('result_escala');

if (v1 == '' || v2 == '' || v3 == '') {

  alert('Todos los campos deben estar llenos, para realizar la conversión');

}
else if(escala_valor_op == 'Celsius' && escala_conv_op == 'Fahrenheit'){

  var f = temp * 1.8 + 32;
  result_escala.value = f;
}
else if(escala_valor_op == 'Fahrenheit' && escala_conv_op == 'Celsius'){

  var c = (temp - 32) / 1.8;
  result_escala.value = c;
}
else if(escala_valor_op == 'Celsius' && escala_conv_op == 'Kelvin'){

  var k = temp + 273;
  result_escala.value = k;
}
else if(escala_valor_op == 'Kelvin' && escala_conv_op == 'Celsius'){

  var k = temp - 273;
  result_escala.value = k;
}
else if(escala_valor_op == 'Fahrenheit' && escala_conv_op == 'Kelvin'){
  //K = 5/9 (ºF – 32) + 273.15.
  var x = 5/9
  var y = temp - 32;
  var k = x * y + 273.15;
  result_escala.value = k;
}
else if(escala_valor_op == 'Kelvin' && escala_conv_op == 'Fahrenheit'){
  //K a ºF use la fórmula:   ºF = 1.8(K – 273.15) + 32
  var x = temp - 273.15;
  var f = 1.8 * x + 32;
  result_escala.value = f;
}
else if (escala_valor_op == escala_conv_op) {
  alert("Favor de Elegir escalas diferentes para realizar la conversion");

}

event.preventDefault();

}
