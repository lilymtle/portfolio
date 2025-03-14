// global styling
import "./styles/global.scss";

// components
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";
import { AboutPage } from "./pages/About/About";
import { ProjectsPage } from "./pages/Projects/Projects";
import { ContactPage } from "./pages/Contact/Contact";
import FloatingButton from "./components/FloatingButton/FloatingButton";

// hook
import { useEffect } from "react";
import { BlogPage } from "./pages/Blog/Blog";

// layout for portfolio page
function Layout({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const isBlogPage = location.pathname.startsWith("/blog");

    return (
      <>
      <Header />
      <FloatingButton />
      <main>
        <Hero />
        <div className="app-container">{children}</div>
      </main>
      <Footer />
      </>
    );
};

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
      <Routes>
        <Route path="/" element={
          <>
            <Layout>
              <AboutPage />
              <ProjectsPage />
              <ContactPage />
            </Layout>
          </>
        } />
        <Route path ="/blog" element={ <BlogPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;