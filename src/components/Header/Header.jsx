// import styling
import "./Header.scss";

// import components
import { NavBar } from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <Link to="/">
                <img
                className="portfolio-logo"
                src="/src/assets/logos/portfolio-logo.png"
                alt="portfolio logo" />
            </Link>

            <NavBar />
        </header>
    );
};