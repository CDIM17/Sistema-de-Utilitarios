function saludar(){
  var person = prompt("Cual es tu nombre?");
  alert("Bienvenido " + person);
}

function redireccionar(){

  saludar();
  window.location="pages/empleo.html";
}
