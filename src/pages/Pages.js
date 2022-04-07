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
          <Route exact path="/food-app" element={<Home />} />
          <Route exact path="/cuisine/:category" element={<Cuisine />} />
          <Route exact path="/search/:search" element={<Searched />} />
          <Route exact path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
