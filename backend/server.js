import express from 'express';
import cors from 'cors';
import dotenv from'dotenv';
import products from '../data/products.js';
import connectDB from './config/db.js';
import Colors from 'colors';
import productRoute from './route/productRoute.js';



const app=express();

dotenv.config();
app.use(cors());
app.use((req,res,next)=> {
  console.log(req.originalUrl);
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  console.log(statusCode);
  next();
})

app.use('/api/products',productRoute);


app.get('/api/products/:id',(req,res) => {
  const product = products.find(p => p.id ==req.params.id);
  res.json(product);
})

const PORT = process.env.PORT || 5000;
app.listen(5000,() => {
	console.log('server is running on port 5000'.cyan);
})