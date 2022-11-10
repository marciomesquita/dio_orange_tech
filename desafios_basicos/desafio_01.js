let a = 3;
let N = 18;
let soma = 0; 
let i = a;

do {
   soma += i;
   i += a;
} while (i <= N);

console.log(soma);