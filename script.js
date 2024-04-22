function calcular() {
  // Obtener los valores del usuario
  var valor1 = document.getElementById("valor1").value;
  var valor2 = document.getElementById("valor2").value;
  var operacion = document.getElementById("operacion").value;

  // Verificar si ambos valores son válidos
  if (valor1 === "" || valor2 === "") {
    document.getElementById("resultado").innerText = "Por favor, ingresa ambos valores.";
    return;
  }

  // Convertir a número y verificar si es NaN
  var num1 = parseFloat(valor1);
  var num2 = parseFloat(valor2);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("resultado").innerText = "Valores inválidos. Por favor, ingresa números.";
    return;
  }

  var resultado;

  // Realizar la operación seleccionada
  switch (operacion) {
    case "sumar":
      resultado = num1 + num2;
      break;
    case "restar":
      resultado = num1 - num2;
      break;
    case "multiplicar":
      resultado = num1 * num2;
      break;
    case "dividir":
      if (num2 === 0) {
        document.getElementById("resultado").innerText = "Error: División por cero.";
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      document.getElementById("resultado").innerText = "Operación no válida.";
      return;
  }

  // Mostrar el resultado
  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
