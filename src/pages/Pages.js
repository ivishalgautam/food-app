import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import { Searched } from "./Searched";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";

export default function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:category" element={<Cuisine />} />
        <Route path="/search/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </>
  );
}
