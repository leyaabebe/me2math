$(function() {


	$('[data-toggle="tooltip"]').tooltip();

/*

	Start of Algebra Section


*/

	localStorage.setItem("solve-score",0); 

	$("#a").draggable();


	// $(".a").draggable({
	// 	revert: "invalid",
	// 	stop: function(event,ui){
	// 		$(".pos2").addClass("bg-red");
	// 		$(this).addClass("bg-red");
	// 		$(".answer").text("Nope!");
	// 	}
	// });
	$(".b").draggable({
		revert: "valid"
	});
	$(".c").draggable({
		revert: "invalid",
		stop: function(event,ui){
			$(".pos2").addClass("bg-red");
			$(this).addClass("bg-red");
			$(".answer").text("Nope! Try again.");
		}
	});

	$(".d").draggable({
		revert: "invalid",
		stop: function(event,ui){
			$(".pos4").addClass("bg-red");
			$(this).addClass("bg-red");
			$(".answer2").text("Nope! Try again.");
		}
	});
	$(".e").draggable({
		revert: "valid"
	});
	$(".f").draggable({
		revert: "invalid",
		stop: function(event,ui){
			$(".pos4").addClass("bg-red");
			$(this).addClass("bg-red");
			$(".answer2").text("Nope! Try again.");
		}
	});

	$(".g").draggable({
		revert: "invalid",
		stop: function(event,ui){
			$(".pos8").addClass("bg-red");
			$(this).addClass("bg-red");
			$(".answer3").text("Nope! Try Again!");
		}
	});
	$(".h").draggable({
		revert: "valid"
	});
	$(".i").draggable({
		revert: "invalid",
		stop: function(event,ui){
			$(".pos8").addClass("bg-red");
			$(this).addClass("bg-red");
			$(".answer3").text("Nope! Try Again!");
		}
	});

	$("#prob2").hide();
	$("#prob3").hide();

	$(".pos2").droppable({
		accept: ".correct",
		tolerance: "fit",
  		drop: function(event,ui) {
	  			$("li .b").remove();
	  			$("li .a").remove();
	  			$("li .c").remove();
	  			$(this).removeClass("bg-red").addClass("bg-green").find("p").text("5");
	  			$(".answer").css({color: "#ffffff"});
	  			var currentScore = parseInt(localStorage.getItem("solve-score")) + 5;
	  			currentScore = currentScore.toString();
	  			localStorage.setItem("solve-score", currentScore);
	  			$(".answer").removeClass("bg-red").addClass("bg-green").html(
	  				"<h4>Correct! x = 5</h4><p>If you <strong>add</strong> x to 1 to make it 6, <br><strong>subtract</strong> 1 from 6 to get x.");
	  			// wait a few seconds then hide
	  			$(".score span").text(localStorage.getItem("solve-score"));
	  			$("#prob1").delay(3000).hide("slow");
	  			$("#prob2").show();
	  			// $(".next").show();
  		}
	});

	$(".pos4").droppable({
		accept: ".correct",
		tolerance: "fit",
		drop: function(event,ui) {
			$("li .e").remove();
			$("li .d").remove();
			$("li .f").remove();
			$(this).removeClass("bg-red").addClass("bg-green").find("p").text("10");
			$(".answer2").css({color: "#ffffff"});
			var currentScore = parseInt(localStorage.getItem("solve-score")) + 5;
			console.log(currentScore);
	  			localStorage.setItem("solve-score", currentScore);
			$(".answer2").removeClass("bg-red").addClass("bg-green").html(
				"<h4>Correct! y = 10</h4><p>If you <strong>subtract</strong> 3 from y to make it 7, <br><strong>add</strong> 3 to 7 to get y."
			);
			$(".score span").text(localStorage.getItem("solve-score"));
			$("#prob2").delay(3000).hide("slow");
	  		$("#prob3").show();
			// $(".next2").show();
		}
	})
	$("#congrats").hide();
	$("#newscore").hide();
	$(".pos8").droppable({
		accept: ".correct",
		tolerance: "fit",
		drop: function(event,ui) {
			$("li .h").remove();
			$("li .i").remove();
			$("li .g").remove();
			$(this).removeClass("bg-red").addClass("bg-green").find("p").text("3");
			$(".answer3").css({color: "#ffffff"});
			var currentScore = parseInt(localStorage.getItem("solve-score")) + 5;
	  			currentScore = currentScore.toString();
	  			localStorage.setItem("solve-score", currentScore);
			$(".answer3").removeClass("bg-red").addClass("bg-green").html(
				"<h4>Correct! z = 5</h4><p>If you <strong>multiply</strong> 2 to x to make it 10, <br><strong>count</strong> how many times you have to <strong>add 2 to itself</strong> to make it equal 10."
			);
			$(".score span").text(localStorage.getItem("solve-score"));
			// $(".prob3").hide("slow");
			// $("#congrats").delay(1801).show("slow");
			$("#prob3").delay(3000).hide("fast");
			$("#congrats").delay(4000).show("fast");
			$("#congrats").text("Congrats! 3/3!");
			$("#newscore").delay(5000).show("fast");
			$("#newscore").text("Your score is: " + localStorage.getItem("solve-score"));
			// $("#congrats").html("<h1>Congrats! 3/3 Completed</h1><br><h2>Your score is: " + localStorage.getItem("solve-score")+ "</h2><br><br><br><br>Press the back arrow at the top left to play more games.<br><br><br><br><br><br><br><br><br><br><br>");
			// $("#prob3").delay(2800).hide("slow");
	  		// $("#prob2").show();
		}
	})

/*

	Start of Geometry Section

    Want to create questions and answer choices that update themselves....
*/

	// var q1, q2, q3, q4, a1, a2, a3, a4, wrong;
	// q1 = "Which shape is a trapezoid?";
	// q2 = "Which shape is a parallelogram?";
	// q3 = "Which shape is a rectangle?";
	// q4 = "Bonus! Which shapes are quadrilaterals?";
	// a1 = "That's correct! A trapezoid is known for only having one pair of parallel sides.";
	// a2 = "That's correct! A parallelogram is a four-sided, rectangular figure with parallel sides.";
	// a3 = "That's correct! A rectangle is a figure with four right angles and adjacent sides of unequal length.";
	// a4 = "They all are! Quadrilaterals are four-sided figures.";
	// wrong = "Try another shape.";


	// $("#next3").hide();
	// $("#next2").hide();
	// $("#next").hide();

	// $("#hint3").hide();
	// $("#hint2").hide();

	// function quiz(){
	// 	var i = 1;
	// 	$("#question").html("<h1><strong>"+q1+"</strong></h1>");

	// 	$("#parallelogram").click(function(){
	// 		$(this).css({background: "red"});
	// 		$("#answer").html("<h3><strong><em>"+wrong+"</em></strong></h3>");
	// 	});

	// 	$("#rectangle").click(function(){
	// 		$(this).css({background: "red"});
	// 		$("#answer").html("<h3><strong><em>"+wrong+"</em></strong></h3>");
	// 	});

	// 	$("#trapezoid").click(function(){
	// 		console.log("quiz 1");
	// 		$("#parallelogram").hide();
	// 		$("#rectangle").hide();
	// 		$("#hint").hide();
	// 		$("#next").show();
	// 		$(this).css({"border-bottom": "125px solid darkgreen"});
	// 		$("#answer").html("<h3><strong>"+a1+"</strong></h3>");
	// 	});
	// };

	// quiz();

	// $("#next").click(function(){
	// 	$("#answer").html("");
	// 	$("#trapezoid").hide();
	// 	$(this).hide();
	// 	$("#hint2").show();
	// 	$("#trapezoid").css({"border-bottom": "125px solid #1cb7e3"}).show();
	// 	$("#rectangle").css({background: "#1cb7e3"}).show();
	// 	$("#parallelogram").css({background: "#1cb7e3"}).show();
	// 	$("#question").html("<h1><strong>"+q2+"</strong></h1>");

	// 	$("#trapezoid").click(function(){
	// 		console.log("quiz 2");
	// 		$(this).css({"border-bottom": "125px solid red"});
	// 		$("#answer").html("<h3><strong>"+wrong+"</strong></h3>");
	// 	});
		
	// 	$("#rectangle").click(function(){
	// 		$(this).css({background: "red"});
	// 		$("#answer").html("<h3><strong>"+wrong+"</strong></h3>");
	// 	});
			
	// 	$("#parallelogram").click(function(){
	// 		$("#trapezoid").hide();
	// 		$("#rectangle").hide();
	// 		$("#hint2").hide();
	// 		$("#next2").show();
	// 		$(this).css({background: "darkgreen"});
	// 		$("#answer").html("<h2><strong>"+a1+"</strong></h2>");
	// 	})
	// });

		// 	} else if(i=2) {
		// 		$("#question").html("<h1><strong>"+q2+"</strong></h1>");
		// 		$("#trapezoid").click(function(){
		// 			$(this).css({"border-bottom": "125px solid red"});
		// 			$("#answer").html("<h3><strong>"+wrong+"</strong></h3>");
		// 			console.log(i);
		// 		});
		// 		$("#rectangle").click(function(){
		// 			$(this).css({background: "red"});
		// 			$("#answer").html("<h3><strong>"+wrong+"</strong></h3>");
		// 			console.log(i);
		// 		});
		// 		$("#parallelogram").click(function(){
		// 			$(this).css({background: "green"});
		// 			$("#answer").html("<h2><strong>"+a1+"</strong></h2>");
		// 			i++;
		// 			console.log(i);
		// 		})
		// 	} else if(i=3) {
		// 		$("#question").html("<h1><strong>"+q3+"</strong></h1>");
		// 		$("#trapezoid").click(function(){
		// 			$(this).css({"border-bottom": "125px solid red"});
		// 			$("#answer").html("<h3><strong>"+wrong+"</strong></h3>");
		// 			console.log(i);
		// 		});
		// 		$("#parallelogram").click(function(){
		// 			$(this).css({background: "red"});
		// 			$("#answer").html("<h3><strong>"+wrong+"</strong></h3>");
		// 			console.log(i);
		// 		});
		// 		$("#rectangle").click(function(){
		// 			$(this).css({background: "green"});
		// 			$("#answer").html("<h2><strong>"+a1+"</strong></h2>");
		// 			i++;
		// 			console.log(i);
		// 		})
		// 	}
		// 	i++;
		// }

	

/*

	Start of Counting Section

  
*/


  
})



