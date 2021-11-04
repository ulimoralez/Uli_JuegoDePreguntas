//Definimos un objeto que tendra nuestras preguntas
//Todas las imagenes utilizadas se comprimieron en la pagina https://tinypng.com/
const catalogoPreguntas = 
{
    "facil":{
        1: {
            categoria: "Naturaleza",
            pregunta: "¿A que grupo de animales pertenecen los ornitorrincos?",
            opciones: ["Anfibios", "Mamiferos", "Reptiles", "Aves Acuáticas"],
            correcta: "Mamiferos",
            imagen: "./styles/assets/img/preguntas/facil/preguntaFacil1.jpg",
            descripcionImagen:"Imagen de un Ornitorrinco"
        },
        2:{
            categoria: "Geografía",
            pregunta: "¿Cuál es la lengua más hablada del mundo?",
            opciones: ["Español", "Ingles", "Portugues", "Chino Mandarin"],
            correcta: "Chino Mandarin",
            imagen: "./styles/assets/img/preguntas/facil/preguntaFacil2.jpg",
            descripcionImagen:"Imagen de un chico con fotos de idiomas a su alrededor"
        },
        3:{
            categoria: "Naturaleza",
            pregunta: "¿Cuántas patas tiene una araña?",
            opciones: ["4", "6", "8", "12"],
            correcta: "8",
            imagen: "./styles/assets/img/preguntas/facil/preguntaFacil3.jpg",
            descripcionImagen:"Imagen de Spiderman"
        },
        4:{
            categoria: "Astronomia",
            pregunta: "¿Qué planeta es el más cercano al Sol?",
            opciones: ["Pluton", "Mercurio", "Marte", "Urano"],
            correcta: "Mercurio",
            imagen: "./styles/assets/img/preguntas/facil/preguntaFacil4.jpg",
            descripcionImagen:"Imagen de un paisaje con estrellas"
        },
        5:{
            categoria: "Ciencia",
            pregunta: "El nitrógeno es el elemento químico más abundante en la atmósfera.",
            opciones: ["Verdadero", "Falso"],
            correcta: "Verdadero",
            imagen: "./styles/assets/img/preguntas/facil/preguntaFacil5.jpg",
            descripcionImagen:"Imagen de un cientifico"
        },
    },
    "medio":{

    },
    "dificil":{

    }
}

//Creamos nuestras variables que van a contener el elemento HTML que queremos controlar
let elementoPuntos = document.getElementById("puntos")
let elementoNivel = document.getElementById("nivel")

let elementoCategoria = document.getElementById("categoria")
let elementoPregunta = document.getElementById("pregunta")
let elementoImagen = document.getElementById("imagen")

let containerRespuestas = document.getElementById("respuestas")


//Al iniciar tiene que setear una pregunta de la dificultad facil
window.onload = function() {
    let pregunta = getPregunta(catalogoPreguntas, "facil")
    elementoPuntos.innerHTML = 0
    elementoNivel.innerHTML = 1
    setPregunta(pregunta)
    getOpciones(pregunta)
}

function getPregunta(catalogoPreguntas, dificultad){
    const numeroRandom = Math.floor(Math.random() * 5 - 1) + 1
    let pregunta = catalogoPreguntas[dificultad][numeroRandom + 1]
    return pregunta
}

function setPregunta(pregunta){
    elementoCategoria.innerHTML = pregunta.categoria
    elementoPregunta.innerHTML = pregunta.pregunta
    elementoImagen.src = pregunta.imagen
    elementoImagen.alt = pregunta.descripcionImagen
}

function getOpciones(pregunta){
    let cantOpciones = Object.values(pregunta.opciones).length
    for(var i = 0; i < cantOpciones; i++){
        var button = document.createElement("button")
        button.type = "button"
        button.innerText = pregunta.opciones[i]
        button.classList = ("respuestas-container__respuesta")
        containerRespuestas.appendChild(button)
    }
}