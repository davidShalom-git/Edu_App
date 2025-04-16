const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const mongoose = require('mongoose')
const auth = require('./routes/authRoutes')


mongoose.connect(process.env.MONGODB_URL).then(()=> {
    console.log("MongoDB Connected ra......")
}).catch((error)=> {
    console.log("Etho Kolaaru aagiruku",error);
})


app.use(cors())
app.use(bodyParser.json())

app.use(express.json())

app.use('/auth', auth);


app.listen(6300,()=> {
    console.log("Server Connected ra......")
})