class Dado {

    facce;
    colore;
    valore;

    //costruttore contiene le istruzione per l'istanziazione degli oggetti
    constructor(colore){
        console.log("oggetto dado creato");
        this.facce = 6
        this.colore = colore
        this.lancia()
    }

    lancia(){
        this.valore =  Math.ceil(Math.random() * this.facce)
        return this.valore
    }
}