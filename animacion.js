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
const colores = ["#ff4f8b", "#00a6fb", "#7c4dff", "#ff9f1c", "#00c48c"];
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
  <li style="--i:${i + 1}">
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

const barajar = (arr) => [...arr].sort(() => Math.random() - 0.5);
const ELEGIR_Y = [   // [qué se elige, mínimo, máximo de opciones]
  ["un rol", 3, 8], ["un tipo de acceso", 2, 5], ["una región del servidor", 2, 4],
  ["un lenguaje de programación", 3, 6], ["un editor de código", 2, 5], ["un tema de interfaz", 2, 4],
];
const ELEGIR_O = [   // [inicio de la frase, [opciones posibles], aclaración]
  ["Para ir al colegio se puede usar", [["bicicleta", 1, 4], ["bus", 2, 5], ["carro", 1, 5], ["moto", 1, 3], ["caminar por rutas distintas", 1, 3]], "Se usa solo uno de esos medios."],
  ["Para reportar un error se puede usar", [["correo", 1, 3], ["chat", 1, 3], ["formulario web", 1, 4], ["llamada", 1, 2]], "Se usa solo una de esas vías."],
];
const MIXTOS = [
  (p, a, b) => `Un usuario elige un rol (${p} opciones) y después entra por la web (${a} formas) o por la app móvil (${b} formas).`,
  (p, a, b) => `Un pedido se arma eligiendo un tamaño (${p} opciones) y un sabor, que puede ser clásico (${a} opciones) o especial (${b} opciones).`,
  (p, a, b) => `Para entrar a un curso se elige un horario (${p} opciones) y un salón: del edificio A (${a} salones) o del edificio B (${b} salones).`,
];

