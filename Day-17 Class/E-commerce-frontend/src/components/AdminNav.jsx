import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AdminNav = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar id="admin-nav-container" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/admin-home">
            <motion.div id="branch-container" className="logo-container" whileHover={{ scale: 1.05 }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRul7TxAbJ-tNXuqFZTcyFZVMLCyJo4RumiIuC2M3oZ-I6JDWAmpSRQeFOhN7TuwxJ2EUNpx8FKiLB0osMRDA5SpKRqCdYO&s&ec=121585077"
                alt="DMart Logo"
              />
              <h1 style={{fontSize: '2rem'}}>DMart Admin</h1>
            </motion.div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ fontWeight: 600 }}>
              <Nav.Link href="/admin-home">Home</Nav.Link>
              <Nav.Link href="/view-products">View Products</Nav.Link>
              <NavDropdown title="Features" id="basic-nav-dropdown">
                <NavDropdown.Item href="/add-product">Add Product</NavDropdown.Item>
                <NavDropdown.Item href="/edit-products">Edit Products</NavDropdown.Item>
                <NavDropdown.Item href="/delete-product">Delete Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/get-users">View Users</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <motion.button 
          className="nav-action-btn"
          style={{ marginRight: '40px' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/login" className="nav-link-flex"> 
          LogOut{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-box-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
            />
            <path
              fillRule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
            />
          </svg></Link>
        </motion.button>
      </Navbar>
    </motion.div>
  );
};

export default AdminNav;
