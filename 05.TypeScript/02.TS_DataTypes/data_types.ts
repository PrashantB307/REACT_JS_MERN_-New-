
//   String =====>

const employeeName : string = "John";
console.log(employeeName);


//   Number =====>

const age : number = 456;
console.log(age);


//   Boolean =====>

const isManager : boolean = true;
console.log(isManager);


//   Object  =====>

interface Mobile {
    brand : string;
    name : string;
    price : number;
}

const mobile : Mobile = {
    brand : "Apple",
    name : "15 Pro Max",
    price : 67788
};
console.log(mobile);   //   { brand: 'Apple', name: '15 Pro Max', price: 67788 }
 

//    Arrays  =====>

const colors : string[] = ["Black", "White", "Red", "Silver"];
console.log(colors);   //   [ 'Black', 'White', 'Red', 'Silver' ]


//    any =====>

let abc : any = 100;
console.log(abc);   // 100

abc = "test";
console.log(abc);   // test

abc = true;
console.log(abc);   // true