const OBJETOS = ["carros de colores distintos", "libros diferentes", "archivos distintos", "camisetas de colores distintos", "tarjetas con códigos diferentes"];
const PAL_REP = ["PAPA", "SALA", "ALMA", "MAMA", "BANANA", "LLAMA", "RADAR"];
const TIPOS = [      // [texto(n, palabra, a), tipo, explicación]
  [(n) => `${n} personas hacen una fila para entrar a un concierto.`, "lineal", "Se ordenan en fila: hay un primer y un último lugar."],
  [(n) => `${n} libros se ordenan en un estante.`, "lineal", "Se ordenan en línea, con principio y final."],
  [(n) => `${n} tareas se ordenan en una cola de ejecución.`, "lineal", "Es una secuencia con principio y final."],
  [(n) => `${n} personas se sientan alrededor de una mesa redonda.`, "circular", "Están en círculo: no hay un primer lugar fijo."],
  [(n) => `${n} llaves se cuelgan en un llavero redondo.`, "circular", "Están en un ciclo: girar todas no crea una forma nueva."],
  [(n) => `${n} invitados cenan en una mesa circular.`, "circular", "Están en círculo, sin posición inicial."],
  [(n, w) => `Se ordenan las letras de la palabra ${w}.`, "repetidos", "Hay letras iguales, así que se divide entre el factorial de cada repetición."],
  [(n, w, a) => `Se ordenan ${n} fichas: ${a} rojas iguales y ${n - a} azules iguales.`, "repetidos", "Hay elementos iguales, así que se divide entre el factorial de cada grupo."],
];
const GEN = [
  // 1.1 Combinatoria: orden y repetición
  [
    () => { const n = rnd(10, 40), k = rnd(2, 4), [t, r, e] = pick(ORDEN), txt = t(n, k);
      return { enunciado: `¿Importa el orden? Responde sí o no.<br>${txt}`, respuesta: r, ph: "sí o no", sol: [e, `Respuesta: ${r === "si" ? "sí" : "no"}.`], firma: txt }; },
    () => { const n = rnd(5, 9), [t, r, e] = pick(REPETICION), txt = t(n);
      return { enunciado: `¿Se puede repetir? Responde sí o no.<br>${txt}`, respuesta: r, ph: "sí o no", sol: [e, `Respuesta: ${r === "si" ? "sí" : "no"}.`], firma: txt }; },
    () => { const n = rnd(3, 6), x = pick(OBJETOS);
      return { enunciado: `Tienes ${n} ${x} y quieres ordenarlos todos en una fila. ¿De cuántas formas puedes hacerlo?`, respuesta: String(fac(n)), ph: "resultado",
        sol: [`Población: ${n} elementos. Muestra: los mismos ${n}, porque se ordenan todos.`, "¿Importa el orden? Sí: cambiar la posición da otra fila.", "¿Se puede repetir? No: cada elemento es distinto y existe una sola vez.", `Con orden y sin repetición se usa n!: ${n}! = ${fmt(fac(n))}.`], firma: `ia-${n}-${x}` }; },
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
    () => {   // problema conceptual con texto: hay que analizar, no solo calcular
      const tipo = rnd(1, 4), seq = (hasta, desde) => Array.from({ length: hasta - desde + 1 }, (_, i) => hasta - i);
      if (tipo === 1) { const a = rnd(5, 10), d = rnd(2, 3), b = a - d, f = seq(a, b + 1), r = f.reduce((x, y) => x * y, 1);
        return { enunciado: `Un estudiante dice que ${a}! / ${b}! se simplifica dividiendo ${a} ÷ ${b}. Analiza su razonamiento: ¿cuál es el resultado correcto de ${a}! / ${b}!?`, respuesta: String(r), ph: "resultado",
          sol: ["Un factorial no se simplifica dividiendo los números: n! es una multiplicación de varios factores.", `${a}! = ${f.join(" × ")} × ${b}!, y se cancela ${b}! arriba y abajo.`, `Queda ${f.join(" × ")} = ${r}.`], firma: `k1-${a}-${d}` }; }
      if (tipo === 2) { const a = rnd(8, 15), d = rnd(3, 6), b = a - d;
        return { enunciado: `Un programa debe calcular ${a}! / ${b}!. Si simplifica antes de multiplicar, ¿cuántos números multiplica realmente?`, respuesta: String(d), ph: "cantidad de números",
          sol: [`${a}! = ${a} × ${a - 1} × … × ${b + 1} × ${b}!`, `Se cancela ${b}!, y quedan los números desde ${b + 1} hasta ${a}.`, `${a} − ${b} = ${d} números.`], firma: `k2-${a}-${d}` }; }
      if (tipo === 3) { const k = rnd(2, 3), n = k === 2 ? rnd(4, 12) : rnd(5, 9), v = prod(n, k);
        return { enunciado: `Se sabe que n! / (n−${k})! = ${v}. Analiza la expresión y encuentra el valor de n.`, respuesta: String(n), ph: "valor de n",
          sol: [`Se escribe n! = ${k === 2 ? "n × (n−1)" : "n × (n−1) × (n−2)"} × (n−${k})! y se cancela (n−${k})!.`, `Queda ${k === 2 ? "n × (n−1)" : "n × (n−1) × (n−2)"} = ${v}.`, `Son ${k === 2 ? "dos" : "tres"} números consecutivos que multiplicados dan ${v}: ${seq(n, n - k + 1).join(" × ")}.`, `Entonces n = ${n}.`], firma: `k3-${n}-${k}` }; }
      const a = rnd(7, 12), b = a - 3;
      return { enunciado: `Para simplificar ${a}! / ${b}! se escribe ${a}! = ${a} × ${a - 1} × ___ × ${b}!. ¿Qué número va en el espacio?`, respuesta: String(a - 2), ph: "número",
        sol: [`Un factorial se expande bajando de uno en uno hasta llegar al factorial que se quiere cancelar.`, `Después de ${a} × ${a - 1} sigue ${a - 2}, que es el último número antes de llegar a ${b}!.`, `Respuesta: ${a - 2}.`], firma: `k4-${a}` }; },
    () => { const c = rnd(4, 8), d = rnd(3, 6), a = c + 2, b = d + 1, r = a * (a - 1) * b;
      return { enunciado: `Simplifica:${mate(`{${a}! × ${b}!}/{${c}! × ${d}!}`)}`, respuesta: String(r), ph: "resultado",
        sol: [`${a}! = ${a} × ${a - 1} × ${c}!  y  ${b}! = ${b} × ${d}!`, `Se cancelan ${c}! y ${d}!.`, `Queda ${a} × ${a - 1} × ${b} = ${r}.`], firma: `oc-${c}-${d}` }; },
  ],
  // 1.4 Principio fundamental del conteo: practica «y» = multiplicar y «o» = sumar
  [
    () => {   // «y»: los eventos ocurren juntos -> se multiplica
      const ev = barajar(ELEGIR_Y).slice(0, rnd(2, 3)).map(([t, mn, mx]) => [t, rnd(mn, mx)]);
      const ns = ev.map(([, n]) => n), total = ns.reduce((x, y) => x * y, 1);
      return { enunciado: `Para configurar una cuenta hay que elegir ${ev.map(([t, n]) => `${t} (${n} opciones)`).join(" y ")}. ¿Cuántas configuraciones distintas hay?`,
        respuesta: String(total), ph: "resultado",
        sol: ["Aparece «y»: los eventos ocurren juntos, así que se multiplica.", `${ns.join(" × ")} = ${total}.`], firma: "y-" + ev.map(([t, n]) => t + n).join("-") }; },
    () => {   // «o»: solo se elige una opción -> se suma
      const [intro, items, nota] = pick(ELEGIR_O);
      const ev = barajar(items).slice(0, rnd(3, items.length)).map(([t, mn, mx]) => [t, rnd(mn, mx)]);
      const ns = ev.map(([, n]) => n), total = ns.reduce((x, y) => x + y, 0);
      return { enunciado: `${intro}: ${ev.map(([t, n]) => `${t} (${n} ${n === 1 ? "opción" : "opciones"})`).join(" o ")}. ${nota} ¿Cuántas opciones hay en total?`,
        respuesta: String(total), ph: "resultado",
        sol: ["Aparece «o»: solo se elige una opción, así que se suma.", `${ns.join(" + ")} = ${total}.`], firma: "o-" + intro + ev.map(([t, n]) => t + n).join("-") }; },
    () => {   // «y» y «o» juntas
      const p = rnd(2, 8), a = rnd(2, 5), b = rnd(2, 5), plantilla = pick(MIXTOS);
      return { enunciado: plantilla(p, a, b) + " ¿Cuántas formas distintas hay?", respuesta: String(p * (a + b)), ph: "resultado",
        sol: [`La parte con «o» se suma, porque solo se elige una de las dos: ${a} + ${b} = ${a + b}.`, `Luego «y» une los dos eventos y se multiplica: ${p} × ${a + b} = ${p * (a + b)}.`], firma: `m-${p}-${a}-${b}-${plantilla(0, 0, 0).length}` }; },
  ],
  // 1.5 Condición: permutación o variación (¿importa el orden? ¿todos o algunos?)
  [
    () => { const n = rnd(6, 12), k = rnd(2, 4), [t, r, e] = pick(CLASIFICAR), txt = t(n, k);
      return { enunciado: `Clasifica el caso: ¿permutación, variación o combinación?<br>${txt}`, respuesta: r, ph: "permutación, variación o combinación", contiene: true, sol: [e, `Respuesta: ${r === "permutacion" ? "permutación" : r === "variacion" ? "variación" : "combinación"}.`], firma: txt }; },
    () => {   // decide según el orden: variación (orden sí) o combinación (orden no)
      const comb = Math.random() < 0.5, n = rnd(5, 9), r = rnd(2, 3), v = prod(n, r), c = v / fac(r);
      const cargos = r === 2 ? "presidente y secretario" : "presidente, secretario y tesorero";
      return comb
        ? { enunciado: `De ${n} estudiantes se elige un comité de ${r} personas (todas con la misma función). ¿De cuántas formas se puede elegir?`, respuesta: String(c), ph: "resultado",
            sol: ["¿Importa el orden? No: todos tienen la misma función. Es combinación.", `C(n,r) = n! / ((n−r)! · r!) = ${n}! / (${n - r}! · ${r}!)`, `${v} / ${fac(r)} = ${c}.`], firma: `dc-${n}-${r}` }
        : { enunciado: `De ${n} estudiantes se eligen ${r} para ocupar estos cargos: ${cargos}. ¿De cuántas formas se pueden asignar?`, respuesta: String(v), ph: "resultado",
            sol: ["¿Importa el orden? Sí: los cargos son diferentes.", `¿Se ordenan todos? No, solo ${r} de ${n}: es variación.`, `V(n,r) = n! / (n−r)! = ${n}! / ${n - r}! = ${Array.from({ length: r }, (_, i) => n - i).join(" × ")} = ${v}.`], firma: `dv-${n}-${r}` }; },
    () => {   // todos los elementos: permutación, o variación con r = n
      const n = rnd(4, 7), vnn = Math.random() < 0.5;
      if (vnn) { const [x, y] = pick([["estudiantes", "cargos diferentes"], ["servidores", "tareas diferentes"], ["equipos", "puestos diferentes"]]);
        return { enunciado: `De ${n} ${x} se asignan ${n} ${y}, uno para cada uno. ¿De cuántas formas? (escríbelo como V(${n},${n}))`, respuesta: String(fac(n)), ph: "resultado",
          sol: ["El orden importa y se usan todos: r = n.", `V(n,n) = n! / (n−n)! = ${n}! / 0! = ${n}! / 1`, `Por eso V(n,n) = P(n) = ${n}! = ${fmt(fac(n))}.`], firma: `evn-${n}-${x}` }; }
      const x = pick(["equipos", "corredores", "módulos"]);
      return { enunciado: `${n} ${x} quedan ordenados del 1.º al ${n}.º lugar. ¿De cuántas formas puede quedar el orden?`, respuesta: String(fac(n)), ph: "resultado",
        sol: ["¿Importa el orden? Sí. ¿Se ordenan todos? Sí: es permutación, P(n) = n!.", `${n}! = ${fmt(fac(n))}.`], firma: `ep-${n}-${x}` }; },
  ],
  // 1.6 Permutación y variación: lineal, circular y con repetidos
  [
    () => {   // reconocer el tipo de permutación
      const n = rnd(5, 9), w = pick(PAL_REP), a = rnd(2, 3), [t, r, e] = pick(TIPOS), txt = t(n, w, a);
      return { enunciado: `¿Qué tipo de permutación es: lineal, circular o con repetidos?<br>${txt}`, respuesta: r, ph: "lineal, circular o repetidos", contiene: true,
        sol: [e, `Respuesta: ${r === "repetidos" ? "con elementos repetidos" : r}.`], firma: txt }; },
    () => { const w = pick(PALABRAS), cuenta = {}; for (const c of w) cuenta[c] = (cuenta[c] || 0) + 1;
      const rep = Object.entries(cuenta).filter(([, m]) => m > 1), den = rep.reduce((a, [, m]) => a * fac(m), 1), r = fac(w.length) / den;
      return { enunciado: `¿Cuántas formas hay de ordenar las letras de la palabra ${w}?`, respuesta: String(r), ph: "resultado",
        sol: [`Tiene ${w.length} letras` + (rep.length ? `, con repetidas: ${rep.map(([c, m]) => c + " = " + m).join(", ")}.` : " y todas son distintas."),
          rep.length ? `${w.length}! / (${rep.map(([, m]) => m + "!").join(" · ")}) = ${fmt(fac(w.length))} / ${den}` : `${w.length}! = ${fmt(r)}`, `Respuesta: ${fmt(r)}.`], firma: `qb-${w}` }; },
    () => {   // calcular según sea lineal o circular
      const n = rnd(4, 9), circ = Math.random() < 0.5,
        ctx = pick(circ ? ["se sientan alrededor de una mesa redonda", "se sientan alrededor de una fogata", "se suben a un carrusel redondo"]
                        : ["se colocan en una fila para una foto", "hacen una fila para entrar a un concierto", "se forman en una cola del banco"]),
        r = circ ? fac(n - 1) : fac(n);
      return { enunciado: `${n} personas ${ctx}. ¿De cuántas formas pueden ordenarse?`, respuesta: String(r), ph: "resultado",
        sol: circ ? ["Están en círculo: permutación circular, Pc(n) = (n−1)!, porque girar a todos no crea una forma nueva.", `(${n}−1)! = ${n - 1}! = ${fmt(r)}.`]
                  : ["Están en fila: permutación lineal, P(n) = n!.", `${n}! = ${fmt(r)}.`], firma: `qc-${n}-${ctx}` }; },
  ],
];

