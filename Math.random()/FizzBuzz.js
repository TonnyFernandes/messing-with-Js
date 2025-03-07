function FizzBuzz(input){
    if(input%3!==0 && input%5!==0) return input;
    if(input%3===0 && input%5===0) return 'FizzBuzz';
    if(input%3===0) return 'Fizz';
    return 'Buzz';
}
console.log(FizzBuzz(Math.floor(Math.random()*100)));
