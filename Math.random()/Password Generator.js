const LowerCaseAlphabet = new Set('abcdefghijklmnopqrstuvwxyz');
const UpperCaseAlphabet = new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const Numbers = new Set('0123456789');
const Symbols = new Set(`!@#$%&*+=-_.,;:?/|\\{}[]()<>`);

const lower = Array.from(LowerCaseAlphabet);
const upper = Array.from(UpperCaseAlphabet);
const numbers = Array.from(Numbers);
const symbols = Array.from(Symbols);



function instructions(){
    console.log('This code generates passwords following this rules:')
    console.log('\t- Have more than 8 characters');
    console.log('\t- Have less than 16 characters');
    console.log('\t- Have at least one lowercase letter');
    console.log('\t- Have at least one uppercase letter');
    console.log('\t- Have at least one special character');
    console.log('\t\t. with them being !@#$%&*+=-_.,;:?/|\\{}[]()<>');
}
function askLength(){
    let length;
    do{
        length = prompt('\nEnter the password length ');
        length = Number(length);
    }while(!validateLength(length));
    return length;
}
function validateLength(length){
    if(isNaN(length)){
        console.log('Length is Not a Number')
        return false;
    }
    
    if(length < 8 || length > 16){
        console.log('Length must be between 8 and 16');
        return false;
    }
    
    return true;
}

function passwordGenerator(passwordLength){

    do{
        console.log('Generating password...');
        password = ''; 
        let i=0; 
        do{
            const c = selectChar(Math.floor(Math.random()*4));
            password += c;
            i++;
        }while(i<passwordLength);
        console.log('Validating password...');
    }while(!validatePassword(password));
    
    return password;
}
function selectChar(x){
    switch(x){
        case 0:
            return lower[Math.floor(Math.random() * lower.length)]
        case 1:
            return upper[Math.floor(Math.random() * upper.length)]
        case 2:
            return numbers[Math.floor(Math.random() * numbers.length)];
        case 3:
            return symbols[Math.floor(Math.random() * symbols.length)];
    }
}
function validatePassword(password){
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
        if(Numbers.has(c)) hasNumbers = true;
        if(Symbols.has(c)) hasSymbols = true;
    }
    
    // Second and last step at checking password
    return hasLower && hasUpper && hasNumbers && hasSymbols;
}


// Main code flow
instructions();
const passwordLength = askLength();
let password = []; 
password = passwordGenerator(passwordLength);
console.log(`Your password: ${password}`);
