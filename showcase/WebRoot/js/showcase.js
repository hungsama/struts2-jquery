/*
 * Function for Custome Validation Example
 * 
 */
function customeValidation(form, errors) {
	$('.errorLabel').html('').removeClass('errorLabel');
	
	if (errors.fieldErrors) {
		$.each(errors.fieldErrors, function(index, value) { 
			var elem = $('#'+index+'Error');
			if(elem)
			{
				elem.html(value[0]);
				elem.addClass('errorLabel');
			}
		});
	}
}


$(document).ready( function() {

	/*
	 * Remove Error Labels when Validation Forms are successfully
	 * 
	 */
	$.subscribe('removeErrorLabels', function(event,data) {
		$('.errorLabel').html('').removeClass('errorLabel');
	});

	/*
	 * Menu Highlight
	 * 
	 */
	$('div.ui-widget-header > ul > li').click( function() {
		$('div.ui-widget-header > ul > li').removeClass('ui-state-active');
		$(this).addClass('ui-state-active');
	}, function() {
	});
	$('div.ui-widget-header > ul > li').hover( function() {
		$(this).addClass('ui-state-hover');
	}, function() {
		$(this).removeClass('ui-state-hover');
	});
});
