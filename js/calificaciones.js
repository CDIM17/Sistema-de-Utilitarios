function calificaciones()
{
  var clase = [];

  //do {
      var cantidad_materias = prompt("Escribe la cantidad de materias que vas a digitar");
  //} while (cantidad_materias > 0 || cantidad_materias == '' || cantidad_materias == null || cantidad_materias == /^[a-z]$/);

  for (var i = 0; i < cantidad_materias; i++){
        document.write('<br>');
        materia = new Array();
        nombre_materia = prompt("Escribe el nombre de la materia a digitar");
        materia[0] = nombre_materia;
        clase.push(materia)
      for (var x = 1; x <= 3; x++){
        if(x == 1)
        {
          var primer_parcial = prompt('Escribe la nota del primer parcial');
          bool_parcial = Boolean(primer_parcial <= 30 && primer_parcial > 0);
          switch (bool_parcial) {
            case true:
              clase[i][1] = primer_parcial;
              break;
            default:
            alert("Error las notas del primer parcial no pueden exceder de 30pts o no pueden ser negativas");
            finish();
          }
        }
        else if (x == 2) {

          var practica_final = prompt('Escribe la nota de la practica final');
          bool_practica = Boolean(practica_final <= 40 && practica_final > 0);

          switch (bool_practica) {
            case true:
            clase[i][2] = practica_final;
              break;
            default:
            alert("Error las notas de la practica final no pueden exceder de 30pts o ser negativos");
            finish();
          }


        }
        else if(x == 3)
        {
          var examen_final = prompt('Escribe la nota del examen final');
          bool_examen = Boolean(examen_final <= 40 && examen_final > 0)
          switch (bool_examen) {
            case true:
             clase[i][3] = examen_final;
              break;
            default:
            alert("Error las notas del examen final no pueden exceder de 30pts o ser nagativas");
            finish();
        }
      }

  }
}

var elementos = [0,"Examen Parcial ", "Practica Final: ", "Examen Final"];

for (var i = 0; i < clase.length; i++) {
  document.write("<br>");
  document.write("<h3>" + clase[i][0] + "</h3>");
  document.write("<ul>")
  for (var x = 1; x < clase[i].length; x++) {
     document.write("<li>" + "<b>" + elementos[x] + "</b>" + ": " + clase[i][x]) + "</li>";
}
document.write("</ul>")
}


}

function suma()
{

  for (var i = 0; i < clase.length; i++) {
    document.write("<br>");
    document.write("<h3>" + clase[i][0] + "</h3>");
    document.write("<ul>")
    for (var x = 1; x < clase[i].length; x++) {
       document.write("<li>" + "<b>" + elementos[x] + "</b>" + ": " + clase[i][x]) + "</li>";
  }
  document.write("</ul>")
  }


}
