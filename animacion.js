const modulo = {
  titulo: "Módulo 1",
  descripcion: "Elige un subtema para ver su información, sus fórmulas y cómo se aplican.",
  subtemas: [
    {
      titulo: "Combinatoria: orden y repetición",
      informacion: `<p>La combinatoria estudia métodos para contar agrupaciones y formas de ordenar elementos. Antes de contar hay que entender la situación con cuatro preguntas: cuál es la <strong>población</strong> (todo lo disponible), cuál es la <strong>muestra</strong> (lo que se selecciona), si <strong>importa el orden</strong> y si <strong>se puede repetir</strong>.</p>`,
      formulas: [
        { formula: "Orden + repetición", nota: "Las dos preguntas que se hacen antes de contar" },
        { formula: "Población = total de elementos", nota: "Todo lo disponible" },
        { formula: "Muestra = elementos seleccionados", nota: "Lo que se agrupa u ordena" },
        { formula: "3! = 3 × 2 × 1 = 6", nota: "Ordenar 3 elementos diferentes" },
      ],
      funciona: `<p>Primero se identifica el tipo de caso, todavía sin calcular el total. Si al cambiar el orden cambian las funciones o posiciones, el orden importa (presidente y secretario). Si un elemento puede aparecer más de una vez, hay repetición (un PIN como 1111). La única cuenta de esta parte es 3!, las formas de ordenar 3 elementos diferentes.</p>`,
      ejemplo: {
        enunciado: "Tienes tres carros: azul, rojo y negro. ¿De cuántas formas se pueden ordenar?",
        pasos: [
          "Población: 3 carros.",
          "Muestra: 3 carros (se ordenan los tres).",
          "¿Importa el orden? Sí: azul-rojo-negro no es igual a azul-negro-rojo.",
          "¿Se puede repetir? No, cada carro existe una sola vez.",
          "Se usa 3! = 3 × 2 × 1."
        ],
        resultado: "3! = 6 formas"
      }
    },
    {
      titulo: "Factorial de un número y propiedades",
      informacion: `<p>El factorial de un número entero no negativo n se escribe n! y cuenta las formas de ordenar n elementos diferentes. Se calcula multiplicando n por todos los enteros positivos menores que él, hasta llegar a 1.</p>`,
      formulas: [
        { formula: "n! = n × (n−1) × (n−2) × … × 2 × 1", nota: "Se multiplica bajando de uno en uno hasta 1" },
        { formula: "n! = n × (n−1)!", nota: "Propiedad recursiva" },
        { formula: "0! = 1", nota: "Por definición" },
        { formula: "1! = 1", nota: "Un solo elemento tiene un solo orden" },
        { formula: "1! = 1, 2! = 2, 3! = 6, 4! = 24, 5! = 120", nota: "Valores básicos" },
      ],
      funciona: `<p>Para calcularlo, se baja de uno en uno: 5! = 5 × 4 × 3 × 2 × 1 = 120. La propiedad n! = n × (n−1)! permite escribir un factorial grande a partir de uno menor (6! = 6 × 5!), y es la base para simplificar. Por definición, 0! = 1 y 1! = 1.</p>`,
      ejemplo: {
        enunciado: "Escribe 6! usando 5!.",
        pasos: [
          "Escribe 6! completo: 6 × 5 × 4 × 3 × 2 × 1.",
          "Reconoce que 5 × 4 × 3 × 2 × 1 es exactamente 5!.",
          "Aplica n! = n × (n−1)!: 6! = 6 × 5!.",
          "Sustituye 5! = 120: 6 × 120."
        ],
        resultado: "6! = 6 × 5! = 720"
      }
    },
    {
      titulo: "Operaciones con factoriales",
      informacion: `<p>Las operaciones con factoriales aparecen al resolver permutaciones, variaciones y combinaciones. La clave es expandir solo lo necesario y luego simplificar, sin escribir multiplicaciones enormes.</p>`,
      formulas: [
        { formula: "n! = n × (n−1)!", nota: "Base para simplificar" },
        { formula: "{7!}/{6!} = 7", nota: "Se escribe 7! como 7 × 6! y se cancela 6!" },
        { formula: "{15!}/{13!} = 15 × 14 = 210", nota: "Se escribe 15! como 15 × 14 × 13!" },
        { formula: "4! ≠ 4", nota: "Un factorial solo se simplifica con otro factorial igual" },
      ],
      funciona: `<p>En una división, identifica el factorial más grande, escríbelo usando el factorial del denominador (15! = 15 × 14 × 13!), cancela los factoriales iguales y multiplica lo que queda. Cuidado: un factorial solo se cancela con otro factorial igual, no con el número solo (4! ≠ 4).</p>`,
      ejemplo: {
        enunciado: "Simplifica (10! × 6!) / (9! × 4!).",
        pasos: [
          "Reescribe 10! = 10 × 9!.",
          "Reescribe 6! = 6 × 5 × 4!.",
          "La expresión queda (10 × 9! × 6 × 5 × 4!) / (9! × 4!).",
          "Cancela 9! con 9! y 4! con 4!.",
          "Multiplica lo que queda: 10 × 6 × 5."
        ],
        resultado: "300"
      }
    },
    {
      titulo: "Principio fundamental del conteo",
      informacion: `<p>También se llama regla de la multiplicación. Se usa cuando un proceso se forma por varios eventos que deben ocurrir juntos: si ocurre A <strong>y</strong> ocurre B, se multiplican sus posibilidades. Sirve para contar configuraciones de un sistema, claves, placas o pruebas de software.</p>`,
      formulas: [
        { formula: "Total = m × n", nota: "Si el evento A ocurre de m formas Y el evento B de n formas" },
        { formula: "Total = n₁ × n₂ × n₃ × …", nota: "Con más eventos se siguen multiplicando" },
        { formula: "Y → multiplicar", nota: "Los eventos ocurren juntos" },
        { formula: "O → sumar", nota: "Se elige una sola opción entre varias" },
      ],
      funciona: `<p>Piensa en una cajita por cada etapa y escribe cuántas opciones hay en ella; si todas deben ocurrir, se multiplican. La palabra del problema ayuda: «y» indica multiplicar; «o» indica que solo se elige una opción y se suma (ir al colegio en bicicleta o bus o carro o caminando: 2 + 3 + 4 + 1 = 10).</p>`,
      ejemplo: {
        enunciado: "¿Cuántas placas se pueden formar con dos letras y un dígito? (26 letras, dígitos del 0 al 9)",
        pasos: [
          "Primera letra: 26 opciones.",
          "Segunda letra: 26 opciones.",
          "Dígito: 10 opciones.",
          "Todo ocurre junto (letra Y letra Y dígito), entonces se multiplica: 26 × 26 × 10."
        ],
        resultado: "6,760 placas"
      }
    },
    {
      titulo: "Condición: permutación o variación",
      informacion: `<p>Permutación y variación se usan cuando <strong>sí importa el orden</strong>. La diferencia es si se ordenan <strong>todos</strong> los elementos (permutación) o solo <strong>algunos</strong> (variación). Algunos libros llaman permutación a ambas.</p>`,
      formulas: [
        { formula: "¿Importa el orden? No → Combinación", nota: "" },
        { formula: "Orden sí + todos → Permutación", nota: "Se ordenan todos los elementos" },
        { formula: "P(n) = n!", nota: "Fórmula de la permutación" },
        { formula: "Orden sí + algunos → Variación", nota: "Se ordenan solo r de los n elementos" },
        { formula: "V[n,r] = {n!}/{(n−r)!}", nota: "Fórmula de la variación" },
        { formula: "C[n,r] = {n!}/{(n−r)! · r!}", nota: "Combinación: el orden no importa" },
        { formula: "V[n,n] = P(n)", nota: "Si r = n, la variación coincide con la permutación" }
      ],
      funciona: `<p>Pregunta primero si importa el orden: haz dos arreglos con los mismos elementos y mira si son diferentes (ABC ≠ CBA). Si no importa, es combinación. Si importa, pregunta si se ordenan todos (permutación) o algunos (variación). Cuando r = n, la fórmula de variación da el mismo resultado que la permutación.</p>`,
      ejemplo: {
        enunciado: "De 8 estudiantes se eligen presidente, vicepresidente y secretario. ¿De cuántas formas?",
        pasos: [
          "¿Importa el orden? Sí, no es igual ser presidente que secretario.",
          "¿Se ordenan todos? No, solo 3 de los 8: es variación.",
          "Datos: n = 8, r = 3.",
          "V(8,3) = 8! / (8−3)! = 8! / 5!.",
          "Se escribe 8! = 8 × 7 × 6 × 5! y se cancela 5!: 8 × 7 × 6."
        ],
        resultado: "V(8,3) = 336"
      }
    },
    {
      titulo: "Permutación y variación",
      informacion: `<p>La permutación trabaja con ordenamientos y tiene tres casos: <strong>lineal</strong> (elementos en fila o lista), <strong>circular</strong> (alrededor de una mesa o ciclo) y <strong>con elementos repetidos</strong>. La variación ordena r elementos tomados de una población de n.</p>`,
      formulas: [
        { formula: "P(n) = n!", nota: "Permutación lineal: todos en fila" },
        { formula: "Pc(n) = (n−1)!", nota: "Permutación circular: alrededor de una mesa" },
        { formula: "{n!}/{m₁! · m₂! · m₃! · …}", nota: "Permutación con elementos repetidos" },
        { formula: "V[n,r] = {n!}/{(n−r)!}", nota: "Variación: se ordenan r de n elementos" },
      ],
      funciona: `<p>En la lineal se usa n!. En la circular se fija una posición, porque girar a todos no crea una organización nueva: (n−1)!; por ejemplo, 5 personas en una mesa dan 4! = 24 formas. Con repetidos se divide n! entre el factorial de cada repetición, porque intercambiar elementos iguales no cambia el resultado.</p>`,
      ejemplo: {
        enunciado: "¿Cuántas formas hay de ordenar las letras de MATEMÁTICAS?",
        pasos: [
          "Tiene 11 letras, con A = 3, M = 2 y T = 2.",
          "Fórmula con repetidos: 11! / (3! · 2! · 2!).",
          "Escribe 11! = 11 × 10 × 9 × 8 × 7 × 6 × 5 × 4 × 3! y cancela 3!.",
          "Queda (11 × 10 × 9 × 8 × 7 × 6 × 5 × 4) / (2 × 2).",
          "Como 2 × 2 = 4, se cancela con el 4: 11 × 10 × 9 × 8 × 7 × 6 × 5."
        ],
        resultado: "1,663,200 formas"
      }
    }
  ]
};

