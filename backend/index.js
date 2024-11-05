import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config({})
import connectDB from "./utils/db.js"
import userRoute from "./routes/user_routes.js"
import companyRoute from "./routes/company_routes.js"
import jobRoute from "./routes/job_routes.js"
import applicationRoute from "./routes/application_routes.js"




const app=express();




//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
const corsOptions={
  origin: 'http//localhost:5173',
  credentials:true
}
app.use(cors(corsOptions));

const PORT= process.env.PORT|| 3000;

//api's

app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);






app.listen(PORT,()=>{
  connectDB();
  console.log(`server running at port ${PORT}`)
})