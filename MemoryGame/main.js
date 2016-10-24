var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function createCards(){
	var gameBoard = document.getElementById('game-board');
	for (i=0; i<cards.length; i++) {
		cardElement = document.createElement('div');
		cardElement.classList.add('card');
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener("click", function(){decidingSuit(event)});
		gameBoard.appendChild(cardElement);
	}
}

function isMatch() {
	//console.log(cardsInPlay);
	var message;
	if (cardsInPlay.length >= 2 && cardsInPlay[0] == cardsInPlay[1]) {
		message = "You found a match!";
	}
	else {
		message = "Sorry, try again!";
	}
	result(message, resetGame);

}
function result(message, callback){
	alert(message);
	callback();
}

function decidingSuit(clickEvent) {
	cardElement = clickEvent.toElement;
	//console.log(cardElement);
	if (cardElement.getAttribute('data-card') == "king") {
		cardElement.innerHTML = '<img src = "king_spades.png" alt = "King of Spades" />';
	}	
	if (cardElement.getAttribute('data-card') == "queen") {
		cardElement.innerHTML = "<img src = 'queen_spades.png' alt = 'Queen of Spades' />";
	}
	cardsInPlay.push(cardElement.getAttribute('data-card'));
}

function resetGame() {
	var board=document.getElementsByClassName("card");
	for (var i = 0 ; i<board.length; i++) {
		cardElement = board[i];
		cardElement.innerHTML = " ";
	}	
		cardsInPlay = [];
	//console.log(cardsInPlay);
}


window.onload = createCards();
document.addEventListener("click", function(){
	if (cardsInPlay.length >= 3){
		isMatch();
	}
})

