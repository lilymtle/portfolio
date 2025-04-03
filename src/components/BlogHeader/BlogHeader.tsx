// styling
import "./BlogHeader.scss";

// components
import { BlogMenu } from "../BlogMenu/BlogMenu";

import { Link } from "react-router-dom";

interface HeaderLink {
    id: number;
    label: string;
    url: string;
};

export function BlogHeader(): JSX.Element {

    const headerLinks: HeaderLink[] = [
        {
            id: 1,
            label: "Home",
            url: "/blog"
        },
        {
            id: 2,
            label: "About",
            url: "/blog/about"
        },
        {
            id: 3,
            label: "Posts",
            url: "/blog/posts"
        },
        {
            id: 4,
            label: "FAQs",
            url: "/blog/faqs"
        },
        {
            id: 5,
            label: "Contact",
            url: "/blog/contact"
        },
        {
            id: 6,
            label: "Portfolio",
            url: "/"
        }
    ];

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
                            {headerLinks.map((link, index) => (
                                <li key={link.id} className="blog__nav-list-item">
                                    {index === headerLinks.length - 1 ? (
                                        <Link className="blog__nav-link" to={link.url} target="_blank">
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <Link className="blog__nav-link" to={link.url}>
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
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

                <div className="blog__wrapper-spotify">
                    <p className="spotify-text">
                        Now Playing
                    </p>

                    <iframe className="spotify" src="https://open.spotify.com/embed/track/7f85n3GoES8ODzpXmyzRpl?utm_source=generator&theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </header>
    );
};