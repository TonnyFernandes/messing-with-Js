function firstArray(x) { return x[0]; }
let array = [];
for(i=0; i<3; i++){
    let input = prompt('Type something ').trim();
    if(input === null || input === "") input='empty';
    array.push(input);
}

console.log(`These are all your entries: ${array}`);
console.log(`The first entry was: ${firstArray(array)}`);
