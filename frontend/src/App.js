import { useState } from "react";
import Homepage from "./components/Homepage";
import SearchPage from "./components/SearchPage";
import SubmitPage from "./components/SubmitPage";
import Navbar from "./components/Navbar";

function App() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Array Methods");
  const [activePage, setActivePage] = useState("Homepage");
  const [formReturnData, setFormReturnData] = useState([]);

  return (
    <>
      <Navbar setActivePage={setActivePage} />
      {activePage === "Homepage" ? (
        <Homepage
          categories={categories}
          setCategories={setCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          FormReturnData={formReturnData}
        />
      ) : null}
      {activePage === "SearchPage" ? <SearchPage /> : null}
      {activePage === "SubmitPage" ? (
        <SubmitPage
          formReturnData={formReturnData}
          setFormReturnData={setFormReturnData}
          categories={categories}
        />
      ) : null}
    </>
  );
}

export default App;
