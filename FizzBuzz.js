function FizzBuzz(input){
    if(input%3===0 && input%5===0) return 'FizzBuzz';
    if(input%3===0) return 'Fizz';
    if(input%5===0) return 'Buzz'
    return input;
}
console.log("Random generation:");
console.log(FizzBuzz(Math.ceil(Math.random() * 100)));

console.log("\nNow, the 1-100 verification:");
for(let i=1; i<=100; i++) console.log(FizzBuzz(i));
