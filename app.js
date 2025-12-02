let cores = ['Vermelho', 'Verde', 'Amarelo', 'Azul', 'Roxo', 'Rosa', 'Laranja', 'Branco', 'Preto', 'Cinzento', 'Castanho'];
let cor = cores[Math.floor(Math.random() * cores.length)];

let adivinhar = prompt('Adivinha a cor em que estou a pensar:')
adivinhar = Math.floor(adivinhar)

console.log('Cor escolhida: ' + cor, 'Cor visitante: ' + adivinhar)

let ganhou = false;


while (!ganhou) {
    for (i = 0; i < cores.length; i++) {
        if (adivinhar == cores[i]) {
            ganhou = true
        }
    }

    if (adivinhar !== cor) {
        alert('Errou! Tente novamente...')

        adivinhar = prompt('Adivinha a cor em que estou a pensar:')
        adivinhar = Math.floor(adivinhar)
    } else {
        alert('É necessário inserir uma cor válida, recomeça. :/')
    }
}