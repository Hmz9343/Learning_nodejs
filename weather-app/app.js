const { Geocode, Forecast } = require('./utils/utility');

const address = process.argv[2]

if (!address) {

    console.log("Please provide an address.")

} else {

    Geocode(address, (error, data) => {

        if (error) {

            console.log(error)

        } else {

            Forecast(data, (error, response) => {

                if (error) {

                    console.log(error)

                } else {

                    console.log(response)

                }
            })
        }
    })
}