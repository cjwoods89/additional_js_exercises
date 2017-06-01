(function(){

  // Variables to store our demo string
  var wordsOne = 'have you ever seen a penguin go to tea?';
  var wordsTwo = 'fool me once, shame on me. fool me twice, shame on heathcliff';

  // Array to store the string above
  var wordsOneArray = wordsOne.split(' ');
  var wordsTwoArray = wordsTwo.split(' ');

  // Used to store the count of letters for the word
  var wordCount = 0;

  // Used to store the longest word in the wordsArray
  var longestWord;

  function countLetters(wordArray){

    // Run through the passed through array
    for (var i = 0; i < wordArray.length; i++) {

      // Check to see if the wordCount is greater than the length of the word
      if (wordCount < wordArray[i].length) {
        wordCount = wordArray[i].length;
        longestWord = wordArray[i];
      }

    }
    return longestWord;
  }

  // Display the newly stored longest word
  console.log(countLetters(wordsOneArray) + ' is the current longest word');
  console.log(countLetters(wordsTwoArray) + ' is the current longest word');
})();
