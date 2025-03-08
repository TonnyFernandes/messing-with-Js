function nextIntenger(x){
    if(!x){
        return `Empty entry`;
    }
    if(isNaN(x)){
        return `Not a number`;
    }
    const num = Number(x);
    return Math.floor(num + 1);
}

let x = prompt('Type an intenger ');
console.log(`Next intenger: ${nextIntenger(x)}`);
let y = prompt('Type an intenger ');
console.log(`Next intenger: ${nextIntenger(y)}`);
