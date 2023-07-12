import AboutUs from "./Pages/AboutUs/AboutUs";
import AgeRestriction from "./Pages/AgeRestriction/AgeRestriction";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import HomePage from "./Pages/HomePage/HomePage";
import Menu from "./Pages/Menu/Menu";
import News from "./Pages/News/News";
import OurProducts from "./Pages/OurProducts/OurProducts";
import WineMemory from "./Pages/WineMemory/WineMemory";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AgeRestriction />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/memories" element={<WineMemory />} />
        <Route path="/news" element={<News />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
