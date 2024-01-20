

const colors = ["white", "black", "green", "red"];
console.log(colors);    //  ['white', 'black', 'green', 'red']
console.log(colors[2]); //  green
console.log(colors.length); // 4


// Normal For-Loop

let res = "";
for(let i = 0; i < colors.length; i++){
    res += `${colors[i]} `;
}

console.log(res);   //   white black green red 


// for-in loop

res = "";
for(let idx in colors){
    res += `${colors[idx]} `;
}

console.log(res);    //  white black green red


// for-of loop

res = "";
for(let color of colors){
    res += `${color} `;
}

console.log(res);   //  white black green red


// for-Each Function 

res = "";
colors.forEach(function(color) {
    res += `${color} `;
})

console.log(res);   //  white black green red


// for-Each with Arrow Function 

res = "";
colors.forEach(color => {
    res += `${color} `;
})

console.log(res);   //  white black green red


// Complex Array


const employees = [
    {
        sno : "A001",
        name : "Rajan",
        age : 25,
        desg : "Soft. Engineer"
    },
    {
        sno : "A002",
        name : "Raju",
        age : 28,
        desg : "Sr. Soft. Engineer"
    },
    {
        sno : "A003",
        name : "Pankaj",
        age : 30,
        desg : "Tech Lead"
    },
    {
        sno : "A004",
        name : "John",
        age : 35,
        desg : "Manager"
    },
    {
        sno : "A005",
        name : "Johny",
        age : 40,
        desg : "Sr. Manager"
    },
];

console.log(employees);


// Print Junior Employees age <= 30

const jrEmployees = [];
for(let employee of employees){
    if(employee.age <= 30){
        jrEmployees.push(employee);
    }
}

console.log(jrEmployees);


//  Filter

const jrEmployee = employees.filter( employee => employee.age <= 30);
console.log(jrEmployee);


//  Map

const jrEmployee2 = employees.filter( employee => {
    return employee.age <= 30;
});
console.log(jrEmployee2);