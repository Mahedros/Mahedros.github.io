$(document).ready(function() {
	$('.tab').on('click', function() {
		$('.selectedTab').removeClass('selectedTab');
		$(this).addClass('selectedTab');
		$('#topBar h1').text(this.id.replace('_', ' '));

        $.get(this.id.toLowerCase().replace(' ', '_') + '.html', function(data) {
           $('#contentBubble').html(data);
        }, 'html')
        .fail(function() {});
	});

    var initTab = $('.selectedTab');
    $.get(initTab.attr('id').toLowerCase().replace(' ', '_') + '.html', function(data) {
        $('#contentBubble').html(data);
    }, 'html')
    .fail(function() {
        $('#contentBubble').html('Hello World!');
    });
});
