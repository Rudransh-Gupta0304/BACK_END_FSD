const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data fetched successfully");
    }, 2000);
});

myPromise.then((result) => {
    console.log(result);
});