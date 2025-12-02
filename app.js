let cores = ['Vermelho', 'Verde', 'Amarelo', 'Azul', 'Roxo', 'Rosa', 'Laranja', 'Branco', 'Preto', 'Cinzento', 'Castanho'];
let cor = cores[Math.floor(Math.random() * cores.length)];

let adivinhar = prompt('Adivinha a cor em que estou a pensar:')
adivinhar = Math.floor(adivinhar)

console.log('Cor escolhida: ' + cor, 'Cor visitante: ' + adivinhar)

let ganhou = false;

if (adivinhar != cor) {
    alert('É necessário inserir uma cor válida, recomeça.')
} else {
    while (!ganhou) {
        if (adivinhar = cor) {
            alert('Acertaste!!!')

            ganhou = true;
        }
    }
}