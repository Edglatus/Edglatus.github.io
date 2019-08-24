$(document).ready(function (){
    function toggle_display()
    {
    	var target = $(this).prev('.conteudo');

        $(target).is(':hidden') ? $(this).text("Ocultar Conteúdo") : $(this).text("Exibir Conteúdo");

    	$(target).toggle();
    }

    $('.enlace').click(toggle_display);
});
