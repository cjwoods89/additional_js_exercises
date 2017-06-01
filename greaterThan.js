(function(){

  // Generate two random integers for x and y
  var x = Math.floor(Math.random() * (101));
  var y = Math.floor(Math.random() * (101));

  // Display introduction
  console.log('\n' + 'The value of x is: ' + x);
  console.log('The value of y is: ' + y);

  function greaterThan(x, y){

    // Compare x and y
    if (x >= y) {

      return true;

    } else {

      return false;

    }

  }

  // Display results based on the function's return statement
  if (!greaterThan(x, y)) {

    console.log('\n' + x + ' is not greater than ' + y + '\n')

  } else {

    console.log('\n' + x + ' is greater than ' + y + '\n')

  }

})();
