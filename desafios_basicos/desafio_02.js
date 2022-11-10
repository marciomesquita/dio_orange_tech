let resultado = 3;
print(fizzBuzz(resultado));

function fizzBuzz(numero){
    let mensagem = '';

    numero % 3 === 0 ? mensagem += 'Fizz' : 
    numero % 5 === 0 ? mensagem += 'Buzz'
    mensagem === '' ? mensagem = numero
    
    return mensagem;
}
