const mongoose = require("mongoose")
const db = () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.MONGO_URL)
        console.log("db coneected".bgGreen);
    } catch (error) {
        console.log(`unable to coneected ${error}`);
        process.exit()  //stop the server
    }
}

module.exports = db