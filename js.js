$(document).ready(function(){
    function hide_all()
    {
        $('.subject').hide();
    }

    function toggle_subject(id)
    {
        if($(id).is(':hidden'))
            hide_all();

        $(id).toggle();
    }

    $('#mainMenu a').click(function()
    {
        toggle_subject($(this).attr('href'));
    });

    hide_all();
});
