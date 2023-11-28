const LISTA = document.getElementById('listaPaesi')

for (const paese of PAESI_JSON) {

    const LI = document.createElement('li')

    LI.innerHTML = `<h2>${paese.name.official}</h2>
    <img src='${paese.flags.png}'>
    `
    LISTA.append(LI)
    console.log(paese);
}