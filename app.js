let cores = ['Vermelho', 'Verde', 'Amarelo', 'Azul', 'Roxo', 'Rosa', 'Laranja', 'Branco', 'Preto', 'Cinzento', 'Castanho'];
let cor = cores[Math.floor(Math.random() * cores.length)];

console.log(cor)

let adivinhar = prompt('Adivinha a cor em que estou a pensar:')
adivinhar = Math.floor(Number(adivinhar))