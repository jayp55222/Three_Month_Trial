import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/CustomComponents/Footer";
import Header from "./components/CustomComponents/Header";
import Hero from "./components/CustomComponents/Hero";
import AboutUs from "./components/CustomComponents/Pages/AboutUs";
import ContactUs from "./components/CustomComponents/Pages/ContactUs";
import ProductPage from "./components/CustomComponents/Products/Product";
import Shop from "./components/CustomComponents/Shop/Shop";
import ProductComparisonFooter from "./components/CustomComponents/ProductComparison/ProductComparisonFooter/ProductComparisonFooter";
import ProductComparisonPage from "./components/CustomComponents/ProductComparison/ProductComparisonPage/ProductComparisonPage";
import type { RootState } from "./Redux-Toolkit/Store/ProductStore";
import { useSelector } from "react-redux";

function App() {
  const { compareswitch } = useSelector(
    (state: RootState) => state.comparision
  );

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/comparison" element={<ProductComparisonPage />} />
      </Routes>
      {compareswitch && (
        <div className="absolute flex justify-center z-10 inset-x-0 bottom-0">
          <ProductComparisonFooter />
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
