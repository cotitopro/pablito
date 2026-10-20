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
  // Clásicas
  "E = mc²", "a² + b² = c²", "∫ x² dx = x³/3", "e^(iπ) + 1 = 0",
  "∑ 1/n² = π²/6", "x = (−b ± √(b²−4ac)) / 2a", "sin²θ + cos²θ = 1",
  "d/dx sin x = cos x", "lim x→0 sin x / x = 1", "P(x) = aₙxⁿ + … + a₁x + a₀",
  "(a + b)² = a² + 2ab + b²", "n! = n·(n−1)!", "Δ = b² − 4ac",
  "log(ab) = log a + log b", "P(A|B) = P(B|A)·P(A) / P(B)",
  "(x+1)(x−1) = x² − 1", "f′(x) = lim h→0 [f(x+h)−f(x)]/h", "π ≈ 3.14159",
  "∇·E = ρ/ε₀", "∞", "√2", "∂f/∂x", "x³ + 2x² − 5x + 1",
  // Combinatoria (las de este módulo)
  "0! = 1", "5! = 120", "P(n) = n!", "Pc(n) = (n−1)!", "V(n,r) = n! / (n−r)!",
  "C(n,r) = n! / (r!(n−r)!)", "C(5,2) = 10", "V(8,3) = 336", "3! = 6",
  "m × n", "n₁ × n₂ × n₃", "7!/6! = 7", "10!/8! = 90", "n!/(m₁!·m₂!)",
  "(n+1)! = (n+1)·n!", "C(n,0) = 1", "C(n,1) = n", "C(n,r) = C(n,n−r)",
  // Más matemáticas curiosas
  "φ = (1+√5)/2", "e ≈ 2.71828", "1 + 2 + … + n = n(n+1)/2", "(a−b)² = a² − 2ab + b²",
  "a³ − b³ = (a−b)(a²+ab+b²)", "Fₙ = Fₙ₋₁ + Fₙ₋₂", "cos 2θ = 2cos²θ − 1",
  "i² = −1", "log₂ 8 = 3", "2ⁿ", "√(a²) = |a|", "y = mx + b", "A = πr²", "V = ⁴⁄₃πr³",
  "σ² = Σ(x−μ)²/n", "a/b = c/d ⇒ ad = bc", "x⁰ = 1", "∫ 1/x dx = ln|x|"
];
const colores = ["#ff4f8b", "#00a6fb", "#7c4dff", "#ff9f1c", "#00c48c"];
const lluvia = $("lluvia");
const cantidad = window.innerWidth < 600 ? 8 : 16;
const azar = (a, b) => a + Math.random() * (b - a);

const mezcla = [...formulas].sort(() => Math.random() - 0.5);   // así no se repite la misma fórmula en pantalla
for (let i = 0; i < cantidad; i++) {
  const f = document.createElement("span");
  f.textContent = mezcla[i % mezcla.length];
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
  `<li class="repaso" style="--i:${modulo.subtemas.length + 2}"><a href="#/repaso"><span class="num">★</span><span class="nombre">Repaso: ¡pon a prueba lo aprendido!</span></a></li>`);

const vistaRepaso = document.createElement("section");
vistaRepaso.id = "vista-repaso";
vistaRepaso.className = "detalle";
vistaRepaso.hidden = true;
vistaRepaso.innerHTML = `
  <a class="volver" href="#/">← Volver al módulo</a>
  <h2>Repaso</h2>
  <p class="modulo">Ejercicios nuevos cada vez que entras. Desliza hacia abajo para ver los demás temas. Califica la hoja cuando quieras para revisar las respuestas y ver las soluciones.</p>
  <div class="marcador" id="marcador"><strong id="marc-texto"></strong><div class="barra"><div class="relleno" id="marc-barra"></div></div></div>
  <div class="repaso-acciones">
    <button type="button" class="btn-nuevos" id="btn-nuevos">Nuevos ejercicios</button>
    <button type="button" class="btn-calificar" id="btn-calificar-hoja">Calificar hoja</button>
    <p class="hoja-calificacion" id="hoja-calificacion" role="status">Califica la hoja para ver todas las soluciones, incluso si dejaste respuestas vacías.</p>
  </div>
  <section class="hoja-records" aria-labelledby="hoja-records-titulo">
    <div class="hoja-records-cabecera">
      <div><h3 id="hoja-records-titulo">🏆 Mejores tiempos</h3><p>Tus tres récords de la Hoja de ejercicios.</p></div>
      <output id="hoja-tiempo" role="timer" aria-live="off">Tiempo: 0:00</output>
    </div>
    <div class="hoja-records-tabla">
      <table>
        <thead><tr><th>#</th><th>Fecha y hora</th><th>Tiempo</th></tr></thead>
        <tbody class="hoja-records-filas"></tbody>
      </table>
    </div>
  </section>
  <div id="repaso-contenido"></div>`;
document.querySelector("main").appendChild(vistaRepaso);

const itemJuegos = document.createElement("li");
itemJuegos.className = "juegos";
itemJuegos.style.setProperty("--i", modulo.subtemas.length + 1);
itemJuegos.innerHTML = `<a href="#/juegos"><span class="num">🎮</span><span class="nombre">Minijuegos: aprende jugando</span></a>`;
$("lista").insertBefore(itemJuegos, $("lista").querySelector(".repaso"));

const vistaJuegos = document.createElement("section");
vistaJuegos.id = "vista-juegos";
vistaJuegos.className = "detalle juegos";
vistaJuegos.hidden = true;
vistaJuegos.innerHTML = `
  <a class="volver" href="#/">← Volver al módulo</a>
  <h2>Minijuegos de combinatoria</h2>
  <p class="modulo">Elige un juego, prueba ideas de las seis lecciones y diviértete. Los aciertos del Reto del huevo hacen crecer a tu mascota.</p>
  <div class="minijuegos-menu" id="minijuegos-menu" aria-label="Elige un minijuego"></div>
  <section class="caja caja-juego minijuego-activo" id="minijuego-activo" hidden>
    <button type="button" class="minijuegos-volver" id="minijuegos-volver">← Todos los juegos</button>
    <h3 class="caja-titulo" id="minijuego-titulo"></h3>
    <div class="jg-cuerpo" id="minijuego-cuerpo"></div>
  </section>`;
document.querySelector("main").appendChild(vistaJuegos);

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
let repasoCalificada = false;
let inicioHojaMs = 0;
let temporizadorHoja;
let hojaRegistroGuardado = false;

function formatearTiempo(ms) {
  const segundos = Math.floor(ms / 1000);
  return `${Math.floor(segundos / 60)}:${String(segundos % 60).padStart(2, "0")}`;
}

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
  repasoCalificada = false;
  hojaRegistroGuardado = false;
  clearInterval(temporizadorHoja);
  inicioHojaMs = Date.now();
  $("hoja-calificacion").textContent = "Califica la hoja para ver todas las soluciones, incluso si dejaste respuestas vacías.";
  $("hoja-tiempo").textContent = "Tiempo: 0:00";
  temporizadorHoja = setInterval(() => {
    $("hoja-tiempo").textContent = `Tiempo: ${formatearTiempo(Date.now() - inicioHojaMs)}`;
  }, 1000);
  dibujarRecordsHoja();
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
  repasoTerminado = false;
  actualizarMarcador();
}

