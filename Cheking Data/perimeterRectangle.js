function perimeterRectangle(length, width){
    if(isNaN(length) || isNaN(width)) return `Non numeric inputs`;
    if((!length || !width) && (length<=0 || width<=0)) return 'One empty input and one negative input was found.';
    if(!length || !width) return `One or more empty inputs`;
    if(length<=0 || width<=0) return `One or more negative inputs`;
    
    length = length.trim();
    width = width.trim();
    
    length = Number(length);
    width = Number(width);
    
    return length*2 + width*2;
}

let length = prompt('Enter the length ');
let width = prompt('Enter the width ');
console.log(`Perimeter: ${perimeterRectangle(length, width)}`);
