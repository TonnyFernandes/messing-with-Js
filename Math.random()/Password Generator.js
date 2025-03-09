const LowerCaseAlphabet = new Set('abcdefghijklmnopqrstuvwxyz');
const UpperCaseAlphabet = new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const numbers = new Set('0123456789');
const symbols = new Set(`!@#$%&*+=-_.,;:?/|\\{}[]()<>`);

function validateLength(length){
    if(isNaN(length)){
        return false;
    }
    
    if(length < 8 || length > 16){
        return false;
    }
    
    return true;
}
function askLength(){
    let length;
    do{
        length = prompt('\nEnter the password length');
        length = Number(length);
    }while(!validateLength(length);
    return length;
}

function validatePassword(password){
    
    // Check password length
    if(password.length < 8 || password.length > 16){
        return false;
    }

    // Step zero to check if password have at least one of Lowercase, one Uppercase, one Number and one Symbol
    let hasLower = false;
    let hasUpper = false;
    let hasNumbers = false;
    let hasSymbols = false;

    // First step at checking password
    for(let i=0; i<password.length; i++){
        let c = password[i];
        // Haha if go brr
        if(LowerCaseAlphabet.has(c)) hasLower = true;
        if(UpperCaseAlphabet.has(c)) hasUpper = true;
        if(numbers.has(c)) hasNumbers = true;
        if(symbols.has(c)) hasSymbols = true;
    }
    
    // Second and last step at checking password
    if(!hasLower || !hasUpper || !hasNumbers || !hasSymbols){
        return false;
    }
    
    // Password is valid
    return true;
}

function passwordGenerator(password){
    let SetSelector = Math.floor(Math.random() * 4)
    do{
        SetSelector = Math.floor(Math.random() * 4);
    }while(!validatePassword(password));
}

console.log('This code generates passwords following this rules:')
console.log('\t- Have more than 8 characters');
console.log('\t- Have less than 16 characters');
console.log('\t- Have at least one lowercase letter');
console.log('\t- Have at least one uppercase letter');
console.log('\t- Have at least one special character');
console.log('\t\t. with them being !@#$%&*+=-_.,;:?/|\\{}[]()<>');


const passwordLength = askLength();
let password = "";
passwordGenerator(password);
