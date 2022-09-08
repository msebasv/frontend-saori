import React from "react";

import Layout from "./Layout";
import Login from "./pages/Login";
import Patients from "./pages/Patients";
import Management from "./pages/Management";
import Rips from "./pages/Rips";

import Detail from "./pages/Detail";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="patients" element={<Patients />} />
        <Route path="patients/detail" element={<Detail />} />
        <Route path="management" element={<Management />} />
        <Route path="rips" element={<Rips />} />
      </Route>
    </Routes>
  );
}

export default App;
