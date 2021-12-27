const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodypaser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();
dotenv.config({
    path: './config/config.env'
})

//Usar el body-parser

app.use(bodypaser.json())

// app.use(cors({
//   origin: "https://db-final-proyect.herokuapp.com"
// }))

// if(process.env.NODE_ENV ==='development'){
//     app.use(cors({
//         origin: process.env.CLIENT_URL
//     }))

//     app.use(morgan('dev'))
// }


app.use(cors({
    origin: "http://localhost:3000"
}))

// mongoose.connection.on("open", () => {
//   console.log("Base de datos conectada");
// });

// let { HOST, DBPORT, DBNAME } = process.env;

// const uri = `mongodb://${HOST}:${DBPORT}/${DBNAME}`;
// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }, { ssl: true })

const mongoAtlasUri = "mongodb://heroku10:londonmuse48@cluster0-shard-00-00.detyr.mongodb.net:27017,cluster0-shard-00-01.detyr.mongodb.net:27017,cluster0-shard-00-02.detyr.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-uo9t3l-shard-0&authSource=admin&retryWrites=true&w=majority"

try {
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true }, { ssl:true },
    () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));




//Cargando las rutas
const userRouter = require('./routes/user.routes')
const productRouter = require('./routes/product.routes')
const salesRouter = require('./routes/sales.routes')
const categoriesRouter = require('./routes/categories.routes')

//Usar las rutas
app.use('/user/',userRouter);
app.use('/product/',productRouter);
app.use('/sales/',salesRouter);
app.use('/categories/',categoriesRouter);


app.use((req,res,next)=>{
    res.status(400).json({
        success: false,
        message: "Pagina no encontrada"
    })
});


const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Escuchando por el puerto ${PORT}`)
});