
/** 

1. Arithmetic  ==>  + - / * %
2. Shorthand   ==>  += -+ *= /=
3. Logical     ==>  && ||
4. Conditional ==>  > < <= >= !=
5. Ternary     ==>  ? :
6. Increment Decrement  ==> ++ --
7. Equality    ==>  == === 

**/

let num1 = 100;
let num2 = 20;

console.log(`Sum : ${num1 + num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Multi : ${num1 * num2}`);
console.log(`Div : ${num1 / num2}`);
console.log(`Modulo : ${num1 % num2}`);

let a = 10;
let b = 20;
let add = 50;

add += (a + b);
console.log(add);   //  80


let courseComplete = true;
let projectFinished = false;
if(courseComplete && projectFinished){
    console.log("You will get job soon");
}else{
    console.log("keep practicing");
}


let marks = 75;
let result = "";

if(marks <= 35){
    result = "You Failed the exam";
}else{
    result = "You Passed the exam";
}

console.log(result);   //    You Passed the exam


marks = 35;
result = "";

(marks <= 35) ? result = " ou Failed the exam" : result = "You Passed the exam";

console.log(result);    //   You Failed the exam


let x = 10;
x = x + 1;
x += 1;
x++;

console.log(x);   // 13


let p = 10;
let q = "10";

if(p == q){
    console.log("Equal");
}else{
    console.log("Not Equal");
}
//=====>  Equal

if(p === q){
    console.log("Equal");
}else{
    console.log("Not Equal");
}
//=====>  Not Equal