// import styling
import "./NavBar.scss";

// import component
import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <section className="nav-bar">
            <ul className="nav-bar__list">
                <li className="nav-bar__item">
                    <Link className="nav-bar__link" to="/">
                        <p className="nav-bar__text">
                            About
                        </p>
                    </Link>
                </li>
                <li className="nav-bar__item">
                    <Link className="nav-bar__link" to="/">
                        <p className="nav-bar__text">
                            Projects
                        </p>
                    </Link>
                </li>
                <li className="nav-bar__item">
                    <Link className="nav-bar__link" to="/">
                        <p className="nav-bar__text">
                            Work
                        </p>
                    </Link>
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