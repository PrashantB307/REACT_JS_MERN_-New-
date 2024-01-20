/**
 *    How to Prepare Cofffee
 * 
 * 1. Get Milk from Shop
 * 2. Boil Milk
 * 3. Add Sugar & Coffee
 *  
 */


const getMilk = (boilMilk, addSugarandMilk) => {
    setTimeout( () => {
        console.log("1. Get Milk from Shop");
        boilMilk(addSugarandMilk);
    }, 500);
};

const boilMilk = (addSugarandMilk) => {
    setTimeout( () => {
        console.log("2. Boil Milk");
        addSugarandMilk();
    }, 5000);
};

const addSugarandMilk = () => {
    setTimeout( () => {
        console.log("3. Add Sugar & Coffee");
    }, 1000);
};

const makeCoffee = () => {
    getMilk(boilMilk, addSugarandMilk);  
};
makeCoffee();