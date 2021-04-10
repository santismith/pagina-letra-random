

letraQuery = document.querySelector('.letra');



const letraRandom = function() {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let letra
    letra =  caracteres.charAt(Math.floor(Math.random()*26))
    
    return letra
}


    document.getElementById('boton0').addEventListener("click", function() {
        letraQuery.textContent += letraRandom()
    })


    document.getElementById('boton1').addEventListener("click",function(){
        letraQuery.textContent = ''

    })


