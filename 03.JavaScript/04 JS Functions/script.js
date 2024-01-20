
/**

1. Normal Function
2. Function Expression
3. Arrow Function

 */


function greet(Name){
    console.log(`Good Morning ${Name}`);
}

greet("John");


let greet1 = function(name){
    console.log(`Good Morning ${name}`);
} 

greet1("John");


let greet2 = name => {
    console.log(`Good Morning ${name}`);
}

greet2("John");


const sum = (a, b) => {
    let res = a + b;
    return res;
}

let result = sum(5, 10);
console.log(result);    //   15


const printNum = (num1, num2, incre) => {
    let res = "";
    if(num1 < num2){
        for(let i = num1; i <= num2; i += incre){
            res += `${i} `;
        }
    }else{
        console.log("Num2 is always greater than Num1");
    }

    console.log(res);
}

printNum(4, 9, 1);
printNum(1, 10, 2);
printNum(5, 20, 5);