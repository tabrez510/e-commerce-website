import React, { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
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
  // console.log(authCtx.isLoggedIn);
  const requireAuth = async () => {
    if (!authCtx.isLoggedIn) {
      return redirect("/auth/login");
    }
    return null;
  };
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/store", element: <Store />, loader: requireAuth },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/store/:productId", element: <ProductDetails /> },
    { path: "/auth/login", element: <LoginPage /> },
    { path: "/auth/signup", element: <SignupPage /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
