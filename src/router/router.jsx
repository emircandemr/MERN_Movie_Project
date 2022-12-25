import { Routes , Route} from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import GuardedRoute from "./GuardedRoute";
import { useSelector } from "react-redux";
import Trailer from "../pages/Trailer";
import Movies from "../pages/Movies";

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
        <Route path="/movies" element={<Movies />} />
    </Routes>
)

export default createRoutes

