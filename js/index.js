$(function (){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 2000
    });

    $('#contactobtn').on('show.bs.modal', function(e){
    console.log('el modal se esta ejecutando')

    $('#contactobtn').removeClass('btn-outline-success');
    $('#contactobtn').addClass('btn-primary');
    $('#contactobtn').prop('disabled', true);
    });
});   