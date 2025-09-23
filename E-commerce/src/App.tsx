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
      {/* <Hero /> */}
      <Shop/>
      {/* <ProductPage /> */}
      {/* <AboutUs/> */}
      {/* <ContactUs/> */}
      <Footer />
    </>
  );
}

export default App;
