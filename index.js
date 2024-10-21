let prompt = require('prompt-sync')()

// Obtendo dados de entrada
qtdVitorias = parseInt(prompt("Digite a quantidade de vitórias do seu herói: "))
qtdDerrotas = parseInt(prompt("Digite a quantidade de derrotas do seu herói: "))


let saldoVitorias = diferencaVitorias (qtdVitorias, qtdDerrotas)

console.log(saldoVitorias)

if (saldoVitorias <= 10){     
    console.log("O herói tem saldo de " + saldoVitorias + " está no nível de Ferro")
}else if ((saldoVitorias > 11) && (saldoVitorias <= 20)){
    console.log("O herói tem saldo de " + saldoVitorias + " está no nível de Bronze")
}else if ((saldoVitorias > 21) && (saldoVitorias <= 50)){
    console.log("O herói tem saldo de " + saldoVitorias + " está no nível de Prata")
}else if ((saldoVitorias > 51) && (saldoVitorias <= 80)){
    console.log("O herói tem saldo de " + saldoVitorias + " está no nível de Ouro")
}else if ((saldoVitorias > 81) && (saldoVitorias <= 90)){
    console.log("O herói tem saldo de " + saldoVitorias + " está no nível de Diamente")
}else if ((saldoVitorias > 91) && (saldoVitorias <= 100)){
    console.log("O herói tem saldo de " + saldoVitorias + " está no nível de Lendário")
}else{
    console.log("O herói tem saldo de " + saldoVitorias + " está no nível de Imortal")
}

function diferencaVitorias (qtdVitorias, qtdDerrotas){
    let resultado = qtdVitorias - qtdDerrotas
    return resultado
}

