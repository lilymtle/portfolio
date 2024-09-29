// import global styling
import "./styles/global.scss";

// import components
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";

// import pages
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { ProjectPage } from "./pages/ProjectPage/ProjectPage";

function App() {

  return (
    <BrowserRouter>
        <Header />
        <Hero />
        <div className="app-container">
          <AboutPage />
          <ProjectPage />
        </div>
        <Footer />
    </BrowserRouter>
  )
};

export default App