function limpiarRepaso() {            // al salir, los ejercicios se borran
  if (!repasoActivo) return;
  clearInterval(temporizadorHoja);
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
        const tema = Number(art.dataset.fijo.split("_")[0]);
        const temaYaCompleto = temaCompleto(tema);
        prog.fijos[art.dataset.fijo] = true;
        guardarProg();
        actualizarPractica(art.closest(".caja-practica"));
        reaccionarMascota(!temaYaCompleto && temaCompleto(tema));
      } else {
        prog.correctas++;
        guardarProg();
        actualizarMarcador();
        reaccionarMascota();
      }
    } else {
      reaccionarMascota();
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

const CLAVE_RECORDS_HOJA = "modulo1_hoja_ejercicios_records";
function leerRecordsHoja() {
  try {
    const guardados = JSON.parse(localStorage.getItem(CLAVE_RECORDS_HOJA) || "[]");
    if (!Array.isArray(guardados)) return [];
    return guardados
      .filter((record) => Number.isFinite(record.tiempoMs) && record.tiempoMs >= 0 && typeof record.fecha === "string" && Number.isFinite(Date.parse(record.fecha)))
      .sort((a, z) => a.tiempoMs - z.tiempoMs)
      .slice(0, 3);
  } catch (error) {
    console.error("No se pudieron leer los récords de la Hoja de ejercicios.", error);
    return [];
  }
}
function dibujarRecordsHoja(records = leerRecordsHoja()) {
  const filas = $("vista-repaso").querySelector(".hoja-records-filas");
  filas.replaceChildren();
  if (!records.length) {
    const fila = document.createElement("tr");
    const celda = document.createElement("td");
    celda.colSpan = 3;
    celda.textContent = "Califica una hoja para guardar tu primer récord.";
    fila.appendChild(celda);
    filas.appendChild(fila);
    return;
  }
  const fechaFormato = new Intl.DateTimeFormat("es-GT", { dateStyle: "short", timeStyle: "short" });
  records.forEach((record, index) => {
    const fila = document.createElement("tr");
    const puesto = document.createElement("th");
    puesto.scope = "row";
    puesto.textContent = String(index + 1);
    const fecha = document.createElement("td");
    fecha.textContent = fechaFormato.format(new Date(record.fecha));
    const tiempo = document.createElement("td");
    tiempo.textContent = formatearTiempo(record.tiempoMs);
    fila.append(puesto, fecha, tiempo);
    filas.appendChild(fila);
  });
}
function registrarRecordHoja() {
  if (hojaRegistroGuardado) return true;
  hojaRegistroGuardado = true;
  clearInterval(temporizadorHoja);
  const tiempoMs = Math.max(0, Date.now() - inicioHojaMs);
  $("hoja-tiempo").textContent = `Tiempo final: ${formatearTiempo(tiempoMs)}`;
  const records = [...leerRecordsHoja(), { fecha: new Date().toISOString(), tiempoMs }]
    .sort((a, z) => a.tiempoMs - z.tiempoMs)
    .slice(0, 3);
  try {
    localStorage.setItem(CLAVE_RECORDS_HOJA, JSON.stringify(records));
    dibujarRecordsHoja(records);
    return true;
  } catch (error) {
    console.error("No se pudo guardar el récord de la Hoja de ejercicios.", error);
    dibujarRecordsHoja();
    return false;
  }
}
$("btn-calificar-hoja").addEventListener("click", () => {
  const arts = [...document.querySelectorAll("#repaso-contenido .ejercicio")];
  let correctas = 0;
  arts.forEach((art) => {
    const ej = ejercicioDe(art);
    const respuesta = normaliza(art.querySelector("input").value);
    const correcta = normaliza(ej.respuesta);
    const acierto = Boolean(respuesta) && (respuesta === correcta || (ej.contiene && respuesta.includes(correcta)));
    art.classList.toggle("acierto", acierto);
    if (acierto) {
      art.dataset.ok = "1";
      correctas++;
    } else {
      delete art.dataset.ok;
    }
    const msg = art.querySelector(".ej-msg");
    msg.className = `ej-msg ${acierto ? "ok" : "mal"}`;
    msg.textContent = acierto
      ? "Correcta."
      : respuesta
        ? "Incorrecta. La solución ya está disponible abajo."
        : "Sin responder. Se cuenta como incorrecta; la solución ya está disponible abajo.";
  });
  repasoCalificada = true;
  $("hoja-calificacion").textContent = `Hoja calificada: ${correctas} de ${arts.length} correctas. Ya puedes consultar todas las soluciones.`;
  const guardado = registrarRecordHoja();
  if (!guardado) $("hoja-calificacion").textContent += " No se pudo guardar el tiempo en este dispositivo.";
  actualizarMarcador();
});

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
let prog = { vistos: [], correctas: 0, fijos: {}, repasoAvisado: false, crecimientoPollito: 0 };
try { prog = Object.assign(prog, JSON.parse(localStorage.getItem(CLAVE_PROG) || "{}")); } catch (e) {}
prog.crecimientoPollito = Math.max(0, Math.min(5, Number(prog.crecimientoPollito) || 0));
const guardarProg = () => { try { localStorage.setItem(CLAVE_PROG, JSON.stringify(prog)); } catch (e) {} };
const ultimaVisita = Date.parse(prog.ultimaVisita || "");
let mascotaAusente = Number.isFinite(ultimaVisita) && Date.now() - ultimaVisita >= 3 * 24 * 60 * 60 * 1000;
prog.ultimaVisita = new Date().toISOString();
guardarProg();
let repasoCelebrado = false;
let temporizadorMascota;
let eclosionEnCurso = false;
let temporizadorEclosion;
let temporizadorCompanero;
let indiceFraseCompanero = 0;
let repasoTerminado = false;
const FRASES = [      // una al azar cada vez que ves el inicio (puedes cambiarlas o agregar más)
  "Cada tema que dominas es un nivel que superas ⭐",
  "Empieza por donde quieras: en 10 minutos ya habrás aprendido algo nuevo.",
  "Contar bien es un superpoder. ¡Vamos a entrenarlo!",
  "Un ejercicio a la vez y verás cómo todo tiene sentido.",
  "Aquí no se memoriza: se entiende, se practica y se disfruta.",
];

function temaCompleto(t) { return !!GEN[t] && GEN[t].every((_, n) => prog.fijos[`${t}_${n}`]); }

const repasoDesbloqueado = () => modulo.subtemas.every((_, t) => !GEN[t] || temaCompleto(t));
const huevoEclosiono = prog.crecimientoPollito >= 5;
if (prog.pollitoNacio !== huevoEclosiono) {
  prog.pollitoNacio = huevoEclosiono;
  guardarProg();
}

function actualizarMascota(feliz = false) {
  const progreso = prog.crecimientoPollito;
  const porcentaje = Math.round(progreso / 5 * 100);
  const eclosiono = progreso >= 5;
  const tarjeta = $("mascota");
  tarjeta.classList.toggle("triste", !feliz && mascotaAusente);
  tarjeta.classList.toggle("feliz", feliz);
  $("mascota-pollito").hidden = !eclosiono || eclosionEnCurso;
  $("mascota-emoji").hidden = eclosiono && !eclosionEnCurso;
  $("mascota-avatar").classList.toggle("eclosionado", eclosiono && !eclosionEnCurso);
  $("mascota-avatar").classList.toggle("eclosionando", eclosionEnCurso);
  $("mascota-avatar").querySelectorAll(".mascota-grieta").forEach((grieta) => {
    grieta.toggleAttribute("hidden", progreso < Number(grieta.dataset.etapa) || eclosiono);
  });
  $("mascota-emoji").textContent = "🥚";
  $("mascota-nombre").textContent = `Tu mascota · ${eclosiono ? "Pollito" : "Huevo"}`;
  $("mascota-progreso").textContent = `${porcentaje}%`;
  $("mascota-barra").setAttribute("aria-valuenow", String(porcentaje));
  $("mascota-barra").setAttribute("aria-valuetext", `${porcentaje}% · ${progreso} de 5 aciertos en el juego de crecimiento`);
  $("mascota-relleno").style.width = `${porcentaje}%`;
  $("mascota-mensaje").textContent = feliz
    ? "¡Qué bien lo estás haciendo! ¡Sigue así!"
    : mascotaAusente
      ? "Te extrañé estos días. ¡Qué bueno que volviste!"
      : eclosiono
        ? "¡Gracias por ayudarme a nacer en el Reto del huevo! ¡Ahora te acompaño! 🐣"
        : `Hazme crecer en el Reto del huevo: llevas ${progreso} de 5 aciertos.`;
}

function iniciarEclosion(origen) {
  if (eclosionEnCurso || !prog.pollitoNacio) return;
  prog.pollitoNacio = true;
  guardarProg();
  eclosionEnCurso = true;
  actualizarMascota();
  $("mascota-avatar").classList.remove("eclosionado", "hablando");
  $("mascota-avatar").classList.add("eclosionando");
  $("mascota-mensaje").textContent = "¡El huevo se está rompiendo! Gracias por ayudarme a nacer. 💛";
  confeti(origen, 70);
  acompanarEstudio("¡El huevo se está rompiendo! Gracias por ayudarme a nacer. 💛");
  $("pollito-companero").classList.add("eclosionando");
  clearTimeout(temporizadorEclosion);
  temporizadorEclosion = setTimeout(() => {
    eclosionEnCurso = false;
    $("mascota-avatar").classList.remove("eclosionando");
    $("pollito-companero").classList.remove("eclosionando");
    actualizarMascota(true);
    $("mascota-mensaje").textContent = "¡Gracias por ayudarme a nacer! ¡Ahora te acompaño! 🐣";
    acompanarEstudio("¡Gracias por ayudarme a nacer! ¡Ahora te acompaño! 🐣");
  }, 1500);
}

function reaccionarMascota(temaTerminado = false) {
  mascotaAusente = false;
  prog.ultimaVisita = new Date().toISOString();
  guardarProg();
  actualizarMascota(true);
  const terminados = modulo.subtemas.filter((_, t) => temaCompleto(t)).length;
  $("mascota-mensaje").textContent = temaTerminado
    ? terminados === modulo.subtemas.length
      ? "¡Completaste todos los temas y desbloqueaste la hoja de ejercicios! Estoy muy orgullosa de ti. 🎉"
      : `¡Felicidades, terminaste otro tema! Ya llevas ${terminados} de ${modulo.subtemas.length}. ¡Cada paso cuenta!`
    : "¡Sí! ¡Sabía que podías! ¡Buen trabajo!";
  $("mascota-mensaje").hidden = false;
  clearTimeout(temporizadorMascota);
  temporizadorMascota = setTimeout(() => actualizarMascota(), 2200);
}

function registrarCrecimientoPollito(origen) {
  if (prog.crecimientoPollito >= 5) return;
  prog.crecimientoPollito++;
  prog.pollitoNacio = prog.crecimientoPollito >= 5;
  guardarProg();
  actualizarMascota(true);
  $("mascota-mensaje").textContent = prog.pollitoNacio
    ? "¡El Reto del huevo completó su crecimiento! 🐣"
    : `¡El Reto del huevo me hizo crecer! ${prog.crecimientoPollito} de 5 aciertos.`;
  clearTimeout(temporizadorMascota);
  temporizadorMascota = setTimeout(() => actualizarMascota(), 2200);
  if (prog.pollitoNacio) iniciarEclosion(origen);
}

const SALUDOS_MASCOTA = [
  "¡Hola! Me alegra mucho que estés aquí. 💜",
  "Me encanta acompañarte mientras aprendes. ✨",
  "¡Qué bonito es crecer y descubrir cosas nuevas contigo!",
  "Cada intento te hace más fuerte. ¡Creo mucho en ti! ⭐",
];

$("mascota-avatar").addEventListener("click", () => {
  reaccionarMascota();
  $("mascota-mensaje").textContent = pick(SALUDOS_MASCOTA);
  $("mascota-mensaje").hidden = false;
  const avatar = $("mascota-avatar");
  avatar.classList.remove("hablando");
  void avatar.offsetWidth;
  avatar.classList.add("hablando");
});

const FRASES_INACTIVIDAD = [
  (hechos, total) => hechos === total
    ? "¡Sigo celebrando todo lo que aprendiste! Estoy muy orgullosa de ti. 🎉"
    : "Aquí estoy, acompañándote con mucho cariño en cada paso. 💜",
  (hechos, total) => hechos
    ? `¡Ya llevas ${hechos} de ${total} temas! Vas genial, sigue a tu ritmo. ⭐`
    : "Tómate tu tiempo. Cada pequeño paso también cuenta. 😊",
  () => "Confío en ti. Poco a poco estás logrando cosas increíbles. 🌈",
];

let bienvenidaMostrada = false;
let temporizadorInactividad;
let mensajesInactivos = 0;

function programarMensajeInactividad() {
  clearTimeout(temporizadorInactividad);
  mensajesInactivos = 0;
  temporizadorInactividad = setTimeout(mensajeInactividad, 14000);
}

function mensajeInactividad() {
  if (document.hidden || vistaIndice.hidden || mensajesInactivos >= 2) return;
  const hechos = modulo.subtemas.filter((_, t) => temaCompleto(t)).length;
  const texto = pick(FRASES_INACTIVIDAD)(hechos, modulo.subtemas.length);
  $("mascota-mensaje").textContent = texto;
  $("mascota-mensaje").hidden = false;
  const avatar = $("mascota-avatar");
  avatar.classList.remove("hablando");
  void avatar.offsetWidth;
  avatar.classList.add("hablando");
  mensajesInactivos++;
  if (mensajesInactivos < 2) temporizadorInactividad = setTimeout(mensajeInactividad, 35000);
}

const FRASES_COMPANERO = [
  "¡Tú puedes! Confío en todo lo que has aprendido. ⭐",
  "Respira y piensa con calma: vas muy bien. 💛",
  "Cada ejercicio que intentas te acerca más a la meta. 🐣",
  "¡Sigue así! Estoy muy orgulloso de ti. 🌟",
  "No pasa nada si te equivocas; también así se aprende. 💪",
  "¡Qué buen trabajo! Vamos paso a paso. 🎉",
];

let limpiarDialogoMascota;
function iniciarDialogoCiclico(elemento, frases) {
  let indice = 0;
  let temporizador;
  function mostrarSiguiente() {
    elemento.textContent = frases[indice % frases.length];
    indice++;
    elemento.hidden = false;
    temporizador = setTimeout(() => {
      elemento.hidden = true;
      temporizador = setTimeout(mostrarSiguiente, 15000);
    }, 15000);
  }
  mostrarSiguiente();
  return () => {
    clearTimeout(temporizador);
    elemento.hidden = true;
  };
}

function detenerDialogoMascota() {
  if (limpiarDialogoMascota) limpiarDialogoMascota();
  limpiarDialogoMascota = undefined;
}

function mostrarCompanero(frase) {
  const burbuja = $("pollito-companero-mensaje");
  burbuja.textContent = frase;
  burbuja.hidden = false;
  burbuja.classList.remove("frase-nueva");
  void burbuja.offsetWidth;
  burbuja.classList.add("frase-nueva");
}

function acompanarEstudio(fraseInicial) {
  clearTimeout(temporizadorCompanero);
  const vistaActiva = location.hash === "#/repaso";
  const companero = $("pollito-companero");
  const visible = vistaActiva && prog.pollitoNacio;
  companero.hidden = !visible;
  if (!visible) return;

  $("pollito-companero-huevo").hidden = !eclosionEnCurso;
  $("pollito-companero-img").hidden = eclosionEnCurso;
  indiceFraseCompanero = 0;
  repasoTerminado = location.hash === "#/repaso" && repasoCelebrado;
  mostrarCompanero(fraseInicial || "¡Aquí estoy para acompañarte! Tú puedes. 💛");
  function programarMensaje() {
    temporizadorCompanero = setTimeout(() => {
      $("pollito-companero-mensaje").hidden = true;
      if (repasoTerminado) return;
      temporizadorCompanero = setTimeout(() => {
        if (!document.hidden) {
          mostrarCompanero(FRASES_COMPANERO[indiceFraseCompanero % FRASES_COMPANERO.length]);
          indiceFraseCompanero++;
        }
        programarMensaje();
      }, 15000);
    }, 15000);
  }
  programarMensaje();
}

$("pollito-companero").addEventListener("click", () => {
  mostrarCompanero(pick(FRASES_COMPANERO));
});

document.addEventListener("pointerdown", programarMensajeInactividad, { passive: true });
document.addEventListener("keydown", programarMensajeInactividad);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) clearTimeout(temporizadorInactividad);
  else programarMensajeInactividad();
});

