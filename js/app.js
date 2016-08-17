$(document).ready(function() {
	$(".game").hide();

	$("#gameOver").hide();

	var currentQuestion = 0;

	var score = 0;

	var questions = [{
		question: "What house was the sorting hat at first thinking about putting Harry in?",
		choices: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
		correct: "Slytherin",
		},
		{
		question: "Who was the wizard who was responsible for the deaths of Harry's parents because of betrayal?",
		choices: ["Sirius Black", "Tom Riddle", "Peter Pettigrew", "Lucius Malfoy"],
		correct: "Peter Pettigrew",
		},
		{
		question: "Who was the half-blood prince?",
		choices: ["James Potter", "Tom Riddle", "Sirius Black", "Severus Snape"],
		correct: "Severus Snape",	
		},
		{
		question: "What was the form that Harry's patronus took?",
		choices: ["Stag", "Moose", "Doe", "Prongs"],
		correct: "Stag",
		},
		{
		question: "Who was the wizard who killed Bellatrix Lestrange?",
		choices: ["Arthur Weasley", "Molly Weasley", "Ron Weasley", "George Weasley"],
		correct: "Molly Weasley",
	}];


	$("#play").click(function() {
		$(".intro").hide();
		$(".game").show();
		generateQuestion();
	});

	$("#submit").click(function() {
		var selectedValue = $("input[name=radio]:checked").val();
		validateAnswer(selectedValue);
		$("span#count").html(parseInt($("span#count").html()) + 1);
	});


	function validateAnswer(selectedValue) {
		if (currentQuestion === questions.length - 1) {
			gameOver();
			return;
		}
		if (selectedValue === questions[currentQuestion].correct) {
			correctAnswer();
		}
		else {
			incorrectAnswer();
		}
	}	


	function generateQuestion() {
		
		var choices = questions[currentQuestion].choices;

		$("#question").text(questions[currentQuestion].question);

		for (var i = 0; i < choices.length; i++) {
			$("#answerChoices").append('<input name="radio" type="radio" value =""' + ">" + choices[i] + "<br />");
		}
	}

	function correctAnswer() {
		alert("Correct");
		$("#answerChoices").empty();
		currentQuestion++;
		score++;
		$("span#score").html(parseInt($("span#score").html()) + 1);
		generateQuestion();
	}

	function incorrectAnswer() {
		alert("Incorrect");
		$("#answerChoices").empty();
		currentQuestion++;
		generateQuestion();
	}

	function gameOver() {
		$("#answerChoices").empty();
		$("#gameOver").show();
		$(".intro").hide();
		$(".main").hide();
		$(".question_wrapper").hide();
		$(".answerButton").hide();
		$("#gameOver").html('<h1>Game Over</h1><span id="score"></span><br /><br /><button id="newGame">New Game</button>');
		$("#newGame").click(function() {
			newGame();
		});
	}

	function newGame() {
		$(".intro").show();
		$("#gameOver").hide();
		location.reload();
	}
	
});