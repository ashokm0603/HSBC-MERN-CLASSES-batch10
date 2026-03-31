import React, { useState } from "react";
import AdminNav from "../components/AdminNav";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const AddProducts = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    cost: 0,
    description: "",
    imageSrc: "",
    categories: "",
    ratings: "",
  });

  const handleChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("https://dmart-nextgen-backend.onrender.com/api/add-product", productDetails);
      toast.success("product added successfully😊");

      setProductDetails({
        name: "",
        cost: 0,
        description: "",
        imageSrc: "",
        categories: "",
        ratings: "",
      });
    } catch (error) {
      toast.error("failed to add product");
      console.log(error);
    }
  };
  return (
    <div>
      <AdminNav />

      <div id="add-product-container" className="p-5 m-5">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="name"
                type="text"
                required
                value={productDetails.name}
                placeholder="Enter Product name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Product Cost</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="cost"
                type="number"
                required
                value={productDetails.cost}
                placeholder="Enter Product Price"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              onChange={handleChange}
              name="description"
              required
              value={productDetails.description}
              placeholder="Add Description like condition of the product..."
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Image Src</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="imageSrc"
              type="url"
              value={productDetails.imageSrc}
              required
              placeholder="https://..."
            />
          </Form.Group>

          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Categories</Form.Label>
              <Form.Select
                onChange={handleChange}
                name="categories"
                required
                value={productDetails.categories}
                defaultValue="Choose..."
              >
                <option>Choose Categories</option>
                <option>Electronic </option>
                <option>Cloths</option>
                <option>Beauty products</option>
                <option>Footwears</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Ratings </Form.Label>
              <Form.Control
                onChange={handleChange}
                name="ratings"
                type="text"
                value={productDetails.ratings}
                required
                placeholder="⭐⭐⭐⭐"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Product
          </Button>
          <Button variant="warning" type="reset">
            Reset
          </Button>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProducts;
