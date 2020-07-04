/* const request = require('request');

address = 'New Delhi';

url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=sk.eyJ1IjoiaGFtemF6IiwiYSI6ImNrOHBzM21zMDAwNTQzbHRnd25va3A2OGoifQ.J0RFi4cnH0rRnd-2edI4mQ";

request(url, { json: true }, (error, response, body) => {
    //console.log(error);
    //console.log(response);
    console.log(body.url);

}) */

const https = require('https');
address = 'New Delhi';
url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=sk.eyJ1IjoiaGFtemF6IiwiYSI6ImNrOHBzM21zMDAwNTQzbHRnd25va3A2OGoifQ.J0RFi4cnH0rRnd-2edI4mQ";
const request = https.get(url, (response) => {
    var data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log(err)
})

request.end();