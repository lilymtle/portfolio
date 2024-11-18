// import global styling
import "./styles/global.scss";

// import components
import { BrowserRouter } from "react-router-dom";
import { Hero } from "./components/Hero/Hero";


function App() {

  return (
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  )
};

export default App