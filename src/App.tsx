// import global styling
import "./styles/global.scss";

// import components
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";
import { AboutPage } from "./pages/About";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Hero />
        <AboutPage />
      </main>
      <Footer />
    </BrowserRouter>
  )
};

export default App;