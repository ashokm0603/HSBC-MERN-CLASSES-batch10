import React from "react";
import "./landingstyle.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LandingNav = () => {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <header className="glass-header">
        <a href="/" style={{ textDecoration: 'none' }}>
          <motion.div 
            className="logo-container"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRul7TxAbJ-tNXuqFZTcyFZVMLCyJo4RumiIuC2M3oZ-I6JDWAmpSRQeFOhN7TuwxJ2EUNpx8FKiLB0osMRDA5SpKRqCdYO&s&ec=121585077"
            alt="Logo"
          />
          <h1>DMart</h1>
        </motion.div>
        </a>
        <nav>
          <motion.button
            className="nav-action-btn"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(79, 70, 229, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/login" className="nav-link-flex">
              Login{" "}
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
              </svg>
            </Link>
          </motion.button>
        </nav>
      </header>
    </motion.div>
  );
};

export default LandingNav;
