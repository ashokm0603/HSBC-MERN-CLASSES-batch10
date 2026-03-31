import React from "react";
import IndividualIntervalsExample from "./IndividualIntervalsExample";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const AdminMain = () => {
  let features = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTfKiltiCVUf8R1DJCZCQMaIkLncxQq-K09BGtt3hLU6nDnlwWwNHi21HbZK_qSa3zjK_xfwTGYgWXt6acq2MfUgIDwdU&s&ec=121585077",
      title: "Add Products",
      about: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reiciendis, voluptatibus iste necessitatibus modi amet ab rerum, ",
      link: "/add-product"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJ_HjFha_KkR576537DfAwHr8BEPGOg_gIms7N9JQ--8aAJQiyt9NDV2TD2Q4GETshxAmkv0ICOLjL25gsqE5l514sFKG&s&ec=121585077",
      title: "View Products",
      about: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reiciendis, voluptatibus iste necessitatibus modi amet ab rerum, ",
      link: "/view-products"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fVTX1VLkeC0W0WfXp3SAcLcM6rSMrzIG1rAbiz59rkQuOkZXcVgcxiFU06DU0hpRj2Wpto2pzoOsW0amZwqy0CMIQCLg&s&ec=121585077",
      title: "Edit Products",
      about: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reiciendis, voluptatibus iste necessitatibus modi amet ab rerum, ",
      link: "/edit-products"
    },
    {
      src: "https://www.ablestar.com/static/deb58fbd22c13b6b7ea7d275662c65fb/d4e33/bulk-delete-shopify.png",
      title: "Delete Products",
      about: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reiciendis, voluptatibus iste necessitatibus modi amet ab rerum, ",
      link: "/delete-product"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadu7Gs2YI0Lj8v5d-1eQHc3h4B_glAlFQ3PCKoSGvVxPUTtC-Y_8TEQLewi1kU-2QDHjVXwH8eyzwUboIolnTglNxI7D4&s&ec=121585077",
      title: "View Users ",
      about: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reiciendis, voluptatibus iste necessitatibus modi amet ab rerum, ",
      link: "/get-users"
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/017/266/186/non_2x/login-form-page-template-with-phone-for-app-development-smartphone-mockups-website-ui-elements-online-login-form-registration-user-profile-access-to-account-10-eps-vector.jpg",
      title: "Admin Login ",
      about: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reiciendis, voluptatibus iste necessitatibus modi amet ab rerum, ",
      link: "/login"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKCUabGv4mgHl6y3R-7NzTcVK7Yi5FwPVlQmrieXeQDrCTIzXIAy1lSM_skDtcFkFoHiIqzixrb52fduiisu1V_ju4XszO&s&ec=121585077",
      title: "Admin Register ",
      about: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reiciendis, voluptatibus iste necessitatibus modi amet ab rerum, ",
      link: "/register"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div style={{ padding: '0 5% 4rem 5%', maxWidth: '1440px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{ textAlign: "center", margin: "40px 20px", fontWeight: 800, color: 'var(--text-main)', fontSize: '2.5rem' }}>
          Admin Dashboard
        </h1>
      </motion.div>
      
      <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--card-shadow)', marginBottom: '50px' }}>
        <IndividualIntervalsExample />
      </div>
      
      <h2 style={{ fontWeight: 700, marginBottom: '30px', color: 'var(--text-main)', paddingLeft: '1rem', borderLeft: '4px solid var(--primary-color)' }}>
        Management Modules
      </h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '30px',
        }}
      >
        {features.map((feature, idx) => (
          <motion.div key={idx} variants={itemVariants} style={{ height: '100%' }}>
            <Tilt glareEnable={true} glareMaxOpacity={0.15} glareColor="#ffffff" scale={1.03} style={{ height: '100%' }}>
              <div style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid var(--glass-border)',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <img src={feature.src} alt={feature.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '1.4rem', marginBottom: '15px', color: 'var(--text-main)' }}>{feature.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1 }}>{feature.about}</p>
                  <Link to={feature.link || "/admin-home"} style={{textDecoration: 'none'}}>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: '10px 24px',
                        background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                        color: 'white',
                        border: 'none',
                        borderRadius: '30px',
                        fontWeight: 600,
                        width: 'max-content',
                        cursor: 'pointer',
                        marginTop: '20px',
                        boxShadow: '0 4px 15px rgba(79, 70, 229, 0.3)'
                      }}
                    >
                      Manage
                    </motion.button>
                  </Link>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AdminMain;
