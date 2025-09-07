import CategoryModel from '../models/Category.js';

const addCategory = async (req, res) => {

try{
    
    const {categoryName, categoryDescription} = req.body;

    const existingCategory = await CategoryModel.findOne({ categoryName });
    if (existingCategory) {
        return res.status(400).json({ message: "Category already exists" });
    }

    const newCategory = await CategoryModel({
        categoryName,
        categoryDescription
    });

    await newCategory.save();
    return res.status(201).json({ success: true, message: "Category added successfully", category: newCategory });
} catch (error) {
    console.error("Error adding category:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
}
}

const getCategories = async (req, res) => {

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

const updateCategory = async (req, res) => 
{
 try{
    const { id } = req.params;
    const { categoryName, categoryDescription } = req.body;

    const existingCategory = await CategoryModel.findById(id);
    if (!existingCategory) {
        return res.status(404).json({ success: false, message: "Category not found" });
    }

    const updatedCategory = await CategoryModel.findByIdAndUpdate(
        id, 
        {
            categoryName,
            categoryDescription
        },
        {
            new: true
        }
    );

    return res.status(200).json({ success: true, message: "Category updated successfully", category: updatedCategory });

 } 
 catch (error) {
    console.error("Error updating category:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
 }
}

const deleteCategory = async (req, res) => {
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

export {addCategory, getCategories, updateCategory, deleteCategory}
