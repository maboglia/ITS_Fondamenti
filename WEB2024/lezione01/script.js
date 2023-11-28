var saluto = "Hello World";//il ; è opzionale

//ES6 - ES2015

//Scope: ambito di visibilità
{
    let visibilita = 5;
}

const IVA = 0.22;

/*
if (5 < 4){
    console.log("é maggiore");
} else {
    console.log("è minore");
}
*/
///              0        1        2
const NANI = ['pisolo', 'eolo', 'mammolo', 'gongolo'
        , 'cucciolo', 'brontolo', 'dotto'];


console.log(typeof NANI[0]);

for(let i = 0; i < NANI.length; i++){
    console.log( "La lunghezza della stringa " + NANI[i] +" è " + NANI[i].length  );
}

let gira = true;

while(gira){

    console.log('sto girando');

    if ( Math.random() < 0.1 ) {
        gira = false;
    }
}

