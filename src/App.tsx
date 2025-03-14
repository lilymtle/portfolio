// import global styling
import "./styles/global.scss";

// import components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";
import { AboutPage } from "./pages/About/About";
import { ProjectsPage } from "./pages/Projects/Projects";
import { ContactPage } from "./pages/Contact/Contact";
import FloatingButton from "./components/FloatingButton/FloatingButton";

// import hook
import { useEffect } from "react";
import { BlogPage } from "./pages/Blog/Blog";

function App() {
  const setHeroHeight = (): void => {
    const hero = document.querySelector(".hero") as HTMLElement;
    if (hero) {
      const vh = window.innerHeight * 0.01;
      hero.style.height = `${vh * 92.52}px`;
    };
  };

  useEffect(() => {
    setHeroHeight();
    
    const handleResize = () => setHeroHeight();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <FloatingButton />
      <main>
        <Hero />
        <div className="app-container">
          <Routes>
            <Route path="/" element={
              <>
                <AboutPage />
                <ProjectsPage />
                <ContactPage />
              </>
            } />
            <Route path ="/blog" element={ <BlogPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  )
};

export default App;