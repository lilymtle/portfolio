// styling
import "./BlogMenu.scss";

// component
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// hook
import { useState } from "react"

export function BlogMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <button
                className={`menu__hamburger ${isOpen ? "hidden" : ""}`}
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
            >
                <MenuIcon />
            </button>

            <nav className={`menu ${isOpen ? "menu--open" : ""}`}>
                <button
                    className="menu__close"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                >
                    <CloseIcon />
                </button>

                <ul className="menu__list">
                    <label className="menu__label">
                        <p className="menu__label-text">
                            Blog
                        </p>
                    </label>
                    <li className="menu__list-item">
                        <a className="menu__link" href="/">Home</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};