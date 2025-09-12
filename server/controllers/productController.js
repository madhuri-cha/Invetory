import ProductModel from "../models/Product.js";
import SupplierModel from "../models/Supplier.js";
import CategoryModel from "../models/Category.js";

const getProducts = async (req, res) => {

    try{
        
        const suppliers = await SupplierModel.find();
        const products = await ProductModel.find().populate('categoryId').populate('supplierId');
        const categories = await CategoryModel.find();
        return res.status(200).json({ success: true, products, suppliers, categories });
    }
    catch (error)
    {
        console.error("Error fetching suppliers:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const addProducts = async (req, res) => {

try{

    const {name, description, price, stock, categoryId, supplierId} = req.body;

    const existingProduct = await ProductModel.findOne({ name });
    if (existingProduct) {
        return res.status(400).json({ success: false, message: "Product already exists" });
    }

    const newProduct = new ProductModel({
        name,
        description,
        price,
        stock,
        categoryId,
        supplierId
    });

    await newProduct.save();
    return res.status(201).json({ success: true, message: "Product added successfully", product: newProduct });
} catch (error) {
    console.error("Error adding product:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
}
}

export { getProducts, addProducts };