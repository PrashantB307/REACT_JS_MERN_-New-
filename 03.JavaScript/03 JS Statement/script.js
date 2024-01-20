
/*

1. if-else
2. switch
3. for-loop
4. while-loop
5. do-while loop

*/


const currTime = 19;
let res = "";
if(currTime >= 0 && currTime <= 12){
    res = "Good Morning";
}else if(currTime >= 12 && currTime <= 23){
    res = "Good Evening";
}else{
    res = "Invalid Time";
}
console.log(res);   //   Good Evening



const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

//===>  Mangoes and papayas are $2.79 a pound.


let str = ""
for(let i = 0; i <= 10; i++){
    str += `${i} `;
}

console.log(str);   //    0 1 2 3 4 5 6 7 8 9 10 


str = "";
for(let i = 20; i >= 0; i -= 2){
    str += `${i} `;
}

console.log(str);   //  20 18 16 14 12 10 8 6 4 2 0 


str = "";
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        str += '* ';
    }
    str += '\n';
}

console.log(str);

// * 
// * * 
// * * * 
// * * * * 
// * * * * * 