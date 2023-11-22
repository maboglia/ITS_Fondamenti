class Studente {

    nome;
    cognome;

    firma(){
        return this.nome + ' ' + this.cognome;
    }

}


let st1 = new Studente();

st1.nome = 'mauro'
st1.cognome = 'boglia'

console.log(st1.firma());