/* ============================================================
   A PARTIR DE AQUÍ NO NECESITAS CAMBIAR NADA
   ============================================================ */
const $ = (id) => document.getElementById(id);
const vistaIndice = $("vista-indice");
const vistaDetalle = $("vista-detalle");


// Lluvia de fórmulas matemáticas (puedes agregar o quitar fórmulas de esta lista)
const formulas = [
  "E = mc²", "a² + b² = c²", "∫ x² dx = x³/3", "e^(iπ) + 1 = 0",
  "∑ 1/n² = π²/6", "x = (−b ± √(b²−4ac)) / 2a", "sin²θ + cos²θ = 1",
  "d/dx sin x = cos x", "lim x→0 sin x / x = 1", "P(x) = aₙxⁿ + … + a₁x + a₀",
  "(a + b)² = a² + 2ab + b²", "n! = n·(n−1)!", "Δ = b² − 4ac",
  "log(ab) = log a + log b", "P(A|B) = P(B|A)·P(A) / P(B)",
  "(x+1)(x−1) = x² − 1", "f′(x) = lim h→0 [f(x+h)−f(x)]/h", "π ≈ 3.14159",
  "∇·E = ρ/ε₀", "∞", "√2", "∂f/∂x", "x³ + 2x² − 5x + 1"
];
const colores = ["#f472b6", "#4cc9f0", "#a78bfa"];
const lluvia = $("lluvia");
const cantidad = window.innerWidth < 600 ? 8 : 16;
const azar = (a, b) => a + Math.random() * (b - a);

