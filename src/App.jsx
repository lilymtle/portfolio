// import global styling
import "./styles/global.scss";

// import components
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Footer />
    </BrowserRouter>
  )
};

export default App
