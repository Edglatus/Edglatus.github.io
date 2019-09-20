$(document).ready(function(){
    function hide_all()
    {
        $('.subject').hide();
        $('.selected').removeClass('selected');
    }

    function toggle_subject(source, id)
    {
        if($(source).hasClass('selected'))
        {
            $(source).removeClass('selected');
        }
        else
        {
            hide_all();
            $(source).addClass('selected');
        }

        $(id).toggle();
    }

    $('#mainMenu a').click(function()
    {
        toggle_subject(this, $(this).attr('href'));
        return false;
    });

    $('.subject a').click(function()
    {
        $('#mainFrame iframe').attr('src', $(this).attr('href') + '/index.html');
        $('#mainFrame').show();
        hide_all();
        return false;
    });

    $('#closeFrame').click(function()
    {
        $('#mainFrame').hide();
        return false;
    });

});
