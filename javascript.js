let opcionesColor=document.querySelectorAll('input[name="colorFondo"]');

let color=document.querySelector("#fondo");


opcionesColor.forEach((colores) => {
    colores.addEventListener("change", () => {
    switch(colores.value){
        case "verde": 
        color.className= "colorVerde";

        break;

        case "violeta": 
        color.className= "colorVioleta";
        break

        case "naranja":
            color.className=("colorNaranja");
        break

        default:
            color.className="modificacion"
        }
});
});

let opcionCurso=document.querySelectorAll('input[name="fav_language"]');
let textoAModificar=document.querySelector('#contenido');

opcionCurso.forEach((cursos) =>{

    cursos.addEventListener("change", () =>{
        switch(cursos.value){
            case "HTML":
                textoAModificar.textContent="HTML";
            break
            
            case "CSS":
                textoAModificar.textContent="CSS";
            break 

            case "JAVASCRIPT":
                textoAModificar.textContent="JAVASCRIPT";
            break

        }
    })
})

let colorLetra=document.querySelector("#colores")
colorLetra.addEventListener("change", () => {
    switch(colorLetra.value){
        case "rojo" :
            textoAModificar.className="letraRoja"
            break

        case "verde" :
            textoAModificar.className="letraVerde"
            break

        case "azul":
            textoAModificar.className="letraAzul"
            break

    }

})

let subtitulo= document.getElementById("subtitulo");
let textoEscrito = document.querySelector("#text");

textoEscrito.addEventListener("keyup", () => {
    subtitulo.innerHTML=textoEscrito.value

})