function pintarInicio() {
  detenerDialogoMascota();
  limpiarDialogoMascota = iniciarDialogoCiclico($("mascota-mensaje"), [...SALUDOS_MASCOTA, ...FRASES, ...FRASES_COMPANERO]);
  const n = modulo.subtemas.length, hechos = modulo.subtemas.map((_, t) => temaCompleto(t)), v = hechos.filter(Boolean).length;
  const abierto = repasoDesbloqueado();
  document.querySelectorAll("#lista li:not(.repaso):not(.juegos)").forEach((li, i) => li.classList.toggle("visto", hechos[i]));

  // El botón de Repaso está bloqueado hasta completar todos los temas
  const li = document.querySelector("#lista li.repaso"), enlace = li.querySelector("a");
  li.classList.toggle("bloqueado", !abierto);
  enlace.setAttribute("aria-disabled", String(!abierto));
  li.querySelector(".num").textContent = abierto ? "★" : "🔒";
  li.querySelector(".nombre").textContent = abierto ? "Hoja de ejercicios: ¡pon a prueba lo aprendido!"
    : `Hoja de ejercicios: se desbloquea al completar los ${n} temas (llevas ${v})`;
  if (abierto && !prog.repasoAvisado) {        // primera vez que se desbloquea: celebración
    prog.repasoAvisado = true;
    guardarProg();
    setTimeout(() => confeti(li, 80), 700);
  }
  $("intro-modulo").textContent = pick(FRASES);
  if (!bienvenidaMostrada) {
    bienvenidaMostrada = true;
    $("mascota-mensaje").textContent = abierto
      ? "¡Bienvenido de vuelta, campeón! Completaste todos los temas. ¡Estoy muy orgullosa de ti! 🎉"
      : mascotaAusente
        ? "¡Qué alegría que volviste! Te extrañé mucho. Me hace feliz acompañarte. 💜"
        : pick(SALUDOS_MASCOTA);
    programarMensajeInactividad();
  }
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
    <p class="practica-nota">Al completar los 3 ejercicios completas el tema y avanzas hacia el desbloqueo de la hoja de ejercicios. La solución se desbloquea cuando termines.</p>
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
  $("marc-texto").textContent = completo ? (repasoCalificada ? "🏆 ¡Repaso completo! Ya puedes ver todas las soluciones." : "🏆 ¡Todas correctas! Califica la hoja para ver las soluciones.")
    : ok === 0 ? "¡Tú puedes! Resuelve el primero." : `${ok} de ${total} correctos · ¡sigue así!`;
  $("marc-barra").style.width = (ok / total * 100) + "%";
  arts.forEach((a) => {
    const caja = a.querySelector(".ej-solucion");
    if (repasoCalificada) {
      if (!caja.querySelector("details")) caja.innerHTML = htmlSolucion(ejerciciosActivos[a.dataset.id]);
    } else caja.innerHTML = htmlBloqueo("Califica la hoja para ver esta solución.");
  });
  if (repasoCalificada && completo && !repasoCelebrado) { repasoCelebrado = true; confeti($("marcador"), 80); }
  if (repasoCalificada && completo && !repasoTerminado) {
    repasoTerminado = true;
    mostrarCompanero("¡Terminaste todo el repaso! Gracias por estudiar conmigo. ¡Estoy muy orgulloso de ti! 🎉🐣");
    confeti($("pollito-companero"), 60);
  }
}

