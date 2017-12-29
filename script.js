$(document).ready(function() {
	
	var count = 0;
	var sequence = [];
	var playerAnswer = [];
	var playerTurn

	var green = "green"
	var yellow = "yellow"
	var blue = "blue"
	var red = "red"

	var showTurnNumber = (turnNumber) => {
		$("#turn-count").text(`Turn: ${turnNumber}`)
	}

	var startGame = () => {
	    turn = 0;
	    sequence = [];
	    playerAnswer = [];
	    addColor();
	    playColors([0,1,2,3], 0);
	    $("button").remove()
	    // playerTurn();
	}

	function playColors (array, i) {
			console.log(array);
			var arr = array;
			var i = 0;
			delay();

			function changeColor(originalColor, highlightColor, elementId, audioLink) {
				$(elementId).css("background-color", highlightColor)
						new Audio(audioLink).play()
						setTimeout(function() {
							$(elementId).css("background-color", originalColor)
							
							}, 1000)
			}

			function delay() {           
				setTimeout(function () {    
				    if (array[i] === "green") {
				    	changeColor("darkGreen", "#0AFF09", "#green", 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
				    	
					// $("#green").css("background-color", "#0AFF09")
					// setTimeout(function() {
					// 	$("#green").css("background-color", "darkgreen")
					// 	}, 1000)			
					}

					if (array[i] === "yellow") {
						changeColor("#B0A64A", "yellow", "#yellow", 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')

						// $("#yellow").css("background-color", "yellow")
						// setTimeout(function() {
						// 	$("#yellow").css("background-color", "#B0A64A")
						// 	}, 1000)			
					}

					if (array[i] === "blue") {

						changeColor("darkblue", "#1DA2FF", "#blue", 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
						
						// $("#blue").css("background-color", "#1DA2FF")
						// setTimeout(function() {
						// 	$("#blue").css("background-color", "darkblue")
						// 	}, 1000)			
					}

					if (array[i] === "red") {

						changeColor("darkred", "red", "#red", 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
						
						// $("#red").css("background-color", "red")
						// setTimeout(function() {
						// 	$("#red").css("background-color", "darkred")
						// 	}, 1000)			
					}

				    i++;                     
				    if (i < array.length) {            
				        delay();            
				    }

				    if (i === array.length) {
				    	playerTurn = true;
				    }

				}, 1000)
			}		
		};

	var addColor = () => {

		var randomNumber = Math.floor(Math.random() * 4)
	
		if (randomNumber === 0) {
			sequence.push(green)
		}

		if (randomNumber === 1) {
			sequence.push(yellow)	
		}

		if (randomNumber === 2) {
			sequence.push(blue)	
		}
		if (randomNumber === 3) {
			sequence.push(red)
		}

		turn++
		console.log(turn);
		showTurnNumber(turn)
		playerTurn = false;
	}

	var playerTurn = () => {



	}
	

	$("#start").on("click", function() {
		startGame()
	})
})