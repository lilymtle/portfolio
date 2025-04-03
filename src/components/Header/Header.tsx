// styling
import "./Header.scss";

// components
import NavDrawer from "../NavDrawer/NavDrawer";
import { Link } from "react-router-dom";

export function Header() {
    const handleNavigate = (path:string): void => {
        window.open(path, "_blank");
    };

    return (
        <header className="header">
            <Link className="header__icon-link" to="/">
                <img
                    className="header__icon"
                    src="assets/icons/cat-icon.gif"
                    alt="Animated tuxedo cat pixel art"
                />
            </Link>

            <nav className="navbar">
                <div className="navbar__hamburger">
                    <NavDrawer />
                </div>

                <div className="navbar__full">
                    <ul className="navbar__list">
                        <li className="navbar__list-item">
                            <a className="navbar__link" href="#about">
                                About
                            </a>
                        </li>

                        <li className="navbar__list-item">
                            <a className="navbar__link" href="#projects">
                                Projects
                            </a>
                        </li>

                        <li className="navbar__list-item">
                            <a className="navbar__link navbar" href="/blog">
                                Blog
                            </a>
                        </li>

                        <li className="navbar__list-item">
                            <a className="navbar__link navbar__link--resume" onClick={() => handleNavigate("/files/lily-le-resume.pdf")}>
                                Resume
                            </a>
                        </li>

                        <li className="navbar__list-item">
                        <a className="navbar__link" href="#contact">
                            Contact
                        </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};