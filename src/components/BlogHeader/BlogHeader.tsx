// styling
import "./BlogHeader.scss";

// components
import { BlogMenu } from "../BlogMenu/BlogMenu";

export function BlogHeader() {
    return (
        <header className="blog__header">

            <div className="blog__overlay"></div>

            <div className="blog__container">
                <div className="blog__nav-wrapper">
                    {/* navigation for mobile */}
                    <BlogMenu />

                    {/* navigation for tablet and desktop */}
                    <nav className="blog__nav-full">
                        <ul className="blog__nav-list">
                            <li className="blog__nav-list-item">
                                <a className="blog__nav-link" href="/blog/about">About</a>
                            </li>

                            <li className="blog__nav-list-item">
                                <a className="blog__nav-link" href="/">Posts</a>
                            </li>

                            <li className="blog__nav-list-item">
                                <a className="blog__nav-link" href="/blog/about">FAQs</a>
                            </li>

                            <li className="blog__nav-list-item">
                                <a className="blog__nav-link" href="/blog/contact">Contact</a>
                            </li>

                            <li className="blog__nav-list-item">
                                <a className="blog__nav-link" href="/">Portfolio</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="blog__container--logo">
                    <a href="/blog">
                        <img
                            className="blog__logo"
                            alt='Logo of a mountain with the text "Lilys Corner for Thoughts"'
                            src="/assets/logos/blog-logo.png"
                        />
                    </a>
                </div>

                <a className="blog__header-link" href="#welcome">
                    Explore
                </a>
            </div>
        </header>
    );
};