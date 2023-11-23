/*
var saluto = "Hello ";//questo è il saluto

var nome = prompt("username");
var password = prompt("password");

if ( nome == "mauro" && password == "12345"  ){

    console.log(saluto + " " + nome);
    console.log('Logged');
 
} else {
    console.log("username o password errate");
}

*/
/*
var volte = 10;

for (var i = 0; i < volte; i++){
    console.log("tiro a canestro " + i);
}
*/
/*
var gira = true

while (gira) {
 
    if (Math.random() > 0.1)
    console.log("gira");
    else
    gira = false;
}
*/

var volte = 1000000
var facce = 6
var punteggio = 0

for(var i = 0; i < volte; i++){
    var dado1 = Math.floor(  (Math.random() * facce) ) + 1
    var dado2 = Math.floor(  (Math.random() * facce) ) + 1
    //console.log("dado1: " + dado1);
    //console.log("dado2: " + dado2);

    if (dado1 == dado2){
        punteggio++;
        //console.log('hai vinto');
    }
}

console.log("hai fatto " + punteggio + " punti su " + volte + " lanci" );