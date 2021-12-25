import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => (
        localStorage.getItem('user')
            ? children
            : <Navigate to="/login"/>
);

export default PrivateRouter;