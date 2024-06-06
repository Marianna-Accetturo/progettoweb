const express = require("express")
const cors = require('cors')
const mongoose = require("mongoose")
const collectionRoutes = require("./routes/collections")

const path = "mongodb+srv://progetto:ciao@cl.8mgpwsf.mongodb.net/?retryWrites=true&w=majority&appName=Cl"
const app = express()
app.use(cors())
app.use("/api/collections", collectionRoutes)

mongoose.connect(path).then( () => {
    console.log("database connected")
    app.listen(3000, () => {
        console.log("listening on port 3000")
    })
}).catch((err) => {
    console.log(err)
})
