

// console statements ========>

console.log("I am a Log message");
console.info("I am a Information message");
console.warn("I am a warning message");
console.error("I am an error message");
console.table({name : "Pawan" , age : 20});


// Variable Declaration ========>

// 1. camelCase for variables
// 2. never start with Number
// 3. a-z, $, _ Allowed


// Variables Keywords  ==>   let , const , var(old)

// let    ==> Non Fixed variables
// const  ==> Fixed Variables

let a = 10;


//  Data Types Allowd  =>  String , Number, Boolean, Object, Array

let name = "Pawan";
console.log(name);


const name2 = "pawan";
// console.log(name2);
// name2 = 20;   // Error Not allowed


const employeeName = "John";
console.log("Employee Name : " + employeeName + " Type is : " + typeof employeeName);


// Backtick Operator( `` )

console.log(`Employee Name : ${employeeName} type is : ${typeof(employeeName)}`);

const employeeAge = 49;
console.log(`Empoyee Age : ${employeeAge}`);

const isManager = true;
console.log(`Is Manager ? ${isManager}`);


// Employee Object ======>

const employee = {
    name : "John",
    age : 49,
    isManager : true
};

console.log(employee);     //  {name: 'John', age: 49, isManager: true}
console.log(employee.name); //  John


// Array  ======>

const tech = ["html", "css", "JavaScript"];
console.log(tech);   //   ['html', 'css', 'JavaScript']
console.log(tech[1]);  //  css