for (let i = 0; i < cantidad; i++) {
  const f = document.createElement("span");
  f.textContent = formulas[Math.floor(Math.random() * formulas.length)];
  f.style.left = azar(0, 92) + "%";
  f.style.color = colores[Math.floor(Math.random() * colores.length)];
  f.style.fontSize = azar(14, 24) + "px";
  f.style.animationDuration = azar(14, 26) + "s";
  f.style.animationDelay = "-" + azar(0, 26) + "s";
  f.style.setProperty("--giro", azar(-12, 12) + "deg");
  lluvia.appendChild(f);
}

document.title = modulo.titulo;
$("titulo-modulo").textContent = modulo.titulo;
$("intro-modulo").textContent = modulo.descripcion;

// Construir la lista de subtemas
$("lista").innerHTML = modulo.subtemas.map((s, i) => `
  <li>
    <a href="#/${i + 1}">
      <span class="num">1.${i + 1}</span>
      <span class="nombre">${s.titulo}</span>
    </a>
  </li>`).join("");

// ---- FÓRMULAS BONITAS (MathML) ----
// Escribe la fórmula como texto normal y usa dos atajos:
//   {arriba}/{abajo}   -> fracción con raya        {n!}/{(n−r)!}
//   P[n,r]             -> letra con subíndices     P[n,r] se ve como ₙPᵣ (también V[n,r], C[n,r])
// Todo lo demás se escribe tal cual: "n! = n × (n−1)!"
const escMate = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function cierreLlave(s, i) {          // posición de la llave que cierra la de s[i]
  let d = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === "{") d++;
    else if (s[j] === "}" && --d === 0) return j;
  }
  return -1;
}

function filaMate(s) {
  const t = [];                       // [tipo, MathML]: o = operador, s = espacio, otro = resto
  let i = 0, m;
  while (i < s.length) {
    const r = s.slice(i);
    if (r[0] === "{") {               // fracción {a}/{b}
      const f = cierreLlave(s, i);
      const g = f > 0 && s[f + 1] === "/" && s[f + 2] === "{" ? cierreLlave(s, f + 2) : -1;
      if (g > 0) {
        t.push(["x", `<mfrac linethickness="2px"><mrow>${filaMate(s.slice(i + 1, f))}</mrow><mrow>${filaMate(s.slice(f + 3, g))}</mrow></mfrac>`]);
        i = g + 1; continue;
      }
    }
    if ((m = /^([A-Za-z])\[([^\],]+),([^\]]+)\]/.exec(r))) {      // P[n,r]
      t.push(["x", `<mmultiscripts><mi>${m[1]}</mi><mrow>${filaMate(m[3])}</mrow><none/><mprescripts/><mrow>${filaMate(m[2])}</mrow><none/></mmultiscripts>`]);
    } else if ((m = /^\d[\d,.]*\d|^\d/.exec(r))) {
      t.push(["n", `<mn>${m[0]}</mn>`]);
    } else if ((m = /^\p{L}+[₀-₉]*/u.exec(r))) {
      const letras = m[0].replace(/[₀-₉]/g, "").length;
      t.push(["w", letras === 1 ? `<mi>${escMate(m[0])}</mi>` : `<mtext>${escMate(m[0])}</mtext>`]);
    } else if ((m = /^\s+/.exec(r))) {
      t.push(["s", ""]);
    } else {
      m = [r[0]];
      t.push("¿¡?".includes(r[0]) ? ["w", `<mtext>${r[0]}</mtext>`] : ["o", `<mo${"()!".includes(r[0]) ? ' lspace="0" rspace="0" stretchy="false"' : ""}>${r[0] === "-" ? "−" : escMate(r[0])}</mo>`]);
    }
    i += m[0].length;
  }
  return t.map(([tipo, x], k) => {    // un espacio solo se conserva entre dos "palabras"
    if (tipo !== "s") return x;
    const a = t[k - 1], b = t[k + 1];
    return a && b && a[0] !== "o" && b[0] !== "o" ? '<mspace width="0.4em"/>' : "";
  }).join("");
}

