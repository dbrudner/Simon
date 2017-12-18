$(document).ready(function() {
	var count = 0;

	var startGame = () => {
		var sequence = []

		var green = "green"
		var yellow = "yellow"
		var blue = "blue"
		var red = "red"

		var addColorEvent = () => {
			var randomNumber = Math.floor(Math.random() * 4)
	
			if (randomNumber === 0) {
				console.log("green")
				sequence.push(green)
				$("#c").css("background-color", "#0AFF09")
				setTimeout(function() {
					$("#green").css("background-color", "darkgreen")
				}, 2000)
			}
			if (randomNumber === 1) {
				sequence.push(yellow)
				$("#yellow").text("background-color", "#FEFF09")
				setTimeout(function() {
					$("#yellow").css("background-color", "#B0A64A")
				}, 2000)
			}
			if (randomNumber === 2) {
				sequence.push(blue)
				$("#blue").css("background-color", "#1DA2FF")
				setTimeout(function() {
					$("#blue").css("background-color", "darkblue")
				}, 2000)
			}
			if (randomNumber === 3) {
				sequence.push(red)
				$("#red").css("background-color", "red")
				setTimeout(function() {
					$("#red").css("background-color", "darkred")
				}, 2000)
			}
		}
		

	}

	$("#start").on("click", function() {
		startGame()
	})
})