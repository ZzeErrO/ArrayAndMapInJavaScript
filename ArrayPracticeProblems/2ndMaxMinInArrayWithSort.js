let random = new Array();
for (let i = 0; i < 10; i++) {
     random.push(Math.floor(Math.random() * 1000));
}
console.log(random.sort());

console.log("2ns Max: " + random.sort().slice(8,9));
console.log("2ns Max: " + random.sort().slice(1,2));