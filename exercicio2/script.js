const numero1 = Number(prompt("Digite um número qualquer"))
const numero2 = Number(prompt("Digite um número qualquer"))

console.log ("o primeiro numero e maior que o segundo?", numero1 > numero2)
console.log ("O primeiro numero é igual ao segundo?", numero1 === numero2)
console.log("O primeiro numero e divisível pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo numero e divisível pelo primeiro?", numero2 % numero1 === 0)