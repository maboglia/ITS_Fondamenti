const INPUT = document.getElementById('cosadafare')
const BTN = document.getElementById('aggiungi')
const LISTA = document.getElementById('lista')

BTN.onclick = function () {
    console.log(INPUT.value)

    const LI = document.createElement('li')
    LI.textContent = INPUT.value
    LISTA.append(LI)
    INPUT.value = ''

}
