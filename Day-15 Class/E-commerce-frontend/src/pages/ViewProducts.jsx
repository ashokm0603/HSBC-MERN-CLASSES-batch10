import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, Form as BsForm } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://dmart-nextgen-backend.onrender.com/api/get-allproducts"
      );
      setProducts(response.data.allProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <AdminNav />
      
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem 4rem 2rem' }}>
        <h1 id="title" style={{ textAlign: 'center', margin: '30px 0', color: 'var(--text-main)', fontSize: '2.5rem', fontWeight: 800 }}>Explore Products</h1>

        {/* Filter UI */}
        <div style={{ marginBottom: '40px', maxWidth: '400px', margin: '0 auto 40px auto' }}>
          <BsForm.Control
            type="text"
            placeholder="Search products by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              borderRadius: '20px',
              padding: '12px 20px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              border: '1px solid var(--glass-border)',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(10px)'
            }}
          />
        </div>

        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          <AnimatePresence>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Col key={product._id} as={motion.div}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 30 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                >
                  <Tilt glareEnable={true} glareMaxOpacity={0.15} glareColor="#ffffff" scale={1.02} style={{ height: '100%' }}>
                    <Card style={{ 
                      borderRadius: '20px', 
                      overflow: 'hidden', 
                      background: 'var(--glass-bg)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid var(--glass-border)', 
                      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <Card.Img
                        variant="top"
                        style={{ height: "200px", objectFit: 'cover' }}
                        src={product.imageSrc}
                      />
                      <Card.Body style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        <Card.Title style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-main)' }}>{product.name}</Card.Title>
                        <Card.Text style={{ flexGrow: 1, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                          <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>About: </span> 
                          {product.description.length > 80 ? product.description.substring(0, 80) + "..." : product.description}
                        </Card.Text>
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                          <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>⭐ {product.ratings}</span>
                          <span style={{ fontWeight: 800, color: 'var(--primary-color)', fontSize: '1.2rem' }}>₹{product.cost}</span>
                        </div>
                        
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <motion.button 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary"
                            style={{ flex: 1, borderRadius: '12px', background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', border: 'none', fontWeight: 600 }}
                          >
                            Buy Now
                          </motion.button>
                          <motion.button 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-warning"
                            style={{ flex: 1, borderRadius: '12px', fontWeight: 600 }}
                          >
                            Add Cart
                          </motion.button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tilt>
                </Col>
              ))
            ) : (
              <Col xs={12}>
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}
                >
                  <h3>No Products Found</h3>
                  <p>Try adjusting your search query.</p>
                </motion.div>
              </Col>
            )}
          </AnimatePresence>
        </Row>
      </div>
    </div>
  );
};

export default ViewProducts;
