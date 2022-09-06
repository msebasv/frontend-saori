import React from "react";

import { Outlet } from "react-router-dom";

import "./index.scss";

const Layout = () => {
  return (
    <div className="container-layout">
      <aside className="aside-sidebar">
        <h2>Sidebar</h2>
      </aside>
      <div className="container-nav-section">
        <header className="header-navbar">
          <h2>Navbar</h2>
        </header>
        <section className="section-content">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Layout;
