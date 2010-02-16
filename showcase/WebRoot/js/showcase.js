/*
 * Function for Custome Validation Example
 * 
 */
function customeValidation(form, errors) {
	
	//List for errors
	var list = $('#formerrors');
	
	//Remove previous field errors 
	$('.errorLabel').html('').removeClass('errorLabel');
	
	//Remove previous errors 
	list.html('');

	//Handle non field errors 
	if (errors.errors) {
		$.each(errors.errors, function(index, value) { 
			list.append('<li>'+value+'</li>\n');
		});
	}
	
	//Handle field errors 
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
	$.subscribe('removeErrors', function(event,data) {
		$('.errorLabel').html('').removeClass('errorLabel');
		$('#formerrors').html('');
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
