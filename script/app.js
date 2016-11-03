$('#signup-form').on('submit', function(event){
	var password = $('input[name=password]').val();
	var password2 = $('input[name=password2]').val();
	if (password !== password2) {
		alert('Your passwords do not match');
	}
	else if (password.length<10) {
		alert('Your password is too short');
	}
	else {
		return;
	}
	event.preventDefault();
	
});




// Make the following validation on the fields:
// The password should be at least 10 characters
// The password and confirm password should be the same
// If the validation passes, then let the form submit normally by NOT calling preventDefault.
// If the validation fails, prevent the form from submitting and display an alert to the user telling them what went wrong




// if (password.length>=10 && password === password2) {
// 	$('#signup-form').on('submit', function(event) {
// });
// }
// else {
// 	$('#signup-form').on('submit', function(event) {
//     event.preventDefault();
// 	});
//     alert('your password is not good enough');
// }