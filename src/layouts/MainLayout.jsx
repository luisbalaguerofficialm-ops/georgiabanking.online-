import React from "react";
import HomePage from "../pages/HomePage";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div>
        <Outlet />
      </div>
    </div>
  );
}
