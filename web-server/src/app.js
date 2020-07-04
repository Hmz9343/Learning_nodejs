const express = require('express');
const hbs = require('hbs');
const path = require('path');
const { Geocode, Forecast } = require('./utils/utility')

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
const viewpath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs');
app.set('views', viewpath);
hbs.registerPartials(partialPath);

app.use(express.static(publicDirectoryPath))

app.get("", (req, res) => {
    res.render('index', { title: 'Weather', name: 'Hamza', age: 22 })
});

app.get("/about", (req, res) => {
    res.render('about', { title: 'About Page', name: 'Hamza', age: 22 })
});

app.get("/help", (req, res) => {
    res.render('help', { title: 'Help Page', name: 'Hamza', age: 22 })
});

app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            "error": "Please provide some address."
        });
    }

    Geocode(req.query.address, (error, coordinates) => {
        if (error) {
            return res.send({ error })
        } else {
            Forecast(coordinates, (error, { forecast, temperature, precipitation }) => {
                if (error) {
                    return res.send({ error })
                }
                //console.log(data)
                res.send({
                    "location": req.query.address,
                    forecast,
                    temperature,
                    precipitation
                })

            })
        }
    })

    /*   res.send({
          forecast: 'It is snowing',
          location: req.query.address,
          address: req.query.address
      }); */
})

app.get('/products', (req, res) => {
    console.log(req.query);
    res.send({
        "products": []
    })
})

app.get('*', (req, res) => {
    res.render('404', { errorMessage: "Page not found." })
})
app.listen(3000, () => {
    console.log('Server is up at port 3000');
})