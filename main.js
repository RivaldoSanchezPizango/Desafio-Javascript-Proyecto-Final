function numeroRandom() {
  let adivinaElNumero = Math.floor(Math.random() * (20 -1)) + 1;
  console.log(adivinaElNumero);

let vidas = 3;

let usuario = parseInt(prompt("Adivine el numero del 1 a 20"));

while (adivinaElNumero !== usuario && vidas > 1) {
  console.log('Te Equivocaste');
  usuario = parseInt(prompt("Numero del 1 a 20"))
  vidas --
};

if (adivinaElNumero === usuario) {
  console.log("Ganaste :)");
} else {
  console.log("Perdiste :c");
}
};

numeroRandom();