$(function() {

/*
	Start of Geometry Section

    Want to create questions and answer choices that update themselves....
*/

	var q1, q2, q3, q4, a1, a2, a3, a4, wrong;
	q1 = "Which shape is a trapezoid?";
	q2 = "Which shape is a parallelogram?";
	q3 = "Which shape is a rectangle?";
	q4 = "Bonus! Which shapes are quadrilaterals?";
	a1 = "That's correct! A trapezoid is known for only having one pair of parallel sides.";
	a2 = "That's correct! A parallelogram is a four-sided, rectangular figure with parallel sides.";
	a3 = "That's correct! A rectangle is a figure with four right angles and adjacent sides of unequal length.";
	a4 = "They all are! Quadrilaterals are four-sided figures.";
	wrong = "Try another shape.";


	$("#next3").hide();
	$("#next2").hide();
	$("#next").hide();

	$("#hint3").hide();
	$("#hint2").hide();

	function quiz(){
		var i = 1;
		console.log(i);
		$("#question").html("<h1><strong>"+q1+"</strong></h1>");

		$(".face01").click(function(){
			$(this).css({background: "#FF3B30"});
			$("#answer").html("<h3><strong><em>"+wrong+"</em></strong></h3>");
		});

		$(".face02").click(function(){
			$(this).css({background: "#FF3B30"});
			$("#answer").html("<h3><strong><em>"+wrong+"</em></strong></h3>");
		});

		$(".face03").click(function(){
			console.log("quiz 1");
			$("#parallelogram").hide();
			$("#rectangle").hide();
			$("#hint").hide();
			$("#next").show();
			$(this).css({background: "darkgreen"});
			// $(this).css({"border-bottom": "200px solid #4CD964"});
			$("#answer").html("<h3><strong>"+a1+"</strong></h3>");
		});
	};

	quiz();

	$("#next").click(function(){
		$("#answer").html("");
		$("#trapezoid").hide();
		$(this).hide();
		$("#hint2").show();
		$("#trapezoid").show();
		$("#rectangle").show();
		$("#parallelogram").show();
		$("#question").html("<h1><strong>"+q2+"</strong></h1>");

		$(".face01").click(function(){
			$("#trapezoid").hide();
			$("#rectangle").hide();
			$("#hint2").hide();
			// $("#next2").show();
			$(this).css({background: "darkgreen"});
			// $(this).css({"border-bottom": "125px solid red"});
			$("#answer").html("<h3><strong>"+a2+"</strong></h3>");
		});
		
		$(".face02").click(function(){
			// $(this).css({background: "red"});
			$("#answer").html("<h3><strong>"+wrong+"</strong></h3>");
		});
			
		$(".face03").click(function(){
			$("#answer").html("<h2><strong>"+wrong+"</strong></h2>");
		})
	});

	$("#sortable").sortable();
    $("#sortable").disableSelection();
    $("#add li").draggable();
})