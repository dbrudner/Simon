$(document).ready(function() {
	
	var count = 0;
	var sequence = [];
	var playerAnswer = [];
	var playerTurn
	var playerColorCounter = 0;

	var green = "green"
	var yellow = "yellow"
	var blue = "blue"
	var red = "red"

	var showTurnNumber = (turnNumber) => {
		$("#turn-count").text(`Turn: ${turnNumber}`)
	}

	var playColor = (originalColor, highlightColor, elementId, audioLink) => {
				$(elementId).css("background-color", highlightColor)
						new Audio(audioLink).play()
						setTimeout(function() {
							$(elementId).css("background-color", originalColor)
							
							}, 1000)
	}

	var playColorGreen = () => {
		playColor("darkGreen", "#0AFF09", "#green", 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
	}

	var playColorYellow = () => {
		playColor("#B0A64A", "yellow", "#yellow", 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')	
	}

	var playColorBlue = () => {
		playColor("darkblue", "#1DA2FF", "#blue", 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')	
	}

	var playColorRed = () => {
		playColor("darkred", "red", "#red", 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')	
	}

	var startGame = () => {
	    turn = 0;
	    sequence = [];
	    addColor();
	    playColors(sequence, 0);
	    $("button").remove()
	    // playerTurn();
	}

	function playColors (array, i) {
			// console.log(array);
			var arr = array;
			var i = 0;
			delay();

			function delay() {

				setTimeout(function () {

				    if (array[i] === "green") {
				    	playColorGreen()
					}

					if (array[i] === "yellow") {
						playColorYellow()
					}

					if (array[i] === "blue") {
						playColorBlue()
					}

					if (array[i] === "red") {
						playColorRed()
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

	var checkAnswer = (sequence, playerAnswer, playerColorCounter) => {

		var slicedSequence = sequence.slice(0, playerColorCounter);
		console.log("Answer: " + slicedSequence)
		console.log("Player: " + playerAnswer)

		if (slicedSequence.toString() === playerAnswer.toString()) {
			console.log("Correct");
		}
		if (slicedSequence.toString() != playerAnswer.toString()) {
			console.log("Wrong")
			turn = 0;
			playerColorCounter = 0;
	    	sequence = [];
	    	playerAnswer = [];
		}

	}

	$(".box").on("click", function() {
			// console.log(playerAnswer);
			if (playerTurn) {
				playerAnswer.push($(this).attr("id"));
		    	playerColorCounter++

		    	if ($(this).attr("id") === "green") {
		    		playColorGreen()
		    		checkAnswer(sequence, playerAnswer, playerColorCounter)
		    	}

		    	else if ($(this).attr("id") === "yellow") {
		    		playColorYellow()
		    		checkAnswer(sequence, playerAnswer, playerColorCounter)
		    	}

		    	else if ($(this).attr("id") === "blue") {
		    		playColorBlue()
		    		checkAnswer(sequence, playerAnswer, playerColorCounter)
		    	}

		    	else if ($(this).attr("id") === "red") {
		    		playColorRed()
		    		checkAnswer(sequence, playerAnswer, playerColorCounter)
		    	}

		    	if (turn === playerColorCounter) {
		    		console.log("done")
		    		playerColorCounter = 0;
		    		playerTurn = false;
		    		playerAnswer = [];
		    		addColor();
		    		playColors(sequence, 0)
		    	}
			}
	    	

	})

	$("#start").on("click", function() {
		startGame()
	})
})