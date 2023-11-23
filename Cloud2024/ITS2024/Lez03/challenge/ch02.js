//scrivi una fun che date una larghezza e una altezza ci dica 
//se la view è in modalità portrait o landscape 

console.log(  isLandscape(768,1024)    );//false
console.log(  isLandscape(1024,768)    );//true

function isLandscape(width, height) {
    return width>height
      
}
