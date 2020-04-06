function calificaciones()
{

  var clase = [];

  //do {
      var cantidad_materias = prompt("Escribe la cantidad de materias que vas a digitar");
  //} while (cantidad_materias > 0 || cantidad_materias == '' || cantidad_materias == null || cantidad_materias == /^[a-z]$/);

  for (var i = 0; i < cantidad_materias; i++){
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
  var elementos = [0,"Examen Parcial: ", "Practica Final: ", "Examen Final: "];

  var opcion = parseInt(prompt("Elija una de las siguientes opcion: \n 1- Consultar Calificaciones\n2- Sumatoria de Notas\n 3- Promedio de Calificaciones\n4- Valor Mayor\n5- Valor Menor"));

  switch (opcion) {
//**********************************************************************************************//
    case 1:

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

    break;
//**********************************************************************************************//

    case 2:
      var materia = prompt("De cual materia quieres ver la suma de las notas?");
      var suma = 0;
      for (var i = 0; i < clase.length; i++) {
        if (clase[i][0] == materia){

          for (var x = 1; x < clase[i].length; x++) {
             nota = parseInt(clase[i][x]);
             suma = suma + nota;
        }

        }
      }
      for (var i = 0; i < clase.length; i++) {
        if (clase[i][0] == materia){
          document.write("<h3>" + clase[i][0] + "</h3>");
          document.write("<ul>");
          for (var x = 1; x < clase[i].length; x++) {
              document.write("<li>" + "<b>" + elementos[x] + "</b>" + ": " + clase[i][x]) + "</li>";
        }
        document.write("</ul>");
        }
      }

      document.write("La suma de todas las notas de " + materia + " es igual a " +  suma);
      break;
//**********************************************************************************************//

    case 3:
        criterio_prom = parseInt(prompt("De que criterio quieres el promedio de las notas?\n1- Examenes Parciales\n2- Practicas Finales\n 3- Examenes Finales"));

        switch (criterio_prom) {
          case 1:
            var contador = 0;
            var suma = 0;
            for (var i = 0; i < clase.length; i++) {
              document.write("<h3> " + clase[i][0] + "</h3>");
              for (var x = 1; x < 2; x++) {
                  document.write("<li>" + "<b>" + elementos[1] + "</b>" + ": " + clase[i][1]) + "</li>";
                  nota = parseInt(clase[i][1]);
                  contador = contador + 1;
                  suma = suma + nota;
            }
            }
            promedio = suma / contador;
            document.write("<br>");
            document.write("El promedio de las notas de los examenes parcial es " + promedio);
            break;

            case 2:
              var contador = 0;
              var suma = 0;
              for (var i = 0; i < clase.length; i++) {
                document.write("<h3> " + clase[i][0] + "</h3>");
                for (var x = 1; x < 2; x++) {
                    document.write("<li>" + "<b>" + elementos[2] + "</b>" + ": " + clase[i][2]) + "</li>";
                    nota = parseInt(clase[i][2]);
                    contador = contador + 1;
                    suma = suma + nota;
              }
              }
              promedio = suma / contador;
              document.write("<br>");
              document.write("El promedio de las notas de las Practicas finales es " + promedio);
              break;

              case 3:

              var contador = 0;
              var suma = 0;
              for (var i = 0; i < clase.length; i++) {
                document.write("<h3> " + clase[i][0] + "</h3>");
                for (var x = 1; x < 2; x++) {
                    document.write("<li>" + "<b>" + elementos[3] + "</b>" + ": " + clase[i][3]) + "</li>";
                    nota = parseInt(clase[i][3]);
                    contador = contador + 1;
                    suma = suma + nota;
              }
              }
              promedio = suma / contador;
              document.write("<br>");
              document.write("El promedio de las notas de los examenes finales es " + promedio);
              break;

          default:

        }
      break;
//**********************************************************************************************//
    case 4:

        

      break;
//**********************************************************************************************//
    case 5:
      alert("Opcion 5");
      break;
//**********************************************************************************************//
    default:
      alert("");
      break;
  }

event.preventDefault();


}
