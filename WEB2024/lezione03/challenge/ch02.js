/**
 * Portrait o landscape
Scrivi una funzione che dati in ingresso larghezza e altezza di una
finestra, ritorni in output se si tratta di una finestra orizzontale o
vericale (landscape o portrait)
 * 
 */

console.log(  isLandascape(1024,768)   );

function isLandascape(width, height) {

    // if (width > height)
    //     return true;
    // //else
    //     return false;

    // return width > height ? true : false;

    return width > height;
}