import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import morgan from 'morgan';
import productRoutes from './routes/productRoute.js';
import orderRoutes from './routes/orderRoute.js'
import userRoutes from './routes/userRoute.js'
import categoryRoutes from './routes/categoryRoute.js'
import checkoutRoutes from './routes/checkoutRoute.js'
import specificRoutes from './routes/specificRoute.js'
import cors from 'cors'

const app = express();
const port = 3000;
app.options('*',cors())

app.use(express.json())
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(morgan('tiny'))

app.use(`/api`,productRoutes)
app.use(`/api`,orderRoutes)
app.use(`/api`,userRoutes)
app.use(`/api`,categoryRoutes)
app.use(`/api`,checkoutRoutes)
app.use(`/api`,specificRoutes)


await mongoose.connect('mongodb+srv://eshop-user:Camaro9_11@cluster0.x2c5b.mongodb.net/eshop-database?retryWrites=true&w=majority&appName=Cluster0',)
.then(()=>{
  console.log('done connecting');
}).catch((err)=>{
  console.log(`error ${err}`);
})

app.listen(port,() => {
  console.log(`Example app listening on port ${port}`);
});
