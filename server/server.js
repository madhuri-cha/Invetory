import express from 'express';
import cors from 'cors'
import connectDB from './db/connection.js';
import User from './models/User.js';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';
import categoryRoutes from './routes/categoryRoutes.js';  
import supplierRoutes from './routes/supplierRoutes.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
//import dashboardRoutes from './routes/dashboardRoutes.js'
import dashboardRoutes from './routes/dashboardRoutes.js';

import bcrypt from 'bcrypt'


dotenv.config();

const app = express();
//middleware
app.get("/", (req, res) => {
  res.status(200).send("Inventory Backend API is running 🚀");
});

//app.use(cors());
//import cors from "cors";

// app.use(cors({
//   origin: [
//     "https://just-renewal-production.up.railway.app"
//   ],
//   credentials: true
// }));
// app.use(cors({
//   origin: true,
//   credentials: true
// }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://just-renewal-production.up.railway.app");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});


// app.use(cors({
//   origin: [
//     "https://just-renewal-production.up.railway.app"
//   ],
//   methods: ["GET","POST","PUT","DELETE","OPTIONS"],
//   allowedHeaders: ["Content-Type","Authorization"],
//   credentials: true
// }));

// app.options("*", cors());


app.use(express.json())
app.use('/api/auth', authRoutes); //router for handling login and registration
app.use('/api/category', categoryRoutes);
app.use('/api/supplier', supplierRoutes);
app.use('/api/product', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/order', orderRoutes);
//app.use('api/dashboard', dashboardRoutes)
app.use('/api/dashboard', dashboardRoutes);

const PORT=process.env.PORT || 5000; 

app.listen(PORT, async () => {
    await connectDB(); // Connect to the database: database name is Store

    console.log(`Server Running at ${PORT}`);

   //Insert test data only once
    // const exists = await User.findOne({ name: "Demo Store" });
    // if (!exists) {
        
    //  const hashedPassword = await bcrypt.hash("password", 10);
    //     await User.create({
    //         name: "Demo Store",
    //         email:"madhu@gmail.com",
    //         password: hashedPassword,
    //         address: "123 Demo St",
    //         role: "admin",
    //         phone: "123-456-7890"
    //     });
    //     console.log("Sample Store inserted");
    // }
});
