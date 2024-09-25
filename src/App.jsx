// import global styling
import "./styles/global.scss";

// import components
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";

function App() {

  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
};

export default App
