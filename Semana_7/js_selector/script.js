// ============================================
// OBJ 1: Seleccionar y modificar — "Botón mágico"
// ============================================
//
// 🎯 Meta: encontrar elementos con querySelector
//    y cambiar su contenido con textContent.
//
// ============================================

console.log("=== OBJ 1: El botón mágico ===");

const titulo = document.querySelector("#titulo");
const boton = document.querySelector("#btnCambiar");

// 1. ✏️ TU TURNO: selecciona el título (#titulo) y el botón (#btnCambiar)
//    Pista: const titulo = document.querySelector("#titulo");

// 2. ✏️ TU TURNO: escucha el click del botón y cambia el texto del título
//    Pista: boton.addEventListener("click", () => {
//             titulo.textContent = "¡Hola, JavaScript! 🎉";
//           });

boton.addEventListener("click", () => {
  titulo.textContent = "¡Hola, JavaScript! 🎉";
});


// ===== CHECK (no borres esta sección) =====
const btnCheck = document.querySelector("#btnCheck");
const tituloEl = document.querySelector("#titulo");
const autocheck = document.querySelector("#autocheck");
const textoInicial = tituloEl.textContent; // estado inicial, para poder re-verificar

const resultados = [];
const check = (nombre, fn) => {
  try {
    const ok = fn();
    resultados.push(ok);
    console.log(ok ? `  ✅ ${nombre}` : `  ❌ ${nombre}`);
  } catch (e) {
    resultados.push(false);
    console.log(`  ❌ ${nombre} — falta completar (${e.name})`);
  }
};

const verificar = () => {
  resultados.length = 0;
  console.log("— Check —");
  check("el clic cambia el texto del título", () => {
    tituloEl.textContent = textoInicial;
    document.querySelector("#btnCambiar").click();
    const despues = tituloEl.textContent;
    return despues !== textoInicial && despues.length > 0 && despues.includes("JavaScript");
  });
  const bien = resultados.filter(Boolean).length;
  const total = resultados.length;
  autocheck.textContent = `Resultado: ${bien}/${total} ✅ ${bien === total ? "¡Todo bien! 🎉" : "— ¡sigue intentando! 💪"}`;
  console.log(bien === total ? "🎉 ¡Todo bien!" : "💪 ¡Sigue intentando!");
};

btnCheck.addEventListener("click", verificar);
