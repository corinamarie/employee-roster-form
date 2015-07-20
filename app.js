console.log("we are up!");

$(document).ready(function() {

	//variable is primary object that will make DOM objects displaying employee info
	var employee = {};

	//create variable for alphabetizing, etc.
	var employeeRoster = [];
	//variables for random employee generation 
	var randomEmplFirstNames = ["Jill", "Mohammed", "Tyler", "Che", "Manuela", "Jim", "Mo", "Ty", "Chelsea", "Mannie"];
	var randomEmplLastNames = ["Boo", "Little", "Boolittle", "Littleboo", "LittleBooBoo", "Brindlehorse", "Soujourner", "Cohen", "Tryst", "Gunner"];
	var randomEmplTitle = ["Groundskeeper", "Lead Investigator", "PETA Activist", "Surfer", "Locksmith", "Junior Busboy", "Lingerie Salesperson", "CIA Informant", "Horse Whisperer", "President"];

	//function that creates/appends a new object to the DOM body 
		//displays all data from form inputs
		//remove buttons added to end of newobj's contents
	var createNewObj = function(){
		$("body").append("<div class='newobj'><p>first name: " + employee.firstname + "</p><p><button class='removebutton'>remove</button></p><p>last name: " + employee.lastname + "</p><p> employee number: " + employee.employeenumber + "</p><p>title: " + employee.title + "</p><p>salary: " + employee.salary + "</p><p><span class='score var'>review score: " + employee.reviewscore + "</span></p></div>");
		reviewColorIndicator();
	};

	var randomNew = function(){
		createNewObj(employee);
		employee.firstname = randomEmplFirstNames[randomNumber(0, 9)];
		employee.lastname = randomEmplLastNames[randomNumber(0, 9)];
		employee.title = randomEmplTitle[randomNumber(0, 9)];
		employee.employeenumber = randomNumber(1, 1000);
		employee.salary = randomNumber(10000, 345000000);
		employee.reviewscore = randomNumber(1, 5);
	}

	//clearing form fields after button click - NOT WORKING
	var clearForm = function(){
		$('#employeeForm').val('');
	};

	//main function-- creates the new object and inputs each form input field into proper object properties
	$("#employeeForm").submit(function(event) { 
		event.preventDefault();
		var i = 0;
		var $inputs = $("#employeeForm :input");

		$inputs.each(function(){
			employee[this.name] = $(this).val(); 
			clearForm(); //clearForm function NOT WORKING
		});

		console.log(employee);

		createNewObj(employee);

		// //save new object to array - is this necessary? is it working? (PROBABLY NOT USEFUL)
		// employeeRoster[i] = $(".newobj").last();
		// i++;


		//this is the remove button functionality:
		$(".newobj").on('click', ".removebutton", function(){
			this.closest("div").remove();
		});

		console.log(employeeRoster);

	});

	//review score function to color-code background color of employee objects
	function reviewColorIndicator (){
		parseInt(employee.reviewscore);
		if(employee.reviewscore <= 2) {
			$(".var").last().addClass("low");
		} else if (employee.reviewscore == 3) {
			$(".var").last().addClass("med");
		} else {
			$(".var").last().addClass("high");
		}
	}

//function for random new employee assignment

	function randomNumber (min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	}

	$("body").on("click", "#emplRandomizer", function() {
		randomNew();
	});

});


