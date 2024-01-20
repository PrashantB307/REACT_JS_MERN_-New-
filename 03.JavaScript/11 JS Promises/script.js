/**
 *    How to Prepare Cofffee
 * 
 * 1. Get Milk from Shop
 * 2. Boil Milk
 * 3. Add Sugar & Coffee
 *  
 */


const getMilk = () => {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("1. Get Milk from Shop");
        }, 500);
    });
};

const boilMilk = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("2. Boil Milk");
        }, 5000);
    });
};

const addSugarandMilk = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("3. Add Sugar & Coffee");
        }, 1000);
    });
};

const makeCoffee = () => {
    getMilk().then( (msg) => {
        console.log(msg);

        boilMilk().then( (msg) => {
            console.log(msg);

            addSugarandMilk().then( (msg) => {
                console.log(msg);
            });
        });
    });
};

makeCoffee();