function validateUsername(){
    let copy=user.username, c;
    
    // Check if username have at least 5 of length
    if(user.username.length < 5) return false;
    
    for(let i=user.username.length-1; i<=0; i--){
        c = copy[i];
        console.log(c);
    }
    
    return true;
}
function registration(){
    // Read and validate Username
    do{
        user.username = prompt("Your username: ");
        if(!validateUsername(user.username)){
            console.log("Invalid username\n");
        }
    }while(!validateUsername(user));
}
