
// ATIVIDADE 7 - ARRAYS
document.write(`<strong>ATIVIDADE 7 - Arrays</strong><br><br>`)


// 1. Criar um array e percorrê-lo utilizando o loop for
// a. Crie um array com o nome "nomes" e adicione 4 nomes de pessoas que você conhece
// b. Utilize o loop for para percorrer o array e exibir os nomes na tela

document.write(`1. Array com nomes em loop for:<br>`)

let nomes = ['Joana', 'Clara', 'Bruna', 'Cinara']
for (let pets = 0; pets < nomes.length; pets++) {
    document.write(`<strong>${nomes[pets]}</strong><br>`)
}
document.write(`<br>`)



// 2. Criar um array e percorrê-lo utilizando o loop for of
// a. Crie um array com o nome "numeros" e adicione 5 números de sua escolha
// b. Utilize o loop for of para percorrer o array e exibir a soma dos números na tela

document.write(`2. Soma dos elementos de um array com números em loop for of: `)
let numeros2 = [2, 4, 8, 16, 32]
let somaNumeros = 0
for (let num of numeros2) {
    somaNumeros += num
}
document.write(`<strong>${somaNumeros}</strong><br><br>`)



// 3. Utilizar os métodos push, pop, unshift e shift para manipular um array
// a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas de sua escolha
// b. Utilize o método push para adicionar uma fruta no final do array
// c. Utilize o método pop para remover a última fruta do array
// d. Utilize o método unshift para adicionar uma fruta no início do array
// e. Utilize o método shift para remover a primeira fruta do array
// f. Exiba o array resultante na tela

let frutas = ['Laranja','Limão','Bergamota']
frutas.push('Limão Siciliano')
frutas.pop()
frutas.unshift('Limão Cravo')
frutas.shift()
document.write(`3. Array com as 3 frutas após adicionar uma no fim, outra no início e removê-las: <br><strong>${frutas.join(' - ')}</strong><br><br>`)



