const express = require('express');
const app = express();

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// CORS
const cors = require('cors');
app.use(cors());

// Routes
const Routes = require("./routes/Routes");
app.use(Routes);

app.listen(8080, (req, res) => {
    console.log("Server is running...");
})