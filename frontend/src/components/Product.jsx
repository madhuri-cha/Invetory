// import React, {use, useEffect, useState} from 'react'
// import axios from 'axios';
// // import { set } from 'mongoose';


// const Product = () => {

// const [openModal, setOpenModal] = useState(false);
// const [categories, setCategories] = useState([]);
// const [suppliers, setSuppliers] = useState([]);
// const [formData, setFormData] = useState({  name: '', description: '', price: '', stock: '', categoryId: '', supplierId: '' });



// const fetchProducts = async () => {
//   // Fetch products from API

//     try {
//       const response = await axios.get("http://localhost:5000/api/product", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('pos-token')}`
//         }
//       });
//       setSuppliers(response.data.suppliers);
//       setCategories(response.data.categories);
//     } catch (error) {
//       console.error("Error fetching suppliers:", error);
//     } 
// }
// useEffect(() => {
//   fetchProducts();
// }, []);

// const handleChange = (e) => {
  
// const { name, value } = e.target;
// setFormData((prevData) => ({
//   ...prevData,
//   [name]: value,
// }));

// }

// const handleSubmit = async(e) => {

//    e.preventDefault();
   
//       try {
//         const response = await axios.post(
//           "http://localhost:5000/api/product/add",
//           formData,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem('pos-token')}`
//             },
//           }
//         );
//         if (response.data.success) {
//           alert("Product added successfully");
//           setOpenModal(false);
//           setFormData({ name: '', description: '', price: '', stock: '', categoryId: '', supplierId: '' });

//         } else {
//           alert('Failed to add Product. Please try again');
//         }
//       } catch (error) {
//         alert("Error adding Product. Please try again.");
//       }
    
// }

// const handleAddProduct = () => {
//     setOpenModal(true);
// }
// const handleSearch = () => {};


//   return (
//     <div>
//       <h1>Product Management</h1>
//       <div>
//         <input 
//         type="text" 
//         placeholder='Search products...'
//         onChange={handleSearch}
//         />
//         <button 
//         onClick={() => handleAddProduct(true)}
//         >
//         Add Product
//         </button>

//       </div>
//         {openModal && (

//           <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
//           {/*  <h1 className="text-xl font-bold mb-4">{editSupplier ? "Edit Product" : "Add Product"}</h1> */}
//             <button
//               onClick={() => setOpenModal(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold"
//             >
//               X
//             </button>
//             <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Product Name"
//                 // value={formData.name}
//                 // onChange={handleChange}
//                 required
//                 className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="text"
//                 name="description"
//                 placeholder="Description"
//                 // value={formData.email}
//                 // onChange={handleChange}
//                 required
//                 className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="text"
//                 name="price"
//                 placeholder="Enter Price"
//                 // value={formData.address}
//                 // onChange={handleChange}
//                 required
//                 className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="number"
//                 name="stock"
//                 placeholder="Stock"
//                 // value={formData.phone}
//                 // onChange={handleChange}
//                 required
//                 className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />

//               <div>
//                 <select name="category" >
//                   <option value="">Select Category</option>
//                     {categories && categories.map((category) => (
//                     <option key={category._id} value={category._id}>
//                       {category.categoryName}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <select name="supplier" >
//                   <option value="">Select Supplier</option>
//                   {suppliers && suppliers.map((supplier) => (
//                     <option key={supplier._id} value={supplier._id}>
//                       {supplier.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="flex flex-col gap-2">
//                 <button
//                   type="submit"
//                   className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
//                 >
//                  Add Product
//                 </button>

              
//                   <button
//                     type="button"
//                     className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
//                     onClick={() => setOpenModal(false)}
//                   >
//                     Cancel
//                   </button>
                
//               </div>
//             </form>
//           </div>
//         </div>  
//         )}
//     </div>
//   )
// }

// export default Product


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
  const [openModal, setOpenModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    categoryId: '',
    supplierId: '',
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/product', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('pos-token')}`,
        },
      });
      if(response.data.success)
      {
      setSuppliers(response.data.suppliers);
      setCategories(response.data.categories);
      setProducts(response.data.products);
      }
      else {
        alert("Failed to fetch products. Please try again");
      }
 
    } catch (error) {
      console.error('Error fetching suppliers:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/product/add',
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('pos-token')}`,
          },
        }
      );
      if (response.data.success) {
        alert('Product added successfully');
        setOpenModal(false);
        setFormData({
          name: '',
          description: '',
          price: '',
          stock: '',
          categoryId: '',
          supplierId: '',
        });
      } else {
        alert('Failed to add Product. Please try again');
      }
    } catch (error) {
      alert('Error adding Product. Please try again.');
    }
  };

  const handleAddProduct = () => {
    setOpenModal(true); // ✅ fixed
  };

  const handleSearch = () => {};

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Product Management</h1>

      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          onChange={handleSearch}
          className="border border-gray-300 rounded-md px-3 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleAddProduct}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Add Product
        </button>
      </div>


    <div>
          <table className="w-full border-collapse border border-gray-300 shadow-sm rounded-md overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Category Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Supplier Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Stock</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.categoryId.categoryName}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.supplierId.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.stock}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredSuppliers.length === 0 && <h1 className="text-gray-500">No suppliers found</h1>}
        </div>


      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold"
            >
              X
            </button>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="price"
                placeholder="Enter Price"
                value={formData.price}
                onChange={handleChange}
                required
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={formData.stock}
                onChange={handleChange}
                required
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div>
                <select
                  name="categoryId"
                  value={formData.categoryId}
                  onChange={handleChange}
                  className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Category</option>
                  {categories &&
                    categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.categoryName}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <select
                  name="supplierId"
                  value={formData.supplierId}
                  onChange={handleChange}
                  className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Supplier</option>
                  {suppliers &&
                    suppliers.map((supplier) => (
                      <option key={supplier._id} value={supplier._id}>
                        {supplier.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  Add Product
                </button>

                <button
                  type="button"
                  className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
                  onClick={() => setOpenModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
