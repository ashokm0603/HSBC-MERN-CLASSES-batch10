import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AnimatedFooter = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <footer style={{
      background: 'var(--glass-bg, rgba(255, 255, 255, 0.7))',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderTop: '1px solid var(--glass-border, rgba(255, 255, 255, 0.5))',
      padding: '60px 5% 30px 5%',
      marginTop: 'auto',
      boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.05)'
    }}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px'
        }}
      >
        {/* Brand Section */}
        <motion.div variants={itemVariants}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRul7TxAbJ-tNXuqFZTcyFZVMLCyJo4RumiIuC2M3oZ-I6JDWAmpSRQeFOhN7TuwxJ2EUNpx8FKiLB0osMRDA5SpKRqCdYO&s&ec=121585077" 
              alt="DMart Logo" 
              style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
            />
            <h2 style={{ 
              fontWeight: 800, 
              background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0
            }}>DMart</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Your premium destination for everyday essentials, electronics, and fashion. Delivering quality at unparalleled prices since 2002.
          </p>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div variants={itemVariants}>
          <h3 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '20px' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['Home', 'Products', 'Categories', 'Offers'].map((item) => (
              <motion.li key={item} whileHover={{ x: 5, color: 'var(--primary-color)' }} style={{ transition: 'color 0.2s' }}>
                <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500 }}>{item}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Support Section */}
        <motion.div variants={itemVariants}>
          <h3 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '20px' }}>Support</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['Help Center', 'Track Order', 'Returns & Refunds', 'Contact Us'].map((item) => (
              <motion.li key={item} whileHover={{ x: 5, color: 'var(--primary-color)' }} style={{ transition: 'color 0.2s' }}>
                <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500 }}>{item}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div variants={itemVariants}>
          <h3 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '20px' }}>Stay Connected</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '15px' }}>Subscribe to our newsletter for the latest updates and exclusive offers.</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{
                flex: 1,
                padding: '12px 15px',
                borderRadius: '8px',
                border: '1px solid var(--glass-border)',
                outline: 'none',
                background: 'rgba(255,255,255,0.5)',
                color: 'var(--text-main)'
              }}
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'var(--primary-color)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '0 20px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Join
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Copyright Line */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        style={{
          borderTop: '1px solid rgba(0,0,0,0.05)',
          marginTop: '40px',
          paddingTop: '20px',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.9rem'
        }}
      >
        <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} DMart Supermarts Limited. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default AnimatedFooter;
