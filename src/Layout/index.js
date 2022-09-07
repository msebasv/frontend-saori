import React from "react";

import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

import "./index.scss";

const Layout = () => {
  return (
    <div className="container-layout">
      <aside className="aside-sidebar">
        <Sidebar />
      </aside>
      <div className="container-nav-section">
        <header className="header-navbar">
          <h5>Empresa</h5>
        </header>
        <section className="section-content">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Layout;
