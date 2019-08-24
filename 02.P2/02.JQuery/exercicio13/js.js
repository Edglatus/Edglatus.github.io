$(document).ready(function (){
    $('#content').keyup(function(){
        $('span').text($('#content').val());
    });
});
