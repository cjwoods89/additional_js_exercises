(function(){

  // Generate two random integers for x and y
  var x = Math.floor(Math.random() * (101));
  var y = Math.floor(Math.random() * (101));

  // Display introduction
  console.log('\n' + 'The value of x is: ' + x);
  console.log('The value of y is: ' + y);

  // Add the integers together
  function sum(x, y){
    z = x + y;
    return z;
  }

  // Display output
  console.log('\n' + 'The sum of ' + x + ' and ' + y + ' is: ' + sum(x, y) + '\n');

})();
