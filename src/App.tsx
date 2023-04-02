import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Folsky from "./pages/Folsky";
import ForKids from "./pages/ForKids";
import Funny from "./pages/Funny";
import Home from "./pages/Home";
import InLove from "./pages/InLove";
import Nice from "./pages/Nice";
import Pert from "./pages/Pert";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/szep" element={<Nice />} />
        <Route path="/vicces" element={<Funny />} />
        <Route path="/forkids" element={<ForKids />} />
        <Route path="/nep" element={<Folsky />} />
        <Route path="/pikans" element={<Pert />} />
        <Route path="/love" element={<InLove />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
