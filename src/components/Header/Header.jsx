// import styling
import { NavBar } from "../NavBar/NavBar";
import "./Header.scss";

export function Header() {
    return (
        <header>
            <img
                className="portfolio-logo"
                src="/src/assets/logos/portfolio-logo.png"
                alt="portfolio logo" />

            <NavBar />
        </header>
    );
};