import axios from "axios";
import React from "react";

const Categories = () => {

    const [categoryName, setCategoryName] = React.useState("");
    const [categoryDescription, setCategoryDescription] = React.useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const response = await axios.post(
        "http://localhost:3000/api/category/add", 
        {categoryName, categoryDescription},
        {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('pos-token')}`
            },
        }
      );
      if(response.data.success) {
        // Handle success (e.g., show a success message, reset form, etc.)
            alert('Category added successfully');
            setCategoryName("");
            setCategoryDescription("");
     } else {
        // Handle error (e.g., show an error message)
        alert('Failed to add category');
      }

    };
    

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-8">Category Management</h1>

      {/* Flex Layout: Form (left) + List (right) */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Add Category Form */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-center text-xl font-bold mb-4">Add Category</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Category Name"
                  className="border w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Category Description"
                  className="border w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onChange={(e) => setCategoryDescription(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Add Category
              </button>
            </form>
          </div>
        </div>

        {/* Category List */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-center text-xl font-bold mb-4">Categories List</h2>
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">#</th>
                  <th className="border p-2">Category Name</th>
                  <th className="border p-2">Description</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Row */}
                <tr>
                  <td className="border p-2 text-center">1</td>
                  <td className="border p-2">Electronics</td>
                  <td className="border p-2">Mobile, Laptop, Accessories</td>
                  <td className="border p-2 text-center">
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600">
                      Edit
                    </button>
                    <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                      Delete
                    </button>
                  </td>
                </tr>
                {/* More rows will come dynamically */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
