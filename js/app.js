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
	});

	$("#ron").click(function() {
		$(".game").hide();
		$(".questions").show();
	});

	$("#hermonie").click(function() {
		$(".game").hide();
		$(".questions").show();
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
		$(".questions").show();
	});
});