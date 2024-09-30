// import styling
import "./Header.scss";

// import logo
import logo from "../../assets/logos/portfolio-logo.png";

// import components
import { NavBar } from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <Link to="/">
                <img
                className="portfolio-logo"
                src={logo}
                alt="portfolio logo" />
            </Link>

            <NavBar />
        </header>
    );
};