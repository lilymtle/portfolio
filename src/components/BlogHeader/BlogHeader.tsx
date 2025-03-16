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
                    <BlogMenu />
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