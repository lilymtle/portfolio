// import styling
import "./NavBar.scss";

// import component
import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <section className="nav-bar">
            <ul className="nav-bar__list">
                <li className="nav-bar__item">
                    <a className="nav-bar__link" href="#about">
                        <p className="nav-bar__text">
                            About
                        </p>
                    </a>
                </li>
                <li className="nav-bar__item">
                <a className="nav-bar__link" href="#projects">
                        <p className="nav-bar__text">
                            Projects
                        </p>
                    </a>
                </li>
                <li className="nav-bar__item">
                <a className="nav-bar__link" href="#work">
                        <p className="nav-bar__text">
                            Work
                        </p>
                    </a>
                </li>
                <li className="nav-bar__item">
                    <Link className="nav-bar__link" to="/">
                        <p className="nav-bar__btn">
                            Resume
                        </p>
                    </Link>
                </li>
            </ul>
        </section>
    );
};