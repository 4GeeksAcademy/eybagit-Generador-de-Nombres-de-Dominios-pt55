// Arreglo de pronombres para el dominio (por ejemplo, artículos)
const pronombres = ['el', 'la'];

// Arreglo de adjetivos con nombres profesionales en español.
const adjetivos = [
  "innovador",
  "poderoso",
  "cautivador",
  "elemento"
];

// Arreglo de sustantivos en el que cada uno incluye al final letras que formarán la extensión
const sustantivos = [
  "techcom",     // termina en "com"
  "cybernet",    // termina en "net"
  "startupus",   // termina en "us"
  "appio",       // termina en "io"
  "globales"     // termina en "es"
];

// Lista de extensiones válidas.
const extensiones = ['.com', '.net', '.us', '.io', '.es'];

/**
 * Función que genera un dominio combinando la base y una extensión específica.
 * Si el sustantivo termina con los caracteres que corresponden a la extensión 
 * (sin el punto), se inserta un punto antes de esa parte para crear un "domain hack".
 * De lo contrario, se añade la extensión al final.
 *
 * Por ejemplo, si el dominio base es "elinnovadortechcom" y la extensión es ".com" 
 * (y "techcom" termina en "com"), la función devolverá "elinnovadortech.com".
 *
 * @param {string} dominioBase - El dominio concatenado (pronombre + adjetivo + sustantivo).
 * @param {string} sustantivo - El sustantivo utilizado para detectar el sufijo.
 * @param {string} extension - La extensión con la que queremos combinar (ej. ".net").
 * @returns {string} - El dominio resultante. 
*/

const generarDominioConExtension = (dominioBase, sustantivo, extension) => {
  const extLimpio = extension.slice(1); // Elimina el punto, por ejemplo, "com" de ".com"
  
  // Se compara sin importar mayúsculas/minúsculas.
  if (sustantivo.toLowerCase().endsWith(extLimpio.toLowerCase())) {
    // Si el sustantivo termina con el sufijo de la extensión,
    // removemos esa cantidad de caracteres del final del dominioBase
    // y luego le agregamos la extensión (con el punto).
    return dominioBase.slice(0, dominioBase.length - extLimpio.length) + extension;
  } else {
    // Si no coincide, simplemente se concatena la extensión al final.
    return dominioBase + extension;
  }
};

// Generar todas las combinaciones posibles usando bucles anidados, aplicando todas las extensiones.
for (let pronombre of pronombres) {
  for (let adjetivo of adjetivos) {
    for (let sustantivo of sustantivos) {
      // Se forma el dominio base concatenando: pronombre + adjetivo + sustantivo.
      const dominioBase = pronombre + adjetivo + sustantivo;
      
      // Para cada extensión disponible, se genera el dominio final.
      for (let extension of extensiones) {
        const dominioFinal = generarDominioConExtension(dominioBase, sustantivo, extension);
        console.log(dominioFinal);
      }
    }
  }
}
