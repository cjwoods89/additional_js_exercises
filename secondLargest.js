(function(){

  var t = Math.floor(Math.random() * (101));
  var u = Math.floor(Math.random() * (101));
  var v = Math.floor(Math.random() * (101));
  var w = Math.floor(Math.random() * (101));
  var x = Math.floor(Math.random() * (101));
  var y = Math.floor(Math.random() * (101));
  var z = Math.floor(Math.random() * (101));

  var valuesArray = [t, u, v, w, x, y, z];

  console.log('\n' + 'The value of x is: ' + t);
  console.log('The value of y is: ' + u);
  console.log('The value of y is: ' + v);
  console.log('The value of y is: ' + w);
  console.log('The value of y is: ' + x);
  console.log('The value of y is: ' + y);
  console.log('The value of y is: ' + z + '\n');


  function secondLargest(){

    valuesArray.sort();
    valuesArray.reverse();
    console.log(valuesArray[1] + ' is the second highest number in the list!' + '\n');

  }

  secondLargest();


})();
