import express from 'express'

import config from './Config/config';

import connection from './Utils/connection';
import { userRoutes } from './Routes/user.routes';
import { patientRoutes } from './Routes/patientinfo.routes';

const app = express();
const port =config.port




app.use(express.json());
app.use(userRoutes)
app.use(patientRoutes)


app.get("/",(req,res)=>{
    res.send("hello World")
});

// app.post("/book", addBook);

app.listen(port,async()=>{
    console.log("Server Runing");

    await connection();

    });