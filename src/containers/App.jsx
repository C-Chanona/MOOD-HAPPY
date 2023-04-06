import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import userContext from "../context/UserContext";
import ProtectedRoutes from "./protectedRoutes";
import Home from "../components/pages/Home";
import Login from "../components/pages/SignIn";
import Register from "../components/pages/Register";
import Dynamics from "../components/pages/Dynamics";
import Activities from "../components/pages/Activities";
import Books from "../components/pages/Books";
import Cites from "../components/pages/Cites";

function App() {
    const [user, setUser] = useState({})
    return (
        <BrowserRouter>
            <userContext.Provider value={{ user, setUser }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Dynamics" element={<Dynamics />} />
                    <Route path="/Books" element={<Books />} />
                    <Route path="/Activities" element={<Activities />} />
                    <Route path="/Sign In" element={<Login />} />
                    <Route path="/Register" element={<Register />} />

                    <Route element={<ProtectedRoutes user={user} />}>
                        <Route path="/Cites" element={<Cites />} />
                    </Route>
                </Routes>
            </userContext.Provider>
        </BrowserRouter>
    );
}

export default App;