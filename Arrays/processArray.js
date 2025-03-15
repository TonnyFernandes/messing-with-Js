// Work in process

function Random1to10(){
    return Math.ceil(Math.random() * 10);
}
function removeDuplicates(arr){
    const uniqueSet = new Set(arr);
    const uniqueArray = Array.from(uniqueSet);
    arr.length = 0;
    arr.push(...uniqueArray);
}
function sortArray(arr){
    let number;
    let ascendingArray = [];
    const arrLength = arr.length;
    
    for(let i=0; i<arrLength; i++){
        number = arr.pop();
        for(let j=0; j<arr.length; j++){
            
        }
    }
}
function processArray(arr){
    removeDuplicates(arr);
    sortArray(arr);
}



let intengerArray = [];
for(let i=0; i<10; i++){
    intengerArray.push(Random1to10());
}//Fill the array with 10 random numbers
processArray(intengerArray);
console.log(intengerArray);
