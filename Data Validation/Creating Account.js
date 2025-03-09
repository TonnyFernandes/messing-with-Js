const user = {
    username: "",
    isUsernameValid: false,
    email: "",
    isEmailValid: false,const user = {
    username: "",
    isUsernameValid: false,
    email: "",
    isEmailValid: false,
    password: "",
    isPasswordValid: false,
    confirmpassword: "",
    isConfirmPassword: false,
    age: "",
    isAgeValid: false,
};
const alphanumeric = new Set('abcdefghijklmnopqrstuvwxyz0123456789');
const emailDomains = new Set(['@gmail.com', '@outlook.com', '@hotmail.com', '@yahoo.com', '@protonmail.com', '@proton.me', '@icloud.com', '@zoho.com']);
const LowerCaseAlphabet = new Set('abcdefghijklmnopqrstuvwxyz');
const UpperCaseAlphabet = new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const numbers = new Set('0123456789');
const symbols = new Set(`!@#$%&*+=-_.,;:?/|\\{}[]()<>`);

function validateUsername(user){
    // Check if username have at least 5 of length
    if(user.username.length < 5) {
        console.log("Username must have at least 5 of length\n");   
        return false;
    }
    
    // Check if the characters are all alphanumeric
    for(let i=user.username.length-1; i>=0; i--){
        let c = user.username[i];
        if(!alphanumeric.has(c.toLowerCase())){
            console.log('Only alphanumeric characters will be accepted.\n');
            return false;
        }
    }
   
    return true; // Username is valid! 
}
function validateEmail(user){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(user.email)){
        console.log('Invalid email format');
        return false
    }
    else return true;
}
function validateAge(user){
    if(user.age.length < 2){
        console.log('Must be 13 or older');
        return false;
    }
    
    if(isNaN(user.age)){
        console.log('Not a number\n');
        return false;
    }
    
    user.age = parseInt(user.age);
    
    if(user.age < 13){
        console.log('Must be 13 or older');
        return false;
    }
    
    return true;
}
function validatePassword(user){
    
    // Check password length
    if(user.password.length < 8){
        console.log('Password must be 8 characters long\n');
        return false;
    }

    let hasLower = false;
    let hasUpper = false;
    let hasNumbers = false;
    let hasSymbols = false;

    // First step at checking if password have at least one of Lowercase, one Uppercase, one Number and one Symbol
    for(let i=0; i<user.password.length; i++){
        let c = user.password[i];
        // Haha if go brr
        if(LowerCaseAlphabet.has(c)) hasLower = true;
        if(UpperCaseAlphabet.has(c)) hasUpper = true;
        if(numbers.has(c)) hasNumbers = true;
        if(symbols.has(c)) hasSymbols = true;
    }
    
    // Second step at checking password
    if(!hasLower || !hasUpper || !hasNumbers || !hasSymbols){
        console.log('Password must have:');
        console.log('\t- At least one lowercase letter');
        console.log('\t- At least one uppercase letter');
        console.log('\t- At least one number');
        console.log('\t- At least one special character\n');
        return false;
    }
    
    return true;
}
function validadeConfirmPassword(user){
    if(user.password === user.confirmpassword) return true;
    else{
        console.log("Not equal to password\n");
        return false;
    }
}

function registrateUser(user){
    user = {
        isUsernameValid: false,
        isEmailValid: false,
        isPasswordValid: false,
        isConfirmPassword: false,
        isAgeValid: false,
    }
    
    // Read and validate Username
    do{
        user.username = prompt("Your username: ");
    }while(!validateUsername(user));
    user.isUsernameValid = true;
    
    // Read and validate Email
    do{
        user.email = prompt("Your email: ");
    }while(!validateEmail(user));
    user.isEmailValid = true;
    
    // Read and validate Age
    do{
        user.age = prompt("Your age: ")
    }while(!validateAge(user));
    user.isAgeValid = true;
    
    // Read and validate Password
    do{
        user.password = prompt("Your password: ");
    }while(!validatePassword(user));
    user.isPasswordValid = true;
    
    // Read and validate Confirm Password
    do{
        user.confirmpassword = prompt("Confirm your password ");
    }while(!validadeConfirmPassword(user));
    user.isConfirmPassword = true;
}

function validateUser(user){
    if(!user.isUsernameValid || !user.isEmailValid || !user.isAgeValid || !user.isPasswordValid || !user.isConfirmPassword){
        console.log('Unexpected error. Enter all your data again');
        return false;
    }
    else return true;
}

