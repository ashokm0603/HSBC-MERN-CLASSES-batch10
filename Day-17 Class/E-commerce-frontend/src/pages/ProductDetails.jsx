import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AdminNav from "../components/AdminNav";
import { motion, AnimatePresence } from "framer-motion";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    phone: "",
    state: "",
  });
  const [paymentMode, setPaymentMode] = useState("");
  const [upiId, setUpiId] = useState("");
  const [isRazorpayModalOpen, setIsRazorpayModalOpen] = useState(false);

  const [product, setProduct] = useState(location.state?.product || {
    _id: id,
    name: "Loading Product...",
    description: "",
    cost: 0,
    imageSrc: "https://via.placeholder.com/400"
  });

  useEffect(() => {
    if (!location.state?.product) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get("https://dmart-nextgen-backend.onrender.com/api/get-allproducts");
          const foundProduct = response.data.allProducts.find(p => p._id === id);
          if (foundProduct) {
            setProduct(foundProduct);
          }
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };
      fetchProduct();
    }
  }, [id, location.state?.product]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleInputChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleOrderCompletion = () => {
    if (paymentMode === "Razorpay") {
      setIsRazorpayModalOpen(true);
      setTimeout(() => {
        setIsRazorpayModalOpen(false);
        setStep(3); // Go to success
      }, 2000); // Simulate Razorpay overlay
    } else {
      setStep(3);
    }
  };

  const steps = [
    { id: 1, title: "Summary" },
    { id: 2, title: "Checkout" },
    { id: 3, title: "Completed" },
  ];

  const containerVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div style={{ position: "relative" }}>
      <AdminNav />
      
      {/* Razorpay Simulation Overlay */}
      <AnimatePresence>
        {isRazorpayModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0, left: 0, right: 0, bottom: 0,
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(5px)",
              zIndex: 9999,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              style={{
                width: "400px", background: "#fff", borderRadius: "10px", overflow: "hidden", boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
              }}
            >
              <div style={{ background: "#3392fd", padding: "20px", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: 700 }}>Razorpay Checkout</div>
                <div style={{ fontSize: "0.8rem", opacity: 0.8 }}>TEST MODE</div>
              </div>
              <div className="p-4 text-center">
                <div style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>₹{product.cost}.00</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "30px" }}>Order ID: #ORD_{Math.floor(Math.random()*10000)}</div>
                <div className="spinner-border text-primary mb-3" role="status"></div>
                <p>Securely connecting to Razorpay...</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Container className="py-5">
        <div style={{ maxWidth: "950px", margin: "0 auto" }}>
          {/* Stepper Header */}
          <div className="d-flex justify-content-between mb-5" style={{ position: "relative", maxWidth: "600px", margin: "0 auto 50px" }}>
            <div style={{ position: "absolute", top: "50%", left: "0", right: "0", height: "2px", background: "#e2e8f0", zIndex: 0, transform: "translateY(-50%)" }}></div>
            {steps.map((s) => (
              <div key={s.id} className="text-center" style={{ zIndex: 1, position: "relative" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: step >= s.id ? "var(--primary-color)" : "#fff",
                  color: step >= s.id ? "#fff" : "#94a3b8",
                  border: step >= s.id ? "none" : "2px solid #e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  margin: "0 auto 8px auto",
                  transition: "all 0.3s ease"
                }}>
                  {step > s.id ? "✓" : s.id}
                </div>
                <span style={{ fontSize: "0.8rem", fontWeight: 600, color: step >= s.id ? "var(--text-main)" : "#94a3b8" }}>{s.title}</span>
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" {...containerVariants}>
                <Card style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--glass-border)", background: "var(--glass-bg)", backdropFilter: "blur(20px)", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                  <Row className="g-0">
                    <Col md={5}>
                      <img src={product.imageSrc} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </Col>
                    <Col md={7}>
                      <Card.Body className="p-4 d-flex flex-column h-100">
                        <h2 style={{ fontWeight: 800, color: "var(--text-main)", marginBottom: "15px" }}>{product.name}</h2>
                        <p style={{ color: "var(--text-muted)", lineHeight: 1.7, flexGrow: 1 }}>{product.description}</p>
                        <hr style={{ opacity: 0.1 }} />
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span style={{ display: "block", fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 600 }}>Final Price</span>
                            <span style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--primary-color)" }}>₹{product.cost}</span>
                          </div>
                          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={nextStep} className="btn" style={{ padding: "12px 30px", borderRadius: "14px", background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))", color: "white", fontWeight: 600, border: "none", boxShadow: "0 10px 20px rgba(79, 70, 229, 0.2)" }}>
                            Proceed to Checkout
                          </motion.button>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" {...containerVariants}>
                <Row>
                  <Col lg={7}>
                    <Card className="p-4 mb-4" style={{ borderRadius: "24px", border: "1px solid var(--glass-border)", background: "var(--glass-bg)", backdropFilter: "blur(20px)" }}>
                      <h3 className="mb-4" style={{ fontWeight: 700 }}>Delivery Address</h3>
                      <Form>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label style={{ fontWeight: 600, fontSize: "0.85rem" }}>Full Name</Form.Label>
                              <Form.Control type="text" name="fullName" value={shippingInfo.fullName} onChange={handleInputChange} placeholder="Required" style={{ borderRadius: "10px" }} />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label style={{ fontWeight: 600, fontSize: "0.85rem" }}>Phone</Form.Label>
                              <Form.Control type="text" name="phone" value={shippingInfo.phone} onChange={handleInputChange} placeholder="Required" style={{ borderRadius: "10px" }} />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Form.Group className="mb-3">
                          <Form.Label style={{ fontWeight: 600, fontSize: "0.85rem" }}>Address</Form.Label>
                          <Form.Control as="textarea" rows={2} name="address" value={shippingInfo.address} onChange={handleInputChange} placeholder="Street, City, Pincode" style={{ borderRadius: "10px" }} />
                        </Form.Group>
                        <Form.Group className="mb-0">
                          <Form.Label style={{ fontWeight: 600, fontSize: "0.85rem" }}>State</Form.Label>
                          <Form.Control type="text" name="state" value={shippingInfo.state} onChange={handleInputChange} placeholder="Required" style={{ borderRadius: "10px" }} />
                        </Form.Group>
                      </Form>
                    </Card>
                  </Col>

                  <Col lg={5}>
                    <Card className="p-4" style={{ borderRadius: "24px", border: "1px solid var(--glass-border)", background: "var(--glass-bg)", backdropFilter: "blur(20px)" }}>
                      <h4 className="mb-4" style={{ fontWeight: 700 }}>Payment Method</h4>
                      
                      <div className="d-flex flex-column gap-2 mb-3">
                        {[
                          { id: "Razorpay", title: "Razorpay (QR Scan)", icon: "🌀" },
                          { id: "UPI", title: "Common UPI (ID)", icon: "📱" },
                          { id: "Credit Card", title: "Credit Card", icon: "💳" }
                        ].map((mode) => (
                          <div 
                            key={mode.id}
                            onClick={() => setPaymentMode(mode.id)}
                            style={{
                              padding: "15px",
                              borderRadius: "12px",
                              border: paymentMode === mode.id ? "2px solid var(--primary-color)" : "1px solid var(--glass-border)",
                              background: paymentMode === mode.id ? "#fff" : "rgba(255,255,255,0.3)",
                              cursor: "pointer",
                              display: "flex", alignItems: "center", gap: "10px",
                              transition: "all 0.2s"
                            }}
                          >
                            <span style={{ fontSize: "1.2rem" }}>{mode.icon}</span>
                            <span style={{ fontWeight: 600, fontSize: "0.9rem", flexGrow: 1 }}>{mode.title}</span>
                            <Form.Check type="radio" checked={paymentMode === mode.id} onChange={() => {}} />
                          </div>
                        ))}
                      </div>

                      {/* Conditional Payment Details */}
                      <AnimatePresence mode="wait">
                        {paymentMode === "UPI" && (
                          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mb-4">
                            <Form.Group>
                              <Form.Label style={{ fontWeight: 700, fontSize: "0.8rem", color: "var(--primary-color)" }}>ENTER UPI ID</Form.Label>
                              <Form.Control 
                                type="text" 
                                placeholder="e.g. username@okaxis" 
                                value={upiId}
                                onChange={(e) => setUpiId(e.target.value)}
                                style={{ borderRadius: "10px", border: "2px solid var(--primary-color)", padding: "12px", background: "#fff" }}
                              />
                            </Form.Group>
                          </motion.div>
                        )}

                        {paymentMode === "Razorpay" && (
                          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mb-4 text-center p-3" style={{ background: "#fff", borderRadius: "15px", border: "1px dashed #3392fd" }}>
                            <p style={{ fontWeight: 700, fontSize: "0.8rem", color: "#3392fd", marginBottom: "10px" }}>SCAN TO PAY VIA RAZORPAY</p>
                            <img 
                              src="/payment_qr_code.png" 
                              alt="Razorpay QR" 
                              style={{ width: "160px", height: "160px", marginBottom: "10px", borderRadius: "10px" }} 
                            />
                            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>Scan this code with any UPI app like GPay, PhonePe, or Paytm.</p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="p-3 mb-4" style={{ background: "rgba(0,0,0,0.03)", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.05)" }}>
                        <div className="d-flex justify-content-between mb-1" style={{ fontSize: "0.85rem" }}>
                          <span color="var(--text-muted)">Order Total:</span>
                          <span style={{ fontWeight: 700 }}>₹{product.cost}</span>
                        </div>
                        <div className="d-flex justify-content-between" style={{ fontSize: "0.85rem" }}>
                          <span color="var(--text-muted)">Delivery Charge:</span>
                          <span style={{ color: "#10b981", fontWeight: 700 }}>FREE</span>
                        </div>
                      </div>

                      <div className="d-grid">
                        <motion.button 
                          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                          onClick={handleOrderCompletion}
                          disabled={
                            !paymentMode || 
                            !shippingInfo.fullName || 
                            !shippingInfo.address ||
                            (paymentMode === "UPI" && !upiId.includes("@"))
                          }
                          className="btn btn-primary"
                          style={{ padding: "12px", borderRadius: "12px", fontWeight: 700, background: paymentMode === "Razorpay" ? "#3392fd" : "var(--primary-color)", border: "none" }}
                        >
                          {paymentMode === "Razorpay" ? "Done, Pay Scanned QR" : "Complete Order"}
                        </motion.button>
                        <Button variant="link" onClick={prevStep} className="mt-2" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.85rem" }}>Cancel and Go Back</Button>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", damping: 12 }}>
                <Card className="p-5 text-center" style={{ borderRadius: "30px", border: "1px solid rgba(16, 185, 129, 0.2)", background: "#fff", boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}>
                  <div style={{ fontSize: "5rem", marginBottom: "20px" }}>🎉</div>
                  <h2 style={{ fontWeight: 800, color: "#065f46" }}>Order Confirmed!</h2>
                  <p className="mb-4" style={{ color: "#059669", fontSize: "1.1rem" }}>Your product "{product.name}" is on its way to you.</p>
                  
                  <div className="mx-auto mb-5 p-4" style={{ maxWidth: "500px", borderRadius: "20px", background: "#f0fdf4", border: "1px dashed #10b981", textAlign: "left" }}>
                    <h6 style={{ fontWeight: 700, color: "#065f46", marginBottom: "15px", borderBottom: "1px solid rgba(16, 185, 129, 0.2)", paddingBottom: "8px" }}>Purchase Summary</h6>
                    <Row className="mb-3">
                      <Col xs={6}>
                        <span style={{ fontSize: "0.85rem", color: "#374151", fontWeight: 600 }}>Product Name:</span>
                        <p style={{ margin: 0, fontWeight: 700, color: "#065f46" }}>{product.name}</p>
                      </Col>
                      <Col xs={6}>
                        <span style={{ fontSize: "0.85rem", color: "#374151", fontWeight: 600 }}>Total Paid:</span>
                        <p style={{ margin: 0, fontWeight: 700, color: "#065f46" }}>₹{product.cost}</p>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col xs={6}>
                        <span style={{ fontSize: "0.85rem", color: "#374151", fontWeight: 600 }}>Payment Info:</span>
                        <p style={{ margin: 0, color: "#065f46" }}>{paymentMode}{upiId ? ` (${upiId})` : ""}</p>
                      </Col>
                      <Col xs={6}>
                        <span style={{ fontSize: "0.85rem", color: "#374151", fontWeight: 600 }}>Recipient:</span>
                        <p style={{ margin: 0, color: "#065f46" }}>{shippingInfo.fullName}</p>
                      </Col>
                    </Row>
                    <div>
                      <span style={{ fontSize: "0.85rem", color: "#374151", fontWeight: 600 }}>Delivery To:</span>
                      <p style={{ margin: 0, fontSize: "0.85rem", color: "#065f46" }}>{shippingInfo.address}, {shippingInfo.state}</p>
                    </div>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }} 
                    onClick={() => navigate("/view-products")} 
                    className="btn btn-primary btn-lg" 
                    style={{ borderRadius: "16px", padding: "15px 40px", fontWeight: 700 }}
                  >
                    Continue Shopping
                  </motion.button>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
