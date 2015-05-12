$(document).ready(function(){
	$(".close").on('click', function(event) {
		console.log(event);
		event.preventDefault();

		$(event.currentTarget).closest("li").remove();
	});

});