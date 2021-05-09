let dice = new Map();
dice.set(1, 0);
dice.set(2, 0);
dice.set(3, 0);
dice.set(4, 0);
dice.set(5, 0);
dice.set(6, 0);

while (dice.get(1) != 10 ||
dice.get(2) != 10 ||
dice.get(3) != 10 ||
dice.get(4) != 10 ||
dice.get(5) != 10 ||
dice.get(6) != 10 ) {
    let variable = (Math.floor(Math.random() * 10)) % 7;
    if ( 1 == variable) {
        let temp = dice.get(1);
        temp = temp + 1;
        dice.set(1, temp);
        if (dice.get(1) == 10) {
            console.log("Maximum times we got 1 for 10 times");
            break;
        }
    }
    if ( 2 == variable) {
        let temp = dice.get(2);
        temp = temp + 1;
        dice.set(2, temp);
        if (dice.get(2) == 10) {
            console.log("Maximum times we got 2 for 10 times");
            break;
        }
    }
    if ( 3 == variable) {
        let temp = dice.get(3);
        temp = temp + 1;
        dice.set(3, temp);
        if (dice.get(3) == 10) {
            console.log("Maximum times we got 3 for 10 times");
            break;
        }
    }
    if ( 4 == variable) {
        let temp = dice.get(4);
        temp = temp + 1;
        dice.set(4, temp);
        if (dice.get(4) == 10) {
            console.log("Maximum times we got 4 for 10 times");
            break;
        }
    }
    if ( 5 == variable) {
        let temp = dice.get(5);
        temp = temp + 1;
        dice.set(5, temp);
        if (dice.get(5) == 10) {
            console.log("Maximum times we got 5 for 10 times");
            break;
        }
    }
    if ( 6 == variable) {
        let temp = dice.get(6);
        temp = temp + 1;
        dice.set(6, temp);
        if (dice.get(6) == 10) {
            console.log("Maximum times we got 6 for 10 times");
            break;
        }
    }
}
console.log(dice);
let arr = new Array();
for (let value of dice.values())
{
    arr.push(value);
}

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[i] < arr[j] )
        {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        
    }
    
}
console.log(arr);
console.log("Minimuum Value is " + arr.slice(0,1));