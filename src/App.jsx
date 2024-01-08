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
import BrandDetails from "./Pages/OurProducts/ProductDetails/BrandDetails";
import AdminNews from "./Admin/Dashboard/News/News";
import ProductAdminComponent from "./Admin/Dashboard/Products/AdminProducts";
import BrandAdmin from "./Admin/Dashboard/Products/BrandAdmin";
function App() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin-panelN3553">
        <Route index={true} element={<Dashboard SignedIn={true} />} />
        <Route path="login" element={<SignIn />} />

        <Route path="brands">
          {/* Make sure to add an index route for the "brands" route */}
          <Route index={true} element={<BrandAdmin />} />

          {/* Update the nested route for "products" */}
          <Route path=":products" element={<ProductAdminComponent />} />
        </Route>

        <Route path="about-us" element={<AboutUsAdmin />} />
        <Route path="wine-memory" element={<WineMemoryAdmin />} />
        <Route path="news" element={<AdminNews />} />
      </Route>

      {/* Language Routes */}
      <Route index element={<KaRoutes />} />
      <Route path="/ka">
        <Route index={true} element={<AgeRestriction />} />
        <Route path="home" element={<HomePage />} />
        <Route path="wine-memory" element={<WineMemory />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<FullNews />} />
        <Route path="products">
          <Route index={true} element={<OurProducts />} />
          <Route path=":id">
            <Route index={true} element={<BrandDetails />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="blog" element={<Blog />} />
        <Route path="menu" element={<Menu />} />
      </Route>

      {/* English Routes */}
      <Route path="/en">
        <Route index={true} element={<AgeRestriction />} />
        <Route path="products" element={<AgeRestriction />} />
      </Route>
    </Routes>
  );
}

export default App;
