import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About";
import LandingPage from "./Components/Pages/LandingPage";
import NavBar from "./Components/common/NavBar";
import Footer from "./Components/common/Footer";
import FourOFour from "./Components/Pages/FourOFour";
import Show from "./Components/Pages/Show";
import NewForm from "./Components/Pages/NewForm";
import EditForm from "./Components/Pages/EditForm";
import CartView from "./Components/Pages/CartView";
import Index from "./Components/Pages/Index";
// import Login from "./Components/Auth/Login";
// import Register from "./Components/helpers/Register";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />}/> */}
        <Route path="/creations" element={<Index />} />
        <Route path="/creations/:id" element={<Show />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<FourOFour />} />

        {/* <Route element={<ProtectedRoute />}> */}
        {/* Place protected routes here */}
        <Route path="/new" element={<NewForm />} />
        <Route path="/edit/:id" element={<EditForm />} />
        <Route path="/cart/:id" element={<CartView />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
