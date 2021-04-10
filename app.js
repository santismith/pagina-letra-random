

letraQuery = document.querySelector('.letra');
borrarLetraQuery = document.querySelector('.botonBorrarLetra')


init()

function init(){
    letraQuery.style.visibility = "hidden"
    borrarLetraQuery.style.visibility = "hidden"
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
        borrarLetraQuery.style.visibility ="visible"

    })


    document.getElementById('boton1').addEventListener("click",function(){
        letraQuery.style.visibility= "hidden"
        borrarLetraQuery.style.visibility = "hidden"

    })


