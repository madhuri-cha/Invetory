import UserModel from '../models/User.js';

const addUser = async (req, res) => {

try{
    
    const {name, email, address, role, password} = req.body;

    const existingUser = await UserModel.findOne({ name });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await UserModel({
        name,
        email,
        address,
        role,
        password
    });

    await newUser.save();
    return res.status(201).json({ success: true, message: "User added successfully", category: newCategory });
} catch (error) {
    console.error("Error adding User:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
}
}

const getUser = async (req, res) => {

    try{

        const categories = await CategoryModel.find();
        return res.status(200).json({ success: true, categories });
    }
    catch (error)
    {
        console.error("Error fetching categories:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}



const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const existingCategory = await CategoryModel.findById(id);
        if (!existingCategory) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        await CategoryModel.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Category deleted successfully" });
        
    } catch (error) {
        console.error("Error deleting category:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export {addUser, getUser, deleteUser}
