const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//forEach executa uma funcionalidade para cada elemento do array
// notas.forEach(function (nota) {
//     somaDasNotas += nota;
// });

notas.forEach(somaNotas);

function somaNotas(nota) {
    somaDasNotas += nota;
}


const media = somaDasNotas / notas.length;

console.log(`a média das notas é ${media}`);


const lista = [1, 2, 3, 4, 5];
let soma = 0;

lista.forEach(numero => soma += numero);
console.log(soma) //15