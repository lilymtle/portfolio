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

                <div className="menu__container">
                    <div className="menu__wrapper">
                        <a className="menu__link--home" href="/blog">Home</a>
                        <article><a className="menu__link--portfolio" href="/">Porfolio</a></article>
                        
                        <label className="menu__label">
                            <p className="menu__label-text">
                                Blog
                            </p>
                        </label>

                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <a className="menu__link" href="/blog/about">About</a>
                            </li>

                            <li className="menu__list-item">
                                <a className="menu__link" href="/">Archives</a>
                            </li>

                            <li className="menu__list-item">
                                <a className="menu__link" href="/">Recent Posts</a>
                            </li>

                            <li className="menu__list-item">
                                <a className="menu__link" href="/">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="menu__wrapper">
                        <label className="menu__label">
                            <p className="menu__label-text">
                                Categories
                            </p>
                        </label>

                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <a className="menu__link" href="/">Books</a>
                            </li>

                            <li className="menu__list-item">
                                <a className="menu__link" href="/">Health</a>
                            </li>

                            <li className="menu__list-item">
                                <a className="menu__link" href="/">Lifestyle</a>
                            </li>

                            <li className="menu__list-item">
                                <a className="menu__link" href="/">Travel</a>
                            </li>

                            <li className="menu__list-item">
                                <a className="menu__link" href="/">Technology</a>
                            </li>
                        </ul>
                    </div>

                    <div className="menu__wrapper">
                        <label className="menu__label">
                            <p className="menu__label-text">
                                Resources
                            </p>
                        </label>

                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <a className="menu__link" href="/">Courses</a>
                            </li>

                            <li className="menu__list-item">
                                <a className="menu__link" href="/">FAQs</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="menu__wrapper--socials">
                        <a 
                            className="menu__social-link" 
                            href="https://linkedin.com/in/lilymtle" 
                            target="_blank"
                        >
                            <img
                                className="menu__social-icon"
                                alt="LinkedIn Logo"
                                src="/assets/logos/linkedin-logo-blue.png"
                            />
                        </a>

                        <a 
                            className="menu__social-link" 
                            href="https://github.com/lilymtle" 
                            target="_blank"
                        >
                            <img 
                                className="menu__social-icon"
                                alt="GitHub Logo"
                                src="/assets/logos/github-logo-black.svg"
                            />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};