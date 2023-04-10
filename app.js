import express from "express";
import { databaseLoader } from "./database.js";

import empRoutes from './routes/employee.js'
import contactRoutes from './routes/contact.js'
const app = express();
databaseLoader()
app.use(express.json())

app.use("/employee",empRoutes)
app.use("/contact",contactRoutes)


app.listen(3000,()=>console.log('connected to server'))