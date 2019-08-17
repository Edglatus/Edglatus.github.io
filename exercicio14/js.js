 function add_listItem()
{
	var target = document.getElementById("lista");
	var text = document.getElementById("q").value;

	if(text.length > 0)
	{
		var new_element = document.createElement("li");
		new_element.innerText = text;
		target.appendChild(new_element);
	}
}

function switch_light()
{
	if(this.src.includes("on"))
	{
		this.src = "./img/lampada_off.gif";
	}
	else
	{
		this.src = "./img/lampada_on.gif";
	}
}

function break_light()
{
	this.src = "./img/lampada_broken.gif";
	this.removeEventListener("click", switch_light, false);
}

document.getElementById("submit_button").addEventListener("click", add_listItem, false);
document.getElementById("lampadinha").addEventListener("click", switch_light, false);
document.getElementById("lampadinha").addEventListener("dblclick", break_light, false);
