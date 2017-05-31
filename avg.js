(function(){

  var x = Math.floor(Math.random() * (101));
  var y = Math.floor(Math.random() * (101));
  var z = Math.floor(Math.random() * (101));

  var valuesArray = [x, y, z];

  console.log('\n' + 'The value of x is: ' + x);
  console.log('The value of y is: ' + y);
  console.log('The value of z is: ' + z);

  function avg(x, y, z){

    let avgNum = 0;

    for (var i = 0; i < valuesArray.length; i++) {
      avgNum = avgNum + valuesArray[i]
    }

    return avgNum = avgNum / valuesArray.length;

  }

  console.log('\n' + 'The average of ' + x + ' and ' + y + ' and ' + z + ' is: ' + avg(x, y, z).toFixed(2) + '\n');

})();
