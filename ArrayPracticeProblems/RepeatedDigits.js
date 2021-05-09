let arr = new Array();
for (let i = 0; i <= 100; i++) {
    arr.push(i);
    
}
let brr = new Array();
for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 11 == 0) {
        brr.push(j);
    }
    
}
console.log(brr);