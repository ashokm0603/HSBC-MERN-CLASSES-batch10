import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const LandingMain = () => {
  return (
    <div id="landing-main-container" className="main-content-layout">
      <Tilt glareEnable={true} glareMaxOpacity={0.2} glareColor="#ffffff" glarePosition="all" scale={1.02} transitionSpeed={2500}>
        <motion.div 
          className="premium-card"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        >
          <div className="card-header-modern">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-c-circle"
              viewBox="0 0 16 16"
            >
              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" />
            </svg>
            <span style={{marginLeft: '8px'}}>Copy Right 2026</span>
          </div>
          
          <div className="card-body-modern">
            <h2 className="premium-title">Welcome to DMart Shopping</h2>
            <p className="premium-text">
              DMart is a leading Indian chain of hypermarkets and supermarkets
              founded by Radhakishan Damani in 2002, operated by Avenue Supermarts
              Limited (ASL). Headquartered in Mumbai, it operates over 424 stores
              in 12+ states, offering groceries, home essentials, and apparel at
              low prices. It is known for its high-profitability model.
            </p>
            <div className="btn-group-modern">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary-modern">
                <Link to="/login">SignIn</Link>
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-secondary-modern">
                <Link to="/register">SignUp</Link>
              </motion.button>
            </div>
          </div>
          
          <div className="card-footer-modern">2 days ago</div>
        </motion.div>
      </Tilt>
    </div>
  );
};

export default LandingMain;
