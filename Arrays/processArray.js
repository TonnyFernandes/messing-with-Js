function removeDuplicates(arr){
    const uniqueSet = new Set(arr); // Sets ignore duplicates
    const uniqueArray = Array.from(uniqueSet); // Creates an array based on the elements in uniqueSet
    arr.length = 0; // Erase everything in the original array
    arr.push(...uniqueArray); // push uniqueArray into the original array
}
function squareArray(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] *= arr[i];
    }
}
function filterEvenNumbersArray(arr){
    const filteredArray = arr.filter((number) => number%2===0);
    arr.length = 0; // Send everything in the original array to oblivion
    arr.push(...filteredArray); // push filteredArray into the original array
}
function sumArray(arr){
    const sum = arr.reduce((a, num) => a + num, 0);
    arr.length = 0; // Obliterate everything in the original array
    arr.push(sum); // push sum into the original array
}
function processArray(arr){
    removeDuplicates(arr);
    arr.sort((a, b) => a - b); // Sort in ascending order
    squareArray(arr);
    filterEvenNumbersArray(arr);
    sumArray(arr);
}



let intengerArray = [];
for(let i=0; i<10; i++){
    intengerArray.push(Math.ceil(Math.random() * 10));
}
//This set and fill the array with 10 random numbers

console.log(`Array before processing: ${intengerArray}`);
processArray(intengerArray);
console.log(`Array after processing: ${intengerArray}`);
