const Weather = (data, callback) => {

    const latitude = data['latitude']

    const longitude = data['longitude']

    url = "https://api.darksky.net/forecast/8bba63258ebc268fc1df0494e8cf0450/" + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude) + "?units=si&lang=en"

    request({ url: url, json: true }, (error, response) => {

        if (error) {

            callback(error, undefined)

        } else {

            callback(undefined, response.body.currently.temperature)

        }
    })
}