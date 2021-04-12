


//selecciono todos los elementos que voy a usar
resultadoQuery = document.querySelector('.resultado');
borrarQuery = document.querySelector('.botonBorrar')
selectorQuery = document.getElementById('selector')
boton0Id = document.getElementById('boton0')
boton1Id = document.getElementById('boton1')


init()
//función inicial cuando carga la página
function init(){
    resultadoQuery.style.visibility = "hidden"
    borrarQuery.style.display = "none"
    selectorQuery.value = "letra"
}


//función que devuelve un número random del 1 al 10
const numeroRandom = function(){
    let numero
    numero = Math.floor(Math.random()*10)
    
    return numero
}


//función que devuelve una letra random
const letraRandom = function() {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let letra
    letra =  caracteres.charAt(Math.floor(Math.random()*26))
    
    return letra
}



//botón inicial que depende si el selector es "letra" o "número", llama a la función de letraRandom/numeroRandom
// y setea el resultado  y el botón de borrar como  visible 
boton0Id.addEventListener("click", function() {
    

    if(selectorQuery.value === "letra"){
        resultadoQuery.textContent = letraRandom()
        resultadoQuery.style.visibility = "visible"
        borrarQuery.style.display ="initial"
    }else if(selectorQuery.value === "numero"){
        resultadoQuery.textContent = numeroRandom()
        resultadoQuery.style.visibility = "visible"
        borrarQuery.style.display ="initial"
    }

    })



//botón de borrar que cuando uno hace click setea el resultado en hidden y desaparece el mismo
boton1Id.addEventListener("click",function(){
    resultadoQuery.style.visibility= "hidden"
    borrarQuery.style.display = "none"

    })




//event listener del selector que al cambiarlo,  toma los valores que le correspondan
selectorQuery.addEventListener("change",function(){
    if(this.value === "letra"){
        
        boton0Id.textContent= "Click aqui para su letra"
        borrarQuery.style.display = "none"
        boton1Id.textContent = "Borrar letra"
        resultadoQuery.style.visibility = "hidden"
    
    }else if(this.value ==="numero"){
        
        boton0Id.textContent = "Click aqui para su numero"
        borrarQuery.style.display = "none"
        boton1Id.textContent = "Borrar numero"
        resultadoQuery.style.visibility = "hidden"
}})