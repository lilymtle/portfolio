// styling
import { useEffect, useState } from "react";
import "./BlogFooter.scss";

import { Link } from "react-router-dom";
import { sanityClient } from "../../sanity/sanity";

export function BlogFooter() {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const query = `*[_type == "category"]{ title}`;
                const data = await sanityClient.fetch(query);
                const categoryTitles = data.map((category: any) => category.title);
                setCategories(categoryTitles);
            } catch (error) {
                console.error("Error fetching categories:", error);
            };
        };
        fetchCategories();
        console.log(categories);
    }, []);

    return (
        <footer className="blog__footer">
            <div className="blog__footer-container">


                <h4 className="blog__subheading blog__subheading--small">
                    Blog
                </h4>

                <ul className="blog__footer-nav-list">
                    <li className="blog__footer-nav-list-item">
                        <Link className="blog__footer-nav-link" to="/blog/about">About</Link>
                    </li>

                    <li className="blog__footer-nav-list-item">
                        <Link className="blog__footer-nav-link" to="/blog/posts">Posts</Link>
                    </li>

                    <li className="blog__footer-nav-list-item">
                        <Link className="blog__footer-nav-link" to="/blog/faqs">FAQs</Link>
                    </li>

                    <li className="blog__footer-nav-list-item">
                        <Link className="blog__footer-nav-link" to="/blog/contact">Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="blog__footer-container">
                <h4 className="blog__subheading blog__subheading--small">
                    Browse
                </h4>

                <ul className="blog__footer-nav-list">
                    {categories.map((category) => (
                        <li key={category} className="blog__footer-nav-list-item">
                            <Link
                                className="blog__footer-nav-link"
                                to={`/blog/category/${category.toLowerCase()}`}
                            >
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="blog__footer-container">
                <h4 className="blog__subheading blog__subheading--small">
                    Resources
                </h4>

                <ul className="blog__footer-nav-list">
                    <li className="blog__footer-nav-list-item">
                        <Link className="blog__footer-nav-link" to="/blog/learning">Learning</Link>
                    </li>
                </ul>
            </div>

            <div className="blog__footer-container">
                <h4 className="blog__subheading blog__subheading--small">
                    Connect
                </h4>

                <ul className="blog__footer-nav-list--socials">
                    <li className="blog__footer-nav-list-item">
                        <Link to="https://linkedin.com/in/lilymtle" target="_blank">
                            <img 
                                className="blog__footer-icon"
                                alt="LinkedIn Icon"
                                src="/assets/logos/linkedin-logo.png" />
                        </Link>
                    </li>

                    <li className="blog__footer-nav-list-item">
                        <Link to="https://github.com/lilymtle" target="_blank">
                            <img 
                                className="blog__footer-icon"
                                alt="GitHub Icon"
                                src="/assets/logos/github-logo.svg" />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};