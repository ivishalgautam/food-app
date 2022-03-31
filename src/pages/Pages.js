import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { Searched } from "./Searched";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

export default function Pages() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.path}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:category" element={<Cuisine />} />
          <Route path="/search/:search" element={<Searched />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
