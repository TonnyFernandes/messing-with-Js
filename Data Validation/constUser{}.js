const user = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    age: "",
};
const alphanumeric = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);

function validateUsername(){
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
    
    return true;
}
function validadeEmail(){
    return true;
}
function registration(user){
    // Read and validate Username
    do{
        user.username = prompt("Your username: ");
    }while(!validateUsername(user));
    
    // Read and validate Email
    do{
        user.email = prompt("")
    }
}

// Main functionality
console.log('Enter all the asked data');
registration(user);
console.log(user);
