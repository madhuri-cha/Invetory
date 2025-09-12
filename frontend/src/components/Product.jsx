import React, {useEffect, useState} from 'react'

const Product = () => {

const [openModal, setOpenModal] = useState(false);
const [categories, setCategories] = useState([]);
const [suppliers, setSuppliers] = useState([]);


const fetchProducts = async () => {
  // Fetch products from API


  
}

useEffect(() => {
  fetchProducts();
}, [])

  return (
    <div>
      <h1>Product Management</h1>
      <div>
        <input 
        type="text" 
        placeholder='Search products...'
        onChange={handleSearch}
        />
        <button 
        onClick={() => handleAddProduct(true)}
        >
        Add Product
        </button>

      </div>
        {openModal && (

          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <h1 className="text-xl font-bold mb-4">{editSupplier ? "Edit Product" : "Add Product"}</h1>
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold"
            >
              X
            </button>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                // value={formData.name}
                // onChange={handleChange}
                required
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                // value={formData.email}
                // onChange={handleChange}
                required
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="price"
                placeholder="Enter Price"
                // value={formData.address}
                // onChange={handleChange}
                required
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                name="stock"
                placeholder="Stock"
                // value={formData.phone}
                // onChange={handleChange}
                required
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div>
                <select name="category" id="">
                  <option value="">Select Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="home_appliances">Home Appliances</option>
                </select>
              </div>

              <div>
                <select name="supplier" id="">
                  <option value="">Select Supplier</option>
                  <option value="supplier1">Supplier 1</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  {editSupplier ? "Save Changes" : "Add Supplier"}
                </button>

                {addEditModal && (
                  <button
                    type="button"
                    className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>  
        )}
    </div>
  )
}

export default Product
