import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../components/pages/Home";
import Login from "../components/pages/SignIn";
import Register from "../components/pages/Register";
import Dynamics from "../components/pages/Dynamics";

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Dynamics" element={<Dynamics/>} />
                {/* <Route path="/Books" element={<Books/>} />
                <Route path="/Cites" element={<Cites/>} /> */}
                <Route path="/Sign In" element={<Login/>} />
                <Route path="/Register" element={<Register/>} />
            </Routes>
        </BrowserRouter>
     );
}

export default App;