function mate(src) {
  if (/</.test(src)) return src;      // si escribiste HTML a mano, se respeta
  return `<math display="block">${filaMate(src)}</math>`;
}

// ---- REPASO: generadores de ejercicios (cada uno crea números nuevos al azar) ----
const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const fac = (n) => (n <= 1 ? 1 : n * fac(n - 1));
const fmt = (n) => n.toLocaleString("en-US");
const prod = (n, r) => { let p = 1; for (let i = 0; i < r; i++) p *= n - i; return p; };

// Casos para clasificar (se usan en los temas 1.1 y 1.5)
const ORDEN = [
  [(n) => `Se eligen presidente y secretario entre ${n} estudiantes.`, "si", "Los cargos son diferentes, así que cambiar el orden cambia el resultado."],
  [(n, k) => `Se escoge un comité de ${k} estudiantes entre ${n}.`, "no", "Todos pertenecen al mismo comité; el orden no cambia nada."],
  [() => "Un PIN de 4 dígitos para entrar al sistema.", "si", "1234 no es igual a 4321."],
  [(n, k) => `Se eligen ${k} sabores de helado entre ${n} sabores.`, "no", "Son los mismos sabores sin importar el orden."],
  [() => "Asignar los roles administrador y auditor a dos usuarios.", "si", "Los roles hacen funciones diferentes."],
  [(n, k) => `Se eligen ${k} de ${n} estudiantes para revisar un módulo (todos hacen la misma tarea).`, "no", "No hay cargos distintos."],
  [() => "Ordenar los pasos autenticar, validar y responder en una API.", "si", "Cambiar la secuencia puede cambiar el resultado."],
];
const REPETICION = [
  [() => "Un PIN de 4 dígitos (1111 es válido).", "si", "Un mismo dígito puede aparecer varias veces."],
  [() => "Se eligen presidente y secretario; una persona no puede tener ambos cargos.", "no", "Deben ser dos personas distintas."],
  [(n) => `Una heladería tiene ${n} sabores y se piden 3 bolas; el cliente puede pedir tres iguales.`, "si", "El mismo sabor puede aparecer más de una vez."],
  [() => "Ordenar tres carros diferentes: azul, rojo y negro.", "no", "Cada carro existe una sola vez."],
  [() => "Una placa de 2 letras y un dígito, donde las dos letras pueden coincidir.", "si", "Una letra puede repetirse."],
  [(n) => `Se eligen 3 de ${n} estudiantes para un comité y cada uno cuenta una sola vez.`, "no", "No se puede repetir el mismo estudiante."],
];
const CLASIFICAR = [
  [(n, k) => `De ${n} estudiantes se asignan ${k} cargos diferentes (líder, programador, tester…).`, "variacion", "El orden importa y solo se usan algunos de los estudiantes."],
  [(n) => `Se ordenan los ${n} módulos de un sistema para desplegarlos todos.`, "permutacion", "El orden importa y se ordenan todos los elementos."],
  [(n, k) => `Se elige un comité de ${k} personas entre ${n}.`, "combinacion", "El orden no importa."],
  [(n) => `${n} corredores llegan a la meta y se anota su posición de llegada.`, "permutacion", "El orden importa y se ubican todos."],
  [(n, k) => `De ${n} equipos se entregan ${Math.min(k, 3) || 3} medallas distintas (oro, plata, bronce).`, "variacion", "El orden importa y solo se premian algunos."],
  [(n, k) => `De ${n} pruebas disponibles se ejecutan ${k} en una secuencia específica.`, "variacion", "La secuencia importa y no se ejecutan todas."],
  [(n, k) => `Se eligen ${k} estudiantes de ${n} para el equipo QA (misma función).`, "combinacion", "No hay cargos diferentes; el orden no importa."],
];
const PALABRAS = ["LUNA", "CASA", "PAPA", "SALA", "ALMA", "MAMA", "ANA", "BANANA", "LLAMA", "RADAR", "MESA", "TATA"];