// Mostrar la vista según la dirección (#/ o #/3)
function mostrar() {
  detenerDialogoMascota();
  actualizarMascota();
  if (location.hash === "#/juegos") {
    vistaIndice.hidden = true;
    vistaDetalle.hidden = true;
    vistaRepaso.hidden = true;
    vistaJuegos.hidden = false;
    $("pollito-companero").hidden = true;
    clearTimeout(temporizadorCompanero);
    document.title = "Juegos · " + modulo.titulo;
    window.scrollTo(0, 0);
    return;
  }
  vistaJuegos.hidden = true;
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
    acompanarEstudio("¡Llegamos al repaso! Tú puedes con cada ejercicio. 💛");
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
    $("pollito-companero").hidden = true;
    clearTimeout(temporizadorCompanero);
    document.title = modulo.titulo;
    pintarInicio();
    return;
  }

  vistaIndice.hidden = true;
  vistaDetalle.hidden = false;
  acompanarEstudio("¡Vamos con estos ejercicios! Confío en ti. 🐣");
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
   Minijuegos educativos disponibles desde la sección Juegos.
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
  // Reinicia una animación CSS (clase) para que se vea cada vez
  const anima = (el, cls) => { if (!el || reducido) return; el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); };
  const llenar = (barra, parte, total) => { barra.style.width = Math.max(2, Math.min(100, (parte / total) * 100)) + "%"; };
  const BARRA = '<div class="barra jg-barra" aria-hidden="true"><div class="relleno"></div></div>';

  // Cuenta animada de un número en pantalla
  function contar(el, hasta) {
    const desde = Number(el.dataset.v || "0"), t0 = performance.now(), dur = ms(500);
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
    const totalCodigos = 5;
    const preguntasUsadas = new Set();
    b.innerHTML = `
      <p class="jg-intro">Resuelve <strong>5 códigos</strong> distintos para abrir la caja fuerte. Cada acierto enciende una casilla; si fallas, el candado se reinicia con nuevos retos.</p>
      <div class="jg-casillas" role="group" aria-label="Progreso de los cinco códigos">
        ${Array.from({ length: totalCodigos }, (_, i) => `<span class="jg-casilla" aria-label="Código ${i + 1} pendiente">🔒</span>`).join("")}
      </div>
      <p class="jg-codigo-progreso" aria-live="polite"></p>
      <section class="jg-reto-codigo">
        <p class="jg-codigo-pregunta"></p>
        <div class="jg-resp"><input class="jg-codigo-respuesta" autocomplete="off" aria-label="Respuesta del código"><button type="button" class="jg-btn">Probar código 🔑</button></div>
      </section>
      <p class="jg-msg jg-codigo-mensaje" role="status" aria-live="polite"></p>
      <button type="button" class="jg-btn jg-codigo-reiniciar" hidden>Jugar otra vez 🔄</button>`;
    const casillas = [...b.querySelectorAll(".jg-casilla")];
    const progreso = b.querySelector(".jg-codigo-progreso");
    const reto = b.querySelector(".jg-reto-codigo");
    const pregunta = b.querySelector(".jg-codigo-pregunta");
    const respuesta = b.querySelector(".jg-codigo-respuesta");
    const boton = b.querySelector(".jg-resp .jg-btn");
    const mensaje = b.querySelector(".jg-codigo-mensaje");
    const reiniciar = b.querySelector(".jg-codigo-reiniciar");
    let ronda = [];
    let indice = 0;

    function preguntaAleatoria(excluidas) {
      for (let intento = 0; intento < 1000; intento++) {
        const tema = R(0, GEN.length - 1);
        const ejercicio = GEN[tema][R(0, GEN[tema].length - 1)]();
        const firma = `${tema}-${ejercicio.firma}`;
        if (!preguntasUsadas.has(firma) && !excluidas.has(firma)) {
          excluidas.add(firma);
          return { firma, ejercicio };
        }
      }
      return null;
    }

    function nuevaRonda() {
      const firmasRonda = new Set();
      ronda = [];
      while (ronda.length < totalCodigos) {
        const siguiente = preguntaAleatoria(firmasRonda);
        if (!siguiente) {
          preguntasUsadas.clear();
          firmasRonda.clear();
          ronda = [];
          continue;
        }
        ronda.push(siguiente);
      }
      ronda.forEach((retoNuevo) => preguntasUsadas.add(retoNuevo.firma));
      indice = 0;
      casillas.forEach((casilla, i) => {
        casilla.classList.remove("encendida");
        casilla.textContent = "🔒";
        casilla.setAttribute("aria-label", `Código ${i + 1} pendiente`);
      });
      reto.hidden = false;
      reiniciar.hidden = true;
      boton.disabled = false;
      mostrarPregunta();
    }

    function mostrarPregunta() {
      const actual = ronda[indice];
      pregunta.innerHTML = actual.ejercicio.enunciado;
      respuesta.value = "";
      respuesta.placeholder = actual.ejercicio.ph || "Escribe tu respuesta";
      respuesta.disabled = false;
      progreso.textContent = `Código ${indice + 1} de ${totalCodigos}`;
      mensaje.textContent = "";
      mensaje.className = "jg-msg jg-codigo-mensaje";
      respuesta.focus();
    }

    function comprobar() {
      const actual = ronda[indice];
      const valor = normaliza(respuesta.value);
      if (!valor) {
        mensaje.textContent = "Escribe la respuesta para probar este código.";
        mensaje.className = "jg-msg jg-codigo-mensaje jg-mal";
        return;
      }
      const correcta = normaliza(actual.ejercicio.respuesta);
      if (valor !== correcta && !(actual.ejercicio.contiene && valor.includes(correcta))) {
        mensaje.textContent = "Código incorrecto. El candado vuelve al inicio y genera cinco retos nuevos.";
        mensaje.className = "jg-msg jg-codigo-mensaje jg-mal";
        anima(reto, "sacude");
        respuesta.disabled = true;
        boton.disabled = true;
        setTimeout(() => { if (vivo(reto)) nuevaRonda(); }, ms(1100));
        return;
      }

      casillas[indice].classList.add("encendida");
      casillas[indice].textContent = "🔓";
      casillas[indice].setAttribute("aria-label", `Código ${indice + 1} correcto`);
      fiesta(casillas[indice], 14);
      indice++;
      if (indice < totalCodigos) {
        mostrarPregunta();
        return;
      }

      reto.hidden = true;
      progreso.textContent = "¡Los cinco códigos correctos! 🔓";
      mensaje.textContent = "¡Felicidades, jugador! ¡Eres el mejor! 🎉";
      mensaje.className = "jg-msg jg-codigo-mensaje jg-ok jg-codigo-victoria";
      reiniciar.hidden = false;
      fiesta(b.querySelector(".jg-casillas"), 90);
    }

    boton.addEventListener("click", comprobar);
    respuesta.addEventListener("keydown", (e) => { if (e.key === "Enter") comprobar(); });
    reiniciar.addEventListener("click", nuevaRonda);
    nuevaRonda();
  }

  /* ---------- 1.2 DOMINÓ EN CADENA ---------- */
  function juego12(b) {
    b.innerHTML = `
      <p class="jg-intro">¡Reto de dominó! Resuelve cinco misiones factoriales. Adivina cuántas formas hay y luego empuja la fila para ver cómo cae el cálculo.</p>
      <p class="jg-reto-progreso"></p>
      <div class="jg-reto-barra" role="progressbar" aria-label="Misiones resueltas" aria-valuemin="0" aria-valuemax="5" aria-valuenow="0"><span></span></div>
      <p class="jg-reto-pregunta"></p>
      <label class="jg-rango">Fichas: <strong class="n"></strong></label>
      <div class="jg-domino"></div>
      <p class="jg-calc"></p>
      <div class="jg-reto-respuesta"><input class="jg-respuesta-factorial" inputmode="numeric" placeholder="¿Cuántas formas?" aria-label="Respuesta del factorial"><button type="button" class="jg-btn jg-comprobar-factorial">Comprobar y empujar 🎲</button></div>
      <p class="jg-msg jg-factorial-mensaje" role="status" aria-live="polite"></p>
      <button type="button" class="jg-btn jg-factorial-siguiente" hidden>Siguiente misión →</button>
      <button type="button" class="jg-btn jg-factorial-reiniciar" hidden>Otra partida 🔄</button>`;
    const nEl = b.querySelector(".n"), fila = b.querySelector(".jg-domino");
    const calc = b.querySelector(".jg-calc"), pregunta = b.querySelector(".jg-reto-pregunta");
    const progreso = b.querySelector(".jg-reto-progreso"), barra = b.querySelector(".jg-reto-barra");
    const entrada = b.querySelector(".jg-respuesta-factorial"), comprobar = b.querySelector(".jg-comprobar-factorial");
    const mensaje = b.querySelector(".jg-factorial-mensaje"), siguiente = b.querySelector(".jg-factorial-siguiente");
    const reiniciar = b.querySelector(".jg-factorial-reiniciar");
    const misiones = [
      { n: 3, texto: "🎮 Tres personajes deben probar una misión, uno después de otro. ¿Cuántos órdenes posibles hay?" },
      { n: 4, texto: "🍕 Cuatro ingredientes se agregan a una pizza en fila. ¿De cuántas maneras se pueden ordenar?" },
      { n: 5, texto: "🏁 Cinco corredores cruzan la meta y se registra todo el orden de llegada. ¿Cuántas filas posibles hay?" },
      { n: 6, texto: "🧩 Seis piezas distintas deben colocarse en una línea para resolver un acertijo. ¿Cuántos órdenes hay?" },
      { n: 7, texto: "🚀 Siete tareas del lanzamiento se ejecutan todas en una secuencia. ¿Cuántas secuencias distintas pueden hacerse?" },
    ];
    let mazo = [], ronda = 0, corriendo = false;

    function prepararPartida() {
      mazo = mezclar(misiones);
      ronda = 0;
      siguiente.hidden = true;
      reiniciar.hidden = true;
      mostrarMision();
    }
    function mostrarMision() {
      if (ronda >= mazo.length) {
        pregunta.textContent = "¡Misión completa! Ya dominas los factoriales. 🏆";
        nEl.textContent = "🎉";
        fila.replaceChildren();
        calc.textContent = "Cinco filas de dominó derribadas. ¡Eres una leyenda del conteo!";
        entrada.hidden = true;
        comprobar.hidden = true;
        siguiente.hidden = true;
        reiniciar.hidden = false;
        progreso.textContent = "5 de 5 misiones";
        barra.setAttribute("aria-valuenow", "5");
        barra.querySelector("span").style.width = "100%";
        fiesta(calc, 80);
        return;
      }
      const mision = mazo[ronda];
      nEl.textContent = mision.n;
      pregunta.textContent = mision.texto;
      fila.innerHTML = Array.from({ length: mision.n }, (_, i) => `<span class="jg-ficha" style="--k:${i}">${mision.n - i}</span>`).join("");
      calc.textContent = "Cada ficha es un factor. Escribe el resultado y empuja la primera.";
      entrada.value = "";
      entrada.disabled = false;
      entrada.hidden = false;
      comprobar.disabled = false;
      comprobar.hidden = false;
      siguiente.hidden = true;
      mensaje.textContent = "";
      progreso.textContent = `Misión ${ronda + 1} de ${misiones.length}`;
      barra.setAttribute("aria-valuenow", String(ronda));
      barra.querySelector("span").style.width = `${ronda / misiones.length * 100}%`;
    }
    function empujar() {
      if (corriendo) return;
      corriendo = true;
      comprobar.disabled = true;
      entrada.disabled = true;
      const n = mazo[ronda].n, fichas = [...fila.children];
      let producto = 1;
      fichas.forEach((ficha, i) => setTimeout(() => {
        if (!vivo(ficha)) return;
        ficha.classList.add("cae");
        producto *= n - i;
        calc.textContent = `${Array.from({ length: i + 1 }, (_, k) => n - k).join(" × ")} = ${fm(producto)}`;
        anima(calc, "bump");
        if (i === n - 1) {
          corriendo = false;
          calc.innerHTML = `${n}! = ${fm(fa(n))}<br><small>${Array.from({ length: n }, (_, k) => n - k).join(" × ")} = ${fm(fa(n))}</small>`;
          mensaje.textContent = `¡Correcto! Derribaste ${n} fichas y hay ${fm(fa(n))} órdenes posibles.`;
          mensaje.className = "jg-msg jg-ok";
          ronda++;
          barra.setAttribute("aria-valuenow", String(ronda));
          barra.querySelector("span").style.width = `${ronda / misiones.length * 100}%`;
          fiesta(calc, 24);
          if (ronda < misiones.length) siguiente.hidden = false;
          else setTimeout(mostrarMision, ms(1300));
        }
      }, ms(i * 260)));
    }
    comprobar.addEventListener("click", () => {
      if (corriendo || comprobar.disabled) return;
      if (!entrada.value.trim()) {
        mensaje.textContent = "Escribe el número de formas antes de empujar el dominó.";
        mensaje.className = "jg-msg jg-mal";
        return;
      }
      const esperado = fa(mazo[ronda].n);
      if (Number(normaliza(entrada.value)) !== esperado) {
        mensaje.textContent = "¡Casi! Recuerda: multiplica n × (n−1) × … × 1. Intenta otra vez.";
        mensaje.className = "jg-msg jg-mal";
        anima(fila, "sacude");
        return;
      }
      empujar();
    });
    entrada.addEventListener("keydown", (e) => { if (e.key === "Enter") comprobar.click(); });
    siguiente.addEventListener("click", mostrarMision);
    reiniciar.addEventListener("click", prepararPartida);
    prepararPartida();
  }

  /* ---------- 1.3 EL MONSTRUO COME-FACTORIALES ---------- */
  function juego13(b) {
    const vidasMaximas = 5;
    const problemasMaximos = 5;
    const claveBloqueo = "monstruo_cooldown_hasta";
    const problemasUsados = new Set();
    let problemas = [];
    let vidas = vidasMaximas;
    let indice = 0;
    let reloj;
    let bloqueoHasta = 0;

    b.innerHTML = `
      <p class="jg-intro">Alimenta al monstruo simplificando cinco fracciones factoriales. Escribe los factores que quedan y su producto. Tienes cinco vidas.</p>
      <div class="jg-monstruo monstruo-quiz" aria-hidden="true">👾</div>
      <div class="monstruo-vidas" role="status" aria-live="polite" aria-label="Vidas restantes"></div>
      <p class="monstruo-ronda"></p>
      <section class="monstruo-problema">
        <p class="monstruo-formula"></p>
        <label class="monstruo-etiqueta">Factores que quedan (usa × o x)
          <input class="monstruo-factores" autocomplete="off" placeholder="Ejemplo: 8 × 7 × 6" aria-label="Factores restantes">
        </label>
        <label class="monstruo-etiqueta">Producto de esos factores
          <input class="monstruo-producto" inputmode="numeric" autocomplete="off" placeholder="Escribe el resultado" aria-label="Producto de los factores">
        </label>
        <button type="button" class="jg-btn monstruo-comprobar">Darle de comer 🍽️</button>
      </section>
      <p class="jg-msg monstruo-mensaje" role="status" aria-live="polite"></p>
      <p class="monstruo-temporizador" role="status" aria-live="polite" hidden></p>
      <div class="jg-fila monstruo-acciones">
        <button type="button" class="jg-btn monstruo-empezar">Empezar reto 👾</button>
        <button type="button" class="jg-btn monstruo-siguiente" hidden>Siguiente problema →</button>
        <button type="button" class="jg-btn monstruo-reintentar" hidden>Jugar otra vez 🔄</button>
      </div>`;

    const monstruo = b.querySelector(".monstruo-quiz");
    const vidasEl = b.querySelector(".monstruo-vidas");
    const rondaEl = b.querySelector(".monstruo-ronda");
    const problemaEl = b.querySelector(".monstruo-problema");
    const formula = b.querySelector(".monstruo-formula");
    const factores = b.querySelector(".monstruo-factores");
    const producto = b.querySelector(".monstruo-producto");
    const comprobar = b.querySelector(".monstruo-comprobar");
    const mensaje = b.querySelector(".monstruo-mensaje");
    const temporizadorEl = b.querySelector(".monstruo-temporizador");
    const empezar = b.querySelector(".monstruo-empezar");
    const siguiente = b.querySelector(".monstruo-siguiente");
    const reintentar = b.querySelector(".monstruo-reintentar");

    function pintarVidas() {
      vidasEl.textContent = `${"❤️".repeat(vidas)}${"🖤".repeat(vidasMaximas - vidas)}  ${vidas} de ${vidasMaximas} vidas`;
    }

    function crearProblemas() {
      problemas = [];
      const todos = [];
      for (let denominador = 3; denominador <= 9; denominador++) {
        for (let cantidadFactores = 2; cantidadFactores <= 4; cantidadFactores++) {
          const numerador = denominador + cantidadFactores;
          const firma = `${numerador}/${denominador}`;
          todos.push({ denominador, numerador, firma, cantidadFactores });
        }
      }
      let disponibles = todos.filter((problema) => !problemasUsados.has(problema.firma));
      if (disponibles.length < problemasMaximos) {
        problemasUsados.clear();
        disponibles = todos;
      }
      const candidatos = barajar(disponibles);
      while (problemas.length < problemasMaximos) {
        const elegido = candidatos.pop();
        const { denominador, numerador, firma, cantidadFactores } = elegido;
        problemasUsados.add(firma);
        const listaFactores = Array.from({ length: cantidadFactores }, (_, i) => numerador - i);
        problemas.push({
          numerador,
          denominador,
          listaFactores,
          resultado: listaFactores.reduce((total, valor) => total * valor, 1),
        });
      }
    }

    function mostrarProblema() {
      const actual = problemas[indice];
      rondaEl.textContent = `Problema ${indice + 1} de ${problemasMaximos}`;
      formula.innerHTML = mate(`{${actual.numerador}!}/{${actual.denominador}!}`);
      factores.value = "";
      producto.value = "";
      mensaje.textContent = "";
      mensaje.className = "jg-msg monstruo-mensaje";
      siguiente.hidden = true;
      problemaEl.hidden = false;
      factores.disabled = false;
      producto.disabled = false;
      comprobar.disabled = false;
      factores.focus();
    }

    function iniciarReto() {
      clearInterval(reloj);
      vidas = vidasMaximas;
      indice = 0;
      crearProblemas();
      pintarVidas();
      empezar.hidden = true;
      reintentar.hidden = true;
      temporizadorEl.hidden = true;
      monstruo.textContent = "👾";
      mostrarProblema();
    }

    function formatoTiempo(msRestante) {
      const segundos = Math.max(0, Math.ceil(msRestante / 1000));
      const minutos = Math.floor(segundos / 60);
      return `${minutos}:${String(segundos % 60).padStart(2, "0")}`;
    }

    function actualizarBloqueo() {
      const restante = bloqueoHasta - Date.now();
      if (restante <= 0) {
        clearInterval(reloj);
        reloj = null;
        bloqueoHasta = 0;
        try { localStorage.removeItem(claveBloqueo); } catch (e) {}
        vidas = vidasMaximas;
        pintarVidas();
        temporizadorEl.hidden = true;
        mensaje.textContent = "¡Ya puedes volver a jugar! El monstruo tiene hambre. 👾";
        mensaje.className = "jg-msg monstruo-mensaje jg-ok";
        empezar.hidden = false;
        return;
      }
      problemaEl.hidden = true;
      empezar.hidden = true;
      temporizadorEl.hidden = false;
      temporizadorEl.textContent = `El monstruo necesita descansar. Podrás jugar otra vez en ${formatoTiempo(restante)}.`;
    }

    function activarBloqueo() {
      bloqueoHasta = Date.now() + 5 * 60 * 1000;
      try { localStorage.setItem(claveBloqueo, String(bloqueoHasta)); } catch (e) {}
      mensaje.textContent = "¡Se acabaron las vidas! El monstruo se queda con hambre por ahora.";
      mensaje.className = "jg-msg monstruo-mensaje jg-mal";
      monstruo.textContent = "😴";
      siguiente.hidden = true;
      reintentar.hidden = true;
      actualizarBloqueo();
      reloj = setInterval(actualizarBloqueo, 1000);
    }

    function comprobarRespuesta() {
      const actual = problemas[indice];
      const factoresUsuario = normaliza(factores.value).replace(/×/g, "x");
      const factoresCorrectos = actual.listaFactores.join("x");
      const productoUsuario = normaliza(producto.value);
      if (!factoresUsuario || !productoUsuario) {
        mensaje.textContent = "Completa los factores y el producto para alimentar al monstruo.";
        mensaje.className = "jg-msg monstruo-mensaje jg-mal";
        return;
      }

      if (factoresUsuario !== factoresCorrectos || productoUsuario !== String(actual.resultado)) {
        vidas--;
        pintarVidas();
        monstruo.textContent = "🤢";
        anima(problemaEl, "sacude");
        if (vidas === 0) {
          activarBloqueo();
        } else {
          mensaje.textContent = `¡Puaj! No era eso. Te quedan ${vidas} ${vidas === 1 ? "vida" : "vidas"}; intenta otra vez este problema.`;
          mensaje.className = "jg-msg monstruo-mensaje jg-mal";
        }
        return;
      }

      mensaje.textContent = `¡Ñam! ${actual.listaFactores.join(" × ")} = ${fm(actual.resultado)}. El monstruo recibió su alimento.`;
      mensaje.className = "jg-msg monstruo-mensaje jg-ok";
      monstruo.textContent = "😋";
      anima(monstruo, "come");
      fiesta(monstruo, 22);
      factores.disabled = true;
      producto.disabled = true;
      comprobar.disabled = true;
      indice++;
      if (indice === problemasMaximos) {
        problemaEl.hidden = true;
        rondaEl.textContent = "¡Cinco problemas resueltos!";
        mensaje.textContent = "¡El monstruo está satisfecho! ¡Completaste los cinco problemas! 🎉";
        reintentar.hidden = false;
        fiesta(monstruo, 90);
      } else {
        siguiente.hidden = false;
      }
    }

    function cargarBloqueoGuardado() {
      try { bloqueoHasta = Number(localStorage.getItem(claveBloqueo)) || 0; } catch (e) { bloqueoHasta = 0; }
      pintarVidas();
      if (bloqueoHasta > Date.now()) {
        vidas = 0;
        pintarVidas();
        actualizarBloqueo();
        reloj = setInterval(actualizarBloqueo, 1000);
      } else {
        bloqueoHasta = 0;
        empezar.hidden = false;
        problemaEl.hidden = true;
      }
    }

    comprobar.addEventListener("click", comprobarRespuesta);
    [factores, producto].forEach((campo) => campo.addEventListener("keydown", (e) => {
      if (e.key === "Enter") comprobarRespuesta();
    }));
    empezar.addEventListener("click", iniciarReto);
    siguiente.addEventListener("click", mostrarProblema);
    reintentar.addEventListener("click", iniciarReto);
    cargarBloqueoGuardado();
    return () => clearInterval(reloj);
  }

  /* ---------- 1.4 ARMADOR DE HAMBURGUESAS ---------- */
  function juego14(b) {
    const OPCIONES = {
      pan: ["🍞 Pan", ["Brioche", "Integral", "Ajonjolí", "Papa", "Pretzel", "Sin gluten"]],
      relleno: ["🍔 Relleno", ["Res", "Pollo", "Veggie", "Pescado", "Portobello", "Doble queso"]],
      salsa: ["🧴 Salsa", ["Ketchup", "Mostaza", "BBQ", "Ajo", "Picante", "Miel"]],
    };
    const misiones = [
      { titulo: "🍔 Pedido de la feria", historia: "Prepara un combo para la feria. ¿Cuántas hamburguesas distintas puede ofrecer el puesto?", cantidades: [3, 2, 2] },
      { titulo: "🎸 Festival de música", historia: "El food truck amplía el menú para el festival. ¿Cuántas hamburguesas distintas puede armar?", cantidades: [4, 3, 3] },
      { titulo: "🏖️ Picnic en la playa", historia: "Un grupo quiere más opciones vegetarianas y salsas. Cuenta todas las hamburguesas posibles.", cantidades: [3, 4, 5] },
      { titulo: "🚀 Banquete espacial", historia: "Los astronautas pueden elegir entre varias bases, rellenos y salsas. ¿Cuántos combos hay?", cantidades: [5, 3, 4] },
      { titulo: "👑 Reto del chef", historia: "¡Menú gigante! Multiplica las opciones de cada fila para descubrir todas las hamburguesas posibles.", cantidades: [6, 5, 6] },
    ];
    let mazo = [];
    let ronda = 0;
    let seleccion = { pan: null, relleno: null, salsa: null };
    let acertadas = 0;
    b.innerHTML = `
      <p class="jg-intro">¡Conviértete en chef combinatorio! Arma una hamburguesa, cuenta todas las opciones posibles y supera cinco pedidos cada vez más grandes.</p>
      <p class="jg-reto-progreso"></p>
      <div class="jg-reto-barra" role="progressbar" aria-label="Pedidos resueltos" aria-valuemin="0" aria-valuemax="5" aria-valuenow="0"><span></span></div>
      <section class="jg-pedido">
        <strong class="jg-pedido-titulo"></strong>
        <p class="jg-pedido-historia"></p>
        <p class="jg-pedido-datos"></p>
      </section>
      <div class="filas"></div>
      <div class="jg-burger" aria-live="polite"></div>
      <label class="jg-burger-respuesta">¿Cuántas combinaciones hay?<input inputmode="numeric" placeholder="Escribe el total" aria-label="Total de hamburguesas posibles"></label>
      <button type="button" class="jg-btn jg-burger-comprobar">Servir pedido 🍽️</button>
      <p class="jg-msg jg-burger-mensaje" role="status" aria-live="polite"></p>
      <button type="button" class="jg-btn jg-burger-siguiente" hidden>Siguiente pedido →</button>
      <button type="button" class="jg-btn jg-burger-reiniciar" hidden>Abrir otro restaurante 🔄</button>
      <div class="jg-cuenta"></div>`;
    const filas = b.querySelector(".filas");
    const burger = b.querySelector(".jg-burger");
    const cuenta = b.querySelector(".jg-cuenta");
    const titulo = b.querySelector(".jg-pedido-titulo");
    const historia = b.querySelector(".jg-pedido-historia");
    const datos = b.querySelector(".jg-pedido-datos");
    const progreso = b.querySelector(".jg-reto-progreso");
    const barra = b.querySelector(".jg-reto-barra");
    const entrada = b.querySelector(".jg-burger-respuesta input");
    const mensaje = b.querySelector(".jg-burger-mensaje");
    const comprobar = b.querySelector(".jg-burger-comprobar");
    const siguiente = b.querySelector(".jg-burger-siguiente");
    const reiniciar = b.querySelector(".jg-burger-reiniciar");

    function prepararPartida() {
      mazo = mezclar(misiones);
      ronda = 0;
      acertadas = 0;
      reiniciar.hidden = true;
      mostrarMision();
    }
    function mostrarMision() {
      if (ronda === mazo.length) {
        titulo.textContent = "🎉 ¡Restaurante de combinaciones completado!";
        historia.textContent = "Superaste cinco pedidos y descubriste cómo «y» multiplica las opciones.";
        datos.textContent = "";
        filas.replaceChildren();
        burger.innerHTML = "<span>🍔</span><span>👨‍🍳</span><small>¡Chef del conteo!</small>";
        entrada.hidden = true;
        comprobar.hidden = true;
        siguiente.hidden = true;
        reiniciar.hidden = false;
        progreso.textContent = "5 de 5 pedidos servidos";
        barra.setAttribute("aria-valuenow", "5");
        barra.querySelector("span").style.width = "100%";
        cuenta.innerHTML = "<strong>Regla del chef:</strong> elegir una opción de cada grupo son decisiones juntas (Y), así que se multiplican.";
        fiesta(burger, 80);
        return;
      }
      const mision = mazo[ronda];
      const categorias = Object.keys(OPCIONES);
      seleccion = Object.fromEntries(categorias.map((categoria) => [categoria, null]));
      titulo.textContent = mision.titulo;
      historia.textContent = mision.historia;
      datos.textContent = mision.cantidades.map((cantidad, i) => `${OPCIONES[categorias[i]][0]}: ${cantidad} opciones`).join(" · ");
      filas.innerHTML = categorias.map((categoria, i) => `
        <div class="jg-menu-fila"><b>${OPCIONES[categoria][0]}</b>
          ${OPCIONES[categoria][1].slice(0, mision.cantidades[i]).map((opcion, indice) => `<button type="button" class="jg-chip" data-categoria="${categoria}" data-indice="${indice}" aria-pressed="false">${opcion}</button>`).join("")}
        </div>`).join("");
      burger.innerHTML = "<span>🍞</span><span>❔</span><span>❔</span><span>🍞</span><small>Elige un ingrediente por fila para armar tu muestra.</small>";
      entrada.value = "";
      entrada.hidden = false;
      comprobar.hidden = false;
      comprobar.disabled = false;
      entrada.disabled = false;
      siguiente.hidden = true;
      mensaje.textContent = "";
      mensaje.className = "jg-msg jg-burger-mensaje";
      progreso.textContent = `Pedido ${ronda + 1} de ${misiones.length}`;
      barra.setAttribute("aria-valuenow", String(acertadas));
      barra.querySelector("span").style.width = `${acertadas / misiones.length * 100}%`;
      cuenta.innerHTML = "Elige una opción de <strong>cada</strong> fila: pan <strong>Y</strong> relleno <strong>Y</strong> salsa.";
    }
    b.addEventListener("click", (e) => {
      const botonIngrediente = e.target.closest("[data-categoria]");
      if (botonIngrediente) {
        const grupo = botonIngrediente.dataset.categoria;
        seleccion[grupo] = +botonIngrediente.dataset.indice;
        filas.querySelectorAll(`[data-categoria="${grupo}"]`).forEach((boton) => boton.setAttribute("aria-pressed", String(boton === botonIngrediente)));
        const elegido = (categoria) => seleccion[categoria] === null ? "❔" : OPCIONES[categoria][1][seleccion[categoria]];
        burger.innerHTML = `<span>${elegido("pan")}</span><span>${elegido("relleno")}</span><span>${elegido("salsa")}</span><span>🍞</span><small>¡Tu hamburguesa va tomando forma!</small>`;
        return;
      }
      if (e.target.closest(".jg-burger-siguiente")) {
        mostrarMision();
        return;
      }
      if (e.target.closest(".jg-burger-reiniciar")) {
        prepararPartida();
        return;
      }
      if (!e.target.closest(".jg-burger-comprobar")) return;
      if (Object.values(seleccion).some((valor) => valor === null)) {
        mensaje.textContent = "Elige un ingrediente de cada fila antes de servir el pedido.";
        mensaje.className = "jg-msg jg-burger-mensaje jg-mal";
        return;
      }
      const respuesta = Number(normaliza(entrada.value));
      if (!respuesta) {
        mensaje.textContent = "Calcula el total y escribe tu respuesta.";
        mensaje.className = "jg-msg jg-burger-mensaje jg-mal";
        return;
      }
      const total = mazo[ronda].cantidades.reduce((producto, cantidad) => producto * cantidad, 1);
      if (respuesta !== total) {
        mensaje.textContent = "¡El pedido no cuadra! Multiplica las opciones de pan × relleno × salsa.";
        mensaje.className = "jg-msg jg-burger-mensaje jg-mal";
        anima(filas, "sacude");
        return;
      }
      acertadas++;
      mensaje.textContent = `¡Pedido servido! ${mazo[ronda].cantidades.join(" × ")} = ${total} hamburguesas diferentes.`;
      mensaje.className = "jg-msg jg-burger-mensaje jg-ok";
      cuenta.innerHTML = `La palabra «Y» une los grupos, así que se multiplican: ${mazo[ronda].cantidades.join(" × ")} = <strong>${total}</strong>.`;
      entrada.disabled = true;
      comprobar.disabled = true;
      barra.setAttribute("aria-valuenow", String(acertadas));
      barra.querySelector("span").style.width = `${acertadas / misiones.length * 100}%`;
      fiesta(burger, 26);
      ronda++;
      if (acertadas < misiones.length) siguiente.hidden = false;
      else setTimeout(mostrarMision, ms(1100));
    });
    entrada.addEventListener("keydown", (e) => { if (e.key === "Enter") comprobar.click(); });
    prepararPartida();
  }

  /* ---------- 1.5 EL SEMÁFORO DETECTIVE ---------- */
  function juego15(b) {
    const CASOS = [
      ["🏆 En una competencia de videojuegos, 1.º, 2.º y 3.º lugar reciben premios distintos entre 10 finalistas.", 1, 0, "Las posiciones son diferentes, importa el orden y solo se premian 3 finalistas: variación."],
      ["🧩 Una desarrolladora debe ordenar los 6 pasos de una misión para que el juego funcione.", 1, 1, "El orden de los pasos importa y se usan los 6: permutación."],
      ["🍕 Un grupo elige 3 ingredientes entre 9 para compartir una pizza; no hay ingrediente principal.", 0, 0, "Todos los ingredientes elegidos tienen el mismo papel; el orden no importa: combinación."],
      ["🎤 En un concurso de talentos participan 7 artistas y se registra quién actúa primero, segundo y así hasta el último.", 1, 1, "Cada artista ocupa una posición distinta y participan los 7: permutación."],
      ["🕵️ Un equipo selecciona 4 de 11 pistas para investigar un misterio; todas las pistas tienen la misma importancia.", 0, 0, "Solo importa cuáles 4 pistas se escogen, no el orden: combinación."],
      ["🔐 Se crea una clave de 4 símbolos distintos a partir de 8 símbolos disponibles.", 1, 0, "Cambiar el orden crea otra clave y solo se usan 4 de los 8 símbolos: variación."],
      ["⚽ La entrenadora elige capitán y subcapitán entre 12 jugadores.", 1, 0, "Los cargos son diferentes y solo se eligen 2 jugadores: variación."],
      ["📚 Se acomodan 8 libros distintos en una repisa para decorar el salón.", 1, 1, "Cambiar el orden cambia la repisa y se acomodan todos los libros: permutación."],
      ["🎒 Para una excursión se escogen 5 estudiantes de un salón de 18; todos tendrán la misma tarea.", 0, 0, "No hay cargos ni posiciones diferentes: combinación."],
      ["🎬 De 9 cortos se eligen 3 para proyectarlos en una función, decidiendo el orden de presentación.", 1, 0, "El orden de proyección importa y solo se seleccionan 3 cortos: variación."],
      ["🧪 Un laboratorio organiza los 5 pasos de un experimento usando todos una sola vez.", 1, 1, "Se ordenan todos los pasos y la secuencia importa: permutación."],
      ["🎨 Una artista selecciona 2 colores de una paleta de 7 para pintar un mural; ninguno va primero.", 0, 0, "Solo importa qué colores se usan, no el orden: combinación."],
      ["🏁 En una carrera de 8 drones se anotan los tres primeros puestos.", 1, 0, "Los puestos son distintos y solo se ordenan 3 de los 8 drones: variación."],
      ["🗂️ Un sistema organiza sus 6 tareas pendientes en una cola, usando todas.", 1, 1, "El orden de ejecución importa y se usan todas las tareas: permutación."],
      ["🎲 Se eligen 3 juegos de mesa de una colección de 10 para una tarde; todos se jugarán sin orden fijo.", 0, 0, "Solo importa qué juegos se seleccionan: combinación."],
    ];
    const NOM = { C: "Combinación", V: "Variación", P: "Permutación" };
    const FOR = { C: "C[n,r] = {n!}/{(n−r)! · r!}", V: "V[n,r] = {n!}/{(n−r)!}", P: "P(n) = n!" };
    const TOTAL = 5;
    let mazo = [], resueltos = 0, caso, r;
    const real = () => (caso[1] ? (caso[2] ? "P" : "V") : "C");
    const veredicto = () => (r.o === 0 ? "C" : r.o === 1 && r.t === 1 ? "P" : r.o === 1 && r.t === 0 ? "V" : null);
    function siguiente() {
      if (!mazo.length) {
        caso = null;
        b.querySelector(".cuerpo").innerHTML = `
          <div class="jg-detective-final">
            <span aria-hidden="true">🏅</span>
            <h4>¡Caso cerrado, detective!</h4>
            <p>Resuelves los ${TOTAL} casos y ya sabes distinguir las tres técnicas:</p>
            <ul>
              <li><strong>Combinación:</strong> no importa el orden.</li>
              <li><strong>Variación:</strong> importa el orden y se eligen algunos elementos.</li>
              <li><strong>Permutación:</strong> importa el orden y se usan todos.</li>
            </ul>
            <button type="button" class="jg-btn" data-a="reiniciar">Resolver otros 5 casos 🔄</button>
          </div>`;
        fiesta(b.querySelector(".jg-detective-final"), 80);
        return;
      }
      caso = mazo.pop();
      r = { o: null, t: null, fin: null };
      pintar(true);
    }
    function pintar(esNuevo) {
      const v = veredicto();
      const luz = (k, cls) => `<i class="${v === k ? cls : ""}"></i>`;
      const pres = (cond) => (cond ? ' aria-pressed="true"' : "");
      let fin = "";
      if (r.fin === "ok") fin = `
        <div class="jg-detective-explicacion">
          <p class="jg-msg jg-ok">✅ ¡Caso ${resueltos} de ${TOTAL} resuelto! Es <strong>${NOM[v]}</strong>.</p>
          <p>${caso[3]}</p>
          <div class="jg-formula">${mt(FOR[v])}</div>
          <p><strong>Regla rápida:</strong> ${v === "C" ? "el orden no importa → combinación." : v === "V" ? "el orden importa y se eligen algunos → variación." : "el orden importa y se usan todos → permutación."}</p>
          ${resueltos < TOTAL ? '<button type="button" class="jg-btn" data-a="sig">Siguiente caso →</button>' : '<button type="button" class="jg-btn" data-a="sig">Ver resultado final 🏁</button>'}
        </div>`;
      if (r.fin === "mal") fin = `<div class="jg-detective-error"><p class="jg-msg jg-mal">🤔 ¡El detective encontró una pista que no cuadra!</p><p>Recuerda: primero pregunta si importa el orden. Si importa, averigua si se usan todos los elementos o solo algunos.</p><button type="button" class="jg-btn" data-a="otra">Revisar este mismo caso</button></div>`;
      b.querySelector(".cuerpo").innerHTML = `
        <p class="jg-detective-progreso">🗂️ Caso ${resueltos + (r.fin === "ok" ? 0 : 1)} de ${TOTAL}</p>
        <div class="jg-detective-barra" role="progressbar" aria-label="Casos resueltos" aria-valuemin="0" aria-valuemax="${TOTAL}" aria-valuenow="${resueltos}"><span style="width:${resueltos / TOTAL * 100}%"></span></div>
        <p class="jg-caso ${esNuevo ? "nuevo" : r.fin || ""}">📁 ${caso[0]}</p>
        <p class="jg-detective-pista">🧠 Pista: un equipo con cargos distintos sí tiene orden; un grupo con la misma tarea no.</p>
        <div class="jg-semaforo" aria-label="Semáforo del veredicto">${luz("C", "on-v")}${luz("V", "on-a")}${luz("P", "on-r")}</div>
        <p class="jg-nota jg-centro">🟢 Combinación (orden no) · 🟡 Variación (orden sí, algunos) · 🔴 Permutación (orden sí, todos)</p>
        ${r.fin ? "" : `<div class="jg-fila"><b>1. ¿Importa el orden?</b><button type="button" class="jg-chip" data-q="o1"${pres(r.o === 1)}>Sí</button><button type="button" class="jg-chip" data-q="o0"${pres(r.o === 0)}>No</button></div>`}
        ${!r.fin && r.o === 1 ? `<div class="jg-fila"><b>2. ¿Se usan todos los elementos?</b><button type="button" class="jg-chip" data-q="t1"${pres(r.t === 1)}>Sí</button><button type="button" class="jg-chip" data-q="t0"${pres(r.t === 0)}>No</button></div>` : ""}
        ${fin}
        <p class="jg-racha">🔎 Casos resueltos: ${resueltos} / ${TOTAL}</p>`;
    }
    b.insertAdjacentHTML("beforeend", '<p class="jg-intro">¡Ayuda a la detective a cerrar cinco casos! En cada uno decide si el orden importa y, si importa, si se usan todos los elementos. Los cinco casos no se repiten durante la partida.</p><div class="cuerpo"></div>');
    b.addEventListener("click", (e) => {
      const q = e.target.closest("[data-q]"), a = e.target.closest("[data-a]");
      if (a) {
        if (a.dataset.a === "reiniciar") {
          resueltos = 0;
          mazo = mezclar(CASOS).slice(0, TOTAL);
          siguiente();
        } else if (a.dataset.a === "sig") siguiente();
        else { r = { o: null, t: null, fin: null }; pintar(); }
        return;
      }
      if (!q || r.fin === "ok") return;
      const [k, val] = [q.dataset.q[0], +q.dataset.q[1]];
      r.fin = null;
      if (k === "o") { r.o = val; r.t = null; } else r.t = val;
      const v = veredicto();
      if (v) {
        if (v === real()) { resueltos++; r.fin = "ok"; } else { r.fin = "mal"; }
      }
      pintar();
      if (r.fin === "ok") fiesta(b.querySelector(".jg-semaforo"), resueltos === TOTAL ? 70 : 18);
    });
    mazo = mezclar(CASOS).slice(0, TOTAL);
    siguiente();
  }

  /* ---------- 1.6 MESA GIRATORIA Y LETRAS GEMELAS (dos pestañas) ---------- */
  function juego16(b) {
    b.innerHTML = `
      <p class="jg-intro">¡Reto doble! Resuelve cinco misiones para el equipo de fiestas: aprende a contar mesas redondas y arreglos de letras gemelas.</p>
      <p class="jg-reto-progreso circular-progreso"></p>
      <div class="jg-reto-barra circular-barra" role="progressbar" aria-label="Misiones resueltas" aria-valuemin="0" aria-valuemax="5" aria-valuenow="0"><span></span></div>
      <section class="jg-circular-reto">
        <p class="jg-circular-pregunta"></p>
        <p class="jg-circular-formula"></p>
        <label class="jg-burger-respuesta">¿Cuántas formas distintas?<input class="jg-circular-respuesta" inputmode="numeric" placeholder="Escribe el total" aria-label="Número de formas"></label>
        <button type="button" class="jg-btn circular-comprobar">Resolver misión 🧩</button>
        <p class="jg-msg circular-mensaje" role="status" aria-live="polite"></p>
        <button type="button" class="jg-btn circular-siguiente" hidden>Siguiente misión →</button>
        <button type="button" class="jg-btn circular-reiniciar" hidden>Otra partida 🔄</button>
      </section>
      <details class="jg-laboratorio-libre"><summary>¿Quieres experimentar libremente? Abre el laboratorio</summary>
      <div class="jg-tabs" role="tablist">
        <button type="button" class="jg-tab on" role="tab" aria-selected="true" data-p="1">🪑 Mesa giratoria</button>
        <button type="button" class="jg-tab" role="tab" aria-selected="false" data-p="2">🔤 Letras gemelas</button>
      </div>
      <div class="jg-panel" data-p="1">
        <p class="jg-intro">Agrega o quita personas y gira la mesa: ¿cambia algo? (permutación circular)</p>
        <div class="jg-fila" style="justify-content:center">
          <button type="button" class="jg-btn menosp">− Persona</button>
          <strong class="np"></strong>
          <button type="button" class="jg-btn masp">+ Persona</button>
        </div>
        <div class="jg-mesa"><div class="jg-mesa-rot"></div></div>
        <div class="jg-fila" style="justify-content:center">
          <button type="button" class="jg-btn girar">↻ Girar</button>
          <button type="button" class="jg-btn fijar">📌 Fijar a Ana</button>
          <button type="button" class="jg-btn mezclar" disabled>🔀 Mezclar</button>
        </div>
        <p class="jg-msg mesa-msg" role="status"></p>
        <div class="mesa-barra">${BARRA}</div>
      </div>
      <div class="jg-panel" data-p="2" hidden>
        <p class="jg-intro">Elige o escribe una palabra y baraja las fichas. Las letras iguales son gemelas. (permutación con repetidos)</p>
        <div class="jg-fila palabras" style="justify-content:center"></div>
        <div class="jg-resp"><input class="mipal" maxlength="11" placeholder="Tu palabra" aria-label="Escribe tu palabra (2 a 11 letras)"><button type="button" class="jg-btn usar">Usar</button></div>
        <div class="jg-fichas"></div>
        <div class="jg-fila" style="justify-content:center">
          <button type="button" class="jg-btn baraja">🔀 Barajar</button>
          <button type="button" class="jg-btn baraja10">×10</button>
          <button type="button" class="jg-btn swap">↔ Gemelas</button>
          <button type="button" class="jg-btn why">¿Por qué?</button>
        </div>
        <p class="jg-msg letras-msg" role="status"></p>
        <div class="letras-barra">${BARRA}</div>
        <div class="jg-formula"></div>
      </div>
      </details>`;

    const mesas = [4, 5, 6, 7, 8].map((personas) => ({
      tipo: "mesa",
      pregunta: `🪑 ${personas} amigos se sientan alrededor de una mesa redonda. Si girar la mesa no crea un orden nuevo, ¿cuántos acomodos distintos hay?`,
      formula: `(${personas}−1)! = ${personas - 1}!`,
      respuesta: fa(personas - 1),
      explicacion: `En una mesa circular fijamos a una persona para no contar las rotaciones repetidas. Quedan ${personas - 1} personas para ordenar: (${personas}−1)! = ${fa(personas - 1)}.`,
    }));
    const letras = [
      ["ANA", "3!/2!", 3, "ANA tiene tres letras y dos A gemelas: 3!/2! = 3."],
      ["PAPA", "4!/(2!·2!)", 6, "PAPA tiene dos P y dos A repetidas: 4!/(2!·2!) = 6."],
      ["SALA", "4!/2!", 12, "SALA tiene dos A gemelas: 4!/2! = 12."],
      ["BANANA", "6!/(3!·2!)", 60, "BANANA tiene tres A y dos N: 6!/(3!·2!) = 60."],
      ["LLAMA", "5!/(2!·2!)", 30, "LLAMA tiene dos L y dos A: 5!/(2!·2!) = 30."],
    ].map(([palabra, formula, respuesta, explicacion]) => ({
      tipo: "letras",
      pregunta: `🔤 ¿Cuántos arreglos diferentes pueden formarse con las letras de ${palabra}? Las letras iguales son gemelas y no se distinguen.`,
      formula,
      respuesta,
      explicacion,
    }));
    const misionesMesa = mezclar(mesas).slice(0, 3);
    const misionesLetras = mezclar(letras).slice(0, 2);
    let mazoCircular = mezclar([...misionesMesa, ...misionesLetras]);
    let rondaCircular = 0;
    let circularResuelto = false;
    const circularPregunta = b.querySelector(".jg-circular-pregunta");
    const circularFormula = b.querySelector(".jg-circular-formula");
    const circularEntrada = b.querySelector(".jg-circular-respuesta");
    const circularComprobar = b.querySelector(".circular-comprobar");
    const circularMensaje = b.querySelector(".circular-mensaje");
    const circularSiguiente = b.querySelector(".circular-siguiente");
    const circularReiniciar = b.querySelector(".circular-reiniciar");
    const circularProgreso = b.querySelector(".circular-progreso");
    const circularBarra = b.querySelector(".circular-barra");
    function mostrarMisionCircular() {
      if (rondaCircular === mazoCircular.length) {
        circularPregunta.textContent = "¡El equipo de fiestas completó sus cinco misiones! 🎉";
        circularFormula.textContent = "¡Ya sabes contar mesas redondas y letras repetidas!";
        circularEntrada.hidden = true;
        circularComprobar.hidden = true;
        circularSiguiente.hidden = true;
        circularReiniciar.hidden = false;
        circularProgreso.textContent = "5 de 5 misiones";
        circularBarra.setAttribute("aria-valuenow", "5");
        circularBarra.querySelector("span").style.width = "100%";
        fiesta(b.querySelector(".jg-circular-reto"), 80);
        return;
      }
      const mision = mazoCircular[rondaCircular];
      circularPregunta.textContent = mision.pregunta;
      circularFormula.textContent = mision.tipo === "mesa"
        ? "Pista: fija a una persona para que las rotaciones no se repitan."
        : "Pista: divide el factorial total entre los factoriales de las letras gemelas.";
      circularEntrada.value = "";
      circularEntrada.disabled = false;
      circularEntrada.hidden = false;
      circularComprobar.disabled = false;
      circularComprobar.hidden = false;
      circularSiguiente.hidden = true;
      circularReiniciar.hidden = true;
      circularMensaje.textContent = "";
      circularMensaje.className = "jg-msg circular-mensaje";
      circularProgreso.textContent = `Misión ${rondaCircular + 1} de 5 · ${mision.tipo === "mesa" ? "mesa circular" : "letras gemelas"}`;
      circularBarra.setAttribute("aria-valuenow", String(rondaCircular));
      circularBarra.querySelector("span").style.width = `${rondaCircular / 5 * 100}%`;
      circularResuelto = false;
    }
    function revisarMisionCircular() {
      if (circularResuelto) return;
      const respuesta = Number(normaliza(circularEntrada.value));
      if (!respuesta) {
        circularMensaje.textContent = "Escribe cuántos acomodos distintos encontraste.";
        circularMensaje.className = "jg-msg circular-mensaje jg-mal";
        return;
      }
      const mision = mazoCircular[rondaCircular];
      if (respuesta !== mision.respuesta) {
        circularMensaje.textContent = "¡Casi! Usa la pista para elegir la fórmula y vuelve a intentarlo.";
        circularMensaje.className = "jg-msg circular-mensaje jg-mal";
        anima(circularEntrada, "sacude");
        return;
      }
      circularResuelto = true;
      circularMensaje.innerHTML = `✅ ¡Misión resuelta! ${mision.explicacion}<br><strong>${mision.formula} = ${mision.respuesta}</strong>`;
      circularMensaje.className = "jg-msg circular-mensaje jg-ok";
      circularEntrada.disabled = true;
      circularComprobar.disabled = true;
      rondaCircular++;
      circularBarra.setAttribute("aria-valuenow", String(rondaCircular));
      circularBarra.querySelector("span").style.width = `${rondaCircular / 5 * 100}%`;
      fiesta(circularMensaje, 22);
      if (rondaCircular < 5) circularSiguiente.hidden = false;
      else setTimeout(mostrarMisionCircular, ms(1200));
    }
    circularComprobar.addEventListener("click", revisarMisionCircular);
    circularEntrada.addEventListener("keydown", (e) => { if (e.key === "Enter") revisarMisionCircular(); });
    circularSiguiente.addEventListener("click", mostrarMisionCircular);
    circularReiniciar.addEventListener("click", () => {
      rondaCircular = 0;
      mazoCircular = mezclar([...mezclar(mesas).slice(0, 3), ...mezclar(letras).slice(0, 2)]);
      mostrarMisionCircular();
    });
    mostrarMisionCircular();

    // Pestañas
    b.querySelector(".jg-tabs").addEventListener("click", (e) => {
      const t = e.target.closest(".jg-tab"); if (!t) return;
      b.querySelectorAll(".jg-tab").forEach((x) => { const on = x === t; x.classList.toggle("on", on); x.setAttribute("aria-selected", String(on)); });
      b.querySelectorAll(".jg-panel").forEach((p) => { p.hidden = p.dataset.p !== t.dataset.p; });
    });

    // --- Mesa (de 3 a 8 personas) ---
    const NOM = ["Ana", "Beto", "Carla", "Dani", "Elsa", "Fer", "Gus", "Hugo"], EMO = ["👩", "🧑", "👧", "👦", "👵", "👨", "🧒", "👴"];
    const rotEl = b.querySelector(".jg-mesa-rot"), mmsg = b.querySelector(".mesa-msg"), npEl = b.querySelector(".np"),
      mBarra = b.querySelector(".mesa-barra .relleno");
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
      asientos = Array.from({ length: n }, (_, i) => i); rot = 0; vistas.clear(); llenar(mBarra, 0, 1);
      npEl.textContent = `${n} personas`; anima(npEl, "bump");
      b.querySelector(".menosp").disabled = n <= 3; b.querySelector(".masp").disabled = n >= 8;
      colocar();
      if (d > 0) anima(personas[n - 1], "entra");
      dm(`Con ${n} personas: (${n}−1)! = ${n - 1}! = ${fm(fa(n - 1))} formas distintas.`, "jg-ok");
    }
    b.querySelector(".menosp").addEventListener("click", () => cambiarN(-1));
    b.querySelector(".masp").addEventListener("click", () => cambiarN(1));
    b.querySelector(".girar").addEventListener("click", () => {
      rot += 360 / n; colocar();
      dm(fija ? "Ana es la referencia: girar no crea una disposición nueva."
              : "¡Todos se movieron, pero cada uno conserva a los mismos vecinos! Es la MISMA disposición.");
    });
    b.querySelector(".fijar").addEventListener("click", (e) => {
      fija = !fija; e.target.textContent = fija ? "📌 Soltar a Ana" : "📌 Fijar a Ana";
      b.querySelector(".mezclar").disabled = !fija; colocar();
      if (fija) anima(personas[0], "entra");
      dm(fija ? `Con Ana fija, los otros ${n - 1} se ordenan libremente: ${n - 1}! = ${fm(fa(n - 1))} formas.` : "Sin una persona fija, girar la mesa genera copias de la misma disposición.", fija ? "jg-ok" : "");
    });
    b.querySelector(".mezclar").addEventListener("click", () => {
      rot = Math.ceil(rot / 360) * 360;
      asientos = [0, ...mezclar(Array.from({ length: n - 1 }, (_, i) => i + 1))]; vistas.add(asientos.join(","));
      colocar();
      const total = fa(n - 1); llenar(mBarra, vistas.size, total);
      dm(`Disposiciones vistas: ${fm(vistas.size)} de ${fm(total)}.`, "jg-ok");
      if (vistas.size === total) fiesta(mmsg, 50);
    });
    cambiarN(0);

    // --- Letras gemelas (palabra a elección) ---
    const lf = b.querySelector(".jg-fichas"), lmsg = b.querySelector(".letras-msg"), form = b.querySelector(".jg-formula"),
      cajaPal = b.querySelector(".palabras"), entrada = b.querySelector(".mipal"), lBarra = b.querySelector(".letras-barra .relleno");
    const SUG = ["ANA", "PAPA", "SALA", "LLAMA", "BANANA", "MATEMATICAS"];
    cajaPal.innerHTML = SUG.map((w) => `<button type="button" class="jg-chip" data-w="${w}">${w}</button>`).join("");
    let palabra = "", fichas = [], total = 0; const palabras = new Set();
    const dl = (t, c) => { lmsg.className = "jg-msg letras-msg " + (c || ""); lmsg.textContent = t; };
    const conteo = (w) => { const c = {}; for (const x of w) c[x] = (c[x] || 0) + 1; return c; };
    function usar(w) {
      w = w.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().replace(/[^A-ZÑ]/g, "");
      if (w.length < 2 || w.length > 11) { dl("Escribe una palabra de 2 a 11 letras (solo letras).", "jg-mal"); anima(entrada, "sacude"); return; }
      palabra = w; palabras.clear(); form.innerHTML = ""; llenar(lBarra, 0, 1);
      const c = conteo(w), vistoK = {}, orden = [...new Set(w)];
      fichas = [...w].map((l) => { vistoK[l] = (vistoK[l] || 0) + 1; return { l, s: c[l] > 1 ? vistoK[l] : 0, col: orden.indexOf(l) % 5 + 1 }; });
      total = fa(w.length) / Object.values(c).reduce((x, m) => x * fa(m), 1);
      cajaPal.querySelectorAll(".jg-chip").forEach((x) => x.setAttribute("aria-pressed", String(x.dataset.w === w)));
      dibujar(null, true);
      dl(`${w}: hay ${fm(total)} ordenamientos distintos. ¡Baraja y encuentra los que puedas!`);
    }
    function dibujar(giran, cae) {
      lf.innerHTML = fichas.map((f, i) => `<span class="jg-letra${fichas.length > 7 ? " chica" : ""}${giran && giran.includes(i) ? " gira" : ""}${cae ? " baja" : ""}" style="--lc:var(--c${f.col});--k:${i}">${f.l}${f.s ? `<sub>${f.s}</sub>` : ""}</span>`).join("");
    }
    function estado() {
      const w = fichas.map((f) => f.l).join("");
      llenar(lBarra, palabras.size, total);
      if (palabras.size === total) { dl(`🎉 ¡Las ${fm(total)} palabras! Las ${fm(fa(palabra.length))} formas con fichas numeradas se reducen a ${fm(total)}.`, "jg-ok"); porque(); fiesta(lf, 50); }
      else dl(`Ahora: ${w}. Distintas encontradas: ${fm(palabras.size)} de ${fm(total)}.` + (total > 1000 ? " ¡Imposible hallarlas todas a mano! Para eso existe la fórmula." : ""), "jg-ok");
    }
    function porque() {
      const c = conteo(palabra), reps = Object.values(c).filter((m) => m > 1), den = reps.reduce((x, m) => x * fa(m), 1), L = palabra.length;
      form.innerHTML = mt(reps.length ? `{${L}!}/{${reps.map((m) => m + "!").join(" · ")}} = ${fm(fa(L))} / ${fm(den)} = ${fm(total)}` : `${L}! = ${fm(total)}`);
      anima(form, "bump");
    }
    function barajar1() { fichas = mezclar(fichas); palabras.add(fichas.map((f) => f.l).join("")); }
    b.querySelector(".baraja").addEventListener("click", () => { barajar1(); dibujar(null, true); estado(); });
    b.querySelector(".baraja10").addEventListener("click", () => { for (let i = 0; i < 10; i++) barajar1(); dibujar(null, true); estado(); });
    b.querySelector(".swap").addEventListener("click", () => {
      const c = conteo(palabra), l = [...palabra].find((x) => c[x] > 1);
      if (!l) { dl("Esta palabra no tiene letras repetidas: no hay gemelas que intercambiar.", "jg-mal"); anima(lf, "sacude"); return; }
      const idx = fichas.map((f, i) => (f.l === l ? i : -1)).filter((i) => i >= 0);
      [fichas[idx[0]], fichas[idx[1]]] = [fichas[idx[1]], fichas[idx[0]]]; dibujar([idx[0], idx[1]]);
      dl(`Cambiaron de lugar dos ${l}, pero la palabra sigue siendo ${fichas.map((f) => f.l).join("")}. Por eso se divide entre ${c[l]}!.`);
    });
    b.querySelector(".why").addEventListener("click", porque);
    cajaPal.addEventListener("click", (e) => { const c = e.target.closest("[data-w]"); if (c) { entrada.value = ""; usar(c.dataset.w); } });
    b.querySelector(".usar").addEventListener("click", () => usar(entrada.value));
    entrada.addEventListener("keydown", (e) => { if (e.key === "Enter") usar(entrada.value); });
    usar("PAPA");
  }

  function retoHuevo(b) {
    b.innerHTML = `
      <p class="jg-intro">Cada acierto hace crecer el huevo de tu perfil. Responde cinco preguntas para ayudar a nacer al pollito.</p>
      <div class="reto-huevo-escena" aria-live="polite">
        <button class="reto-huevo-avatar" type="button" aria-label="Pollito del reto">
          <span class="reto-huevo-dialogo" role="status" hidden></span>
          <span class="reto-huevo-cascaron" aria-hidden="true">🥚</span>
          <svg class="reto-huevo-grieta grieta-1" viewBox="0 0 18 42" aria-hidden="true" hidden><path d="M11 1 6 10 13 15 5 25 10 30 4 41"/></svg>
          <svg class="reto-huevo-grieta grieta-2" viewBox="0 0 18 42" aria-hidden="true" hidden><path d="M11 1 6 10 13 15 5 25 10 30 4 41"/></svg>
          <svg class="reto-huevo-grieta grieta-3" viewBox="0 0 18 42" aria-hidden="true" hidden><path d="M11 1 6 10 13 15 5 25 10 30 4 41"/></svg>
          <svg class="reto-huevo-grieta grieta-4" viewBox="0 0 18 42" aria-hidden="true" hidden><path d="M11 1 6 10 13 15 5 25 10 30 4 41"/></svg>
          <img class="reto-huevo-pollito" src="pollito.gif" alt="" hidden>
        </button>
        <strong class="reto-huevo-conteo">0% · 0 de 5 aciertos</strong>
        <div class="barra"><div class="relleno"></div></div>
        <p class="reto-huevo-cuenta-atras" aria-live="assertive" hidden></p>
      </div>
      <p class="jg-msg reto-huevo-mensaje" role="status">¿Listo para comenzar?</p>
      <button class="jg-btn reto-huevo-iniciar" type="button">¡Empezar el reto! 🐣</button>
      <section class="reto-huevo-pregunta" hidden>
        <p class="jg-sub reto-huevo-tema"></p>
        <p class="jg-intro reto-huevo-enunciado"></p>
        <div class="jg-resp">
          <input class="reto-huevo-respuesta" type="text" autocomplete="off" placeholder="Tu respuesta" aria-label="Respuesta al reto del huevo">
          <button class="jg-btn reto-huevo-comprobar" type="button">Comprobar</button>
        </div>
        <p class="jg-msg reto-huevo-resultado" role="status"></p>
        <details class="reto-huevo-pista" hidden><summary>Ver explicación</summary><div></div></details>
        <button class="jg-btn reto-huevo-siguiente" type="button" hidden>Siguiente pregunta →</button>
      </section>
      <button class="jg-btn reto-huevo-reiniciar" type="button" hidden>Jugar otra vez 🔄</button>`;

    const escena = b.querySelector(".reto-huevo-escena");
    const avatar = b.querySelector(".reto-huevo-avatar");
    const cascaron = b.querySelector(".reto-huevo-cascaron");
    const grietas = b.querySelectorAll(".reto-huevo-grieta");
    const pollito = b.querySelector(".reto-huevo-pollito");
    const dialogo = b.querySelector(".reto-huevo-dialogo");
    const conteo = b.querySelector(".reto-huevo-conteo");
    const barra = b.querySelector(".relleno");
    const cuentaAtrasEl = b.querySelector(".reto-huevo-cuenta-atras");
    const mensaje = b.querySelector(".reto-huevo-mensaje");
    const comenzar = b.querySelector(".reto-huevo-iniciar");
    const pregunta = b.querySelector(".reto-huevo-pregunta");
    const tema = b.querySelector(".reto-huevo-tema");
    const enunciado = b.querySelector(".reto-huevo-enunciado");
    const respuesta = b.querySelector(".reto-huevo-respuesta");
    const comprobar = b.querySelector(".reto-huevo-comprobar");
    const resultado = b.querySelector(".reto-huevo-resultado");
    const pista = b.querySelector(".reto-huevo-pista");
    const siguiente = b.querySelector(".reto-huevo-siguiente");
    const reiniciar = b.querySelector(".reto-huevo-reiniciar");
    const firmas = new Set();
    let temasPartida = [];
    let aciertos = 0;
    let actual = null;
    let temporizadorCuentaAtras;
    let temporizadorInicio;
    let limpiarDialogo;

    function actualizarEscena() {
      const progreso = aciertos * 20;
      grietas.forEach((grieta, indice) => { grieta.toggleAttribute("hidden", aciertos < indice + 1 || aciertos >= 5); });
      cascaron.hidden = aciertos >= 5;
      pollito.hidden = aciertos < 5;
      avatar.setAttribute("aria-label", aciertos >= 5 ? "Pollito nacido en el reto" : `Huevo del reto: ${progreso}%`);
      conteo.textContent = `${progreso}% · ${aciertos} de 5 aciertos`;
      barra.style.width = `${progreso}%`;
      escena.classList.toggle("reto-huevo-nacio", aciertos >= 5);
    }

    function preguntaAleatoria() {
      const indiceTema = temasPartida.shift();
      const generadores = GEN[indiceTema];
      for (let intento = 0; intento < 100; intento++) {
        const ejercicio = generadores[R(0, generadores.length - 1)]();
        const firma = `${indiceTema}-${ejercicio.firma}`;
        if (firmas.has(firma)) continue;
        firmas.add(firma);
        return { indiceTema, ejercicio };
      }
      const ejercicio = generadores[0]();
      firmas.add(`${indiceTema}-${ejercicio.firma}`);
      return { indiceTema, ejercicio };
    }

    function mostrarPregunta() {
      actual = preguntaAleatoria();
      tema.textContent = modulo.subtemas[actual.indiceTema].titulo;
      enunciado.innerHTML = actual.ejercicio.enunciado;
      respuesta.value = "";
      respuesta.disabled = false;
      comprobar.disabled = false;
      resultado.textContent = "";
      resultado.className = "jg-msg reto-huevo-resultado";
      pista.hidden = true;
      pista.open = false;
      pista.querySelector("div").innerHTML = actual.ejercicio.sol.slice(0, -1).map((paso) => `<p>${paso}</p>`).join("");
      siguiente.hidden = true;
      pregunta.hidden = false;
      respuesta.focus();
    }

    function iniciar() {
      clearInterval(temporizadorCuentaAtras);
      clearTimeout(temporizadorInicio);
      if (limpiarDialogo) limpiarDialogo();
      firmas.clear();
      temasPartida = mezclar(GEN.map((_, indice) => indice)).slice(0, 5);
      aciertos = 0;
      actualizarEscena();
      comenzar.hidden = true;
      reiniciar.hidden = true;
      pregunta.hidden = true;
      mensaje.textContent = "¡Prepárate! En unos segundos comenzamos. 💛";
      cuentaAtrasEl.hidden = false;
      let cuenta = 3;
      cuentaAtrasEl.textContent = String(cuenta);
      limpiarDialogo = iniciarDialogoCiclico(dialogo, [
        "¡Confío en ti! Un paso a la vez. 💛",
        "Cada respuesta te acerca a la meta. ⭐",
        "No tengas miedo de equivocarte; así también se aprende. 🌈",
        "¡Tú puedes ayudarme a nacer! 🐣",
      ]);
      temporizadorCuentaAtras = setInterval(() => {
        cuenta--;
        cuentaAtrasEl.textContent = String(cuenta);
        if (cuenta > 0) return;
        clearInterval(temporizadorCuentaAtras);
        mensaje.textContent = "¡Empecemos! 🐣";
        dialogo.textContent = "¡Empecemos! ¡Sé que lo harás genial! 🎉";
        dialogo.hidden = false;
        cascaron.hidden = true;
        pollito.hidden = false;
        avatar.setAttribute("aria-label", "El pollito saluda: ¡Empecemos!");
        temporizadorInicio = setTimeout(() => {
          pollito.hidden = true;
          cascaron.hidden = false;
          avatar.setAttribute("aria-label", "Huevo del reto: 0%");
          cuentaAtrasEl.hidden = true;
          mensaje.textContent = "Cada acierto romperá un poquito el cascarón.";
          mostrarPregunta();
        }, 750);
      }, 1000);
    }

    function verificar() {
      if (!actual || comprobar.disabled) return;
      const valor = normaliza(respuesta.value);
      if (!valor) {
        resultado.textContent = "Escribe tu respuesta primero.";
        resultado.className = "jg-msg reto-huevo-resultado jg-mal";
        return;
      }
      const correcta = normaliza(actual.ejercicio.respuesta);
      if (valor !== correcta && !(actual.ejercicio.contiene && valor.includes(correcta))) {
        resultado.textContent = "¡Casi! Revisa la explicación y vuelve a intentarlo.";
        resultado.className = "jg-msg reto-huevo-resultado jg-mal";
        pista.hidden = false;
        anima(pregunta, "sacude");
        return;
      }

      aciertos++;
      registrarCrecimientoPollito(escena);
      actualizarEscena();
      if (aciertos < 5) anima(avatar, "reto-huevo-golpe");
      respuesta.disabled = true;
      comprobar.disabled = true;
      resultado.textContent = "¡Correcto! El pollito ya está un poquito más cerca. 🎉";
      resultado.className = "jg-msg reto-huevo-resultado jg-ok";
      confeti(escena, aciertos === 5 ? 60 : 18);
      if (aciertos === 5) {
        actual = null;
        pregunta.hidden = true;
        actualizarEscena();
        dialogo.textContent = "¡Lo logramos! ¡Nací y estoy muy orgulloso de ti! 🐣💛";
        dialogo.hidden = false;
        mensaje.textContent = "¡Lo lograste! ¡El pollito nació en este reto! 🐣";
        confeti(escena, 90);
        reiniciar.hidden = false;
      } else {
        siguiente.hidden = false;
      }
    }

    comenzar.addEventListener("click", iniciar);
    comprobar.addEventListener("click", verificar);
    respuesta.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter") verificar();
    });
    siguiente.addEventListener("click", mostrarPregunta);
    reiniciar.addEventListener("click", iniciar);
    return () => {
      clearInterval(temporizadorCuentaAtras);
      clearTimeout(temporizadorInicio);
      if (limpiarDialogo) limpiarDialogo();
    };
  }

  const JUEGOS = [
    { titulo: "Reto del huevo: ¡ayúdalo a nacer!", descripcion: "Responde preguntas de cinco temas distintos, rompe el cascarón y ayuda a nacer al pollito.", icono: "🐣", color: "--c4", iniciar: retoHuevo },
    { titulo: "Caja fuerte de claves", descripcion: "Resuelve cinco retos distintos; un error reinicia el candado con códigos nuevos.", icono: "🔐", color: "--c2", iniciar: juego11 },
    { titulo: "Dominó en cadena", descripcion: "Resuelve cinco desafíos factoriales y derriba una fila de fichas con cada acierto.", icono: "🎲", color: "--c1", iniciar: juego12 },
    { titulo: "Monstruo come-factoriales", descripcion: "Resuelve cinco simplificaciones, cuida tus cinco vidas y alimenta al monstruo.", icono: "👾", color: "--c5", iniciar: juego13 },
    { titulo: "Armador de hamburguesas", descripcion: "Acepta cinco pedidos y multiplica las opciones para convertirte en chef combinatorio.", icono: "🍔", color: "--c4", iniciar: juego14 },
    { titulo: "Semáforo detective", descripcion: "Resuelve cinco misterios únicos y aprende cuándo usar combinación, variación o permutación.", icono: "🕵️", color: "--c3", iniciar: juego15 },
    { titulo: "Mesa giratoria y letras gemelas", descripcion: "Supera cinco misiones de mesas circulares y letras repetidas; luego experimenta en el laboratorio.", icono: "🔤", color: "--c1", iniciar: juego16 },
  ];
  const menu = document.getElementById("minijuegos-menu");
  const activo = document.getElementById("minijuego-activo");
  const host = document.getElementById("minijuego-cuerpo");
  const titulo = document.getElementById("minijuego-titulo");
  if (!menu || !activo || !host || !titulo) return;
  let limpiarJuegoActivo;
  function animarMenu() {
    menu.classList.remove("minijuegos-entrada");
    void menu.offsetWidth;
    menu.classList.add("minijuegos-entrada");
  }

  menu.innerHTML = JUEGOS.map((juego, i) => `
    <button type="button" class="minijuego-tarjeta" data-juego="${i}" style="--cc:var(${juego.color});--i:${i}">
      <span class="minijuego-icono" aria-hidden="true">${juego.icono}</span>
      <span class="minijuego-texto"><strong>${juego.titulo}</strong><small>${juego.descripcion}</small></span>
      <span class="minijuego-flecha" aria-hidden="true">Jugar →</span>
    </button>`).join("");

  menu.addEventListener("click", (evento) => {
    const boton = evento.target.closest("[data-juego]");
    if (!boton) return;
    const juego = JUEGOS[Number(boton.dataset.juego)];
    if (!juego) return;
    if (limpiarJuegoActivo) limpiarJuegoActivo();
    titulo.textContent = `${juego.icono} ${juego.titulo}`;
    activo.style.setProperty("--cc", `var(${juego.color})`);
    host.replaceChildren();
    const limpieza = juego.iniciar(host);
    limpiarJuegoActivo = typeof limpieza === "function" ? limpieza : undefined;
    menu.hidden = true;
    activo.hidden = false;
    activo.scrollIntoView({ behavior: reducido ? "auto" : "smooth", block: "start" });
  });

  const volver = document.getElementById("minijuegos-volver");
  if (!volver) return;
  volver.addEventListener("click", () => {
    if (limpiarJuegoActivo) limpiarJuegoActivo();
    limpiarJuegoActivo = undefined;
    activo.hidden = true;
    host.replaceChildren();
    menu.hidden = false;
    menu.querySelector("button")?.focus();
    animarMenu();
    window.scrollTo({ top: 0, behavior: reducido ? "auto" : "smooth" });
  });
  window.addEventListener("hashchange", () => {
    if (location.hash === "#/juegos") {
      if (!menu.hidden) animarMenu();
      return;
    }
    if (limpiarJuegoActivo) limpiarJuegoActivo();
    limpiarJuegoActivo = undefined;
  });
  if (location.hash === "#/juegos" && !menu.hidden) animarMenu();
})();
