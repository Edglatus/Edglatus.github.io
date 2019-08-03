
function callPrompt()
{
	var input = prompt("Digite uma data:");

	var age = Date.now() - new Date(input);

	var days = Math.floor(age/(86400 * 1000));
	var months = Math.floor(days/30.44);
	var years = Math.floor(months/12);
	days -=	Math.floor(months * 30.44);
	months -= years * 12;

	var yearString = years > 1 ? " Anos, " : " Ano, ";
	var monthString = months > 1 ? " Meses, e " : " Mês, e ";
	var dayString = days > 1 ? " Dias." : " Dia.";

	alert(years + yearString + months + monthString + days + dayString);
}


function callPromptv2()
{
	var input = prompt("Digite uma data:");

	var age = new Date(Date.now() - new Date(input).getTime());

	var days = age.getDay();
	var months = age.getMonth();
	var years = age.getFullYear() - 1970;

	var yearString = years > 1 ? " Anos, " : " Ano, ";
	var monthString = months > 1 ? " Meses, e " : " Mês, e ";
	var dayString = days > 1 ? " Dias." : " Dia.";

	alert(years + yearString + months + monthString + days + dayString);
}