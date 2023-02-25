import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Sign In" element={<Login />} />
            </Routes>
        </BrowserRouter>
     );
}

export default App;