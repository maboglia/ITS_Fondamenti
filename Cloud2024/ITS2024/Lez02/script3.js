const tennisti = [
    'sinner',//0
    'djokovic',//1
    'alcaraz',
    'medvedev',
    'rublev',
    'zverev',
    'rune',
    'hurkacz',
]

let counter = 0;
const TITOLO = document.getElementById('titolo')

function show() {
    TITOLO.textContent = tennisti[counter]
}

function incrementa() {
    counter++;
    if (counter == tennisti.length){
        counter = 0
    }
    show()
}

function decrementa() {
    counter--;
    if (counter < 0){
        counter = tennisti.length - 1
    }
    show()
}


document.body.onload = show