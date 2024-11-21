// import global styling
import "./styles/global.scss";

// import components
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";
import { AboutPage } from "./pages/About/About";
import { ProjectsPage } from "./pages/Projects/Projects";
import { ContactPage } from "./pages/Contact/Contact";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import ClickSpark from "./utils/clickSpark";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <FloatingButton />
      <main>
        <Hero />
        <div className="app-container">
          <AboutPage />
          <ProjectsPage />
          <ContactPage />
        </div>
      </main>
      <Footer />
      <click-spark />
    </BrowserRouter>
  )
};

export default App;