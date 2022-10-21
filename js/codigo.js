//ALEATORIEDAD//
function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}         
function election(jugada){
    let j = ""
    let r = ""
    if (jugada == 1){
        j = "TU: 🤘     "    
    } else if (jugada == 2) {
        j = "TU: 🧻     "   
    } else if (jugada == 3) {
        j = "TU: ✂️     "
    } else {
        j = "🤖🤖ERROR🤖🤖     "
    }     
    return j
}
function electionpc(jugada){
    let p
    if (jugada == 1) {
        p = "     🤘 :PC"            
    } else if (jugada == 2){
        p = "     🧻 :PC"
    } else if (jugada == 3){
        p = "     ✂️ :PC"
    }    
    return p;
}
function ringring(o){    
    return alert(election(jugador) + o + electionpc(pc))
}

//COMBATE//

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos <3 && perdidas < 3){
    pc = aleatorio (1, 3)
    jugador = prompt("Elige: 1 = 🤘 | 2 = 🧻 | 3 = ✂️")
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