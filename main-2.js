/*console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);*/

var cards=[
	{	rank :"queen",
	 	suit :"hearts",
	 	cardImage:"images/queen-of-hearts.png"},
	{	rank :"queen",
	 	suit :"diamonds",
	 	cardImage:"images/queen-of-diamonds.png"},
	{	rank :"king",
	 	suit :"hearts",
	 	cardImage:"images/king-of-hearts.png"},
	{	rank :"king",
	 	suit :"diamonds",
	 	cardImage:"images/king-of-hearts.png"}];

var cardsInPlay=[];
var cardDisplay=[];

var checkForMatch = function()
	{
		if (cardsInPlay[0] === cardsInPlay[1]) 
		{
	  		console.log("You found a match!");
	  		alert("You found a match!");
		} else 
		{
	  		console.log("Sorry, try again.");
	  		alert("Sorry, try again.");
		}
	}

var flipCard = function()
	{
		var cardId=this.getAttribute('data-id');  //obtain the index of the card that was clicked
		console.log("User flipped " + cards[cardId].rank);
		cardsInPlay.push(cards[cardId].rank);

		console.log(cards[cardId].suit);
		console.log(cards[cardId].cardImage);
		
		this.setAttribute('src',cards[cardId].cardImage);
		
			if (cardsInPlay.length===2) //if (cardsInPlay.length===2)
									//  { if(cardOne===cardTwo)
			{checkForMatch();}		// 		{alert('You found a match!')}
									//	
									//	  else{ alert('Sorry, try again!')}
		};
		
		
	
var createBoard = function()
	{
		for (var i = 0; i < cards.length; i++) 
		{
			var cardElement = document.createElement('img');
			cardElement.setAttribute('src','images/back.png');
			cardElement.setAttribute('data-id',i);
			cardElement.setAttribute('class','card')
			cardElement.addEventListener('click',flipCard);
		    cardDisplay.push(cardElement);
			
			document.getElementById('game-board').appendChild(cardElement);
			
		}
	};


var reset = function()
{
	for (var i = 0; i < cards.length; i++) 
	{
		cardDisplay[i].setAttribute('src','images/back.png');
	}

	
}


createBoard();





