(function(){

  var x = Math.floor(Math.random() * (101));
  var y = Math.floor(Math.random() * (101));

  console.log('\n' + 'The value of x is: ' + x);
  console.log('The value of y is: ' + y);

  function greaterThan(x, y){

    if (x >= y) {

      return true;

    } else {

      return false;

    }

  }

  if (!greaterThan(x, y)) {

    console.log('\n' + x + ' is not greater than ' + y + '\n')

  } else {

    console.log('\n' + x + ' is greater than ' + y + '\n')

  }

})();