const GEN = [
  // 1.1 Combinatoria: orden y repetición
  [
    () => { const n = rnd(10, 40), k = rnd(2, 4), [t, r, e] = pick(ORDEN), txt = t(n, k);
      return { enunciado: `¿Importa el orden? Responde sí o no.<br><em>${txt}</em>`, respuesta: r, ph: "sí o no", sol: [e, `Respuesta: ${r === "si" ? "sí" : "no"}.`], firma: txt }; },
    () => { const n = rnd(5, 9), [t, r, e] = pick(REPETICION), txt = t(n);
      return { enunciado: `¿Se puede repetir? Responde sí o no.<br><em>${txt}</em>`, respuesta: r, ph: "sí o no", sol: [e, `Respuesta: ${r === "si" ? "sí" : "no"}.`], firma: txt }; },
    () => { const N = rnd(10, 40), k = rnd(2, 5), pide = pick(["población", "muestra"]);
      return { enunciado: `En un grupo de ${N} estudiantes se selecciona un comité de ${k}. ¿Cuál es la ${pide}? (escribe el número)`, respuesta: String(pide === "población" ? N : k), ph: "número",
        sol: ["La población es el total de elementos disponibles: " + N + ".", "La muestra son los elementos que se seleccionan: " + k + ".", `Respuesta: ${pide === "población" ? N : k}.`], firma: `pob-${N}-${k}-${pide}` }; },
  ],
  // 1.2 Factorial
  [
    () => { const n = rnd(3, 9);
      return { enunciado: `Calcula ${n}!`, respuesta: String(fac(n)), ph: "resultado", sol: [`${n}! = ${Array.from({ length: n }, (_, i) => n - i).join(" × ")}`, `Respuesta: ${fmt(fac(n))}.`], firma: `fa-${n}` }; },
    () => { const n = rnd(4, 25);
      return { enunciado: `Completa la propiedad: ${n}! = ${n} × ___!`, respuesta: String(n - 1), ph: "número", sol: ["Se usa n! = n × (n−1)!.", `Respuesta: ${n}! = ${n} × ${n - 1}!`], firma: `fb-${n}` }; },
    () => { const k = rnd(2, 6), forma = pick([`0! + 1! + ${k}!`, `${k}! + 0! + 1!`, `1! + ${k}! + 0!`]);
      return { enunciado: `Calcula ${forma}`, respuesta: String(2 + fac(k)), ph: "resultado", sol: ["Por definición 0! = 1 y 1! = 1.", `${k}! = ${fac(k)}.`, `1 + 1 + ${fac(k)} = ${2 + fac(k)}.`], firma: `fc-${forma}` }; },
  ],
  // 1.3 Operaciones con factoriales
  [
    () => { const a = rnd(6, 15), k = rnd(1, 2), r = k === 1 ? a : a * (a - 1);
      return { enunciado: `Simplifica:${mate(`{${a}!}/{${a - k}!}`)}`, respuesta: String(r), ph: "resultado",
        sol: [k === 1 ? `${a}! = ${a} × ${a - 1}!` : `${a}! = ${a} × ${a - 1} × ${a - 2}!`, `Se cancela ${a - k}! arriba y abajo.`, `Queda ${k === 1 ? a : a + " × " + (a - 1)} = ${r}.`], firma: `oa-${a}-${k}` }; },
    () => { const p = rnd(2, 3), q = rnd(5, 9), r = fac(p) * q;
      return { enunciado: `Simplifica:${mate(`{${p}! × ${q}!}/{${q - 1}!}`)}`, respuesta: String(r), ph: "resultado",
        sol: [`${q}! = ${q} × ${q - 1}!`, `Se cancela ${q - 1}! arriba y abajo.`, `Queda ${p}! × ${q} = ${fac(p)} × ${q} = ${r}.`], firma: `ob-${p}-${q}` }; },
    () => { const c = rnd(4, 8), d = rnd(3, 6), a = c + 2, b = d + 1, r = a * (a - 1) * b;
      return { enunciado: `Simplifica:${mate(`{${a}! × ${b}!}/{${c}! × ${d}!}`)}`, respuesta: String(r), ph: "resultado",
        sol: [`${a}! = ${a} × ${a - 1} × ${c}!  y  ${b}! = ${b} × ${d}!`, `Se cancelan ${c}! y ${d}!.`, `Queda ${a} × ${a - 1} × ${b} = ${r}.`], firma: `oc-${c}-${d}` }; },
  ],
  // 1.4 Principio fundamental del conteo
  [
    () => { const r = rnd(3, 8), s = rnd(2, 5);
      return { enunciado: `Un sistema tiene ${r} roles y ${s} tipos de acceso. Para crear una cuenta se elige un rol y un acceso. ¿Cuántas configuraciones hay?`, respuesta: String(r * s), ph: "resultado",
        sol: ["Rol Y acceso: los eventos ocurren juntos, se multiplica.", `${r} × ${s} = ${r * s}.`], firma: `ca-${r}-${s}` }; },
    () => { const k = rnd(3, 4), d = pick([2, 3, 4, 5, 6, 10]);
      return { enunciado: `Un código tiene ${k} posiciones y en cada una se elige entre ${d} símbolos distintos (se pueden repetir). ¿Cuántos códigos hay?`, respuesta: String(d ** k), ph: "resultado",
        sol: [`Cada posición tiene ${d} opciones y todas ocurren juntas.`, `${Array(k).fill(d).join(" × ")} = ${fmt(d ** k)}.`], firma: `cb-${k}-${d}` }; },
    () => { const b = rnd(1, 4), s = rnd(2, 5), c = rnd(1, 5);
      return { enunciado: `Para ir al colegio hay ${b} bicicleta(s), ${s} rutas de bus y ${c} carro(s). Se usa solo uno de esos medios. ¿Cuántas opciones hay?`, respuesta: String(b + s + c), ph: "resultado",
        sol: ["Se va en bicicleta O bus O carro: son opciones excluyentes, se suma.", `${b} + ${s} + ${c} = ${b + s + c}.`], firma: `cc-${b}-${s}-${c}` }; },
  ],
  // 1.5 Condición: permutación o variación
  [
    () => { const n = rnd(6, 12), k = rnd(2, 4), [t, r, e] = pick(CLASIFICAR), txt = t(n, k);
      return { enunciado: `Clasifica el caso: ¿permutación, variación o combinación?<br><em>${txt}</em>`, respuesta: r, ph: "permutación, variación o combinación", sol: [e, `Respuesta: ${r === "permutacion" ? "permutación" : r === "variacion" ? "variación" : "combinación"}.`], firma: txt }; },
    () => { const n = rnd(4, 7), x = pick(["equipos", "corredores", "módulos"]);
      return { enunciado: `${n} ${x} quedan ordenados del 1.º al ${n}.º lugar. ¿De cuántas formas puede quedar el orden?`, respuesta: String(fac(n)), ph: "resultado",
        sol: ["Importa el orden y se ordenan todos: permutación P(n) = n!.", `${n}! = ${fmt(fac(n))}.`], firma: `pb-${n}-${x}` }; },
    () => { const n = rnd(6, 12), r = rnd(2, 3), v = prod(n, r);
      return { enunciado: `De ${n} usuarios se asignan ${r} roles diferentes. ¿De cuántas formas? V(${n},${r})`, respuesta: String(v), ph: "resultado",
        sol: [`V(n,r) = n! / (n−r)! = ${n}! / ${n - r}!`, `Queda ${Array.from({ length: r }, (_, i) => n - i).join(" × ")} = ${v}.`], firma: `pc-${n}-${r}` }; },
  ],
  // 1.6 Permutación y variación
  [
    () => { const p = rnd(4, 10), lugar = pick(["una mesa redonda", "una mesa circular de reuniones", "una mesa de cartas redonda"]);
      return { enunciado: `${p} personas se sientan alrededor de ${lugar}. ¿De cuántas formas pueden hacerlo?`, respuesta: String(fac(p - 1)), ph: "resultado",
        sol: ["Permutación circular: Pc(n) = (n−1)!, porque girar a todos no crea una forma nueva.", `(${p}−1)! = ${p - 1}! = ${fmt(fac(p - 1))}.`], firma: `qa-${p}-${lugar}` }; },
    () => { const w = pick(PALABRAS), cuenta = {}; for (const c of w) cuenta[c] = (cuenta[c] || 0) + 1;
      const rep = Object.entries(cuenta).filter(([, m]) => m > 1), den = rep.reduce((a, [, m]) => a * fac(m), 1), r = fac(w.length) / den;
      return { enunciado: `¿Cuántas formas hay de ordenar las letras de la palabra ${w}?`, respuesta: String(r), ph: "resultado",
        sol: [`Tiene ${w.length} letras` + (rep.length ? `, con repetidas: ${rep.map(([c, m]) => c + " = " + m).join(", ")}.` : " y todas son distintas."),
          rep.length ? `${w.length}! / (${rep.map(([, m]) => m + "!").join(" · ")}) = ${fmt(fac(w.length))} / ${den}` : `${w.length}! = ${fmt(r)}`, `Respuesta: ${fmt(r)}.`], firma: `qb-${w}` }; },
    () => { const a = rnd(2, 5), b = rnd(2, 5), n = a + b, r = fac(n) / (fac(a) * fac(b));
      return { enunciado: `Una fila tiene ${n} fichas: ${a} rojas iguales y ${b} azules iguales. ¿De cuántas formas se pueden ordenar?`, respuesta: String(r), ph: "resultado",
        sol: [`Con repetidos: n! / (a! · b!) = ${n}! / (${a}! · ${b}!)`, `${fmt(fac(n))} / (${fac(a)} × ${fac(b)}) = ${r}.`], firma: `qc-${a}-${b}` }; },
  ],
];

