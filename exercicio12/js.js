
function callPrompt()
{
	var input = prompt("Digite um E-Mail:");

	var validation = input.split("@");

	var dotValidation = validation[1].split(".");

	if(validation.length != 2 || validation[0].length < 1 || dotValidation.length != 2 || dotValidation[0].length < 2)
	{
		alert("invalido");
	}
	else
	{
		alert("valido");
	}
}