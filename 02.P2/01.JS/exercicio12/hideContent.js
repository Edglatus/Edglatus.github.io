 function toggle_display()
{
	var target = this.previousElementSibling;

	if(target.hidden == true)
	{
		this.innerText = "Ocultar Conteúdo";
		target.hidden = false;
	}
	else
	{
		this.innerText = "Exibir Conteúdo";
		target.hidden = true;
	}
}

document.getElementById("enlace_1").addEventListener("click", toggle_display, false);
document.getElementById("enlace_2").addEventListener("click", toggle_display, false);
document.getElementById("enlace_3").addEventListener("click", toggle_display, false);
