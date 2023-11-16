//alert("Hola este es mi Javascript");
//let nombre = "Jonfenedir"
//nombre = "Jotham"

//console.log (nombre)
//let titulo = "acerca de mi"
//let contenidoTitulo = "Acerca de mi 1"
//let Titulo = document.querySelector(".Acercademi")
//titulo.innerHTML = contenidoTitulo  

//let textoTitulo = titulo,innerText
//console.log(textoTitulo)

//if (textoTitulo == "Acerca de mi") {
    //titulo.innerHTML = "Cosas que no sabias hace 5 minutos" 
//}else {
    //console.log("Dios esta aqui")
//}

let nombre = "Pokemon"
let ciudad = "Paleta"
let gusto = "Furro"

let parrafo = document.querySelector(".parrafo2")

function cambiarTexto (nombre, ciudad, gusto){
    let contenido = `Hola soy un pequeño chico que esta incursionando en el mundo de los pokemon y me gustaria ser un buen entrenador pokemon.`
    return contenido
}

parrafo.innerText = cambiarTexto ("Pokemon", ciudad, gusto)
const form = document.getElementById("form");
const nombree = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

