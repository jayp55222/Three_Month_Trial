import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/CustomComponents/Footer";
import Header from "./components/CustomComponents/Header";
import Hero from "./components/CustomComponents/Hero";
import AboutUs from "./components/CustomComponents/Pages/AboutUs";
import ContactUs from "./components/CustomComponents/Pages/ContactUs";
import ProductPage from "./components/CustomComponents/Products/Product";
import Shop from "./components/CustomComponents/Shop/Shop";

function App() {
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
