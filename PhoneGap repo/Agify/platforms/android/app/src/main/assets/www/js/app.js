$(document).ready(function(){

	// global variables
	birth_date    = '';
	age           = 0;
	error_trigger = false;

	// main app function
	function main () {

		// calculate age
		$('#btnCalc').click(function(){

			// get user's birth date
			get_userInputs();
			// console.log(birth_date);

			// calculate age
			calculate_age();
		});
	}

	// run app
	main();

	// function to calculate age
	function calculate_age () {

		if (!error_trigger) {
				// get today's date
				var today_temp = new Date();
				var today = today_temp.toISOString().split('T')[0];

				// calculate age
				var year_now = today_temp.getFullYear();
				var year_birth = birth_date.split('-')[0];

				age = Number(year_now) - Number(year_birth);
				// console.log(age);

				if (age === 0) {
					$('#message').html("<span class='alert alert-danger'>Sorry, you're not still born. Try again!</span>");

					return false;
				}
				else {
					// $('#result').html('Age = ' + age.toString());
					$('#result').html("<span class='alert alert-success'>" + 
					                  "You're now " + age.toString() + " years old."  + "</span>");
					// console.log(age);

					return true;
				}
		} 
		else {
			return false;
		}
	}

	// function to get user's birth date
	function get_userInputs () {

		// validate user's input
		if (!$('#birth_date').val()) {
			// console.log('failed');

			// Notify user that birth date is not provided
			$('#message').html('<span class="alert alert-danger">Birth date is not provided!</span>');
			error_trigger = true;

			return false;
		} else {
			// console.log('success');

			// Get user's birth date
			birth_date = $('#birth_date').val();      // jQuery way
			// birth_date = document.getElementById('birth_date').value;     // JavaScript way

			$('#message').html('');
			error_trigger = false;        // added to reset error_trigger, in case no page refresh performed

			return true;
		}
	}
});