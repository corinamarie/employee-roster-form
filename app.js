console.log("we are up!");

$(document).ready(function() {

	//variable is primary object that will make DOM objects displaying employee info
	var employee = {};

	//create variable for alphabetizing
		//var employeeRoster = [];
	//variables for random employee generation 
	var randomEmplFirstNames = ["Jill", "Mohammed", "Tyler", "Che", "Manuela"];
	var randomEmplLastNames = ["Boo", "Little", "Boolittle", "Littleboo", "LittleBooBoo"];
	var randomEmplTitle = ["Groundskeeper", "Lead Investigator", "PETA Activist", "Surfer", "Locksmith", "Junior Busboy"];

	//function that creates/appends a new object to the DOM body 
		//displays all data from form inputs
		//remove buttons added to end of newobj's contents
	var createNewObj = function(){
		$("body").append("<div class='newobj'><p>first name: " + employee.firstname + "</p><p>last name: " + employee.lastname + "</p><p> employee number: " + employee.employeenumber + "</p><p>title: " + employee.title + "</p><p>salary: " + employee.salary + "</p><p><span class='score var'>review score: " + employee.reviewscore + "</span><p><button class='removebutton'>remove</button></p></div>");
		reviewColorIndicator();
	};

	//clearing form fields after button click - NOT WORKING
	var clearForm = function(){
		$('#employeeForm').val('');
	};

	//main function-- creates the new object and inputs each form input field into proper object properties
	$("#employeeForm").submit(function(event) { 
		event.preventDefault();
		var $inputs = $("#employeeForm :input");

		$inputs.each(function(){
			employee[this.name] = $(this).val(); 
			clearForm(); //clearForm function NOT WORKING
		});

		console.log(employee);

		createNewObj(employee);

		//save new object to array - is this necessary?


		//this is the remove button functionality:
		$(".newobj").on('click', ".removebutton", function(){
			this.closest("div").remove();
		});

	});

	//review score function to color-code background color -- ISSUES / sort of working
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
//$(this).find(".score").addClass("low var")

//function for random new employee assignment

	//function randomEmpl() {

	//}

});


