var arr = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,26,17,18,19,20];

for(let i=0; i< arr.length; i++) {
    findPrime(arr[i])
}

function findPrime(num) {

    if(num == 0) return;

    for(let x = 2; x <= Math.sqrt(num); x++){
        if(num % x == 0 ) return;
    }
    console.log(num);
    return;
}