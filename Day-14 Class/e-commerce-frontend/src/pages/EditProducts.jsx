import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import axios from "axios";

import Card from "react-bootstrap/Card";
import { CardBody, Row, Col, Button } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";

const EditProducts = () => {
  const [products, setProducts] = useState([]);
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
        "http://localhost:5000/api/get-allproducts",
      );
      setProducts(response.data.allProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, []);

  const getProduct = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/get-product/${id}`,
      );

      setUpdateProduct(response.data.findProduct);

      console.log(updateProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProductDetails = (id) => {
    try {
      axios.put(
        `http://localhost:5000/api/update-product/${id}`,
        updateProduct,
      );
      toast.success("updated Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update");
    }
  };
  return (
    <div>
      <AdminNav />
      <h1 id="title">Update Products</h1>

      <div className="row p-4">
        <div className="col">
          <Row xs={1} md={3} className="g-4">
            {products.map((product, idx) => (
              <Col key={idx}>
                <CardBody>
                  <Card.Img variant="top" style={{height:"180px"}} src={product.imageSrc} />
                  <Card.Body>
                    <Card.Title> Name :{product.name}</Card.Title>
                    <Card.Text>
                      <span>About :</span> {product.description} <br />
                      <span>Ratings :</span> {product.ratings} <br />
                      <span>Cost: </span> {product.cost}
                    </Card.Text>
                    <Button
                      variant="warning"
                      onClick={() => getProduct(product._id)}
                    >
                      Update Details
                    </Button>
                  </Card.Body>
                </CardBody>
              </Col>
            ))}{" "}
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
