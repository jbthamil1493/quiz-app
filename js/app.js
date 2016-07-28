$(document).ready(function() {
	$(".game").hide();

	$(".questions").hide();

	$(".feedback").hide();

	$("#play").click(function() {
		$(".game").show();
		$(".intro").hide();
	});

	$("#harry").click(function() {
		$(".game").hide();
		$(".questions").show();
		$(".question").append("<p>Who is Harry Potter's wife?</p>");
	});

	$("#ron").click(function() {
		$(".game").hide();
		$(".questions").show();
		$(".question").append("<p>Who is Ron's wife?</p>");
	});

	$("#hermonie").click(function() {
		$(".game").hide();
		$(".questions").show();
		$(".question").append("<p>Who is Hermonie's husband?</p>");
	});

	$("#albus").click(function() {
		$(".game").hide();
		$(".questions").show();
	});

	$("#lord").click(function() {
		$(".game").hide();
		$(".questions").show();
	});

	$("#submit").click(function() {
		$(".questions").hide();
		$(".feedback").show();
	});

	$("#nextQuestion").click(function() {
		$(".feedback").hide();
		$(".game").show();
	});

});