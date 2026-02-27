$(document).ready(function() {
    $('.entry').on('click', function() {
        $(this.parentElement.children[1]).toggleClass('hidden');
    });
});
