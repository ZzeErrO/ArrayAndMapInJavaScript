let random = new Array();
for (let i = 0; i < 10; i++) {
     random.push(Math.floor(Math.random() * 1000));
}
console.log(random);
let temp = 0;
for (let index = 0; index < random.length -1 ; index++) {
    if (random[index] > random[index+1]) {
        temp = random[index];
        random[index] = random[index+1];
        random[index + 1] = temp;
    }
}
let randomMax = (random.slice(0,9));
for (let index = 0; index < randomMax.length -1 ; index++) {
    if (randomMax[index] > randomMax[index+1]) {
        temp = randomMax[index];
        randomMax[index] = randomMax[index+1];
        randomMax[index + 1] = temp;
    }
}
console.log("2ndMax: "+randomMax.slice(8));

for (let index = 0; index < random.length -1 ; index++) {
    if (random[index] < random[index+1]) {
        temp = random[index];
        random[index] = random[index+1];
        random[index + 1] = temp;
    }
}
let randomMin = (random.slice(0,9));
for (let index = 0; index < randomMin.length -1 ; index++) {
    if (randomMin[index] < randomMin[index+1]) {
        temp = randomMin[index];
        randomMin[index] = randomMin[index+1];
        randomMin[index + 1] = temp;
    }
}
console.log("2ndMin: "+randomMin.slice(8));