$(document).ready(function() {
	$(".game").hide();

	$(".feedback").hide();

	var questionOne = {
		question1: "What house was the sorting hat at first thinking about putting Harry in?",
		choices: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
		qnumber: 1,
		correct: 4,
		};
	var questionTwo = {
		question2: "Who was the wizard who was responsible for the deaths of Harry's parents?",
		choices: ["Sirius Black", "Tom Riddle", "Peter Pettigrew", "Lucius Malfoy"],
		qnumber: 2,
		correct: 2,
	}

	var numberCorrect = 0;

	var currentQuestion = 0;

	$("#play").click(function() {
		$(".game").show();
		$(".intro").hide();
	});

	$("#submit").click(function() {
		var answer = $("input").val();
		$(".game").hide();
		$(".feedback").show();
	});

	$("#nextQuestion").click(function() {
		$(".feedback").hide();
		$(".game").show();
	});

});