// ---- REPASO: pantalla, ejercicios sin repetir y borrado al salir ----
$("lista").insertAdjacentHTML("beforeend",
  '<li class="repaso"><a href="#/repaso"><span class="num">R</span><span class="nombre">Repaso: ejercicios nuevos</span></a></li>');

const vistaRepaso = document.createElement("section");
vistaRepaso.id = "vista-repaso";
vistaRepaso.className = "detalle";
vistaRepaso.hidden = true;
vistaRepaso.innerHTML = `
  <a class="volver" href="#/">← Volver al módulo</a>
  <h2>Repaso</h2>
  <p class="modulo">Ejercicios nuevos cada vez que entras. Desliza hacia abajo para ver los demás temas.</p>
  <div class="repaso-acciones"><button type="button" class="btn-nuevos" id="btn-nuevos">Nuevos ejercicios</button></div>
  <div id="repaso-contenido"></div>`;
document.querySelector("main").appendChild(vistaRepaso);

// Memoria de ejercicios ya vistos (para que los nuevos sean diferentes)
const CLAVE_VISTOS = "modulo1_repaso_vistos";
let vistos = new Set();
try { vistos = new Set(JSON.parse(localStorage.getItem(CLAVE_VISTOS) || "[]")); } catch (e) {}
function guardarVistos() {
  try { localStorage.setItem(CLAVE_VISTOS, JSON.stringify([...vistos].slice(-600))); } catch (e) {}
}

