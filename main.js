$('.photos a').on('click', function() {

    let modalContent = $(this).html()
    $('.modal-content').html(modalContent)
    $('.modal').fadeIn(500)
    return false
})

$('.modal-close, .modal-background').on('click', function() {
    $('.modal').fadeOut(500)
    return false
})