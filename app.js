

letraQuery = document.querySelector('.letra');
borrarLetraQuery = document.querySelector('.botonBorrarLetra')
selectorQuery = document.getElementById('selector')
boton0Id = document.getElementById('boton0')


init()

function init(){
    letraQuery.style.visibility = "hidden"
    borrarLetraQuery.style.display = "none"
}


const numeroRandom = function(){
    let numero
    numero = Math.floor(Math.random()*10)
}




const letraRandom = function() {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let letra
    letra =  caracteres.charAt(Math.floor(Math.random()*26))
    
    return letra
}


    document.getElementById('boton0').addEventListener("click", function() {
        
        letraQuery.textContent = letraRandom()
        letraQuery.style.visibility = "visible"
        borrarLetraQuery.style.display ="initial"
        
        if(selectorQuery.value === "letra"){
            boton0Id.textContent = "Click aqui para su letra"
        }else if(selectorQuery.value ==="numero"){
            boton0Id.textContent = "Click aqui para su numero"
        }

    })


    document.getElementById('boton1').addEventListener("click",function(){
        letraQuery.style.visibility= "hidden"
        borrarLetraQuery.style.display = "none"

    })


