//Definimos un objeto que tendra nuestras preguntas
//Todas las imagenes utilizadas se comprimieron en la pagina https://tinypng.com/
const catalogoPreguntas =
{
    "facil": {
        1: {
            idPregunta: 1,
            categoria: "Naturaleza",
            pregunta: "¿A que grupo de animales pertenecen los ornitorrincos?",
            opciones: ["Anfibios", "Mamiferos", "Reptiles", "Aves Acuáticas"],
            correcta: "Mamiferos",
            imagen: "./styles/assets/img/preguntas/facil/preguntaFacil1.jpg",
            descripcionImagen: "Imagen de un Ornitorrinco"
        },
        2: {
            idPregunta: 2,
            categoria: "Geografía",
            pregunta: "¿Cuál es la lengua más hablada del mundo?",
            opciones: ["Español", "Ingles", "Portugues", "Chino Mandarin"],
            correcta: "Chino Mandarin",
            imagen: "./styles/assets/img/preguntas/facil/preguntaFacil2.jpg",
            descripcionImagen: "Imagen de un chico con fotos de idiomas a su alrededor"
        },
        3: {
            idPregunta: 3,
            categoria: "Naturaleza",
            pregunta: "¿Cuántas patas tiene una araña?",
            opciones: ["4", "6", "8", "12"],
            correcta: "8",
            imagen: "./styles/assets/img/preguntas/facil/preguntaFacil3.jpg",
            descripcionImagen: "Imagen de Spiderman"
        },
        4: {
            idPregunta: 4,
            categoria: "Astronomia",
            pregunta: "¿Qué planeta es el más cercano al Sol?",
            opciones: ["Pluton", "Mercurio", "Marte", "Urano"],
            correcta: "Mercurio",
            imagen: "./styles/assets/img/preguntas/facil/preguntaFacil4.jpg",
            descripcionImagen: "Imagen de un paisaje con estrellas"
        },
        5: {
            idPregunta: 5,
            categoria: "Ciencia",
            pregunta: "El nitrógeno es el elemento químico más abundante en la atmósfera.",
            opciones: ["Verdadero", "Falso"],
            correcta: "Verdadero",
            imagen: "./styles/assets/img/preguntas/facil/preguntaFacil5.jpg",
            descripcionImagen: "Imagen de un cientifico"
        },
    },
    "medio": {
        1: {
            idPregunta: 1,
            categoria: "Entretenimiento",
            pregunta: "¿Cuál era la dirección que Dori estaba buscando a Nemo?",
            opciones: ["P Sherman 42 Wallaby Way Sidney", "P Sherman 42 Wallaby Way Seatle", "P Sherman 46 Wallaby Way Sidney", " Sherman 42 Wallaby Way Disney"],
            correcta: "P Sherman 42 Wallaby Way Sidney",
            imagen: "./styles/assets/img/preguntas/medio/preguntaMedio1.png",
            descripcionImagen: "Imagen de la pelicula Nemo"
        },
        2: {
            idPregunta: 2,
            categoria: "Historia",
            pregunta: "¿Quién inventó la caja de tortura china?",
            opciones: ["Hitler", "Harry Houdini", "Einstein", "Todas Incorrectas"],
            correcta: "Harry Houdini",
            imagen: "./styles/assets/img/preguntas/medio/preguntaMedio2.jpg",
            descripcionImagen: "Imagen de tortura"
        },
        3: {
            idPregunta: 3,
            categoria: "Historia",
            pregunta: "El compuesto quimico del Agua es H202",
            opciones: ["Verdadero", "Falso"],
            correcta: "Falso",
            imagen: "./styles/assets/img/preguntas/medio/preguntaMedio3.png",
            descripcionImagen: "Imagen de gota de agua"
        },
        4: {
            idPregunta: 4,
            categoria: "Naturaleza",
            pregunta: "Las abejas mueren al polinizar una flor",
            opciones: ["Verdadero", "Falso"],
            correcta: "Falso",
            imagen: "./styles/assets/img/preguntas/medio/preguntaMedio4.jpg",
            descripcionImagen: "Imagen de Abeja"
        },
        5: {
            idPregunta: 5,
            categoria: "Videojuegos",
            pregunta: "El hermano de Mario se llama Luigi",
            opciones: ["Verdadero", "Falso"],
            correcta: "Verdadero",
            imagen: "./styles/assets/img/preguntas/medio/preguntaMedio5.jpg",
            descripcionImagen: "Imagen de Mario Bros"
        },
    },
    "dificil": {
        1: {
            idPregunta: 1,
            categoria: "Entretenimiento",
            pregunta: "¿De qué raza era Lassie?",
            opciones: ["Labrador", "Collie", "Chihuahua", "Ovejero Aleman"],
            correcta: "Collie",
            imagen: "./styles/assets/img/preguntas/dificil/preguntaDificil1.png",
            descripcionImagen: "Imagen de la pelicula Lassie"
        },
        2: {
            idPregunta: 2,
            categoria: "Historia",
            pregunta: "¿De dónde es la banda ABBA?",
            opciones: ["Argentina", "Italia", "Suecia", "Inglaterra"],
            correcta: "Suecia",
            imagen: "./styles/assets/img/preguntas/dificil/preguntaDificil2.jpg",
            descripcionImagen: "Imagen de Abba"
        },
        3: {
            idPregunta: 3,
            categoria: "Historia",
            pregunta: "¿Cuál compositor de música clásica era zurdo?",
            opciones: ["Beethoven", "Mozart", "Johann Sebastian Bach", "Frédéric Chopin"],
            correcta: "Beethoven",
            imagen: "./styles/assets/img/preguntas/dificil/preguntaDificil3.png",
            descripcionImagen: "Imagen de musica"
        },
        4: {
            idPregunta: 4,
            categoria: "Tecnologia",
            pregunta: "Existen bitcoins fisicos",
            opciones: ["Verdadero", "Falso"],
            correcta: "Falso",
            imagen: "./styles/assets/img/preguntas/dificil/preguntaDificil4.png",
            descripcionImagen: "Imagen de Bitcoin"
        },
        5: {
            idPregunta: 5,
            categoria: "Videojuegos",
            pregunta: "El nombre del protagonista de The Leyend of Zelda se llama Zelda",
            opciones: ["Verdadero", "Falso"],
            correcta: "Falso",
            imagen: "./styles/assets/img/preguntas/dificil/preguntaDificil5.jpg",
            descripcionImagen: "Imagen de Zelda"
        },
    }
}

