const express = require("express");
const welcomeController = require("./controllers/welcomeController.js");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api', welcomeController);

app.listen(port,() => {
    console.log("Listening to " + port);
});
