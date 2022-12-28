import { Routes , Route} from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import GuardedRoute from "./GuardedRoute";
import Trailer from "../pages/Trailer";
import Movies from "../pages/Movies";
import TvShows from "../pages/TvShows";
import NewPopular from "../pages/NewPopular";
import MyList from "../pages/MyList";



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
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/new-popular" element={<NewPopular />} />
        <Route path="/new-popular" element={<NewPopular />} />
        <Route path="my-list" element={<MyList/>} />
    </Routes>
)

export default createRoutes

