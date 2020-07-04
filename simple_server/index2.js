var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
});

app.get("/process_get", (req, res) => {
    response = {
        firstname: req.query.first_name,
        lastname: req.query.last_name
    };
    console.log();
    res.end(JSON.stringify(response));
});

app.get("/", (req, res) => {
    res.end('Hello world');
});

app.post("/", (req, res) => {
    res.send("hello post.");
});

app.delete('/del_user', (req, res) => {
    res.send('Hello delete.')
});

app.get('/list_user', (req, res) => {
    res.send('Page Listing.');
});

const port = process.env.PORT || 8081;

var server = app.listen(port, () => console.log(`Server running on port http://127.0.0.1:${port}`));