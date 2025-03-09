const user = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    age: "",
};
const alphanumeric = new Set('abcdefghijklmnopqrstuvwxyz0123456789');
const emailDomains = new Set(['@gmail.com', '@outlook.com', '@hotmail.com', '@yahoo.com', '@protonmail.com', '@proton.me', '@icloud.com', '@zoho.com']);

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
            console.log('Only alphanumeric characters will be accepted. No spaces or special characters\n');
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
function validatePassword(user){
    if(user.password.length < 8){
        console.log('Password must be 8 charcacters long');
        return false;
    }
    
    // Work in progress...
    
    return true;
}

function registrateUser(user){
    // Read and validate Username
    do{
        user.username = prompt("Your username: ");
    }while(!validateUsername(user));
    
    // Read and validate Email
    do{
        user.email = prompt("Your email: ");
    }while(!validateEmail(user));
    
    // Read and validate Password
    do{
        user.password = prompt("Your password: ");
    }while(!validatePassword(user));
}

// Main functionality
console.log('Enter your data');
registrateUser(user);
console.log(user);
