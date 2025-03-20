// styling
import "./BlogSubNav.scss";

export function BlogSubNav() {
    return (
        <nav className="blog__sub-nav">
            <ul className="blog__sub-nav-list">
                <li className="blog__sub-nav-list-item">
                    <a className="blog__sub-nav-link" href="/">Books</a>
                </li>

                <li className="blog__sub-nav-list-item">
                    <a className="blog__sub-nav-link" href="/">Health</a>
                </li>

                <li className="blog__sub-nav-list-item">
                    <a className="blog__sub-nav-link" href="/">Lifestyle</a>
                </li>

                <li className="blog__sub-nav-list-item">
                    <a className="blog__sub-nav-link" href="/">Technology</a>
                </li>

                <li className="blog__sub-nav-list-item">
                    <a className="blog__sub-nav-link" href="/">Travel</a>
                </li>
            </ul>
        </nav>
    );
};