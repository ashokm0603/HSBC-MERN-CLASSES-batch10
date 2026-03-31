import React, { useState, useEffect } from "react";
import AdminNav from "../components/AdminNav";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Form as BsForm } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const DeleteProducts = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://dmart-nextgen-backend.onrender.com/api/get-allproducts"
      );
      setProductDetails(response.data.allProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`https://dmart-nextgen-backend.onrender.com/api/delete-product/${id}`);
        toast.success("Product Deleted Successfully");
        fetchProducts();
      } catch (error) {
        toast.error("Error deleting product");
        console.log(error);
      }
    }
  };

  const filteredProducts = productDetails.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <AdminNav />
      <h1 id="title" style={{ textAlign: 'center', margin: '30px 0', color: 'var(--text-main)' }}>Delete Products</h1>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Filter UI */}
        <div style={{ marginBottom: '30px', maxWidth: '400px' }}>
          <BsForm.Control
            type="text"
            placeholder="Search products by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              borderRadius: '20px',
              padding: '12px 20px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              border: '1px solid var(--glass-border)'
            }}
          />
        </div>

        <div style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          overflow: 'auto',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          border: '1px solid var(--glass-border)'
        }}>
          <table className="table" style={{ marginBottom: 0, backgroundColor: 'transparent' }}>
            <thead style={{ background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))', color: 'white' }}>
              <tr>
                <th className="text-center p-3 border-0" style={{borderTopLeftRadius: '20px'}}>Name</th>
                <th className="text-center p-3 border-0">Cost</th>
                <th className="text-center p-3 border-0">Description</th>
                <th className="text-center p-3 border-0">Ratings</th>
                <th className="text-center p-3 border-0">Image</th>
                <th className="text-center p-3 border-0" style={{borderTopRightRadius: '20px'}}>Action</th>
              </tr>
            </thead>

            <tbody>
              <AnimatePresence>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <motion.tr
                      key={product._id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}
                    >
                      <td className="p-3 align-middle font-weight-bold" style={{color: 'var(--text-main)'}}>{product.name}</td>
                      <td className="p-3 align-middle text-center" style={{color: 'var(--primary-color)', fontWeight: 600}}>₹ {product.cost}</td>
                      <td className="p-3 align-middle" style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>
                        {product.description.length > 50 ? product.description.substring(0, 50) + "..." : product.description}
                      </td>
                      <td className="p-3 align-middle text-center" style={{color: 'var(--text-muted)'}}>{product.ratings}</td>
                      <td className="p-3 align-middle text-center">
                        <img
                          src={product.imageSrc}
                          style={{ height: "60px", width: "60px", objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                          alt={product.name}
                        />
                      </td>
                      <td className="p-3 align-middle text-center">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="btn btn-danger"
                          style={{ borderRadius: '12px', padding: '8px 20px', fontWeight: 600 }}
                          onClick={() => deleteProduct(product._id)}
                        >
                          Delete
                        </motion.button>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td className="text-center p-5" colSpan={6} style={{ color: 'var(--text-muted)' }}>
                      Products Not Found
                    </td>
                  </tr>
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DeleteProducts;
