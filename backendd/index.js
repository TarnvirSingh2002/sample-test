import express from "express";
import { db } from "./db.js";
import cors from "cors";
import router from "./Routers/userfunc.js";

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'], 
  }));
app.use(express.json());

app.use('/api/use',router);
db();
app.listen(5000,()=>{
    console.log("successfully registed at port 5000!");
})