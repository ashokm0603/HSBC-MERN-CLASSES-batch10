import React from "react";
import ParentComponent from "./ParentComponent";

const GrandParent = () => {
  const productDetails = {
    name: "laptop",
    price: 150000,
    ratings: 5,
    description: "Good Condition",
  };

  return (
    <div>
      <ParentComponent
        user={{ name: "teja", password: "admin@123" }}
        data={productDetails}
      />
    </div>
  );
};

export default GrandParent;
