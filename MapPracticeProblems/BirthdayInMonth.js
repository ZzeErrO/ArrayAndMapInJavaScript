let i =0;
let mymap = new Map();
mymap.set(1,0);
mymap.set(2,0);
mymap.set(3,0);
mymap.set(4,0);
mymap.set(5,0);
mymap.set(6,0);
mymap.set(7,0);
mymap.set(8,0);
mymap.set(9,0);
mymap.set(10,0);
mymap.set(11,0);
mymap.set(12,0);
while (i<50) {
    let month = (Math.floor(Math.random() * 100) % 12) + 1;
    switch (month) {
        case 1:
            let temp = mymap.get(1);
            temp = temp + 1;
            mymap.set(1, temp);
            break;
        case 2:
            let temp1 = mymap.get(2);
            temp1 = temp1 + 1;
            mymap.set(2, temp1);
            break;
        case 3:
            let temp2 = mymap.get(3);
            temp2 = temp2 + 1;
            mymap.set(3, temp2);
            break;
        case 4:
            let temp3 = mymap.get(4);
            temp3 = temp3 + 1;
            mymap.set(4, temp3);
            break;
        case 5:
            let temp4 = mymap.get(5);
            temp4 = temp4 + 1;
            mymap.set(5, temp4);
            break;
        case 6:
            let temp5 = mymap.get(6);
            temp5 = temp5 + 1;
            mymap.set(6, temp5);
            break;
        case 7:
            let temp6 = mymap.get(7);
            temp6 = temp6 + 1;
            mymap.set(7, temp6);
            break;
        case 8:
            let temp7 = mymap.get(8);
            temp7 = temp7 + 1;
            mymap.set(8, temp7);
            break;
        case 9:
            let temp8 = mymap.get(9);
            temp8 = temp8 + 1;
            mymap.set(9, temp8);
            break;
        case 10:
            let temp9 = mymap.get(10);
            temp9 = temp9 + 1;
            mymap.set(10, temp9);
            break;
        case 11:
            let temp10 = mymap.get(11);
            temp10 = temp10 + 1;
            mymap.set(11, temp10);
            break;
        case 12:
            let temp11 = mymap.get(12);
            temp11 = temp11 + 1;
            mymap.set(12, temp11);
            break;
        default:
            break;
    }
    i = i + 1;
}
console.log(mymap);