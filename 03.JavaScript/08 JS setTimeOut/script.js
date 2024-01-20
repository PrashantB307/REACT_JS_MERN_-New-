
let cnt = 1;
console.log(new Date().toLocaleTimeString());
let greet = () => {
    console.log(`Good Morning, ${cnt}`);
    console.log(new Date().toLocaleTimeString());
    cnt++;
}

let interval = setInterval( () => {
    greet()
}, 1000);

setTimeout( () => {
   clearInterval(interval);
}, 5000);


let cnt1 = 1;
console.log(new Date().toLocaleTimeString());
let greet1 = () => {
    console.log(`Good Morning, ${cnt}`);
    cnt++;
    console.log(new Date().toLocaleTimeString());
}

setTimeout( () => {
    greet1();
}, 3000);