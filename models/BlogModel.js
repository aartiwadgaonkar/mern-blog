const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "please provide title"]
    },
    desc: {
        type: String,
        required: [true, "please provide desc"]
    },
    image: {
        type: String,
        required: [true, "please provide image url"]
    },
    publish: {
        type: Boolean,
        default: false
    },

})

module.exports = mongoose.model("blog", blogSchema)