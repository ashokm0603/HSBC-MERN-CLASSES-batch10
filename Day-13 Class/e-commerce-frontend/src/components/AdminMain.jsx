import React from "react";
import IndividualIntervalsExample from "./IndividualIntervalsExample";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const AdminMain = () => {
  let features = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTfKiltiCVUf8R1DJCZCQMaIkLncxQq-K09BGtt3hLU6nDnlwWwNHi21HbZK_qSa3zjK_xfwTGYgWXt6acq2MfUgIDwdU&s&ec=121585077",
      title: "Add Products",
      about: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reiciendis, voluptatibus iste necessitatibus modi amet ab rerum, ",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJ_HjFha_KkR576537DfAwHr8BEPGOg_gIms7N9JQ--8aAJQiyt9NDV2TD2Q4GETshxAmkv0ICOLjL25gsqE5l514sFKG&s&ec=121585077",
      title: "View Products",
      about: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reiciendis, voluptatibus iste necessitatibus modi amet ab rerum, ",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fVTX1VLkeC0W0WfXp3SAcLcM6rSMrzIG1rAbiz59rkQuOkZXcVgcxiFU06DU0hpRj2Wpto2pzoOsW0amZwqy0CMIQCLg&s&ec=121585077",
      title: "Edit Products",
      about: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reiciendis, voluptatibus iste necessitatibus modi amet ab rerum, ",
    },
    {
      src: "https://www.ablestar.com/static/deb58fbd22c13b6b7ea7d275662c65fb/d4e33/bulk-delete-shopify.png",
      title: "Delete Products",
      about: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reiciendis, voluptatibus iste necessitatibus modi amet ab rerum, ",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadu7Gs2YI0Lj8v5d-1eQHc3h4B_glAlFQ3PCKoSGvVxPUTtC-Y_8TEQLewi1kU-2QDHjVXwH8eyzwUboIolnTglNxI7D4&s&ec=121585077",
      title: "View Users ",
      about: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reiciendis, voluptatibus iste necessitatibus modi amet ab rerum, ",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/017/266/186/non_2x/login-form-page-template-with-phone-for-app-development-smartphone-mockups-website-ui-elements-online-login-form-registration-user-profile-access-to-account-10-eps-vector.jpg",
      title: "Admin Login ",
      about: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reiciendis, voluptatibus iste necessitatibus modi amet ab rerum, ",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKCUabGv4mgHl6y3R-7NzTcVK7Yi5FwPVlQmrieXeQDrCTIzXIAy1lSM_skDtcFkFoHiIqzixrb52fduiisu1V_ju4XszO&s&ec=121585077",
      title: "Admin Register ",
      about: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reiciendis, voluptatibus iste necessitatibus modi amet ab rerum, ",
    },

   
  ];

  return (
    <div>
       
      <h1 style={{ textAlign: "center", margin: "20px", fontStyle: "italic" }}>
        Welcome to Admin Home Page
      </h1>
      <IndividualIntervalsExample />
      <h1>Features :</h1>
      <Row xs={1} md={4} className="g-4 m-5">
        {features.map((feature, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={feature.src} style={{height:"250px"}}/>
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <button className="btn btn-primary">Read more</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AdminMain;
