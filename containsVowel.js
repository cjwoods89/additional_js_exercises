(function(){


  // Create an index of the vowels
  var vowelsArray = 'aeiou'.split('');

  // Store a list of words to choose from
  var wordArray = ['functions', 'palindrone', 'javascript', 'hyperlink', 'method', 'data', 'pygmy', 'crypts', 'shy', 'gym', 'hymns', 'myth', 'rhythm', 'glycyl'];


  // Choose a random word from wordArray above
  var chosen_word = wordArray[Math.floor(Math.random() * 14)];

  // Display introduction
  console.log('\n' + 'You are randomly generated a word to start with. You will be prompted if these words contain a vowel (not including the letter y).');
  console.log('Your randomly generated a word is: ' + chosen_word +'\n');

  // Find the vowel
  function containsVowel(){

    // Loop through each vowel
    for (var i = 0; i < vowelsArray.length; i++) {

      // Check to see if the vowel on the iteration is indexed in the chosen word
      if (chosen_word.indexOf(vowelsArray[i]) > 0 ) {

        return true;

      }

    }

    return false;

  }

  // Output results
  console.log('Does '+ chosen_word + ' contain a vowel? ' + containsVowel() + '!' + '\n');

})();
