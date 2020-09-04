var x = 1;
var arry = Array.apply(null, Array(100))
  .map(function(val, i) { 
        return ((i+1)*2) * ((i+1)*2);
  });

// console.info(arry);

function sumOfSquares(a) {
    
    let sum = 0;
    a.forEach(element => {
        sum = sum + element; 
    });
    return sum;
}

console.log(sumOfSquares(arry));