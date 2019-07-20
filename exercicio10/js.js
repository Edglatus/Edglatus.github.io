function callPrompt()
{
	var input = prompt("Digite uma palavra:");

	var inverse = input.split('').reverse().join('');

	input == inverse ?	alert("A palavra é um palíndromo.") : 	alert("A palavra não é um palíndromo.");
}