// Crea un ejercicio que no haya salido antes (si ya salieron todos los posibles, puede repetirse)
function ejercicioNuevo(tema, n) {
  let ej, clave;
  for (let i = 0; i < 60; i++) {
    ej = GEN[tema][n]();
    clave = `${tema}-${n}-${ej.firma}`;
    if (!vistos.has(clave)) break;
  }
  vistos.add(clave);
  return ej;
}

const normaliza = (t) => String(t).trim().toLowerCase().normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "").replace(/[\s,.]/g, "");
let ejerciciosActivos = {};   // se vacía al salir del repaso
let repasoActivo = false;

function dibujarRepaso() {
  ejerciciosActivos = {};
  let html = "";
  modulo.subtemas.forEach((sub, t) => {
    if (!GEN[t]) return;
    html += `<section class="tema-repaso" style="--cc: var(--c${(t % 5) + 1})">
      <h3 class="tema-titulo"><span class="num">1.${t + 1}</span> ${sub.titulo}</h3>`;
    GEN[t].forEach((_, n) => {
      const ej = ejercicioNuevo(t, n), id = `e${t}_${n}`;
      ejerciciosActivos[id] = ej;
      html += `<article class="ejercicio" data-id="${id}">
        <p class="ej-num">Ejercicio ${n + 1}</p>
        <p class="ej-enunciado">${ej.enunciado}</p>
        <div class="ej-resp">
          <input type="text" autocomplete="off" placeholder="${ej.ph}" aria-label="Tu respuesta">
          <button type="button" class="ej-comprobar">Comprobar</button>
        </div>
        <p class="ej-msg" role="status"></p>
        <details class="ej-sol"><summary>Ver solución</summary><ol>${ej.sol.map((s) => `<li>${s}</li>`).join("")}</ol></details>
      </article>`;
    });
    html += "</section>";
  });
  $("repaso-contenido").innerHTML = html;
  guardarVistos();
  repasoActivo = true;
}

function limpiarRepaso() {            // al salir, los ejercicios se borran
  if (!repasoActivo) return;
  $("repaso-contenido").innerHTML = "";
  ejerciciosActivos = {};
  repasoActivo = false;
}

function comprobarEjercicio(art) {
  const ej = ejerciciosActivos[art.dataset.id];
  if (!ej) return;
  const valor = normaliza(art.querySelector("input").value);
  const msg = art.querySelector(".ej-msg");
  if (!valor) { msg.textContent = "Escribe tu respuesta primero."; msg.className = "ej-msg mal"; return; }
  const ok = valor === normaliza(ej.respuesta);
  msg.textContent = ok ? "¡Correcto!" : "Todavía no. Revisa la solución e inténtalo otra vez.";
  msg.className = "ej-msg " + (ok ? "ok" : "mal");
}

$("repaso-contenido").addEventListener("click", (e) => {
  const b = e.target.closest(".ej-comprobar");
  if (b) comprobarEjercicio(b.closest(".ejercicio"));
});
$("repaso-contenido").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.matches(".ej-resp input")) comprobarEjercicio(e.target.closest(".ejercicio"));
});
$("btn-nuevos").addEventListener("click", () => { dibujarRepaso(); window.scrollTo(0, 0); });

// Dibuja los 3 recuadros del subtema (o el bloque libre "contenido")
function renderDetalle(sub) {
  const cont = $("detalle-contenido");
  if (sub.contenido) {
    cont.classList.remove("tres-cajas");
    cont.innerHTML = sub.contenido;
    return;
  }
  cont.classList.add("tres-cajas");
  const f = sub.formulas || [];
  const e = sub.ejemplo;
  const varias = f.length > 1;
  cont.innerHTML = `
    <section class="caja caja-info">
      <h3 class="caja-titulo">Información</h3>
      ${sub.informacion || ""}
    </section>
    <section class="caja caja-formulas">
      <h3 class="caja-titulo">${varias ? "Fórmulas" : "Fórmula"}${varias ? '<span class="hint">Desliza ↔</span>' : ""}</h3>
      <div class="pista">${f.map(x => `<div class="f-slide"><div class="f-texto">${mate(x.formula)}</div>${x.nota ? `<small>${x.nota}</small>` : ""}</div>`).join("")}</div>
      ${varias ? `<div class="control"><button class="prev" aria-label="Fórmula anterior">‹</button><span class="contador"></span><button class="next" aria-label="Fórmula siguiente">›</button></div>` : ""}
    </section>
    <section class="caja caja-aplica">
      <h3 class="caja-titulo">Cómo funciona y cómo se aplica</h3>
      ${sub.funciona || ""}
      ${e ? `<div class="ejemplo"><p class="enunciado">${e.enunciado}</p><ol class="pasos">${e.pasos.map(p => `<li>${p}</li>`).join("")}</ol><p class="resultado">Resultado: ${e.resultado}</p></div>` : ""}
    </section>`;
  iniciarSlider(cont);
}

