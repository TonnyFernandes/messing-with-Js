/*
  I slightly changed how this code work from this source:
    https://www.youtube.com/watch?v=duOIpyQ7c84&t=978s
*/

function fizzBuzz(input){
    if(input%3!=0 && input%5!=0){
        return input;
    }
    if(input%3==0 && input%5==0){
        return 'fizzBuzz';
    }
    if(input%3==0){
        return 'fizz';
    }
    return 'Buzz';
}
let result = fizzBuzz(Math.floor(Math.random()*100));
console.log(result);
