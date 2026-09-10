let nota1 
let nota2 
let media = (nota1 + nota2) / 2;

nota1 = parseFloat(prompt("Nota 1: "));
nota2 = parseFloat(prompt("Nota 2: "));     

console.log("A média das notas é: " + media);       

if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}