//Creamos nuestras variables que van a contener el elemento HTML que queremos controlar
let elementoPuntos = document.getElementById("puntos")
let elementoNivel = document.getElementById("nivel")

let elementoCategoria = document.getElementById("categoria")
let elementoPregunta = document.getElementById("pregunta")
let elementoImagen = document.getElementById("imagen")

let containerPrincipal = document.getElementById("containerPrincipal")
let containerRespuestas = document.getElementById("respuestas")

let dificultad = "facil"
let pregunta
let puntos = 0
let nivel = 1

let jugadasPosibles = [1, 2, 3, 4, 5]
let preguntaAJugar = 0


//Al iniciar tiene que setear una pregunta de la dificultad facil
window.onload = function () {
    ordenarArregloAleatoriamente(jugadasPosibles)
    pregunta = getPregunta(catalogoPreguntas, dificultad)
    elementoPuntos.innerHTML = puntos
    elementoNivel.innerHTML = nivel
    setPregunta(pregunta)
    getOpciones(pregunta)
}

// Obtenemos una pregunta aleatoria de nuestro catalogo, pasando como parametro el catalogo y la dificultad
function getPregunta(catalogoPreguntas, dificultad) {
    let pregunta = catalogoPreguntas[dificultad][jugadasPosibles[preguntaAJugar]]
    preguntaAJugar++
    return pregunta
}

//Agregaremos la pregunta pasada por parametro a nuestro HTML para que se muestre por pantalla
function setPregunta(pregunta) {
    elementoCategoria.innerHTML = pregunta.categoria
    elementoPregunta.innerHTML = pregunta.pregunta
    elementoImagen.src = pregunta.imagen
    elementoImagen.alt = pregunta.descripcionImagen
}
//Crearemos un elemento HTML por cada opcion que se encuentra y le asignaremos las clases y funciones 
function getOpciones(pregunta) {
    console.log(pregunta)
    let cantOpciones = Object.values(pregunta.opciones).length
    containerPrincipal.removeChild(containerRespuestas)
    containerRespuestas = document.createElement("section")
    containerRespuestas.setAttribute("id", "respuestas")
    containerRespuestas.setAttribute("class", "respuestas-container")
    containerPrincipal.appendChild(containerRespuestas)
    for (var i = 0; i < cantOpciones; i++) {
        var button = document.createElement("button")
        button.type = "button"
        button.innerText = pregunta.opciones[i]
        button.classList = ("respuestas-container__respuesta")
        button.setAttribute("onClick", `validarRespuesta(${pregunta.idPregunta},"${pregunta.opciones[i]}")`)
        containerRespuestas.appendChild(button)
    }
}

// Creamos una funcion para que en caso de que la respuesta sea correcta, se sume el puntaje y se muestre una nueva pregunta con sus opciones
function validarRespuesta(idPregunta, opcionElegida) {
    let opcionCorrecta = catalogoPreguntas[dificultad][idPregunta].correcta
    console.log("ValidarRespuesta" + opcionCorrecta);
    if(preguntaAJugar == 5){
        preguntaAJugar = 0
    }
    if (nivel < 3) {
        dificultad = "facil"
    } else {
        if (nivel < 6) {
            dificultad = "medio"
        } else {
            if (nivel < 10) {
                dificultad = "dificil"
            }
        }
    }
    let preguntaNueva = getPregunta(catalogoPreguntas, dificultad)
    if (opcionCorrecta == opcionElegida) {
        puntos++
        nivel++
        elementoPuntos.innerHTML = puntos
        elementoNivel.innerHTML = nivel
        setPregunta(preguntaNueva)
        getOpciones(preguntaNueva)
    }
}


function ordenarArregloAleatoriamente(inputArray) {
    inputArray.sort(() => Math.random() - 0.5);
}