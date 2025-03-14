// styling
import "./BlogHeader.scss";

/// components
import { BlogHero } from "../BlogHero/BlogHero";

export function BlogHeader() {
    return (
        <header className="blog__header">
            <div className="blog__container">
                <BlogHero />
            </div>

            <nav className="blog__nav">
                <ul className="blog__nav-list">
                    <li className="blog__nav-list-item">
                        Home
                    </li>

                    <li className="blog__nav-list-item">
                        Books
                    </li>

                    <li className="blog__nav-list-item">
                        Health
                    </li>

                    <li className="blog__nav-list-item">
                        Lifestyle
                    </li>

                    <li className="blog__nav-list-item">
                        Technology
                    </li>
                </ul>
            </nav>
        </header>
    );
};