const request = require('request');

const Geocode = (address, callback) => {

    const GeoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=sk.eyJ1IjoiaGFtemF6IiwiYSI6ImNrOHBzM21zMDAwNTQzbHRnd25va3A2OGoifQ.J0RFi4cnH0rRnd-2edI4mQ"

    request({ url: GeoCodeUrl, json: true }, (error, response) => {

        if (error) {

            callback("Unable to connect to the location service!", undefined);

        } else if (response.body.features.length == 0) {

            callback('Unable to find location. Try another search.', undefined);

        } else {

            callback(undefined, {

                latitude: response.body.features[0].center[1],

                longitude: response.body.features[0].center[0],

                location: response.body.features[0].place_name

            })
        }

    })
}

const Forecast = ({ latitude, longitude, location }, callback) => {



    url = "https://api.darksky.net/forecast/8bba63258ebc268fc1df0494e8cf0450/" + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude) + "?units=si&lang=en"

    request({ url: url, json: true }, (error, response) => {

        if (error) {

            callback(error, undefined)

        } else if (response.body.error) {

            callback(response.body.error, undefined)

        } else {

            callback(undefined, response.body.currently.temperature)

        }
    })
}



module.exports = {

    Geocode: Geocode,

    Forecast: Forecast
}