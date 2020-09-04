var x = 1;
var arry = Array.apply(null, Array(100))
  .map(function(val, i) { 
        return ((i+1)*2) * ((i+1)*2);
  });

console.info(arry);