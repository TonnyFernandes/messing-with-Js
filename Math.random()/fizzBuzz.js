function FizzBuzz(input){
    if(input%3!=0 && input%5!=0){
        return input;
    }
    if(input%3==0 && input%5==0){
        return 'FizzBuzz';
    }
    if(input%3==0){
        return 'Fizz';
    }
    return 'Buzz';
}
let result = FizzBuzz(Math.floor(Math.random()*100));
console.log(result);
