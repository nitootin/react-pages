import { Navigate } from "react-router-dom";

function PrivateRoute ({element: Components, user, requiredRole}){


    return user.role === requiredRole ? Components :<Navigate to={"/negado"} />;



}

export default PrivateRoute;