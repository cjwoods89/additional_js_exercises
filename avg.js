(function(){

  // Generate three random integers for x and y and z
  var x = Math.floor(Math.random() * (101));
  var y = Math.floor(Math.random() * (101));
  var z = Math.floor(Math.random() * (101));

  // Store them in the array so we don't have to hard code the dividing integers
  // Mainly used for dynamic DOM manipulation
  var valuesArray = [x, y, z];

  // Display introduction
  console.log('\n' + 'The value of x is: ' + x);
  console.log('The value of y is: ' + y);
  console.log('The value of z is: ' + z);

  function avg(x, y, z){

    // Create a variable to store the total value
    let avgNum = 0;

    // Loop through each number in the valuesArray and add it to avgNum
    for (var i = 0; i < valuesArray.length; i++) {
      avgNum = avgNum + valuesArray[i]
    }

    // Divide the avgNum by the length of the array
    return avgNum = avgNum / valuesArray.length;

  }

  // Display output
  console.log('\n' + 'The average of ' + x + ' and ' + y + ' and ' + z + ' is: ' + avg(x, y, z).toFixed(2) + '\n');

})();
