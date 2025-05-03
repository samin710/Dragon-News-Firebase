import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="mx-auto w-11/12 py-6 ">
        <Navbar></Navbar>
      </header>
      <main className="mx-auto w-11/12 py-6">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
