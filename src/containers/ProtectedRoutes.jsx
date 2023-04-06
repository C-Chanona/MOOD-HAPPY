import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes({user}) {
    return ( 
        (user.name) ? <Outlet/> : <Navigate to="/Sign in"/>
     );
}

export default ProtectedRoutes;