const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');
const food = require('./routes/food');
const user = require('./routes/user');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", food)
app.use("/", user)

db()

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






