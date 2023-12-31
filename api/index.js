import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js'
import authRouter from './routes/auth.route.js'
dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('connected to database successful')
})
.catch((err) =>{
    console.log(err)
})

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('server is up and running')
})
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

// creating middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
})