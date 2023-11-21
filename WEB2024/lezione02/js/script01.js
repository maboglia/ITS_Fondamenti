
// let materie = ['ita1', 'mate1','ita2', 'mate2','php1', 'js1','java', 'c#', 'python']

// let esame1 = {
//     materia: 'ita1',
//     voto: 25
// }


//ES6 - ES2015

let totale = 0;

// for (let i = 0; i < esami.length; i++){
//     // totale = totale + esami[i];
//     totale += esami[i].voto
//     console.log('Esame ' + esami[i].materia + ' voto: ' + esami[i].voto)
// }

const TITOLO = document.getElementById('titolo')
TITOLO.textContent = studente

const LISTA_ESAMI = document.getElementById('lista')

for (esame of esami){
    totale += esame.voto
    
    const LI = document.createElement('li')
    LI.textContent = esame.materia
    
    LISTA_ESAMI.append(LI)
    
    console.log(`Esame ${esame.materia} 
    voto ${esame.voto}`);
}





let media = totale / esami.length

console.log(media);