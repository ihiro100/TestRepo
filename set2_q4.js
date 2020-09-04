function delay(params) {
    let list = [1000,2000,3000]
    return new Promise((res, rej)=>{
        setTimeout(() => {}, list[Math.floor(Math.random()*list.length)]);
    })
}

var arry = Array.apply(null, Array(10))
  .map(function(val, i) { 
    return delay;
  });

console.log(arry);