 function toggle_display()
{
	var trigger = this;
	var target = this.previousElementSibling;

	if(target.hidden == true)
	{
		this.innerText = "Exibir Conteúdo";
		target.hidden = false;
	}
	else
	{
		this.innerText = "Ocultar Conteúdo";
		target.hidden = true;
	}
}

function page_start()
{
	document.getElementById("enlace_1").addEventListener("click", toggle_display, false);
	document.getElementById("enlace_2").addEventListener("click", toggle_display, false);
	document.getElementById("enlace_3").addEventListener("click", toggle_display, false);
}
