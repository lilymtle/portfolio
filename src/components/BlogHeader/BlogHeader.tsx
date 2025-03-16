// styling
import "./BlogHeader.scss";

/// components
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box } from "@mui/material";

export function BlogHeader() {
    return (
        <header className="blog__header">

            <div className="blog__overlay"></div>

            <div className="blog__container">
                <img
                    className="blog__logo"
                    alt='Logo of a mountain with the text "Lilys Corner for Thoughts"'
                    src="/assets/logos/blog-logo.png"
                />

                <p className="blog__header-text">
                    Explore
                </p>
            </div>

            {/* <nav className="blog__nav">
                <ul className="blog__nav-list">
                    <li className="blog__nav-list-item">
                        <a className="blog__nav-link" href="/">Home</a>
                    </li>

                    <li className="blog__nav-list-item">
                        <a className="blog__nav-link" href="/">Books</a>
                    </li>

                    <li className="blog__nav-list-item">
                        <a className="blog__nav-link" href="/">Health</a>
                    </li>

                    <li className="blog__nav-list-item">
                        <a className="blog__nav-link" href="/">Lifestyle</a>
                    </li>

                    <li className="blog__nav-list-item">
                        <a className="blog__nav-link" href="/">Travel</a>
                    </li>

                    <li className="blog__nav-list-item">
                        <a className="blog__nav-link" href="/">Technology</a>
                    </li>
                </ul>
            </nav> */}
        </header>
    );
};