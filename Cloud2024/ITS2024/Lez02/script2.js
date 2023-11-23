// var titolo = 'Hello world'

// console.log(titolo);

// //ES6 - ES2015
// {
//     let varScopeLimitato = 5;
// }

// for (let i = 0; i< 10; i++){//conosco il n di ripetizione
//     console.log('il valore di i ' + i);
// }
// //console.log(i);

// const IVA = 0.22

// IVA = 0.23

const TITOLO = document.getElementById('titolo')

let counter = 0;


function incrementa(){
    counter++;
    show()
}
function decrementa(){
    counter--;
    show()
}

function show() {
    TITOLO.textContent = counter    
}