// ---- Ejercicios fijos de cada subtema y fórmulas de ayuda del Repaso ----
const SEMILLA_FIJOS = 7;   // cambia este número para obtener otros 3 ejercicios fijos por tema
function semilla(a) {      // generador "al azar" que siempre da la misma secuencia
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const cacheFijos = {};
function ejerciciosFijos(t) {       // los 3 ejercicios del tema t: siempre son los mismos
  if (!cacheFijos[t]) cacheFijos[t] = GEN[t].map((g, n) => {
    const original = Math.random;
    Math.random = semilla(SEMILLA_FIJOS * 1000 + t * 31 + n * 7 + 1);
    try { return g(); } finally { Math.random = original; }
  });
  return cacheFijos[t];
}
const REGLA = (t) => `<span class="regla">${t}</span>`;
const FORMULAS_EJ = [   // fórmulas que se muestran como ayuda en cada ejercicio del Repaso [tema][ejercicio]
  [[REGLA("El orden importa si al cambiarlo el resultado es distinto.")],
   [REGLA("Hay repetición si un mismo elemento puede aparecer más de una vez.")],
   ["n! = n × (n−1) × … × 2 × 1"]],
  [["n! = n × (n−1) × (n−2) × … × 2 × 1"], ["n! = n × (n−1)!"], ["0! = 1", "1! = 1", "n! = n × (n−1) × … × 1"]],
  [["n! = n × (n−1)!"], ["n! = n × (n−1)!", "{n!}/{(n−k)!} = n × (n−1) × … × (n−k+1)"], ["n! = n × (n−1)!"]],
  [["Y → multiplicar: m × n"], ["O → sumar: m + n"], ["Y → multiplicar: m × n", "O → sumar: m + n"]],
  [["Orden no → Combinación", "Orden sí + todos → Permutación", "Orden sí + algunos → Variación"],
   ["V[n,r] = {n!}/{(n−r)!}", "C[n,r] = {n!}/{(n−r)! · r!}"],
   ["P(n) = n!", "V[n,n] = P(n)"]],
  [["P(n) = n!", "Pc(n) = (n−1)!", "{n!}/{m₁! · m₂! · …}"], ["{n!}/{m₁! · m₂! · m₃! · …}"], ["P(n) = n!", "Pc(n) = (n−1)!"]],
];

// ---- REPASO: pantalla, ejercicios sin repetir y borrado al salir ----
$("lista").insertAdjacentHTML("beforeend",
  `<li class="repaso" style="--i:${modulo.subtemas.length + 1}"><a href="#/repaso"><span class="num">★</span><span class="nombre">Repaso: ¡pon a prueba lo aprendido!</span></a></li>`);

const vistaRepaso = document.createElement("section");
vistaRepaso.id = "vista-repaso";
vistaRepaso.className = "detalle";
vistaRepaso.hidden = true;
vistaRepaso.innerHTML = `
  <a class="volver" href="#/">← Volver al módulo</a>
  <h2>Repaso</h2>
  <p class="modulo">Ejercicios nuevos cada vez que entras. Desliza hacia abajo para ver los demás temas. Las soluciones se desbloquean al terminar todos los ejercicios.</p>
  <div class="marcador" id="marcador"><strong id="marc-texto"></strong><div class="barra"><div class="relleno" id="marc-barra"></div></div></div>
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

// HTML de un ejercicio (sirve para el Repaso y para los ejercicios fijos de cada tema)
function htmlEjercicio(ej, id, n, extra, fijo) {
  return `<article class="ejercicio" data-id="${id}"${fijo ? ` data-fijo="${fijo}"` : ""}>
    <p class="ej-num">Ejercicio ${n + 1}</p>
    <p class="ej-enunciado">${ej.enunciado}</p>
    <div class="ej-resp">
      <input type="text" autocomplete="off" placeholder="${ej.ph}" aria-label="Tu respuesta">
      <button type="button" class="ej-comprobar">Comprobar</button>
    </div>
    <p class="ej-msg" role="status"></p>
    ${extra}
    <div class="ej-solucion"></div>
  </article>`;
}
const htmlSolucion = (ej) => `<details class="ej-sol"><summary>Ver solución</summary><ol>${ej.sol.map((s) => `<li>${s}</li>`).join("")}</ol></details>`;
const htmlBloqueo = (txt) => `<p class="ej-bloqueo">🔒 ${txt}</p>`;

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
      const fs = (FORMULAS_EJ[t] && FORMULAS_EJ[t][n]) || [];
      const ayuda = fs.length ? `<details class="ej-sol ej-form"><summary>Ver fórmula</summary><div class="ej-formulas">${fs.map((f) => `<div class="ej-formula">${mate(f)}</div>`).join("")}</div></details>` : "";
      html += htmlEjercicio(ej, id, n, ayuda);
    });
    html += "</section>";
  });
  $("repaso-contenido").innerHTML = html;
  guardarVistos();
  repasoActivo = true;
  repasoCelebrado = false;
  actualizarMarcador();
}

function limpiarRepaso() {            // al salir, los ejercicios se borran
  if (!repasoActivo) return;
  $("repaso-contenido").innerHTML = "";
  ejerciciosActivos = {};
  repasoActivo = false;
}

function ejercicioDe(art) {
  if (art.dataset.fijo) { const [t, n] = art.dataset.fijo.split("_").map(Number); return ejerciciosFijos(t)[n]; }
  return ejerciciosActivos[art.dataset.id];
}
function comprobarEjercicio(art) {
  const ej = ejercicioDe(art);
  if (!ej) return;
  const valor = normaliza(art.querySelector("input").value);
  const msg = art.querySelector(".ej-msg");
  if (!valor) { msg.textContent = "Escribe tu respuesta primero."; msg.className = "ej-msg mal"; return; }
  const resp = normaliza(ej.respuesta);
  const ok = valor === resp || (ej.contiene && valor.includes(resp));
  msg.className = "ej-msg " + (ok ? "ok" : "mal");
  if (ok) {
    msg.textContent = pick(["¡Correcto!", "¡Excelente!", "¡Muy bien!", "¡Eso es!", "¡Así se hace!"]);
    if (!art.dataset.ok) {
      art.dataset.ok = "1";
      art.classList.add("acierto");
      confeti(art.querySelector(".ej-comprobar"));
      if (art.dataset.fijo) {
        prog.fijos[art.dataset.fijo] = true;
        guardarProg();
        actualizarPractica(art.closest(".caja-practica"));
      } else {
        prog.correctas++;
        guardarProg();
        actualizarMarcador();
      }
    }
  } else {
    msg.textContent = "¡Casi! Piénsalo con calma e inténtalo otra vez.";
    art.classList.remove("sacude");
    void art.offsetWidth;
    art.classList.add("sacude");
  }
}

$("repaso-contenido").addEventListener("click", (e) => {
  const b = e.target.closest(".ej-comprobar");
  if (b) comprobarEjercicio(b.closest(".ejercicio"));
});
$("repaso-contenido").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.matches(".ej-resp input")) comprobarEjercicio(e.target.closest(".ejercicio"));
});
$("detalle-contenido").addEventListener("click", (e) => {
  const b = e.target.closest(".ej-comprobar");
  if (b) comprobarEjercicio(b.closest(".ejercicio"));
});
$("detalle-contenido").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.matches(".ej-resp input")) comprobarEjercicio(e.target.closest(".ejercicio"));
});
$("btn-nuevos").addEventListener("click", () => { dibujarRepaso(); window.scrollTo(0, 0); });

// Dibuja los 3 recuadros del subtema (o el bloque libre "contenido")
function renderDetalle(sub, t) {
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
    </section>
    ${GEN[t] ? htmlPractica(t) : ""}`;
  iniciarSlider(cont);
  iniciarPractica(cont.querySelector(".caja-practica"));
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

// ---- MOTIVACIÓN: progreso, frases, confeti y marcador ----
const CLAVE_PROG = "modulo1_progreso";
let prog = { vistos: [], correctas: 0, fijos: {}, repasoAvisado: false };
try { prog = Object.assign(prog, JSON.parse(localStorage.getItem(CLAVE_PROG) || "{}")); } catch (e) {}
const guardarProg = () => { try { localStorage.setItem(CLAVE_PROG, JSON.stringify(prog)); } catch (e) {} };
let repasoCelebrado = false;

const FRASES = [      // una al azar cada vez que ves el inicio (puedes cambiarlas o agregar más)
  "Cada tema que dominas es un nivel que superas ⭐",
  "Empieza por donde quieras: en 10 minutos ya habrás aprendido algo nuevo.",
  "Contar bien es un superpoder. ¡Vamos a entrenarlo!",
  "Un ejercicio a la vez y verás cómo todo tiene sentido.",
  "Aquí no se memoriza: se entiende, se practica y se disfruta.",
];

function temaCompleto(t) { return !!GEN[t] && GEN[t].every((_, n) => prog.fijos[`${t}_${n}`]); }

const repasoDesbloqueado = () => modulo.subtemas.every((_, t) => !GEN[t] || temaCompleto(t));

function pintarInicio() {
  const n = modulo.subtemas.length, hechos = modulo.subtemas.map((_, t) => temaCompleto(t)), v = hechos.filter(Boolean).length;
  const abierto = repasoDesbloqueado();
  if (!$("progreso")) $("lista").insertAdjacentHTML("beforebegin",
    '<div class="progreso" id="progreso"><div class="barra"><div class="relleno" id="prog-barra"></div></div><p id="prog-texto"></p></div>');
  $("prog-texto").textContent =
    (v === 0 ? "Completa los 3 ejercicios de cada tema para llenar tu barra y desbloquear el Repaso."
      : !abierto ? `Llevas ${v} de ${n} temas completados. ¡Completa todos para desbloquear el Repaso!`
      : "¡Completaste todos los temas! El Repaso está desbloqueado: ¡demuestra lo que sabes!") +
    (prog.correctas ? ` · ${prog.correctas} ejercicios del Repaso correctos` : "");
  $("prog-barra").style.width = "0";
  requestAnimationFrame(() => requestAnimationFrame(() => { $("prog-barra").style.width = (v / n * 100) + "%"; }));
  document.querySelectorAll("#lista li:not(.repaso)").forEach((li, i) => li.classList.toggle("visto", hechos[i]));

  // El botón de Repaso está bloqueado hasta completar todos los temas
  const li = document.querySelector("#lista li.repaso"), enlace = li.querySelector("a");
  li.classList.toggle("bloqueado", !abierto);
  enlace.setAttribute("aria-disabled", String(!abierto));
  li.querySelector(".num").textContent = abierto ? "★" : "🔒";
  li.querySelector(".nombre").textContent = abierto ? "Repaso: ¡pon a prueba lo aprendido!"
    : `Repaso: se desbloquea al completar los ${n} temas (llevas ${v})`;
  if (abierto && !prog.repasoAvisado) {        // primera vez que se desbloquea: celebración
    prog.repasoAvisado = true;
    guardarProg();
    setTimeout(() => confeti(li, 80), 700);
  }
  $("intro-modulo").textContent = pick(FRASES);
}

$("lista").addEventListener("click", (e) => {   // si está bloqueado, no entra: solo se sacude
  const a = e.target.closest("li.repaso.bloqueado a");
  if (!a) return;
  e.preventDefault();
  a.classList.remove("sacude");
  void a.offsetWidth;
  a.classList.add("sacude");
});

// ---- Ejercicios fijos dentro de cada subtema ----
function htmlPractica(t) {
  return `<section class="caja caja-practica" data-tema="${t}">
    <h3 class="caja-titulo">Practica: completa los 3 ejercicios<span class="hint" data-estado></span></h3>
    <p class="practica-nota">Al completar los 3 ejercicios se llena tu barra de progreso. La solución se desbloquea cuando termines.</p>
    ${ejerciciosFijos(t).map((ej, n) => htmlEjercicio(ej, `f${t}_${n}`, n, "", `${t}_${n}`)).join("")}
  </section>`;
}
function iniciarPractica(caja) {
  if (!caja) return;
  caja.querySelectorAll(".ejercicio").forEach((art) => {
    if (!prog.fijos[art.dataset.fijo]) return;      // si ya lo resolvió antes, aparece resuelto
    art.querySelector("input").value = ejercicioDe(art).respuesta;
    art.dataset.ok = "1";
    art.classList.add("acierto");
    const m = art.querySelector(".ej-msg");
    m.textContent = "¡Completado!";
    m.className = "ej-msg ok";
  });
  actualizarPractica(caja, true);
}
function actualizarPractica(caja, silencioso) {
  const arts = caja.querySelectorAll(".ejercicio"), total = arts.length;
  const ok = caja.querySelectorAll(".ejercicio[data-ok]").length, completo = ok === total;
  caja.querySelector("[data-estado]").textContent = completo ? (repasoDesbloqueado() ? "✓ Tema completado · ¡Repaso desbloqueado!" : "✓ Tema completado") : `${ok} de ${total}`;
  arts.forEach((a) => {
    const c = a.querySelector(".ej-solucion");
    if (completo) { if (!c.querySelector("details")) c.innerHTML = htmlSolucion(ejercicioDe(a)); }
    else c.innerHTML = htmlBloqueo(`La solución se verá cuando completes los ${total} ejercicios (llevas ${ok}).`);
  });
  if (completo && !silencioso) confeti(caja.querySelector(".caja-titulo"), 80);
}

function registrarVisita(i) {
  if (!prog.vistos.includes(i)) { prog.vistos.push(i); guardarProg(); }
}

function confeti(origen, cantidad = 26) {
  if (sinMovimiento) return;
  const r = origen.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
  const paleta = ["#ff4f8b", "#00a6fb", "#00c48c", "#ff9f1c", "#7c4dff", "#ffd400"];
  for (let i = 0; i < cantidad; i++) {
    const p = document.createElement("i");
    p.className = "confeti-pieza";
    p.style.left = x + "px";
    p.style.top = y + "px";
    p.style.background = paleta[i % paleta.length];
    p.style.setProperty("--dx", rnd(-150, 150) + "px");
    p.style.setProperty("--dy", rnd(-200, -40) + "px");
    p.style.setProperty("--giro", rnd(-540, 540) + "deg");
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1100);
  }
}

