var arry = Array.apply(null, Array(100))
  .map(function(val, i) { 
    return i++;
  });

console.info(arry);