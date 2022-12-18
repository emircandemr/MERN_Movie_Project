import React from "react";
import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";


const createRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
)

export default createRoutes

