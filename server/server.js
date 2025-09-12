import express from 'express';
import cors from 'cors'
import connectDB from './db/connection.js';
import User from './models/User.js';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';
import categoryRoutes from './routes/categoryRoutes.js';  
import supplierRoutes from './routes/supplierRoutes.js'
import productRoutes from './routes/productRoutes.js'
import bcrypt from 'bcrypt'


dotenv.config();

const app = express();
//middleware
app.use(cors());
app.use(express.json())
app.use('/api/auth', authRoutes); //router for handling login and registration
app.use('/api/category', categoryRoutes);
app.use('/api/supplier', supplierRoutes);
app.use('/api/product', productRoutes);

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