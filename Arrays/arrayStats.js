function findMaxAndMin(arr){
    return{
        BiggestNumber: Math.max(...arr),
        SmallestNumber: Math.min(...arr)
    }
}
function findMedian(arr){
    if(arr.length % 2 === 0){
        const med1 = (arr.length/2)-1;
        const med2 = med1+1;
        return (arr[med1] + arr[med2])/2
    }
    else{
        const med = Math.trunc(arr.length/2);
        return arr[med];
    }
}
function findAverage(arr){
    let sum = arr.reduce((a, b) => a + b, 0);
    return (sum/arr.length).toFixed(2);
}
function findInArray(arr){
    console.log(`Original array: ${arr}`);
    console.log(`Median: ${findMedian(arr)}`);
    console.log(`Average: ${findAverage(arr)}`);
    console.log(findMaxAndMin(arr));
}

let numbers = []
for(let i=0; i<10; i++){
    numbers.push(Math.ceil(Math.random() * 10));
}
numbers.sort((a, b) => a-b);

findInArray(numbers);
