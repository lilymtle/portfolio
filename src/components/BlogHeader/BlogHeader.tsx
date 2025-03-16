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
        </header>
    );
};