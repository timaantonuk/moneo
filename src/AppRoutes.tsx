import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";
import Transactions from "./pages/Transactions";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* Redirect root to /dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            {/* Set Home page at /dashboard */}
            <Route path="/dashboard" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
