(function(){

  var x = Math.floor(Math.random() * (101));
  var y = Math.floor(Math.random() * (101));

console.log('\n' + 'The value of x is: ' + x);
console.log('The value of y is: ' + y);

  function sum(x, y){
    z = x + y;
    return z;
  }

  console.log('\n' + 'The sum of ' + x + ' and ' + y + ' is: ' + sum(x, y) + '\n');

})();