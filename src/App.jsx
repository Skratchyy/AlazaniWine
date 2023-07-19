import KaRoutes from "./Language/ka";
import AboutUs from "./Pages/AboutUs/AboutUs";
import AgeRestriction from "./Pages/AgeRestriction/AgeRestriction";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import HomePage from "./Pages/HomePage/HomePage";
import Menu from "./Pages/Menu/Menu";
import News from "./Pages/News/News";
import OurProducts from "./Pages/OurProducts/OurProducts";
import WineMemory from "./Pages/WineMemory/WineMemory";
import FullNews from "./Pages/News/Components/FullNews";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<KaRoutes />} />
      <Route path="/ka" element={<AgeRestriction />} />
      <Route path="/ka/home" element={<HomePage />} />
      <Route path="/ka/wine-memory" element={<WineMemory />} />
      <Route path="/ka/news" element={<News />} />
      <Route path="/ka/news/:id" element={<FullNews />} />
      <Route path="/ka/products" element={<OurProducts />} />
      <Route path="/ka/contact" element={<Contact />} />
      <Route path="/ka/about-us" element={<AboutUs />} />
      <Route path="/ka/blog" element={<Blog />} />
      <Route path="/ka/menu" element={<Menu />} />
      <Route path="/en/*" element="#" />
    </Routes>
  );
}

export default App;
