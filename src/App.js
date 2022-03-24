import { BrowserRouter } from "react-router-dom";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
