

// CallBack =====>
// Function which takes another function as parameter

const employees = [{sno : 'A01', name : "Pankaj"}, {sno : 'A02', name : "Pawan"}];

const createNewEmp = (employee, callback) => {
    setTimeout( () => {
        console.log("Create Employee");
        employees.push(employee);
        callback();
    }, 2000)
};

const readEmp = () => {
    setTimeout( () => {
        console.log("Readimg Employee");
        console.log(employees);
    }, 1000);
};

createNewEmp({sno : 'A03', name : "Rishi"}, readEmp);
