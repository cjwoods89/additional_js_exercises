(function(){

  // Store a list of words
  var wordsArray = ['functions', 'palindrone', 'javascript', 'hyperlink', 'method', 'data'];

  // Choose a random word from the wordsArray
  var chosen_word = wordsArray[Math.floor(Math.random() * 5)];

  // Storing the piglatin suffix
  var suffix = 'ay';



  let chosen_word_split = chosen_word.split('');

  console.log(chosen_word_split);

  function piglatin() {

    let first_letter = chosen_word_split.shift();
    chosen_word_split.push(first_letter + suffix);

    return chosen_word_split.join('');

  }

  console.log(chosen_word);
  console.log(piglatin());
  // console.log(chosen_word_split);
})();
