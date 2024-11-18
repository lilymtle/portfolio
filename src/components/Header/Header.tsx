// import styling
import "./Header.scss";

// import components
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="header">
                <img
                    className="header__icon"
                    src="assets/icons/cat-icon.gif"
                />

            <nav className="navbar">
                <Link className="navbar__link" to="/">
                    About
                </Link>

                <Link className="navbar__link" to="/">
                    Projects
                </Link>

                <Link className="navbar__link navbar__link--resume" to="/">
                    Resume
                </Link>
            </nav>
        </header>
    )
};