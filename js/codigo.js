//VARIABLES//

const botonPiedra = document.getElementById("boton-piedra");
const botonPapel = document.getElementById("boton-papel");
const botonTijera = document.getElementById("boton-tijera");

let botones = [];
let jugador = 0;
let ataqueJ
let pc = 0;
let triunfos = 0;
let perdidas = 0;

//BASES DE DATOS//

let dialogosJugador = ["🤘", "🧻", "✂️"];

let dialogosPc = ["🤘", "🧻", "✂️",];

//ALEATORIEDAD//
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function inicio() {
  botones = document.querySelectorAll(".boton");
  botones.forEach((boton) => {
    boton.addEventListener("click", (info) => {ataqueJ = info.target.name; consol(ataqueJ)});
  });
}

function election(jugada) {
  let jugadaJugador;
  jugadaJugador = "TU: " + dialogosJugador[jugada] + "     ";
  return jugadaJugador;
}
function electionpc(jugada) {
  let jugadaPc;
  jugadaPc = "     " + dialogosPc[jugada] + " :PC";
  return jugadaPc;
}
function ringring(resultado) {
  alert(election(ataqueJ) + resultado + electionpc(pc));
  final()
}

function consol (ataque){
    pc = aleatorio (0, 2)
    if(pc == ataque){
       ringring("--EMPATE--")
    } else if((ataque == 0 && pc == 2) || (ataque == 1 && pc == 0) || (ataque == 2 && pc == 1)){
        ringring("--GANASTE--")
        triunfos = triunfos + 1
    } else {
        ringring("--PERDISTE--")
        perdidas = perdidas + 1
    }
}

function final(){
  if ((triunfos == 3)||(perdidas == 3)) {
    alert("Ganaste: " + triunfos + " Perdiste: " + perdidas);
}
}

window.addEventListener("load", inicio);
