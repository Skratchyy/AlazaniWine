import KaRoutes from "./Language/ka";
import ProductDetails from "./Pages/OurProducts/ProductDetails/ProductDetails";
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
import SignIn from "./Admin/SignIn/SignIn";
import Dashboard from "./Admin/Dashboard/Dashboard";
import AboutUsAdmin from "./Admin/Dashboard/About-Us-admin/About-Us-Admin";
import WineMemoryAdmin from "./Admin//Dashboard/Wine-Memoru-admin/Wine-memory-admin";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AdminNews from "./Admin/Dashboard/News/News";
import { useState, useEffect } from "react";
function App() {
  const [brandName, setBrandName] = useState("");
  const [isLoading, setIsloading] = useState(true);

  const getBrandName = async () => {
    const name = await (
      await fetch(`https://alazanibackend.onrender.com/brands`)
    ).json();
    setIsloading(false);
    setBrandName(name);
  };

  useEffect(() => {
    getBrandName();
  }, []);

  if (isLoading) return "Loading...";

  console.log();

  return (
    <Routes>
      <Route index element={<KaRoutes />} />
      <Route path="/admin-panelN3553/login" element={<SignIn />} />
      <Route path="/admin-panelN3553">
        <Route index={true} element={<Dashboard SignedIn={true} />}></Route>
        <Route path="about-us" element={<AboutUsAdmin />} />
        <Route path="wine-memory" element={<WineMemoryAdmin />} />
        <Route path="news" element={<AdminNews />} />
      </Route>

      <Route path="/ka" element={<AgeRestriction />} />
      <Route path="/ka/home" element={<HomePage />} />
      <Route path="/ka/wine-memory" element={<WineMemory />} />
      <Route path="/ka/news" element={<News />} />
      <Route path="/ka/news/:id" element={<FullNews />} />
      <Route path="/ka/products">
        <Route index={true} element={<OurProducts />} />
        <Route path=":id">
          <Route index={true} element={<Navigate to={brandName[0].id} />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
      </Route>

      <Route path="/ka/contact" element={<Contact />} />
      <Route path="/ka/about-us" element={<AboutUs />} />
      <Route path="/ka/blog" element={<Blog />} />
      <Route path="/ka/menu" element={<Menu />} />
      <Route path="/en">
        <Route index={true} element={<AgeRestriction />} />
        <Route path="products" element={<AgeRestriction />} />
      </Route>
    </Routes>
  );
}

export default App;
