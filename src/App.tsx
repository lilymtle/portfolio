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
import { BlogPage } from "./pages/Blog/Blog";
import { BlogHeader } from "./components/BlogHeader/BlogHeader";
import { BlogFooter } from "./components/BlogFooter/BlogFooter";
import { BlogAbout } from "./pages/BlogAbout/BlogAbout";
import { BlogFAQs } from "./pages/BlogFAQs/BlogFAQs";
import { BlogContactPage } from "./pages/BlogContact/BlogContact";
import { BlogLearningPage } from "./pages/BlogLearning/BlogLearning";

// hook
import { useEffect } from "react";


function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <Header />
        <FloatingButton />
        <main>
          <Hero />
          <div className="portfolio-container">{children}</div>
        </main>
        <Footer />
      </>
    );
};

function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BlogHeader />
      <main>
        <div className="blog-container">{children}</div>
      </main>
      <BlogFooter />
    </>
  )
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
            <PortfolioLayout>
              <AboutPage />
              <ProjectsPage />
              <ContactPage />
            </PortfolioLayout>
          </>
        } />
        <Route path="/blog" element={ 
          <BlogLayout>
            <BlogPage />
          </BlogLayout>
        } />
        <Route path="/blog/about" element={
          <BlogLayout>
            <BlogAbout />
          </BlogLayout>
        } />
        <Route path="/blog/faqs" element={
          <BlogLayout>
            <BlogFAQs />
          </BlogLayout>
        } />
        <Route path="/blog/contact" element={
          <BlogLayout>
            <BlogContactPage />
          </BlogLayout>
        } />
        <Route path="/blog/learning" element={
          <BlogLayout>
            <BlogLearningPage />
          </BlogLayout>
        } />
      </Routes>
    </BrowserRouter>
  )
};

export default App;