function actualizarMarcador() {
  const arts = document.querySelectorAll("#repaso-contenido .ejercicio");
  const total = arts.length, ok = document.querySelectorAll("#repaso-contenido .ejercicio[data-ok]").length;
  if (!total) return;
  const completo = ok === total;
  $("marc-texto").textContent = completo ? "🏆 ¡Repaso completo! Ya puedes ver todas las soluciones."
    : ok === 0 ? "¡Tú puedes! Resuelve el primero." : `${ok} de ${total} correctos · ¡sigue así!`;
  $("marc-barra").style.width = (ok / total * 100) + "%";
  arts.forEach((a) => {                 // la solución solo aparece al terminar todos
    const caja = a.querySelector(".ej-solucion");
    if (completo) { if (!caja.querySelector("details")) caja.innerHTML = htmlSolucion(ejerciciosActivos[a.dataset.id]); }
    else caja.innerHTML = htmlBloqueo(`La solución se verá cuando termines todos los ejercicios (llevas ${ok} de ${total}).`);
  });
  if (completo && !repasoCelebrado) { repasoCelebrado = true; confeti($("marcador"), 80); }
}

// Mostrar la vista según la dirección (#/ o #/3)
function mostrar() {
  if (location.hash === "#/repaso" && !repasoDesbloqueado()) {   // bloqueado: vuelve al inicio
    history.replaceState(null, "", "#/");
    mostrar();
    return;
  }
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
    pintarInicio();
    return;
  }

  vistaIndice.hidden = true;
  vistaDetalle.hidden = false;
  registrarVisita(i);
  document.title = `${sub.titulo} · ${modulo.titulo}`;
  $("detalle-titulo").textContent = sub.titulo;
  $("detalle-modulo").textContent = modulo.titulo;
  renderDetalle(sub, i);

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


