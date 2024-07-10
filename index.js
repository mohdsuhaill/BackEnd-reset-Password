import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './Database/config.js'
import userRouter from './Routers/userRoute.js'

dotenv.config()

const app = express()

// Middelewares
app.use(express.json())
app.use(cors({
    origin:'*',
    credentials:true
}))
// DB connection
connectDB();


// routes

app.get('/',(req,res)=>{
    res.status(200).send("Hi welcom to culineries API")
})


app.use("/api/user",userRouter)
// listen
app.listen(process.env.PORT,()=>{
    console.log("App is Started and running on the Port");
})