const mongoose = require('mongoose');

const db = () => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to MongoDB.')
    }).catch(err => {
        console.log('Failed to connect to MongoDB.')
        console.log(err)
    })
}

module.exports = db;