/* ============================================================
   IDEAS · un mini-juego distinto en cada subtema (archivo nuevo)
   No modifica animacion.js: se "engancha" solo. Cuando abres un
   subtema, agrega una caja "Juega y descubre" después de
   "Cómo funciona y cómo se aplica".
   El orden de JUEGOS coincide con los subtemas 1.1, 1.2, 1.3...
   ============================================================ */
(function () {
  "use strict";

  const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const fa = (n) => (n <= 1 ? 1 : n * fa(n - 1));
  const fm = (n) => n.toLocaleString("en-US");
  const mezclar = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = R(0, i); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const ms = (t) => (reducido ? 0 : t);
  const fiesta = (el, n) => { if (typeof confeti === "function" && el) confeti(el, n); };
  const mt = (s) => (typeof mate === "function" ? mate(s) : s);
  const vivo = (el) => el && el.isConnected;

  // Cuenta animada de un número en pantalla
  function contar(el, hasta) {
    const desde = Number((el.dataset.v || "0")), t0 = performance.now(), dur = ms(500);
    el.dataset.v = hasta;
    if (!dur) { el.textContent = fm(hasta); return; }
    (function paso(t) {
      const p = Math.min(1, (t - t0) / dur);
      el.textContent = fm(Math.round(desde + (hasta - desde) * (1 - Math.pow(1 - p, 3))));
      if (p < 1 && vivo(el)) requestAnimationFrame(paso);
    })(t0);
  }

  /* ---------- 1.1 LA CAJA FUERTE ---------- */
  function juego11(b) {
    const cuenta = (o, r) =>
      o && r ? [10000, "10 × 10 × 10 × 10 = 10,000: cada posición tiene 10 opciones."]
      : o ? [5040, "10 × 9 × 8 × 7 = 5,040: cada dígito usado ya no vuelve."]
      : r ? [715, "Sin orden y con repetición: 715. ¡Ya no cuentan 1123 y 3211 como distintas!"]
      : [210, "Sin orden y sin repetición: 210. Solo importa qué dígitos son, no en qué orden."];
    b.innerHTML = `
      <p class="jg-intro">Una caja fuerte de <strong>4 dígitos</strong> (del 0 al 9). Mueve los interruptores y mira cuántas claves posibles tiene. Luego intenta abrirla.</p>
      <div class="jg-fila">
        <label class="jg-sw"><input type="checkbox" class="o" checked><i></i>¿Importa el orden?</label>
        <label class="jg-sw"><input type="checkbox" class="r" checked><i></i>¿Se puede repetir?</label>
      </div>
      <div class="jg-gran"><span class="num">0</span><small>claves posibles 🔐</small></div>
      <p class="jg-nota"></p>
      <div class="jg-resp"><input class="pin" inputmode="numeric" maxlength="4" placeholder="PIN de 4 dígitos" aria-label="Prueba un PIN"><button type="button" class="jg-btn">Probar 🔓</button></div>
      <p class="jg-msg" role="status"></p>`;
    const o = b.querySelector(".o"), r = b.querySelector(".r"), num = b.querySelector(".num"),
      nota = b.querySelector(".jg-nota"), pin = b.querySelector(".pin"), msg = b.querySelector(".jg-msg");
    const act = () => { const [n, t] = cuenta(o.checked, r.checked); contar(num, n); nota.textContent = t; msg.textContent = ""; };
    o.addEventListener("change", act); r.addEventListener("change", act); act();
    pin.addEventListener("input", () => { pin.value = pin.value.replace(/\D/g, ""); });
    const probar = () => {
      const p = pin.value;
      msg.className = "jg-msg";
      if (p.length !== 4) { msg.textContent = "Escribe 4 dígitos."; return; }
      const veces = {}; for (const d of p) veces[d] = (veces[d] || 0) + 1;
      if (!r.checked && Object.values(veces).some((v) => v > 1)) {
        msg.classList.add("jg-mal"); msg.textContent = "🚫 La caja la rechaza: tiene dígitos repetidos y aquí no se puede repetir."; return;
      }
      msg.classList.add("jg-ok");
      if (!o.checked) {
        const orden = fa(4) / Object.values(veces).reduce((x, v) => x * fa(v), 1);
        msg.textContent = `✅ ¡Abierta! Como el orden no importa, esos mismos dígitos abren la caja de ${orden} formas distintas.`;
      } else msg.textContent = "✅ ¡Abierta! Con orden, cambiar la posición de un solo dígito ya sería otra clave.";
      fiesta(msg, 30);
    };
    b.querySelector(".jg-btn").addEventListener("click", probar);
    pin.addEventListener("keydown", (e) => { if (e.key === "Enter") probar(); });
  }

  /* ---------- 1.2 DOMINÓ EN CADENA ---------- */
  function juego12(b) {
    b.innerHTML = `
      <p class="jg-intro">Cada ficha es un número. Cuando cae una, empuja a la siguiente y el producto crece. Elige cuántas fichas y empuja la primera.</p>
      <label class="jg-rango">n = <strong class="n">5</strong><input type="range" min="1" max="10" value="5" aria-label="Valor de n"></label>
      <div class="jg-domino"></div>
      <p class="jg-calc"></p>
      <div class="jg-centro"><button type="button" class="jg-btn">Empujar ▶</button></div>`;
    const rango = b.querySelector("input"), nEl = b.querySelector(".n"), fila = b.querySelector(".jg-domino"),
      calc = b.querySelector(".jg-calc"), btn = b.querySelector(".jg-btn");
    let corriendo = false;
    const dibujar = () => {
      const n = +rango.value; nEl.textContent = n;
      fila.innerHTML = Array.from({ length: n }, (_, i) => `<span class="jg-ficha">${n - i}</span>`).join("");
      calc.textContent = `Toca «Empujar» para armar ${n}!`;
    };
    rango.addEventListener("input", () => { if (!corriendo) dibujar(); });
    btn.addEventListener("click", () => {
      if (corriendo) return;
      dibujar();
      const n = +rango.value, fichas = [...fila.children];
      corriendo = true; btn.disabled = true; rango.disabled = true;
      let prod = 1;
      fichas.forEach((f, i) => setTimeout(() => {
        if (!vivo(f)) return;
        f.classList.add("cae"); prod *= n - i;
        calc.textContent = Array.from({ length: i + 1 }, (_, k) => n - k).join(" × ") + " = " + fm(prod);
        if (i === n - 1) {
          corriendo = false; btn.disabled = false; rango.disabled = false;
          calc.innerHTML = `${n}! = ${fm(fa(n))}` + (n > 1 ? `<br><small>= ${n} × ${n - 1}! = ${n} × ${fm(fa(n - 1))}: la ficha grande empuja a todo el resto.</small>` : "") +
            (n === 10 ? "<br><small>¡Con solo 10 fichas ya pasas de 3 millones! 🚀</small>" : "");
          fiesta(calc, 30);
        }
      }, ms(i * 380)));
    });
    dibujar();
  }

  /* ---------- 1.3 EL MONSTRUO COME-FACTORIALES ---------- */
  function juego13(b) {
    let a, bb, exp, sel, hecho;
    b.innerHTML = `
      <p class="jg-intro">El monstruo solo come <strong>factoriales iguales</strong> (uno arriba y uno abajo). Primero expande la fracción y luego toca los dos que se pueden cancelar. ¡Cuidado con los números sueltos!</p>
      <div class="jg-monstruo" aria-hidden="true">👾</div>
      <p class="jg-msg" role="status"></p>
      <div class="jg-frac">
        <div class="jg-fila-f arriba"></div><div class="jg-linea"></div><div class="jg-fila-f abajo"></div>
      </div>
      <div class="jg-fila" style="justify-content:center"><button type="button" class="jg-btn exp">Expandir</button><button type="button" class="jg-btn nuevo">Otra fracción 🔄</button></div>`;
    const arriba = b.querySelector(".arriba"), abajo = b.querySelector(".abajo"), msg = b.querySelector(".jg-msg"),
      mon = b.querySelector(".jg-monstruo"), bExp = b.querySelector(".exp");
    const decir = (t, cls) => { msg.className = "jg-msg " + (cls || ""); msg.textContent = t; };
    const escupe = (t) => { decir(t, "jg-mal"); mon.classList.remove("sacude"); void mon.offsetWidth; mon.classList.add("sacude"); };
    function nuevo() {
      bb = R(3, 7); a = bb + R(2, 3); exp = false; sel = null; hecho = false;
      arriba.innerHTML = `<button type="button" class="jg-chip fact" data-t="f" data-l="a">${a}!</button>`;
      abajo.innerHTML = `<button type="button" class="jg-chip fact" data-t="f" data-l="b">${bb}!</button>`;
      bExp.disabled = false; bExp.textContent = `Expandir ${a}!`;
      decir("Tengo hambre… 😋 Expande " + a + "! para encontrar un " + bb + "! escondido.");
    }
    bExp.addEventListener("click", () => {
      if (exp || hecho) return;
      exp = true; bExp.disabled = true; sel = null;
      arriba.innerHTML = Array.from({ length: a - bb }, (_, i) => `<button type="button" class="jg-chip num" data-t="n" data-l="a">${a - i}</button>`).join("<span>×</span>") +
        `<span>×</span><button type="button" class="jg-chip fact" data-t="f" data-l="a">${bb}!</button>`;
      decir(`${a}! = ${Array.from({ length: a - bb }, (_, i) => a - i).join(" × ")} × ${bb}!  ¿Ves el ${bb}! escondido? Tócalo arriba y abajo.`);
    });
    b.querySelector(".nuevo").addEventListener("click", nuevo);
    b.addEventListener("click", (e) => {
      const c = e.target.closest(".jg-chip[data-t]");
      if (!c || hecho) return;
      if (!sel) { sel = c; c.classList.add("sel"); return; }
      if (sel === c) { c.classList.remove("sel"); sel = null; return; }
      const par = [sel, c]; sel.classList.remove("sel"); sel = null;
      const dosF = par.every((x) => x.dataset.t === "f"), lados = par[0].dataset.l !== par[1].dataset.l;
      if (dosF && lados) {
        if (!exp) return escupe(`🤢 ${a}! y ${bb}! no son iguales todavía. Primero expande ${a}!.`);
        par.forEach((x) => x.classList.add("comido")); hecho = true;
        const nums = Array.from({ length: a - bb }, (_, i) => a - i), p = nums.reduce((x, y) => x * y, 1);
        decir(`😋 ¡Ñam! Se cancelaron los ${bb}!. Queda ${nums.join(" × ")} = ${fm(p)}.`, "jg-ok");
        fiesta(mon, 40);
      } else if (dosF) escupe("🤢 ¡Puaj! Esos dos están del mismo lado: no se cancelan entre sí.");
      else escupe("🤢 ¡Puaj! Un factorial solo se cancela con otro factorial igual, nunca con un número suelto. (4! ≠ 4)");
    });
    nuevo();
  }

  /* ---------- 1.4 ARMADOR DE HAMBURGUESAS ---------- */
  function juego14(b) {
    const D = {
      pan: ["🍞 Pan", ["Brioche", "Integral", "Sin gluten"]],
      carne: ["🥩 Carne", ["Res", "Pollo", "Veggie"]],
      salsa: ["🧴 Salsa", ["Ketchup", "Mostaza", "BBQ", "Ajo", "Picante", "Miel"]],
    };
    const sel = { pan: 0, carne: 0, salsa: 0 };
    let nSalsa = 3;
    b.innerHTML = `
      <p class="jg-intro">Arma tu hamburguesa: en cada fila eliges <strong>una</strong> opción. Agrega salsas y mira cómo se dispara el total.</p>
      <div class="filas"></div>
      <div class="jg-fila"><button type="button" class="jg-btn mas">+ Agregar salsa</button><button type="button" class="jg-btn menos">− Quitar salsa</button><button type="button" class="jg-btn azar">🎲 Sorpréndeme</button></div>
      <div class="jg-burger" aria-live="polite"></div>
      <div class="jg-cuenta"></div>`;
    const filas = b.querySelector(".filas"), burger = b.querySelector(".jg-burger"), cuenta = b.querySelector(".jg-cuenta");
    function pintar() {
      filas.innerHTML = Object.entries(D).map(([k, [tit, ops]]) => {
        const n = k === "salsa" ? nSalsa : ops.length;
        return `<div class="jg-menu-fila"><b>${tit}</b>${ops.slice(0, n).map((o, i) => `<button type="button" class="jg-chip" data-f="${k}" data-i="${i}" aria-pressed="${sel[k] === i}">${o}</button>`).join("")}</div>`;
      }).join("");
      burger.textContent = `🍞 ${D.pan[1][sel.pan]} + 🥩 ${D.carne[1][sel.carne]} + 🧴 ${D.salsa[1][sel.salsa]}`;
      const np = D.pan[1].length, nc = D.carne[1].length, tot = np * nc * nSalsa;
      cuenta.innerHTML = `<span class="o">«o»</span> En cada fila eliges UNA opción (se suma): ${np} + ${nc} + ${nSalsa} = ${np + nc + nSalsa} ingredientes.<br>
        <span class="y">«y»</span> Pero la hamburguesa lleva pan Y carne Y salsa (se multiplica): ${np} × ${nc} × ${nSalsa} = <strong>${tot}</strong> hamburguesas distintas.`;
      b.querySelector(".mas").disabled = nSalsa >= 6;
      b.querySelector(".menos").disabled = nSalsa <= 1;
    }
    b.addEventListener("click", (e) => {
      const c = e.target.closest(".jg-chip[data-f]");
      if (c) { sel[c.dataset.f] = +c.dataset.i; pintar(); return; }
      if (e.target.closest(".mas") && nSalsa < 6) { nSalsa++; pintar(); fiesta(cuenta, 14); }
      else if (e.target.closest(".menos") && nSalsa > 1) { nSalsa--; sel.salsa = Math.min(sel.salsa, nSalsa - 1); pintar(); }
      else if (e.target.closest(".azar")) { sel.pan = R(0, 2); sel.carne = R(0, 2); sel.salsa = R(0, nSalsa - 1); pintar(); }
    });
    pintar();
  }

  /* ---------- 1.5 EL SEMÁFORO DETECTIVE ---------- */
  function juego15(b) {
    const CASOS = [
      ["Se entregan oro, plata y bronce entre 9 equipos.", 1, 0, "Las medallas son diferentes (orden sí) y solo se premian 3 de los 9."],
      ["Se ordenan los 6 módulos de un sistema para desplegarlos todos.", 1, 1, "La secuencia importa y se ordenan todos los elementos."],
      ["Se elige un comité de 4 personas entre 10.", 0, 0, "Todos hacen lo mismo: el orden no importa."],
      ["7 corredores llegan a la meta y se anota la posición de cada uno.", 1, 1, "La posición importa y se ubican todos."],
      ["Se escogen 3 sabores de helado entre 8.", 0, 0, "Son los mismos sabores sin importar el orden."],
      ["De 8 pruebas se ejecutan 4 en una secuencia específica.", 1, 0, "La secuencia importa y no se ejecutan todas."],
      ["Con los dígitos del 0 al 9 se forma un PIN de 4 cifras sin repetir.", 1, 0, "1234 ≠ 4321 (orden sí) y se usan solo 4 de los 10 dígitos."],
      ["5 amigos se colocan en fila para una foto.", 1, 1, "El lugar importa y se ordenan los 5."],
      ["Se eligen 2 de 6 estudiantes para revisar un módulo (misma tarea).", 0, 0, "No hay cargos distintos: el orden no importa."],
    ];
    const NOM = { C: "Combinación", V: "Variación", P: "Permutación" };
    const FOR = { C: "C[n,r] = {n!}/{(n−r)! · r!}", V: "V[n,r] = {n!}/{(n−r)!}", P: "P(n) = n!" };
    let mazo = [], racha = 0, caso, r;
    const real = () => (caso[1] ? (caso[2] ? "P" : "V") : "C");
    const veredicto = () => (r.o === 0 ? "C" : r.o === 1 && r.t === 1 ? "P" : r.o === 1 && r.t === 0 ? "V" : null);
    function siguiente() { if (!mazo.length) mazo = mezclar(CASOS); caso = mazo.pop(); r = { o: null, t: null, fin: null }; pintar(); }
    function pintar() {
      const v = veredicto();
      const luz = (k, cls) => `<i class="${v === k ? cls : ""}"></i>`;
      const pres = (cond) => (cond ? ' aria-pressed="true"' : "");
      let fin = "";
      if (r.fin === "ok") fin = `<p class="jg-msg jg-ok">✅ ¡Caso resuelto! Es <strong>${NOM[v]}</strong>. ${caso[3]}</p><div class="jg-formula">${mt(FOR[v])}</div><div class="jg-fila"><button type="button" class="jg-btn" data-a="sig">Siguiente caso →</button></div>`;
      if (r.fin === "mal") fin = `<p class="jg-msg jg-mal">🤔 El detective duda… Pista: piensa si cambiar el orden cambia el resultado y si se usan todos los elementos.</p><div class="jg-fila"><button type="button" class="jg-btn" data-a="otra">Intentar de nuevo</button></div>`;
      b.querySelector(".cuerpo").innerHTML = `
        <p class="jg-intro">Lee el caso y responde las preguntas del detective: el semáforo dará el veredicto. Resuelve 5 seguidos para ganar la placa.</p>
        <p class="jg-caso">📁 ${caso[0]}</p>
        <div class="jg-semaforo" aria-label="Semáforo del veredicto">${luz("C", "on-v")}${luz("V", "on-a")}${luz("P", "on-r")}</div>
        <p class="jg-nota jg-centro">🟢 Combinación · 🟡 Variación · 🔴 Permutación</p>
        <div class="jg-fila"><b>¿Importa el orden?</b><button type="button" class="jg-chip" data-q="o1"${pres(r.o === 1)}>Sí</button><button type="button" class="jg-chip" data-q="o0"${pres(r.o === 0)}>No</button></div>
        ${r.o === 1 ? `<div class="jg-fila"><b>¿Se usan todos los elementos?</b><button type="button" class="jg-chip" data-q="t1"${pres(r.t === 1)}>Sí</button><button type="button" class="jg-chip" data-q="t0"${pres(r.t === 0)}>No</button></div>` : ""}
        ${fin}
        <p class="jg-racha">🔥 Racha: ${racha} / 5 ${racha >= 5 ? '<span class="jg-placa">🕵️ Placa de detective</span>' : ""}</p>`;
    }
    b.insertAdjacentHTML("beforeend", '<div class="cuerpo"></div>');
    b.addEventListener("click", (e) => {
      const q = e.target.closest("[data-q]"), a = e.target.closest("[data-a]");
      if (a) { if (a.dataset.a === "sig") siguiente(); else { r = { o: null, t: null, fin: null }; pintar(); } return; }
      if (!q || r.fin === "ok") return;
      const [k, val] = [q.dataset.q[0], +q.dataset.q[1]];
      r.fin = null;
      if (k === "o") { r.o = val; r.t = null; } else r.t = val;
      const v = veredicto();
      if (v) {
        if (v === real()) { racha++; r.fin = "ok"; } else { racha = 0; r.fin = "mal"; }
      }
      pintar();
      if (r.fin === "ok") { fiesta(b.querySelector(".jg-semaforo"), racha === 5 ? 90 : 24); }
    });
    siguiente();
  }

  /* ---------- 1.6 MESA GIRATORIA Y LETRAS GEMELAS ---------- */
  function juego16(b) {
    b.innerHTML = `
      <p class="jg-sub">🪑 Parte 1 · La mesa giratoria (permutación circular)</p>
      <p class="jg-intro">Personas en una mesa redonda. Agrega o quita personas y gira la mesa: ¿cambia algo?</p>
      <div class="jg-fila" style="justify-content:center">
        <button type="button" class="jg-btn menosp">− Quitar persona</button>
        <strong class="np"></strong>
        <button type="button" class="jg-btn masp">+ Agregar persona</button>
      </div>
      <div class="jg-mesa"><div class="jg-mesa-rot"></div></div>
      <div class="jg-fila" style="justify-content:center">
        <button type="button" class="jg-btn girar">↻ Girar la mesa</button>
        <button type="button" class="jg-btn fijar">📌 Fijar a Ana</button>
        <button type="button" class="jg-btn mezclar" disabled>🔀 Mezclar a los demás</button>
      </div>
      <p class="jg-msg mesa-msg" role="status"></p>
      <p class="jg-sub">🔤 Parte 2 · Letras gemelas (permutación con repetidos)</p>
      <p class="jg-intro">Elige una palabra o escribe la tuya (de 2 a 11 letras). Las letras iguales son gemelas: barájalas y cuenta las palabras distintas.</p>
      <div class="jg-fila palabras" style="justify-content:center"></div>
      <div class="jg-resp"><input class="mipal" maxlength="11" placeholder="Tu palabra" aria-label="Escribe tu palabra"><button type="button" class="jg-btn usar">Usar mi palabra</button></div>
      <div class="jg-fichas"></div>
      <div class="jg-fila" style="justify-content:center">
        <button type="button" class="jg-btn baraja">🔀 Barajar</button>
        <button type="button" class="jg-btn baraja10">🔀 Barajar ×10</button>
        <button type="button" class="jg-btn swap">↔ Intercambiar dos gemelas</button>
        <button type="button" class="jg-btn why">¿Por qué?</button>
      </div>
      <p class="jg-msg letras-msg" role="status"></p>
      <div class="jg-formula"></div>`;

    // --- Mesa (de 3 a 8 personas) ---
    const NOM = ["Ana", "Beto", "Carla", "Dani", "Elsa", "Fer", "Gus", "Hugo"], EMO = ["👩", "🧑", "👧", "👦", "👵", "👨", "🧒", "👴"];
    const rotEl = b.querySelector(".jg-mesa-rot"), mmsg = b.querySelector(".mesa-msg"), npEl = b.querySelector(".np");
    let n = 5, asientos = [], rot = 0, fija = false; const vistas = new Set();
    const personas = NOM.map((nombre, p) => {
      const d = document.createElement("div");
      d.className = "jg-persona"; d.style.setProperty("--p", `var(--c${(p % 5) + 1})`);
      d.innerHTML = `${EMO[p]}<small>${nombre}</small>`; rotEl.appendChild(d); return d;
    });
    const dm = (t, c) => { mmsg.className = "jg-msg mesa-msg " + (c || ""); mmsg.textContent = t; };
    function colocar() {
      rotEl.style.transform = `rotate(${rot}deg)`;
      personas.forEach((d, p) => {
        d.classList.toggle("oculta", p >= n);
        if (p >= n) return;
        const ang = (asientos.indexOf(p) * (360 / n) - 90) * Math.PI / 180;
        d.style.left = 120 + 90 * Math.cos(ang) - 23 + "px";
        d.style.top = 120 + 90 * Math.sin(ang) - 23 + "px";
        d.style.transform = `rotate(${-rot}deg)`;
        d.classList.toggle("fija", fija && p === 0);
      });
    }
    function cambiarN(d) {
      n = Math.max(3, Math.min(8, n + d));
      asientos = Array.from({ length: n }, (_, i) => i); rot = 0; vistas.clear();
      npEl.textContent = `${n} personas`;
      b.querySelector(".menosp").disabled = n <= 3; b.querySelector(".masp").disabled = n >= 8;
      colocar();
      dm(`Con ${n} personas hay (${n}−1)! = ${n - 1}! = ${fm(fa(n - 1))} formas distintas (sin contar los giros).`, "jg-ok");
    }
    b.querySelector(".menosp").addEventListener("click", () => cambiarN(-1));
    b.querySelector(".masp").addEventListener("click", () => cambiarN(1));
    b.querySelector(".girar").addEventListener("click", () => {
      rot += 360 / n; colocar();
      dm(fija ? "Ana sigue siendo la referencia: girar no crea ninguna disposición nueva."
              : "¡Todos se movieron, pero cada uno conserva a los mismos vecinos! Es la MISMA disposición. Por eso no se cuenta como nueva.");
    });
    b.querySelector(".fijar").addEventListener("click", (e) => {
      fija = !fija; e.target.textContent = fija ? "📌 Soltar a Ana" : "📌 Fijar a Ana";
      b.querySelector(".mezclar").disabled = !fija; colocar();
      dm(fija ? `Con Ana fija ya hay un punto de partida: los otros ${n - 1} se ordenan libremente → (${n}−1)! = ${n - 1}! = ${fm(fa(n - 1))} formas.` : "Sin una persona fija, girar la mesa genera copias de la misma disposición.", fija ? "jg-ok" : "");
    });
    b.querySelector(".mezclar").addEventListener("click", () => {
      rot = Math.ceil(rot / 360) * 360;
      asientos = [0, ...mezclar(Array.from({ length: n - 1 }, (_, i) => i + 1))]; vistas.add(asientos.join(","));
      colocar();
      const total = fa(n - 1);
      dm(`Disposiciones distintas vistas: ${fm(vistas.size)} de ${fm(total)}.`, "jg-ok");
      if (vistas.size === total) fiesta(mmsg, 70);
    });
    cambiarN(0);

    // --- Letras gemelas (palabra a elección) ---
    const lf = b.querySelector(".jg-fichas"), lmsg = b.querySelector(".letras-msg"), form = b.querySelector(".jg-formula"),
      cajaPal = b.querySelector(".palabras"), entrada = b.querySelector(".mipal");
    const SUG = ["ANA", "PAPA", "SALA", "LLAMA", "BANANA", "MATEMATICAS"];
    cajaPal.innerHTML = SUG.map((w) => `<button type="button" class="jg-chip" data-w="${w}">${w}</button>`).join("");
    let palabra = "", fichas = [], total = 0; const palabras = new Set();
    const dl = (t, c) => { lmsg.className = "jg-msg letras-msg " + (c || ""); lmsg.textContent = t; };
    const conteo = (w) => { const c = {}; for (const x of w) c[x] = (c[x] || 0) + 1; return c; };
    function usar(w) {
      w = w.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().replace(/[^A-ZÑ]/g, "");
      if (w.length < 2 || w.length > 11) { dl("Escribe una palabra de 2 a 11 letras (solo letras).", "jg-mal"); return; }
      palabra = w; palabras.clear(); form.innerHTML = "";
      const c = conteo(w), vistoK = {};
      const orden = [...new Set(w)];
      fichas = [...w].map((l) => { vistoK[l] = (vistoK[l] || 0) + 1; return { l, s: c[l] > 1 ? vistoK[l] : 0, col: orden.indexOf(l) % 5 + 1 }; });
      total = fa(w.length) / Object.values(c).reduce((x, m) => x * fa(m), 1);
      cajaPal.querySelectorAll(".jg-chip").forEach((x) => x.setAttribute("aria-pressed", String(x.dataset.w === w)));
      dibujar();
      dl(`${w}: hay ${fm(total)} ordenamientos distintos. ¡Baraja y encuentra los que puedas!`);
    }
    function dibujar(giran) {
      lf.innerHTML = fichas.map((f, i) => `<span class="jg-letra${fichas.length > 7 ? " chica" : ""}${giran && giran.includes(i) ? " gira" : ""}" style="--lc:var(--c${f.col})">${f.l}${f.s ? `<sub>${f.s}</sub>` : ""}</span>`).join("");
    }
    function estado() {
      const w = fichas.map((f) => f.l).join("");
      if (palabras.size === total) { dl(`🎉 ¡Encontraste las ${fm(total)} palabras distintas! Las ${fm(fa(palabra.length))} formas con fichas numeradas se reducen a ${fm(total)}.`, "jg-ok"); porque(); fiesta(lf, 60); }
      else dl(`Ahora: ${w}. Palabras distintas encontradas: ${fm(palabras.size)} de ${fm(total)}.` + (total > 1000 ? " ¡Imposible hallarlas todas a mano! Para eso existe la fórmula." : ""), "jg-ok");
    }
    function porque() {
      const c = conteo(palabra), reps = Object.values(c).filter((m) => m > 1), den = reps.reduce((x, m) => x * fa(m), 1), L = palabra.length;
      form.innerHTML = mt(reps.length ? `{${L}!}/{${reps.map((m) => m + "!").join(" · ")}} = ${fm(fa(L))} / ${fm(den)} = ${fm(total)}` : `${L}! = ${fm(total)}`);
    }
    function barajar1() { fichas = mezclar(fichas); palabras.add(fichas.map((f) => f.l).join("")); }
    b.querySelector(".baraja").addEventListener("click", () => { barajar1(); dibujar(); estado(); });
    b.querySelector(".baraja10").addEventListener("click", () => { for (let i = 0; i < 10; i++) barajar1(); dibujar(); estado(); });
    b.querySelector(".swap").addEventListener("click", () => {
      const c = conteo(palabra), l = [...palabra].find((x) => c[x] > 1);
      if (!l) { dl("Esta palabra no tiene letras repetidas: no hay gemelas que intercambiar, así que todas sus ordenaciones son distintas.", "jg-mal"); return; }
      const idx = fichas.map((f, i) => (f.l === l ? i : -1)).filter((i) => i >= 0);
      [fichas[idx[0]], fichas[idx[1]]] = [fichas[idx[1]], fichas[idx[0]]]; dibujar([idx[0], idx[1]]);
      dl(`Cambiaron de lugar dos ${l} (${l}₁ y ${l}₂), pero la palabra sigue siendo ${fichas.map((f) => f.l).join("")}. Por eso se divide entre ${c[l]}!.`);
    });
    b.querySelector(".why").addEventListener("click", porque);
    cajaPal.addEventListener("click", (e) => { const c = e.target.closest("[data-w]"); if (c) { entrada.value = ""; usar(c.dataset.w); } });
    b.querySelector(".usar").addEventListener("click", () => usar(entrada.value));
    entrada.addEventListener("keydown", (e) => { if (e.key === "Enter") usar(entrada.value); });
    usar("PAPA");
  }

  /* ---------- Montaje: un juego por subtema ---------- */
  const JUEGOS = [
    ["🔐 Juega y descubre: la caja fuerte", juego11, "--c2"],
    ["🎲 Juega y descubre: dominó en cadena", juego12, "--c1"],
    ["👾 Juega y descubre: el monstruo come-factoriales", juego13, "--c5"],
    ["🍔 Juega y descubre: armador de hamburguesas", juego14, "--c4"],
    ["🕵️ Juega y descubre: el semáforo detective", juego15, "--c3"],
    ["🪑 Juega y descubre: mesa giratoria y letras gemelas", juego16, "--c1"],
  ];
  const cont = document.getElementById("detalle-contenido");
  if (!cont) return;

  function montar() {
    const m = location.hash.match(/^#\/(\d+)$/);
    if (!m || !cont.children.length || cont.querySelector(".caja-juego")) return;
    const j = JUEGOS[parseInt(m[1], 10) - 1];
    if (!j) return;
    const caja = document.createElement("section");
    caja.className = "caja caja-juego";
    caja.style.setProperty("--cc", `var(${j[2]})`);
    caja.style.setProperty("--i", 5);
    caja.innerHTML = `<h3 class="caja-titulo">${j[0]}</h3>`;
    const ref = cont.querySelector(".caja-aplica");
    if (ref) ref.after(caja); else cont.appendChild(caja);
    const cuerpo = document.createElement("div");
    cuerpo.className = "jg-cuerpo";
    caja.appendChild(cuerpo);
    j[1](cuerpo);
  }
  new MutationObserver(montar).observe(cont, { childList: true });
  montar();
})();
