//Declarar una funcion como si fuera una variable (hacer una nueva funcion) con function sin (=) xd
// Si tienes que copiar y pegar lo mismo eso merece ser una funcion
// funcion en minuscula y parametros entre ()
// Primero se declaran y luego se usan las funciones
//IMPORTANTE return es una instruccion que sirve para que la variable se defina porque manda la informacion hacia la nueva variable o que una funcion ejecute cierta funcion que se especifica en su interior

function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}         
function election(jugada){
    let j = ""
    let r = ""
    if (jugada == 1){
        j = "TU: 🤘  "    
    } else if (jugada == 2) {
        j = "TU: 🧻  "   
    } else if (jugada == 3) {
        j = "TU: ✂️  "
    } else {
        j = "🤖🤖ERROR🤖🤖  "
    }     
    return j
}
function electionpc(jugada){
    let p
    if (jugada == 1) {
        p = "  🤘 :PC"            
    } else if (jugada == 2){
        p = "  🧻 :PC"
    } else if (jugada == 3){
        p = "  ✂️ :PC"
    }    
    return p;
}
function ringring(o){    
    return a = alert(election(jugador) + o + electionpc(pc))
}

// Algoritmo de aleatoriedad de numeros entre los rangos (1 - 3)
// 1 es piedra, 2 es papel y 3 es tijera
// Doctype es compatibilidad con navegadores viejos
// Las instrucciones son terminos que modifican el flujo del codigo
// while = haga un ciclo mientras sea verdadera y importante
                            
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos <3 && perdidas < 3){
    pc = aleatorio (1, 3)
    jugador = prompt("Elige: 1 = 🤘 | 2 = 🧻 | 3 = ✂️")
//alert("Elegiste " + jugador)
// (==) = Comparar
// (=) = Asignacion
// if = si
// else = si no 
// Comentario de desarollador
// else if = si no, entonces
//COMBATE//
//&& = y, para que dos cosas se comparen o hagan al mismo tiempo
// Math.floor = funcion que quita decimales a cualquier numero 
// Math.random () = Da un numero aleatorio entre en 0 y el 1

    if(pc == jugador){
        ringring(o ="--EMPATE--")
    } else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
        ringring(o ="--GANASTE--")
        triunfos = triunfos + 1
    } else {
        ringring(o ="--PERDISTE--")
        perdidas = perdidas + 1
    }    
}
alert("Ganaste " + triunfos + " Perdiste " + perdidas + " veces.")                                                        