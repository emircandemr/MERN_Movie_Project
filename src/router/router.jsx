import { Routes , Route} from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import GuardedRoute from "./GuardedRoute";
import { useSelector } from "react-redux";
import Trailer from "../pages/Trailer";

const createRoutes = () => (

    <Routes>
        <Route path="/" element={
            <GuardedRoute >
                <Home />
            </GuardedRoute>
        } />
        <Route path="/trailer" element={<Trailer/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
)

export default createRoutes

