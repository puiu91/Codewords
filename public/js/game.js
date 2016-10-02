var cardContainer = document.querySelectorAll('[data-component="gameboard"]')[0];
var cardTexts = document.querySelectorAll('[data-component="word-tile"]');

// shuffle word list to randomize word order
wordList = shuffle(wordList);

for (var i = 0; i < cardTexts.length; i++) {
  var word = wordList[i];
  var testWord = new String(word);
  
  var existingSpan = cardTexts[i].children[0];
  var existingTextNode = existingSpan.childNodes[0];
    
  existingSpan.innerHTML = testWord.valueOf();
}

cardContainer.addEventListener('click', function() {
  var objectClicked = event.srcElement;
  
  if (objectClicked.dataset.component === 'word-tile') {
    if (!objectClicked.classList.contains('card-blue') && !objectClicked.classList.contains('card-red')) {
      objectClicked.classList.add('card-blue');
    } else if (objectClicked.classList.contains('card-blue') && !objectClicked.classList.contains('card-red')) {
      objectClicked.classList.add('card-red');
    } else if (objectClicked.classList.contains('card-red') && !objectClicked.classList.contains('card-neutral')) {
      objectClicked.classList.add('card-neutral');
    } else if (objectClicked.classList.contains('card-neutral')) {
      objectClicked.classList.remove('card-blue')
      objectClicked.classList.remove('card-red')
      objectClicked.classList.remove('card-neutral')
    }
  }

}, false);
