$(document).ready(function() {
	$(".game").hide();

	$(".feedback").hide();

	var questions = [{
		question: "What house was the sorting hat at first thinking about putting Harry in?",
		choices: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
		qn: 1,
		correct: 3,
		},
		{
		question: "Who was the wizard who was responsible for the deaths of Harry's parents?",
		choices: ["Sirius Black", "Tom Riddle", "Peter Pettigrew", "Lucius Malfoy"],
		qn: 2,
		correct: 1,
	}];

	var numberCorrect = 0;

	var currentQuestion = 1;

	$("#play").click(function() {
		$(".game").show();
		$(".intro").hide();
	});

	$("#submit").click(function() {
		$(".game").hide();
		$(".feedback").show();
		playGame();
	});

	$("#nextQuestion").click(function() {
		$(".feedback").hide();
		$(".game").show();
	});

	function playGame() {
		if (currentQuestion < questions.length) {
			if ($("input:checked").val() === questions[currentQuestion].answer) {
				numberCorrect++;
				$("ul.feedbackAnswer").append("<li>You are correct!</li>");
			}
			else {
				$("ul.feedbackAnswer").append("<li>You are incorrect!</li>");
			}
		}
	}

});