// Deslizador de fórmulas: flechas, contador y deslizar con el dedo o la rueda
function iniciarSlider(raiz) {
  const pista = raiz.querySelector(".pista");
  const prev = raiz.querySelector(".prev");
  const next = raiz.querySelector(".next");
  if (!pista || !prev) return;
  const contador = raiz.querySelector(".contador");
  const total = pista.children.length;
  const actual = () => Math.round(pista.scrollLeft / pista.clientWidth);
  const ir = (i) => pista.scrollTo({ left: i * pista.clientWidth, behavior: "smooth" });
  const actualizar = () => {
    const i = actual();
    contador.textContent = `${i + 1} / ${total}`;
    prev.disabled = i === 0;
    next.disabled = i === total - 1;
  };
  prev.addEventListener("click", () => ir(actual() - 1));
  next.addEventListener("click", () => ir(actual() + 1));
  pista.addEventListener("scroll", actualizar, { passive: true });
  actualizar();
}

// Mostrar la vista según la dirección (#/ o #/3)
function mostrar() {
  if (location.hash === "#/repaso") {
    vistaIndice.hidden = true;
    vistaDetalle.hidden = true;
    vistaRepaso.hidden = false;
    document.title = "Repaso · " + modulo.titulo;
    if (!repasoActivo) dibujarRepaso();
    window.scrollTo(0, 0);
    return;
  }
  vistaRepaso.hidden = true;
  limpiarRepaso();

  const m = location.hash.match(/^#\/(\d+)$/);
  const i = m ? parseInt(m[1], 10) - 1 : -1;
  const sub = modulo.subtemas[i];

  if (!sub) {
    vistaDetalle.hidden = true;
    vistaIndice.hidden = false;
    document.title = modulo.titulo;
    return;
  }

  vistaIndice.hidden = true;
  vistaDetalle.hidden = false;
  document.title = `${sub.titulo} · ${modulo.titulo}`;
  $("detalle-titulo").textContent = sub.titulo;
  $("detalle-modulo").textContent = modulo.titulo;
  renderDetalle(sub);

  const anterior = modulo.subtemas[i - 1];
  const siguiente = modulo.subtemas[i + 1];
  $("nav").innerHTML =
    (anterior ? `<a href="#/${i}">← ${anterior.titulo}</a>` : "<span></span>") +
    (siguiente ? `<a href="#/${i + 2}">${siguiente.titulo} →</a>` : "<span></span>");

  window.scrollTo(0, 0);
}


// ---- Luz que recorre el botón ----
// Al pasar el cursor (o enfocar con el teclado), una luz nace donde entró
// el cursor y da vueltas por todo el borde del botón hasta que sales.
const SELECTOR_LUZ = ".lista a, .volver, .nav a";
const VELOCIDAD = 260;            // grados por segundo (súbelo para que gire más rápido)
const activos = new Map();        // botón -> { ang, saliendo }
const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let anterior = 0;

function bucle(t) {
  const dt = (t - anterior) / 1000;
  anterior = t;
  activos.forEach((estado, el) => {
    if (!el.isConnected) { activos.delete(el); return; }
    estado.ang = (estado.ang + VELOCIDAD * dt) % 360;
    el.style.setProperty("--ang", estado.ang + "deg");
  });
  if (activos.size) requestAnimationFrame(bucle);
}

function encender(el, evento) {
  if (sinMovimiento) return;
  let ang = 0;
  if (evento && evento.clientX !== undefined && evento.type !== "focusin") {
    const r = el.getBoundingClientRect();
    const dx = evento.clientX - (r.left + r.width / 2);
    const dy = evento.clientY - (r.top + r.height / 2);
    ang = (Math.atan2(dx, -dy) * 180 / Math.PI + 360) % 360;   // 0° = arriba, sentido del reloj
  }
  const arrancar = activos.size === 0;
  activos.set(el, { ang });
  el.classList.add("luz-on");
  if (arrancar) { anterior = performance.now(); requestAnimationFrame(bucle); }
}

function apagar(el) {
  el.classList.remove("luz-on");
  setTimeout(() => {                       // deja que se desvanezca y luego deja de animar
    if (!el.classList.contains("luz-on")) activos.delete(el);
  }, 350);
}

document.addEventListener("pointerover", (e) => {
  const el = e.target.closest(SELECTOR_LUZ);
  if (el && !el.contains(e.relatedTarget)) encender(el, e);
});
document.addEventListener("pointerout", (e) => {
  const el = e.target.closest(SELECTOR_LUZ);
  if (el && !el.contains(e.relatedTarget)) apagar(el);
});
document.addEventListener("focusin", (e) => {
  const el = e.target.closest(SELECTOR_LUZ);
  if (el) encender(el, e);
});
document.addEventListener("focusout", (e) => {
  const el = e.target.closest(SELECTOR_LUZ);
  if (el) apagar(el);
});

window.addEventListener("hashchange", mostrar);
mostrar();
