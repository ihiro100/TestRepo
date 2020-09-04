function checkEven(num) {
    return new Promise((reslove, reject)=>{
        if(num % 2 == 0) reslove(num * num);
        else reject('odd number is passed')
    })
}

var arry = Array.apply(null, Array(100))
  .map(function(val, i) { 
    return i++;
  });

arry.forEach(element => {
    checkEven(element);
});