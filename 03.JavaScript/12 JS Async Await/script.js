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

const makeCoffee = async () => {
    try {
        let msg = await getMilk();
        console.log(msg);

        msg = await boilMilk();
        console.log(msg);

        msg = await addSugarandMilk();
        console.log(msg);

    } catch (e) {
        console.log(e);
    }
};

makeCoffee();