// Asynchronous - 

const test = async () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done");
        }, 5000)
    });

    let result = await promise;
    console.log(result);
}

// test();

const async1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Async 1 - after 3 seconds`);
            resolve();
        }, 3000);
    })
}

const async2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Async 2 - after 2 seconds`);
            resolve();
        }, 2000);
    });
}
const async3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Async 3 - after 1 second`);
            resolve();
        }, 1000);
    });
}

// console.log("-------- without async --------");
// async1();
// async2();
// async3();

console.log("-------- with async --------");
const doThings = async () => {
    await async1();
    await async2();
    await async3();
}

doThings();