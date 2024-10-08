// import styling
import "./NavBar.scss";

export function NavBar() {
    const handleNavigate = (path) => {
        window.open(path, "_blank");
    };

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
                <li className="nav-bar__item nav-bar__btn" onClick={() => handleNavigate("/files/lily-le-resume.pdf")}>
                    Resume
                </li>
            </ul>
        </section>
    );
};