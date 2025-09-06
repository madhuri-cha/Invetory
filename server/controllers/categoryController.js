import React from 'react'
import CategoryModel from '../models/Category';

const add = async (req, res) => {

try{
    
    const {categoryName, categoryDescription} = req.body;

    const existingCategory = await CategoryModel.findOne({ categoryName });
    if (existingCategory) {
        return res.status(400).json({ message: "Category already exists" });
    }

    const newCategory = await CategoryModel.create({
        name: categoryName,
        description: categoryDescription
    });

    await newCategory.save();
    return res.status(201).json({ message: "Category added successfully", category: newCategory });
} catch (error) {
    console.error("Error adding category:", error);
    return res.status(500).json({ message: "Internal server error" });
}
}

}

export default categoryController
