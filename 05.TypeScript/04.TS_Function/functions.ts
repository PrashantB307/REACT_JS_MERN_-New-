const greet = (name : string, age : number) : void => {
    let res : string = `Hello ${name}, you are ${age} yrs old.`;
    console.log(res);
}

greet("Prashant", 23); 


//  Print Objects

interface Student{
    name : string;
    age : number;
    college : string;
}

const printStudent = (student : Student) : void => {
    const res : string = JSON.stringify(student);
    console.log(res);
};

const student : Student = {
    name : "Pawan",
    age : 21,
    college : "IES"
};

printStudent(student);   //   {"name":"Pawan","age":21,"college":"IES"}