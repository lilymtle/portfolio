// import styling
import "./Header.scss";

// import component
import NavDrawer from "../NavDrawer/NavDrawer";

export function Header() {
    const handleNavigate = (path:string): void => {
        window.open(path, "_blank");
    };

    return (
        <header className="header">
                <img
                    className="header__icon"
                    src="assets/icons/cat-icon.gif"
                />

            <nav className="navbar">
                <div className="navbar__hamburger">
                    <NavDrawer />
                </div>

                <div className="navbar__full">
                    <a className="navbar__link" href="#about">
                        About
                    </a>

                    <a className="navbar__link" href="#projects">
                        Projects
                    </a>

                    <a className="navbar__link navbar__link--resume" onClick={() => handleNavigate("/files/lily-le-resume.pdf")}>
                        Resume
                    </a>

                    <a className="navbar__link" href="#contact">
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    )
};