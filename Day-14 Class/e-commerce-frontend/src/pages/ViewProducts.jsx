import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [filterProductData, setFilterProductData] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        " http://localhost:5000/api/get-allproducts",
      );
      setProducts(response.data.allProducts);
      setFilterProductData(response.data.allProducts);

      // setProducts(response.data.)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, []);

  const filterProducts = (e) => {
    let input = e.target.value.toLowerCase();
    console.log(input);

    const filterProduct = products.filter((product) => {
      return product.name.toString().toLowerCase().includes(input);
    });
    setFilterProductData(filterProduct);
  };
  return (
    <div>
      <AdminNav />

      <div id="search-container">
        <h3>Filter Products</h3>
        <input
          className="input"
          onChange={filterProducts}
          type="search"
          placeholder="Search Products "
          />
      </div>
          <h1 id="title">View Product </h1>
      <Row xs={1} md={3} className="g-3 m-5">
        {filterProductData.map((product, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                style={{ height: "190px" }}
                src={product.imageSrc}
              />
              <Card.Body>
                <Card.Title>Name : {product.name}</Card.Title>
                <Card.Text>
                  <span> About:</span> {product.description}
                </Card.Text>
                <Card.Text>
                  <span> Ratings :</span> {product.ratings}
                </Card.Text>

                <Card.Text>
                  {" "}
                  <span>Price : </span>₹ {product.cost}
                </Card.Text>
                <Button variant="primary" className="mx-3">
                  Buy
                </Button>
                <Button variant="warning">Add Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ViewProducts;
