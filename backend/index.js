import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import bodyParser from "body-parser";

const app = express();


app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
// app.use(express.json());
app.use(cors());

app.use("/posts",postRoutes);

const URL ="mongodb+srv://tejaswani:tejaswani23@cluster0.bve3e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT= process.env.PORT || 5000;

mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("mongodb is connected");
}).catch((e)=>{
    console.log(e);
})

app.listen(PORT,()=>{
    console.log("server is running");
})