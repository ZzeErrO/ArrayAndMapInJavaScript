let arr = [1,2,3,4,5,6,7,8,9,-9,-8,-7,-6,-5,-4,-3,-2,-1];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
            if (arr[i]+arr[j]+arr[k] == 0) {
                console.log(arr[i] + "+" + arr[j] +"+" + arr[k] + "= 0");
            }
            
        }
        
    }
}