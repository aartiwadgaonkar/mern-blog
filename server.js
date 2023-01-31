const express = require("express")
// const dotenv=require("dotenv")
require("dotenv").config({ path: "./config/.env" })
const db = require("./config/db")
const cors = require("cors")
require("colors")
// console.log(process.env.PORT);
db()
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(cors())
// app.use(cors({
//     origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
//     methods: ["GET"]
// }))
app.use("/blog", require("./routes/blogRoutes"))



app.listen(PORT, console.log(`server running....${PORT}`.bgBlue))