import React, { useContext } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/store" element={
        authCtx.isLoggedIn ? <Store /> : <Navigate to="/auth/login" />
      } />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      <Route path="/store/:productId" element={
        authCtx.isLoggedIn ? <ProductDetails /> : <Navigate to="/auth/login" />
      } />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
