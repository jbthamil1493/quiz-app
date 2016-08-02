$(document).ready(function() {
	$(".game").hide();

	$(".feedback").hide();

	var questions = [{
		question: "What house was the sorting hat at first thinking about putting Harry in?",
		choices: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
		correct: 3,
		},
		{
		question: "Who was the wizard who was responsible for the deaths of Harry's parents because of betrayal?",
		choices: ["Sirius Black", "Tom Riddle", "Peter Pettigrew", "Lucius Malfoy"],
		correct: 1,
		},
		{
		question: "Who was the half-blood prince?",
		choices: ["James Potter", "Tom Riddle", "Sirius Black", "Severus Snape"],
		correct: 3,	
		},
		{
		question: "What was the form that Harry's patronus took?",
		choices: ["Stag", "Moose", "Doe", "Prongs"],
		correct: 0,
		},
		{
		question: "Who was the wizard who killed Bellatrix Lestrange?",
		choices: ["Arthur Weasley", "Molly Weasley", "Ron Weasley", "George Weasley"],
		correct: 1,
	}];

	var currentQuestion = 0;

	var numberCorrect = 0;


	$("#play").click(function() {
		var currentQuestion = 0;
		var numberCorrect = 0;
		var newQuestion = '<div class="question">' + questions[currentQuestion].question + '</div><div class="answerChoices"><input type="radio" name="option" class="option" value="0"><span class="answer">' + questions[currentQuestion].choices[0] + '</span><br /><input type="radio" name="option" class="option" value="1"><span class="answer">' + questions[currentQuestion].choices[1] + '</span><br /><input type="radio" name="option" class="option" value="2"><span class="answer">' + questions[currentQuestion].choices[2] + '</span><br /><input type="radio" name="option" class="option" value="3"><span class="answer">' + questions[currentQuestion].choices[3] + '</span><br /></div></div>';
		$(".intro").hide();
		$(".game").show();
	});

	$("#submit").click(function() {
		$(".game").hide();
		$(".feedback").show();
		validateAnswer();
		currentQuestion++;
	});

	$(".nextQuestionButton").click(function() {
		$(".feedback").hide();
		$(".game").show();
		nextQuestion();
	});


	function validateAnswer() {
		var chosenAnswer = $("input:checked").val();
		if (chosenAnswer === questions[currentQuestion].correct) {
			$(".feedbackAnswer").append("<li>You are correct!</li>");
			numberCorrect++;
		}
		else {
			$(".feedbackAnswer").append("<li>You are incorrect!</li>");
		}
	}	


	function nextQuestion() {
		if (currentQuestion < 5) {
			$("span#count").html(parseInt($("span#count").html()) + 1);
			$(".question").remove();
			$(".answerChoices input").remove();
			$(".answerChoices span").remove();
			$(".feedbackAnswer").remove();
			var newQuestion = '<div class="question">' + questions[currentQuestion].question + '</div><div class="answerChoices"><input type="radio" name="option" class="option" value="0"><span class="answer">' + questions[currentQuestion].choices[0] + '</span><br /><input type="radio" name="option" class="option" value="1"><span class="answer">' + questions[currentQuestion].choices[1] + '</span><br /><input type="radio" name="option" class="option" value="2"><span class="answer">' + questions[currentQuestion].choices[2] + '</span><br /><input type="radio" name="option" class="option" value="3"><span class="answer">' + questions[currentQuestion].choices[3] + '</span><br /></div></div>';
			$(".question_wrapper").html(newQuestion);
		}
		else {
			$(".question").remove();
			$(".answerChoices input").remove();
			$(".answerChoices span").remove();
			$(".feedbackAnswer").remove();
			$(".game").hide();
			$(".intro").show();
			window.location.reload();
		}
	}
	
});