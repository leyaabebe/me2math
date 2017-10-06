$(document).ready(function() {

	$("#enter").hide();
	$("#register").hide();

	$("#log").on("click", function() {
		$("header").css("margin-top","10vh");
		$("#choices").hide();
		$("#enter").show();
		$("#back").on("click", function() {
			$("header").css("margin-top","20vh");
			$("#choices").show();
			$("#enter").hide();
		})
	})

	$("#reg").on("click", function() {
		$("header").css("margin-top","10vh");
		$("#choices").hide();
		$("#register").show();
		$("#back2").on("click", function() {
			$("header").css("margin-top","20vh");
			$("#choices").show();
			$("#register").hide();
		})
	})

	function handleSignUp(){
		var email = document.getElementById('form-email').value;
		var password = document.getElementById('form-password').value;

	if(email.length < 4) {
		alert('Please enter a vaild email id');
		return;
	}
	if(password.length < 4) {
		alert('Please enter a strong password');
		return;
	}

	firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){

		}).catch(function(error){
			alert(error.message);


		})
	}

	// success
	function handleLogIn(){
		var email = document.getElementById('login-email').value;
		var password = document.getElementById('login-password').value;
	    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
	    	window.location.href="http://www.leeeya.com/me2math/profile-games.html";
	    	// window.location.href="file:///Users/leyaabebe/Dropbox/Academy%20of%20Art%20University/Spring%202017/Mobile%20Web%20Technology%201/me2math/profile-games.html";
	// failure
	    }).catch(function(error){
	    	alert(error.message);
	    })

	  }

	function handleLogOut(){
		firebase.auth().signOut();
	}

	function handleSignOut(){
		if(firebase.auth().currentUser){
			firebase.auth().signOut().then(function(){
			alert("You've signed out");
		}).catch(function(error){
		    	alert('Sign Out Error',error);
		    })
		}
		else {
			alert("You've signed out");
		}
	}

	function handleFBLogin(){
	   if( !firebase.auth().currentUser){
	   	   var provider = new firebase.auth.FacebookAuthProvider();
	   	       firebase.auth().signInWithPopup(provider).then(function (result){
	   		var token = result.credential.accessToken;
	   		var user = result.user;

	//document.getElementById("fb-login").textContent = token;
	   		alert(user.email);
	   		// window.location.href="file:///Users/leyaabebe/Dropbox/Academy%20of%20Art%20University/Spring%202017/Mobile%20Web%20Technology%201/me2math/profile-games.html";
	   		window.location.href="http://www.leeeya.com/me2math/profile-games.html";
	   		// window.location.href="https://google.com"
		   	}).catch(function(error) {
		   		alert(error.message);
		   	});
	   }
	else{
		handleSignOut();
		alert("User is already logged in. Sign them out.");
	    }

	}

	$("#login").on("click", handleLogIn);
	$("#signup").on("click", handleSignUp);

});





