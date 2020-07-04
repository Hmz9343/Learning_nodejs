/* setTimeout(() => {
    console.log("Hello");
}, 2000);

const names = ['mirza', 'hamza', 'ali']

const shortnames = names.filter((name) => {
    return name.length == 3
});

const geocode = (address, callback) => {
    setTimeout(() => {

        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data);
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
}) */

add(1, 2, (data) => {
    console.log(data)
})