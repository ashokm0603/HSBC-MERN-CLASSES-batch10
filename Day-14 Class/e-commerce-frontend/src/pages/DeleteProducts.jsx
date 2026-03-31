/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import AdminNav from "../components/AdminNav";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const DeleteProducts = () => {
  const [productDetails, setProductDetails] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/get-allproducts",
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
    try {
      await axios.delete(`http://localhost:5000/api/delete-product/${id}`);

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <AdminNav />
      <h1 id="title">Delete Products</h1>

      <div className="m-5">
        <table className="table">
          <thead>
            <tr>
              <th className="border border-primary text-center bg-success">
                Name
              </th>
              <th className="border border-primary text-center bg-success">
                Cost
              </th>
              <th className="border border-primary text-center bg-success">
                Description
              </th>
              <th className="border border-primary text-center bg-success">
                Ratings
              </th>
              <th className="border border-primary text-center bg-success">
                imageSrc
              </th>
              <th className="border border-primary text-center bg-success">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {productDetails.length>0?(productDetails.map((product) => (
              <tr>
                <td className="border border-primary">{product.name}</td>
                <td className="border border-primary">₹ {product.cost}</td>
                <td className="border border-primary">{product.description}</td>
                <td className="border border-primary">{product.ratings}</td>
                <td className="border border-primary">
                  <img
                    src={product.imageSrc}
                    style={{ height: "90px", width: "90px" }}
                    alt=""
                  />
                </td>
                <td className="border border-primary text-center">
                  <div
                    className="btn btn-danger "
                    onClick={() => deleteProduct(product._id)}
                  >
                    Delete
                  </div>
                </td>
              </tr>
            ))):( 
              <tr>
                <td className="border border-success text-center" colSpan={6}>Products Not Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteProducts;
