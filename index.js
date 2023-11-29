let heroi = ["Goku", 300, 219]

let saldoVitorias = calcularSaldo(heroi[1],heroi[2])
let nivelHeroi = calcularNivelHeroi (saldoVitorias)

//calcula o saldo de vitórias
function calcularSaldo(vitorias,derrotas) {
	let saldo = vitorias - derrotas
    return saldo
}

//calcula o nível do herói, baseado no saldo de vitórias
function calcularNivelHeroi (saldoVitorias) {
	if (saldoVitorias <= 10) {
	return "Ferro"
	} else if (saldoVitorias > 10 && saldoVitorias <= 20 ) {
	return "Bronze"
	} else if (saldoVitorias > 20 && saldoVitorias <= 50 ) {
	return "Prata"
    } else if (saldoVitorias > 50 && saldoVitorias <= 80 ) {
	return "Ouro"
    } else if (saldoVitorias > 80 && saldoVitorias <= 90 ) {
	return "Diamante"
    } else if (saldoVitorias > 90 && saldoVitorias <= 100 ) {
	return "Lendário"
    } else if (saldoVitorias > 100) {
	return "Imortal"
    }
}

console.log(`O herói de nome ${heroi[0]} tem saldo de ${saldoVitorias} e está no nível de ${nivelHeroi}!`)
