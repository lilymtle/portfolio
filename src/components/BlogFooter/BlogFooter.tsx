// styling
import "./BlogFooter.scss";

export function BlogFooter() {
    return (
        <footer className="blog__footer">
            <div className="blog__footer-container">


                <h4 className="blog__footer-label">
                    Blog
                </h4>

                <ul className="blog__footer-nav-list">
                    <li className="blog__footer-nav-list-item">
                        <a className="blog__footer-nav-link" href="/blog/about">About</a>
                    </li>

                    <li className="blog__footer-nav-list-item">
                        <a className="blog__footer-nav-link" href="/blog/posts">Posts</a>
                    </li>

                    <li className="blog__footer-nav-list-item">
                        <a className="blog__footer-nav-link" href="/blog/faqs">FAQs</a>
                    </li>

                    <li className="blog__footer-nav-list-item">
                        <a className="blog__footer-nav-link" href="/blog/contact">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="blog__footer-container">
                <h4 className="blog__footer-label">
                    Browse
                </h4>

                <ul className="blog__footer-nav-list">
                    <li className="blog__footer-nav-list-item">
                        <a className="blog__footer-nav-link" href="/">Books</a>
                    </li>

                    <li className="blog__footer-nav-list-item">
                        <a className="blog__footer-nav-link" href="/">Health</a>
                    </li>

                    <li className="blog__footer-nav-list-item">
                        <a className="blog__footer-nav-link" href="/">Lifestyle</a>
                    </li>

                    <li className="blog__footer-nav-list-item">
                        <a className="blog__footer-nav-link" href="/">Technology</a>
                    </li>

                    <li className="blog__footer-nav-list-item">
                        <a className="blog__footer-nav-link"  href="/">Travel</a>
                    </li>
                </ul>
            </div>

            <div className="blog__footer-container">
                <h4 className="blog__footer-label">
                    Resources
                </h4>

                <ul className="blog__footer-nav-list">
                    <li className="blog__footer-nav-list-item">
                        <a className="blog__footer-nav-link" href="/blog/learning">Learning</a>
                    </li>
                </ul>
            </div>

            <div className="blog__footer-container">
                <h4 className="blog__footer-label">
                    Connect
                </h4>

                <ul className="blog__footer-nav-list--socials">
                    <li className="blog__footer-nav-list-item">
                        <a href="https://linkedin.com/in/lilymtle" target="_blank">
                            <img 
                                className="blog__footer-icon"
                                alt="LinkedIn Icon"
                                src="/assets/logos/linkedin-logo.png" />
                        </a>
                    </li>

                    <li className="blog__footer-nav-list-item">
                        <a href="https://github.com/lilymtle" target="_blank">
                            <img 
                                className="blog__footer-icon"
                                alt="GitHub Icon"
                                src="/assets/logos/github-logo.svg" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};