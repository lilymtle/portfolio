// import global styling
import "./styles/global.scss";

// import components
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";


function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Hero />
      </main>
    </BrowserRouter>
  )
};

export default App