const doWorkCallback = (name, callback) => {
    setTimeout(() => {
        console.log(name);
        callback(undefined, [1, 2, 3]);
    }, 2000);
};

doWorkCallback("Hamza", (error, result) => {
    console.log(error);
    console.log(result);
})