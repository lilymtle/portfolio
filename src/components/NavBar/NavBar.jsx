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
                        About
                    </a>
                </li>
                <li className="nav-bar__item">
                <a className="nav-bar__link" href="#projects">
                        Projects
                    </a>
                </li>
                <li className="nav-bar__item">
                    <Link className="nav-bar__btn" to="/images/lily-le-resume.pdf">
                        Resume
                    </Link>
                </li>
            </ul>
        </section>
    );
};