$(document).ready(function() {
	
	var count = 0;
	var sequence = [];
	var playerAnswer = [];
	var playerTurn

	var green = "green"
	var yellow = "yellow"
	var blue = "blue"
	var red = "red"

	var startGame = () => {
	    count = 0;
	    sequence = [];
	    playerAnswer = [];
	    playerTurn
	    addColorEvent()
	}

	function playColors (array, i) {
			console.log(array);
			var arr = array;
			var i = 0;
			delay();

			function delay() {           
				setTimeout(function () {    
				    if (array[i] === 0) {
					$("#green").css("background-color", "#0AFF09")
					setTimeout(function() {
						$("#green").css("background-color", "darkgreen")
						}, 1000)			
					}

					if (array[i] === 1) {
						$("#yellow").css("background-color", "yellow")
						setTimeout(function() {
							$("#yellow").css("background-color", "#B0A64A")
							}, 1000)			
					}

					if (array[i] === 2) {
						$("#blue").css("background-color", "#1DA2FF")
						setTimeout(function() {
							$("#blue").css("background-color", "darkblue")
							}, 1000)			
					}

					if (array[i] === 3) {
						$("#red").css("background-color", "red")
						setTimeout(function() {
							$("#red").css("background-color", "darkred")
							}, 1000)			
					}

				    i++;                     
				    if (i < array.length) {            
				        delay();            
				    }                        
				}, 1000)
			}		
		};

	var addColorEvent = (sequenceArray) => {

		var randomNumber = Math.floor(Math.random() * 4)

		// function changeColor(origianlColor, highlightColor, elementId) {
		// 	$("elementId").css("background-color", highlightColor)
		// 			setTimeout(function() {
		// 				$(elementId).css("background-color", origianlColor)
		// 				}, 1000)
		// }
	
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

		playerTurn = false;
	}
	

	playColors([1,2,0,1], 0)

	$("#start").on("click", function() {
		startGame()
	})
})