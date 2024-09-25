// import global styling
import "./styles/global.scss";

// import components
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Footer />
    </BrowserRouter>
  )
};

export default App
