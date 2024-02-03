const express = require("express");
const welcomeController = require("./controllers/welcomeController.js");
const goodByeController = require("./controllers/goodByeController.js");
const goodAfternoonController = require("./controllers/goodAfternoonController.js");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/welcome', welcomeController);
app.post('/api/goodbye', goodByeController);
app.post('/api/goodafternoon', goodAfternoonController);


app.listen(port,() => {
    console.log("Listening to " + port);
});
