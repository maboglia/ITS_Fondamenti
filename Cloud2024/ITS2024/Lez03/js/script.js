console.log(STUDENTI);
//class

// for(let i = 0; i < STUDENTI.length; i++){

//     console.log(STUDENTI[i][1].toUpperCase());

// }

for (const studente of STUDENTI) {
    
    // const temp = creaStudente(studente[0],studente[1])
    const temp = new Studente(studente[0],studente[1])
    console.log(temp.firma());
}




//factory function

function creaStudente(_nome, _cognome) {
    return {
        nome: _nome,
        cognome: _cognome
    }
}


//constructor function
// function Studente(_nome, _cognome) {
    
//     this.nome = _nome;
//     this.cognome = _cognome;

//     this.firma = function() {
//         return this.nome + ' ' + this.cognome;
//     }

// }


const st1 = creaStudente('pippo', 'rossi')
console.log(st1.nome);