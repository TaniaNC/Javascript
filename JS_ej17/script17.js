
let arr = [];

for (let i = 0; i < 5; i++) {
    
    arr[i] = Math.round(Math.random() * 10);
}
console.log(arr);

arr.splice(-2);

console.log(arr);