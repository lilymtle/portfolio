// styling
import "./BlogMenu.scss";

// component
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// hook
import { useEffect, useState } from "react"

import { sanityClient } from "../../sanity/sanity";

import { Link } from "react-router-dom";

import { navigationLinks } from "../../data/navigationLinks";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

export function BlogMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [categories, setCategories] = useState<string[]>([]);
    
        useEffect(() => {
            const fetchCategories = async () => {
                try {
                    const query = `*[_type == "category"]{ title}`;
                    const data = await sanityClient.fetch(query);
                    const categoryTitles = data.map((category: any) => category.title);
                    const sortedCategories = categoryTitles.sort((a: string, b: string) =>
                        a.localeCompare(b)
                    );
    
                    setCategories(sortedCategories);
                } catch (error) {
                    console.error("Error fetching categories:", error);
                };
            };
            fetchCategories();
            console.log(categories);
        }, []);

        const handleCloseMenu = () => {
            setIsOpen(false);
        };

        isOpen === true ? document.body.classList.add("overflow-y-hidden") : document.body.classList.remove("overflow-y-hidden");

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
                        <article><a className="menu__link--portfolio" href="/">Porfolio</a></article>
                        
                        <label className="menu__label">
                            <p className="menu__label-text">
                                Blog
                            </p>
                        </label>

                        <ul className="menu__list">
                            {navigationLinks.slice(0, -1).map((navigationLink) => (
                                <li key={navigationLink.id} className="menu__list-item">
                                    <Link 
                                        className="menu__link"
                                        to={navigationLink.url}
                                        onClick={handleCloseMenu}
                                    >
                                        {navigationLink.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="menu__wrapper">
                        <label className="menu__label">
                            <p className="menu__label-text">
                                Categories
                            </p>
                        </label>

                        <ul className="menu__list">

                            {categories.map((category) => (
                                <li key={category} className="menu__list-item">
                                    <Link
                                        className="menu__link"
                                        to={`/blog/category/${category}`}
                                        onClick={handleCloseMenu}
                                    >
                                        {capitalizeFirstLetter(category)}
                                    </Link>
                                </li>
                            ))}
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
                                <Link className="menu__link" to="/blog/learning" onClick={handleCloseMenu}>Learning</Link>
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