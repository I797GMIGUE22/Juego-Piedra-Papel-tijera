//ALEATORIEDAD//
function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}         
function election(jugada){
    let jugadaJugador = ""
    if (jugada == 1){
        jugadaJugador = "TU: 🤘     "    
    } else if (jugada == 2) {
        jugadaJugador = "TU: 🧻     "   
    } else if (jugada == 3) {
        jugadaJugador = "TU: ✂️     "
    } else {
        jugadaJugador = "🤖🤖ERROR🤖🤖     "
    }     
    return jugadaJugador
}
function electionpc(jugada){
    let jugadaPc
    if (jugada == 1) {
        jugadaPc = "     🤘 :PC"            
    } else if (jugada == 2){
        jugadaPc = "     🧻 :PC"
    } else if (jugada == 3){
        jugadaPc = "     ✂️ :PC"
    }    
    return jugadaPc;
}
function ringring(resultado){    
    return alert(election(jugador) + resultado + electionpc(pc))
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
        ringring("--EMPATE--")
    } else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
        ringring("--GANASTE--")
        triunfos = triunfos + 1
    } else {
        ringring("--PERDISTE--")
        perdidas = perdidas + 1
    }    
}
alert("Ganaste: " + triunfos + " Perdiste: " + perdidas)                                                        