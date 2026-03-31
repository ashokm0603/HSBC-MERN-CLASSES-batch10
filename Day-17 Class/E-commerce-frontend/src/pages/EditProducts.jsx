import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

import Card from "react-bootstrap/Card";
import { CardBody, Row, Col, Button, Form as BsForm } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";

const EditProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [updateProduct, setUpdateProduct] = useState({
    _id: "",
    name: "",
    cost: 0,
    description: "",
    imageSrc: "",
    categories: "",
    ratings: "",
  });

  const handleChange = (e) => {
    setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value });
  };

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

  const getProduct = async (id) => {
    try {
      const response = await axios.get(
        `https://dmart-nextgen-backend.onrender.com/api/get-product/${id}`
      );
      setUpdateProduct(response.data.findProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProductDetails = (id) => {
    try {
      axios.put(
        `https://dmart-nextgen-backend.onrender.com/api/update-product/${id}`,
        updateProduct
      );
      toast.success("Updated Successfully");
      fetchProducts(); // Refresh products
    } catch (error) {
      console.log(error);
      toast.error("Failed to update");
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <AdminNav />
      <h1 id="title" style={{ textAlign: 'center', margin: '30px 0', color: 'var(--text-main)' }}>Update Products</h1>

      <div className="row p-4" style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div className="col">
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

          <Row xs={1} md={2} lg={3} className="g-4">
            <AnimatePresence>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Col key={product._id} as={motion.div}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card style={{ borderRadius: '15px', overflow: 'hidden', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                      <Card.Img variant="top" style={{ height: "180px", objectFit: 'cover' }} src={product.imageSrc} />
                      <Card.Body>
                        <Card.Title style={{ fontWeight: 600 }}>{product.name}</Card.Title>
                        <Card.Text style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                          <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>About:</span> {product.description.substring(0, 60)}... <br />
                          <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>Ratings:</span> {product.ratings} <br />
                          <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>Cost:</span> ₹{product.cost}
                        </Card.Text>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn btn-warning"
                          style={{ width: '100%', borderRadius: '8px', fontWeight: 600 }}
                          onClick={() => getProduct(product._id)}
                        >
                          Update Details
                        </motion.button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <Col>
                  <p style={{ color: 'var(--text-muted)' }}>No products found matching "{searchTerm}"</p>
                </Col>
              )}
            </AnimatePresence>
          </Row>
        </div>

        
        <div className="col-4 ">
          <Form className="border border-danger rounded-4 p-3 bg-danger-subtle">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name </Form.Label>
                <Form.Control
                  type="text"
                  value={updateProduct.name}
                  placeholder="Enter updated product name" onChange={handleChange} name="name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Cost</Form.Label>
                <Form.Control
                  value={updateProduct.cost}
                  type="number"
                  placeholder="₹" onChange={handleChange} name="cost"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={updateProduct.description}
                placeholder="......" onChange={handleChange} name="description"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>imageSrc</Form.Label>
              <Form.Control
                value={updateProduct.imageSrc}
                type="url"
                placeholder="https://...." 
                onChange={handleChange} name="imageSrc"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Ratings</Form.Label>
                <Form.Control
                  value={updateProduct.ratings}
                  type="text"
                  placeholder="4/5" onChange={handleChange} name="ratings"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Categories</Form.Label>
                <Form.Select
                  value={updateProduct.categories}
                  defaultValue="Choose Categories" onChange={handleChange} name="categories"
                >
                  <option disabled>Choose Categories</option>
                  <option value="electronics">Electronics & Gadgets</option>
                  <option value="fashion">Fashion & Apparel</option>
                  <option value="home-garden">Home & Garden</option>
                  <option value="beauty-care">Beauty & Personal Care</option>
                  <option value="sports-outdoors">Sports & Outdoors</option>
                  <option value="health-wellness">Health & Wellness</option>
                  <option value="toys-games">Toys & Games</option>
                  <option value="automotive">Automotive & Industrial</option>
                  <option value="books-media">Books & Media</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button
              variant="warning"
              type="submit"
              onClick={() => updateProductDetails(updateProduct._id)}
            >
              Update
            </Button>
            <Button variant="danger" className="mx-3" type="reset">
              Reset
            </Button>
          </Form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditProducts;
