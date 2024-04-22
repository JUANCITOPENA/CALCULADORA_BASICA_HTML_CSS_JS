// Test para validar los archivos HTML, CSS y JavaScript

// 1. Validar la estructura del archivo HTML
function testHTMLStructure() {
  console.log("========== Validando la estructura del archivo HTML ==========");

  console.log("🔎 Validando la estructura del archivo HTML...");
  
  const elementosEsperados = [
    'h2',  // Título
    'input#valor1',  // Primer valor
    'input#valor2',  // Segundo valor
    'select#operacion',  // Selector de operaciones
    'button',  // Botón para calcular
    'p#resultado'  // Donde se muestra el resultado
  ];

  let todoPresente = true;

  elementosEsperados.forEach(selector => {
    const elemento = document.querySelector(selector);
    if (!elemento) {
      console.error(`❌ Elemento ${selector} no encontrado en el HTML.`);
      todoPresente = false;
    } else {
      console.log(`✔️ Elemento ${selector} encontrado.`);
    }
  });

  return todoPresente;
}

// 2. Validar la sintaxis del archivo CSS
function testCSSSyntax() {
  console.log("=================== Validando la sintaxis del archivo CSS ===================");

  console.log("🔎 Validando la sintaxis del archivo CSS...");

  const styleSheets = document.styleSheets;

  let cssSinErrores = true;

  for (let styleSheet of styleSheets) {
    for (let rule of styleSheet.cssRules) {
      if (rule.cssText) {
        console.log(`✔️ Regla CSS: ${rule.cssText}`);
      } else {
        console.error(`❌ Error con la regla CSS: ${rule.cssText}`);
        cssSinErrores = false;
      }
    }
  }

  return cssSinErrores;
}

// 3. Validar la funcionalidad del archivo JavaScript
function testJavaScriptFunctionality() {
  console.log("=========== Validando la funcionalidad del archivo JavaScript ==========");

  console.log("🔎 Validando la funcionalidad del archivo JavaScript...");
  
  // Validar la funcionalidad de la calculadora
  const resultadosEsperados = [
    { valor1: 10, valor2: 15, operacion: 'sumar', resultadoEsperado: 25 },
    { valor1: 10, valor2: 5, operacion: 'restar', resultadoEsperado: 5 },
    { valor1: 3, valor2: 7, operacion: 'multiplicar', resultadoEsperado: 21 },
    { valor1: 10, valor2: 2, operacion: 'dividir', resultadoEsperado: 5 },
  ];

  let funcionalidadCorrecta = true;

  resultadosEsperados.forEach(({ valor1, valor2, operacion, resultadoEsperado }) => {
    document.querySelector('#valor1').value = valor1;
    document.querySelector('#valor2').value = valor2;
    document.querySelector('#operacion').value = operacion;

    document.querySelector('button').click();

    const resultado = parseFloat(document.querySelector('#resultado').innerText.split(':')[1]);
    
    if (resultado !== resultadoEsperado) {
      console.error(`❌ Error en la operación ${operacion}: se esperaba ${resultadoEsperado}, pero se obtuvo ${resultado}.`);
      funcionalidadCorrecta = false;
    } else {
      console.log(`✔️ Operación ${operacion} correcta: resultado esperado y obtenido es ${resultado}.`);
    }
  });

  return funcionalidadCorrecta;
}

// Ejecutar los tests y mostrar los resultados
function runTests() {
  console.log("🏃 Ejecutando tests...");

  const htmlValido = testHTMLStructure();
  const cssSinErrores = testCSSSyntax();
  const funcionalidadCorrecta = testJavaScriptFunctionality();

  if (htmlValido && cssSinErrores && funcionalidadCorrecta) {
    console.log("🎉 Todos los tests pasaron con éxito. 😊");
  } else {
    console.error("❌ Algunos tests fallaron. Revisa los detalles anteriores.😢");
  }
}

// Ejecutar los tests al cargar la página
document.addEventListener("DOMContentLoaded", runTests);
