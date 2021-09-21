//generate 52 cards
var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  // Loop over the suits array
  var suitIndex = 0;
  while (suitIndex < suits.length) {
    // Store the current suit in a variable
    var currentSuit = suits[suitIndex];
    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    var rankCounter = 1;
    while (rankCounter <= 13) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;
      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName === 1) {
        cardName = 'ace';
      } else if (cardName == 11) {
        cardName = 'jack';
      } else if (cardName == 12) {
        cardName = 'queen';
      } else if (cardName == 13) {
        cardName = 'king';
      }
      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
      };
      // Add the new card to the deck
      cardDeck.push(card);
      // Increment rankCounter to iterate over the next rank
      rankCounter += 1;
    }
    // Increment the suit index to iterate over the next suit
    suitIndex += 1;
  }
  // Return the completed card deck
  return cardDeck;
};
//shuffle the cardDeck
// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
}
//re-assign card rank for ace, jack, queen, king
function getRandomCard() {
  var cardRandomNum = shuffledDeck.pop().rank
  if (cardRandomNum > 10) {
      return 10
  } else if (cardRandomNum === 1) {
      return 11
  } else {return cardRandomNum}
}

//global var
var mode = `loading game`
var shuffledDeck = shuffleCards(makeDeck())
var playerCardDeck =[getRandomCard(), getRandomCard()]
var computerCardDeck = [getRandomCard(), getRandomCard()]
var ccardsEl = document.getElementById("ccards-el")
var ctotalEl = document.getElementById("ctotal-el")
var pcardsEl = document.getElementById("pcards-el")
var ptotalEl = document.getElementById("ptotal-el")
var player = ``
var mode =`game loading`
//Main function
function main(input){
  var myOutputValue =``
  if(mode == `game loading`){
    player = input
    mode = `playerCardRenderEl`
    myOutputValue = `Hello ${player}, welcome. Please press "Submit Button" to start the game.`
  }else if (mode == `playerCardRenderEl`){
    myOutputValue = playerCardRender(input)
  }else if (mode == `paddNewCardEl`){
    myOutputValue = addNewCard(input)
  }else if (mode == `computerCardRenderEl`){
    console.log(mode)
    myOutputValue = computerCardRender()
  }

  return myOutputValue
}

function playerCardRender(input){
  var playerSum = 0
  for (var i = 0; i < playerCardDeck.length; i++) {
    playerSum += playerCardDeck[i]}
    ptotalEl.textContent = "Player Sum: " + playerSum
    // for (var i = 0; i < playerCardDeck.length; i++) {
   // pcardsEl.textContent += playerCardDeck[i] + " - "}
  if (playerSum <=20){
    myOutputValue = `Do you want to draw a new card?(Y/N)`
  }else if (playerSum == 21){
    myOutputValue = `You got a blackjack!`
  }else if (playerSum > 21){
    myOutputValue = `You out of the game`
  }
  mode = `paddNewCardEl`
  return myOutputValue
}

function computerCardRender(){
  if (computerSum <=17){
    myOutputValue = addNewCard()
  }else if (computerSum <= 20){
    myOutputValue = `need a new card? `
  }else if (computerSum == 21){
    myOutputValue = `Computer got a blackjack!`
  }else if (computerSum > 21){
    myOutputValue = `Computer out of the game`
  }
  return myOutputValue
}

function addNewCard(input){
  var myOutputValue =``
  if (mode == `paddNewCardEl` && input == `Y`){
    playerCardDeck.push(getRandomCard())
    mode = `playerCardRenderEl`
    myOutputValue = `please press Sumit button to proceed`
  }else if (mode == `caddNewCardEl`){
    computerCardDeck.push(getRandomCard())
  }

  return myOutputValue
}

function scoreCompare(){

hasBlackJack = true
isAlive = false

  return myOutputValue
}