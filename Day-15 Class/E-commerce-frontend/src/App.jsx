import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminHome from "./pages/AdminHome";
import AddProducts from "./pages/AddProducts";
import DeleteProducts from "./pages/DeleteProducts";
import ViewProducts from "./pages/ViewProducts";
import EditProducts from "./pages/EditProducts";
import Users from "./pages/Users";
import AnimatedFooter from "./components/AnimatedFooter";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route  path="login" element={<Login/>}/>
          <Route  path="register" element={<Register/>}/>
          <Route path='admin-home' element={<AdminHome/>}/>
          <Route path='add-product' element={<AddProducts/>}/>
          <Route path='delete-product' element={<DeleteProducts/>}/>
          <Route path='view-products' element={<ViewProducts/>}/>
          <Route path='edit-products' element={<EditProducts/>}/>
          <Route path='get-users' element={<Users/>}/>
        </Routes>
        <AnimatedFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
