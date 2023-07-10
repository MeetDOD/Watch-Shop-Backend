const express = require("express");
const cors = require("cors");
const connectionDB = require("./database/db");
const dotenv = require("dotenv");
const router = require("./routes/productRoutes");

const app = express();
app.use(express.json())
app.use(cors())
dotenv.config();
connectionDB();

app.use("/api/products", router);

app.listen(5000,() => {
    console.log('🦸' )
})