// Main functionality
console.log('Enter your data');
do{
    registrateUser(user);
}while(!validateUser(user));
console.log("Valid data, you're safe to go");
    password: "",
    isPasswordValid: false,
    confirmpassword: "",
    isConfirmPassword: false,
    age: "",
    isAgeValid: false,
};
const alphanumeric = new Set('abcdefghijklmnopqrstuvwxyz0123456789');
const emailDomains = new Set(['@gmail.com', '@outlook.com', '@hotmail.com', '@yahoo.com', '@protonmail.com', '@proton.me', '@icloud.com', '@zoho.com']);
const LowerCaseAlphabet = new Set('abcdefghijklmnopqrstuvwxyz');
const UpperCaseAlphabet = new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const numbers = new Set('0123456789');
const symbols = new Set(`!@#$%&*+=-_.,;:?/|\\{}[]()<>`);

function validateUsername(user){
    // Check if username have at least 5 of length
    if(user.username.length < 5) {
        console.log("Username must have at least 5 of length\n");   
        return false;
    }
    
    // Check if the characters are all alphanumeric
    for(let i=user.username.length-1; i>=0; i--){
        let c = user.username[i];
        if(!alphanumeric.has(c.toLowerCase())){
            console.log('Only alphanumeric characters will be accepted.\n');
            return false;
        }
    }
   
    return true; // Username is valid! 
}
function validateEmail(user){
    // Check if there's something besides the domain in the email
    if(user.email.startsWith('@')){
        console.log('Invalid email');
        return false; //invalid email
    }
    
    // Check if email has an valid domain
    for(const domain of emailDomains){
        if(user.email.endsWith(domain)) return true; // valid email
    }
    
    // Invalid email
    console.log('Invalid email');
    return false;
}
function validateAge(user){
    if(user.age.length < 2){
        console.log('Must be 13 or older');
        return false;
    }
    
    if(isNaN(user.age)){
        console.log('Not a number\n');
        return false;
    }
    
    user.age = parseInt(user.age);
    
    if(user.age < 13){
        console.log('Must be 13 or older');
        return false;
    }
    
    return true;
}
function validatePassword(user){
    
    // Check password length
    if(user.password.length < 8){
        console.log('Password must be 8 characters long\n');
        return false;
    }

    let hasLower = false;
    let hasUpper = false;
    let hasNumbers = false;
    let hasSymbols = false;

    // First step at checking if password have at least one of Lowercase, one Uppercase, one Number and one Symbol
    for(let i=0; i<user.password.length; i++){
        let c = user.password[i];
        // Haha if go brr
        if(LowerCaseAlphabet.has(c)) hasLower = true;
        if(UpperCaseAlphabet.has(c)) hasUpper = true;
        if(numbers.has(c)) hasNumbers = true;
        if(symbols.has(c)) hasSymbols = true;
    }
    
    // Second step at checking password
    if(!hasLower || !hasUpper || !hasNumbers || !hasSymbols){
        console.log('Password must have:');
        console.log('\t- At least one lowercase letter');
        console.log('\t- At least one uppercase letter');
        console.log('\t- At least one number');
        console.log('\t- At least one special character\n');
        return false;
    }
    
    return true;
}
function validadeConfirmPassword(user){
    if(user.password === user.confirmpassword) return true;
    else{
        console.log("Not equal to password\n");
        return false;
    }
}

function registrateUser(user){
    user = {
        isUsernameValid: false,
        isEmailValid: false,
        isPasswordValid: false,
        isConfirmPassword: false,
        isAgeValid: false,
    }
    
    // Read and validate Username
    do{
        user.username = prompt("Your username: ");
    }while(!validateUsername(user));
    user.isUsernameValid = true;
    
    // Read and validate Email
    do{
        user.email = prompt("Your email: ");
    }while(!validateEmail(user));
    user.isEmailValid = true;
    
    // Read and validate Age
    do{
        user.age = prompt("Your age: ")
    }while(!validateAge(user));
    user.isAgeValid = true;
    
    // Read and validate Password
    do{
        user.password = prompt("Your password: ");
    }while(!validatePassword(user));
    user.isPasswordValid = true;
    
    // Read and validate Confirm Password
    do{
        user.confirmpassword = prompt("Confirm your password ");
    }while(!validadeConfirmPassword(user));
    user.isConfirmPassword = true;
}

function validateUser(user){
    if(!user.isUsernameValid || !user.isEmailValid || !user.isAgeValid || !user.isPasswordValid || !user.isConfirmPassword){
        console.log('Unexpected error. Enter all your data again');
        return false;
    }
    else return true;
}

// Main functionality
console.log('Enter your data');
do{
    registrateUser(user);
}while(!validateUser(user));
console.log("Valid data, you're safe to go");
