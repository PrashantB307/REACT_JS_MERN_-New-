const student = {
  name: "Rajan",
  age: 23,
  course: "B.Tech",
  college: "IES",
};

console.log(student); // {name: 'Rajan', age: 23, course: 'B.Tech', college: 'IES'}
console.log(student.college); //  IES
console.log(student[`name`]); //  Rajan

//  dynamic props
const propName = "course";
console.log(student[propName]); //  B.Tech

// Nested Object

const employeeInfo = {
  employeeName: "John Doe",
  employeeId: 27,
  salary: 50000,
  address: {
    locality: {
      address1: "1600 pebble road",
      address2: "Nearby XYZ Bank",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
};

console.log(employeeInfo);
console.log(employeeInfo.address);



// JSON  <---->  Object

/**
 *   Object   --->   JSON    --->  JSON.stringify()
 *     JSON   --->  Object   --->  JSON.parse()   
 */


const mobile = {
    brand : "Apple",
    model : "15 Pro Max",
    price : 135000
}

// Object --->  JSON 

let mobileStr = JSON.stringify(mobile);
console.log(mobileStr);  //  {"brand":"Apple","model":"15 Pro Max","price":135000}

// JSON   --->  Object

let mobileObj = JSON.parse(mobileStr);
console.log(mobileObj);  //  {brand: 'Apple', model: '15 Pro Max', price: 135000}


/**
 *  Get all Keys
 *  Get all Values
 *  GEt all entries
 */

console.log(Object.keys(mobile));    //  ['brand', 'model', 'price']
console.log(Object.values(mobile));  //  ['Apple', '15 Pro Max', 135000]
console.log(Object.entries(mobile)); 


for(let key of Object.keys(mobile)){
    console.log(`key : ${key} value : ${mobile[key]}`);
}

// key : brand value : Apple
// key : model value : 15 Pro Max
// key : price value : 135000